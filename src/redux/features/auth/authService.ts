import AsyncStorage from "@react-native-async-storage/async-storage"
import axios from "axios"
import booksDB from "../../../api/booksDB"
import {  LoginData, LoginResponse, SignInRequest, SignUpRequest } from "../../../interfaces/appInterfaces"

const API_URLS = {
  SIGNIN: '/auth/login',
  SIGNUP: '/api/usuarios'
}

// Register user
const register = async (userData) => {
  const response = await axios.post(API_URLS.SIGNUP, userData)
  console.log(response)

  // if (response.data) {
  //   localStorage.setItem('user', JSON.stringify(response.data))
  // }

  return response.data
}

// Login user

const signIn = async({ correo,password }: LoginData) =>{
  return await new Promise( (resolve, reject) => {
    try {
      const { data } =  booksDB.post('/auth/login', { correo, password })
      console.log(data,'data')
      // AsyncStorage.setItem('token', data?.token )

    } catch (error){
      console.log('LogInFetChError', error)
    }
  })
}

// Logout user
// const logout = () => {
//   localStorage.removeItem('user')
// }

export const authService = {
  register,
  signIn
}

export default authService

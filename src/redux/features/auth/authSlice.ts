import AsyncStorage from '@react-native-async-storage/async-storage'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import booksDB from '../../../api/booksDB'
import { LoginResponse, RegisterData, Usuario } from '../../../interfaces/appInterfaces'
import authService from './authService'

// Get user from localStorage
// const user = null

interface AuthInterface {
  isError?: boolean
  isSuccess?: boolean
  isLoading?:boolean
  token?: string | null
}

const initialState: AuthInterface = {
  isError: false,
  isSuccess: false,
  isLoading: false,
  token: null,
} 

// Register user
export const register = createAsyncThunk(
  'auth/register',
  async ({ nombre = 'Persona', correo, password, rol = 'USER' } :RegisterData, thunkAPI) => {
    try{ 
      return await booksDB.post<Usuario>('/usuarios', { nombre, correo, password,rol })
    }
    catch(err) {
      return thunkAPI.rejectWithValue(err.response.data)
    } 
  })

// Login user
export const login = createAsyncThunk('auth/login', async ({ correo, password },thunkAPI) => {
  try{ 
    const response = await booksDB.post<LoginResponse>('/auth/login', { correo, password })
    AsyncStorage.setItem('token',response.data.token )
    return response
  }
  catch(err) {
    return thunkAPI.rejectWithValue(err.response.data)
  }
})

// export const logout = createAsyncThunk('auth/logout', async () => {
//   await authService.logout()
// })

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false
      state.isSuccess = false
      state.isError = false
    },
    logout: (state) => {
      state.token = null
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
      })
      .addCase(login.pending, (state) => {
        state.isLoading = true
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.token = action.payload.data.token
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
      })
  },
})

export const { reset, logout } = authSlice.actions
export default authSlice.reducer

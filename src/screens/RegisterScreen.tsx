import React, { useEffect } from 'react'
import { Paragraph } from "../components/Texts"
import { Layout } from "../components/Wrappers/Layout"
import Register from '../assets/Register.svg'
import { Box } from '../components/Wrappers/Box'
import { Fonts, Spacing } from '../styles/base'
import { BookshelfButton } from '../components/Buttons'
import Input from '../components/Inputs'
import { Keyboard } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack'
import { useForm } from '../hooks/useForm'
import { useDispatch, useSelector } from 'react-redux'
import { register, reset } from '../redux/features/auth/authSlice'

interface Props extends StackScreenProps<any,any>{}

export const RegisterScreen = ({ navigation }: Props) => {
  const { email, password, onChange } = useForm({
    email: '',
    password: '',
  })
  
  const { isError,isLoading,isSuccess } = useSelector((state) => state.reducer.auth)
  const dispatch = useDispatch()

  useEffect(() => {

    if (isSuccess) {
      Keyboard.dismiss()
      navigation.navigate('LoginScreen')
    }

    dispatch(reset())
  }, [isSuccess, navigation, dispatch])

  const onRegister = () => {
    dispatch(register({ correo: email, password }))
  }

  return (
    <Layout  >
      <Box padding={ Spacing.l }>
        <Paragraph size={ Fonts.lg } text={ 'Register' }/>
      </Box>
      <Register/>
      <Box padding={ Spacing.l }/>
      <Input value={ email }  placeholder={ 'Username' } onChangeText={ (value) => onChange(value, 'email') }/>
      <Input  value={ password }  isSecureEntry placeholder={ 'Password' } onChangeText={ (value) => onChange(value, 'password') }/>
      <Box padding={ Spacing.l }/>
      <BookshelfButton onSubmit={ onRegister } type='primary' title='Register' />
    </Layout>
  )
}

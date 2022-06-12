import React from 'react'
import { Paragraph } from "../components/Texts"
import { Layout } from "../components/Wrappers/Layout"
import Login from '../assets/Login.svg'
import { Box } from '../components/Wrappers/Box'
import { Fonts, Spacing } from '../styles/base'
import { BookshelfButton } from '../components/Buttons'
import Input from '../components/Inputs'
import { Platform, KeyboardAvoidingView, Keyboard } from 'react-native'
import { useForm } from '../hooks/useForm'
import { StackScreenProps } from '@react-navigation/stack'

interface Props extends StackScreenProps<any,any>{}

export const LoginScreen = ({ navigation }: Props) => {

  const { email, password, onChange } = useForm({
    email: '',
    password: '',
  })

  const onLogin = () => {
    console.log(email,password)
    Keyboard.dismiss()
    navigation.navigate('RegisterScreen')
  }
 
  return (
    <>

      <KeyboardAvoidingView style={ { flex:1 } }
        behavior={ (Platform.OS === 'ios') ? 'padding' : 'height' }>
        <Layout  >

          <Box padding={ Spacing.l }>
            <Paragraph size={ Fonts.lg } text={ 'Login' }/>
          </Box>
          <Login/>
          <Box padding={ Spacing.l }/>
          <Input onSubmit={ onLogin } value={ email } onChangeText={ (value) => onChange(value, 'email') } placeholder={ 'Username' } />
          <Input onSubmit={ onLogin } value={ password } onChangeText={ (value) => onChange(value, 'password') } isSecureEntry placeholder={ 'Password' } />
          <Box padding={ Spacing.l }/>
          <BookshelfButton onSubmit={ onLogin } type='primary' title='Login' />

        </Layout>
      </KeyboardAvoidingView>

    </>
  )
}

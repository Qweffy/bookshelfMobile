import React from 'react'
import { Paragraph } from "../components/Texts"
import { Layout } from "../components/Wrappers/Layout"
import Register from '../assets/Register.svg'
import { Box } from '../components/Wrappers/Box'
import { Fonts, Spacing } from '../styles/base'
import { BookshelfButton } from '../components/Buttons'
import Input from '../components/Inputs'
import { Keyboard } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack'

interface Props extends StackScreenProps<any,any>{}

export const RegisterScreen = ({ navigation }: Props) => {

  const onLogin = () => {
    Keyboard.dismiss()
    navigation.navigate('MainScreen')
  }

  return (
    <Layout  >
      <Box padding={ Spacing.l }>
        <Paragraph size={ Fonts.lg } text={ 'Register' }/>
      </Box>
      <Register/>
      <Box padding={ Spacing.l }/>
      <Input placeholder={ 'Username' } />
      <Input  isSecureEntry placeholder={ 'Password' } />
      <Box padding={ Spacing.l }/>
      <BookshelfButton onSubmit={ onLogin } type='primary' title='Register' />

    </Layout>
  )
}

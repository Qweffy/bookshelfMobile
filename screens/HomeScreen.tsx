/* eslint-disable react-native/no-raw-text */
import React from 'react'
import { View } from "react-native"
import { Text } from "react-native-svg"
import { BookshelfButton } from '../components/Buttons/BookshelfButton'
import Login from '../assets/login.svg'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Layout } from '../components/Wrappers/Layout'
import { Box } from '../components/Wrappers/Box'
import { Fonts, Spacing } from '../styles/base'
import { H } from '../components/Texts/Header'

export const HomeScreen = () => {

  return (
    <Layout> 
      <Login />
      <H size={ Fonts.md } style={ { textAlign: 'center' } }>Are you ready to get into reading world?</H>
      <Box padding={ Spacing.m }>
        <BookshelfButton type={ 'primary' } title={ 'Login' } />
      </Box>
      <BookshelfButton type={ 'secondary' } title={ 'Register' } /> 
    </Layout> 
  )
}

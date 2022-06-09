import React from 'react'
import { View } from "react-native"
import { Text } from "react-native-svg"
import { BookshelfButton } from '../components/Buttons/BookshelfButton'
import Login from '../assets/login.svg'
import { colors } from '../styles/colors'

export const HomeScreen = () => {

  return (

  // eslint-disable-next-line react-native/no-inline-styles
    <View style={ { backgroundColor: colors.background, flex: 1 } }>
      <Login />
      <BookshelfButton type={ 'primary' } title={ 'Login' } />
      <BookshelfButton type={ 'secondary' } title={ 'Register' } />
    </View> 
  )
}

import React from 'react'
import { Button, Text, View } from 'react-native'
import { BookshelfButton } from './components/Buttons/BookshelfButton'
import Login from './assets/login.svg'
import { colors } from './styles/colors'

export const App = () => {
  return (
    <View style={ { backgroundColor: colors.background, flex: 1 } }>
      <Login />
      <BookshelfButton type={ 'primary' } title={ 'Login' } />
      <BookshelfButton type={ 'secondary' } title={ 'Register' } />
    </View>
  )
}

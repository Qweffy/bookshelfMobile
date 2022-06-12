
import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { HomeScreen } from '../screens/HomeScreen'
import { MainScreen } from '../screens/MainScreen'

export interface RootStackParams {
  HomeScreen: undefined;
  LoginScreen: undefined;
  RegisterScreen: undefined; 
  MainScreen: undefined
}

const Stack = createStackNavigator<RootStackParams>()

export const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={ {
      headerShown: false,
    } }>
      <Stack.Screen name="MainScreen" component={ MainScreen } />
    </Stack.Navigator>
  )
} 

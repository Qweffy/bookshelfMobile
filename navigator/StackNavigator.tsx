
import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { HomeScreen } from '../screens/HomeScreen'

export interface RootStackParams {
  HomeScreen: undefined;
  LoginScreen: undefined;
  RegisterScreen: undefined; 
}

const Stack = createStackNavigator<RootStackParams>()

export const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeScreen" component={ HomeScreen } />
    </Stack.Navigator>
  )
} 

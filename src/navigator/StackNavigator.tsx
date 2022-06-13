
import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { HomeScreen } from '../screens/HomeScreen'
import { MainScreen } from '../screens/MainScreen'
import { RegisterScreen } from '../screens/RegisterScreen'
import { LoginScreen } from '../screens/LoginScreen'
import { useSelector } from 'react-redux'
import { useCheckToken } from '../hooks/useCheckToken'

export interface RootStackParams {
  HomeScreen: undefined;
  LoginScreen: undefined;
  RegisterScreen: undefined; 
  MainScreen: undefined
}

const Stack = createStackNavigator<RootStackParams>()

export const StackNavigator = () => {
  const asyncToken =  useCheckToken()
  const { token } = useSelector((state) => state.reducer.auth)
  return (
    <Stack.Navigator screenOptions={ {
      headerShown: false,
    } }>
      {
        (!token && !asyncToken) 
          ? (
            <>
              <Stack.Screen name="HomeScreen" component={ HomeScreen } />
              <Stack.Screen name="LoginScreen" component={ LoginScreen } />
              <Stack.Screen name="RegisterScreen" component={ RegisterScreen } />
            </>
          )
          :
          ( <Stack.Screen name="MainScreen" component={ MainScreen } />)
      }
    </Stack.Navigator>
  )
    
} 

import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import  { StackNavigator }  from './src/navigator/StackNavigator'
import { Provider as ReduxProvider } from 'react-redux'
import { store } from './src/redux/app/store'
export interface RootStackParams {
  HomeScreen: undefined;
  LoginScreen: undefined;
  RegisterScreen: undefined;
} 

const Stack = createStackNavigator<RootStackParams>()

export const App = () => {
  return (

    <SafeAreaProvider>
      <ReduxProvider store={ store }>
        <NavigationContainer>
          <StackNavigator/>
        </NavigationContainer>
      </ReduxProvider>
    </SafeAreaProvider>

  )
}

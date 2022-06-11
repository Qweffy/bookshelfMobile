/* eslint-disable react-native/no-raw-text */
import React, { useState } from 'react'
import { View } from 'react-native'
import { Text } from 'react-native-svg'
import { BookshelfButton } from '../components/Buttons/BookshelfButton'
import Login from '../assets/login.svg'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Layout } from '../components/Wrappers/Layout'
import { Box } from '../components/Wrappers/Box'
import { Fonts, Spacing } from '../styles/base'
import { H } from '../components/Texts/Header'
import Input from '../components/Inputs'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faMugSaucer } from '@fortawesome/free-solid-svg-icons'
import { Logout } from '../components/Logout'
import { Tab } from '../components/Tab'

export const HomeScreen = () => {
   
  const onChange = () => {
    
  }

  const [isSecureEntry, setIsSecureEntry] = useState<boolean>(true)
  return (
    <Layout>
      <Tab/>
    </Layout>
  )
}

/* eslint-disable react-native/no-raw-text */
import React, { useEffect, useState } from 'react'
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
import { HorizontalSlider } from '../components/HorizontalSlider'
import axios from 'axios'

export const HomeScreen = () => {

  const [response, setResponse] = useState()

  useEffect(() => {
    axios.get("https://www.googleapis.com/books/v1/volumes?q=javascript:keyes&key=AIzaSyBqdKbsgfYO5uB5z-51C2QgDthKGHSl-mQ").then( data =>{
      setResponse(data.data.items)
    })
  },[])

  const [isSecureEntry, setIsSecureEntry] = useState<boolean>(true)
  return (
    <Layout>
      <Tab/>
      <HorizontalSlider movies={ response }/>  
    </Layout>
  )
}

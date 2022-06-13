import { faShareFromSquare, faUser } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import AsyncStorage from '@react-native-async-storage/async-storage'
import React from 'react'
import { View, ViewStyle } from "react-native"
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useDispatch } from 'react-redux'
import { logout } from '../../redux/features/auth/authSlice'
import { Fonts, Spacing  } from "../../styles/base"
import { Colors } from '../../styles/colors'
import {  Paragraph } from '../Texts'

interface LogoutProps {
    style?: ViewStyle | ViewStyle[] 
    padding?: Spacing
    margin?: Spacing
    backgroundColor?: Colors
}

export const Logout = ({ style, padding = 0, margin = 0, backgroundColor = Colors.background, ...children }: LogoutProps) => {
  const dispatch = useDispatch()

  const signOut = () => {
    dispatch(logout())
    AsyncStorage.removeItem('token')
  }

  return (
    <View style={ { flexDirection: 'row' } }>
      <FontAwesomeIcon style={ { alignSelf: 'center' } } icon={ faUser } color={ Colors.font }/>
      <Paragraph text={ 'Josefinapiaggio' } size={ Fonts.md }/>
      <TouchableOpacity onPress={ signOut } >
        <FontAwesomeIcon  icon={ faShareFromSquare } color={ Colors.font }/>
      </TouchableOpacity>
    </View>
  )}

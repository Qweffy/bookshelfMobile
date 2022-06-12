import { faShareFromSquare, faUser } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import React from 'react'
import { View, ViewStyle } from "react-native"
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
  return (
    <View style={ { flexDirection: 'row' } }>
      <FontAwesomeIcon style={ { alignSelf: 'center', marginRight: 5 } } icon={ faUser } color={ Colors.font }/>
      <Paragraph text={ 'Josefinapiaggio' } size={ Fonts.md }/>
      <FontAwesomeIcon style={ { marginLeft: 'auto' } } icon={ faShareFromSquare } color={ Colors.font }/>
    </View>
  )}

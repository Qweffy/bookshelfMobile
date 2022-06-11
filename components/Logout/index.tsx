import { faShareFromSquare, faUser } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import React from 'react'
import { View, ViewStyle } from "react-native"
import { Fonts, Spacing  } from "../../styles/base"
import { Colors } from '../../styles/colors'
import { H } from '../Texts/Header'

interface LogoutProps {
    style?: ViewStyle | ViewStyle[] 
    padding?: Spacing
    margin?: Spacing
    backgroundColor?: Colors
    children: React.ReactNode
}

export const Logout = ({ style, padding = 0, margin = 0, backgroundColor = Colors.background, ...children }: BoxProps) => {
  return (
    <View style={ { flexDirection: 'row' } }>
      <FontAwesomeIcon style={ { alignSelf: 'center', marginRight: 5 } } icon={ faUser } color={ Colors.font }/>
      <H size={ Fonts.md }>Josefinapiaggio</H>
      <FontAwesomeIcon style={ { marginLeft: 'auto' } } icon={ faShareFromSquare } color={ Colors.font }/>
    </View>
  )}

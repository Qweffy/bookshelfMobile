import React from 'react'
import { Text, TextStyle, ViewStyle } from 'react-native'
import { Fonts } from '../../styles/base'
import { Colors } from '../../styles/colors'

interface HeaderProps {
    style?: TextStyle
    color?: Colors
    size?: Fonts
    text?: string
}

export const Paragraph = ({ style, size = Fonts.lg, color = Colors.font, text = 'Send text' }: HeaderProps) => {
  
  return (
    <Text
      style={ {
        color: color,
        fontSize: size,
        ...style ,
      } }
      
    >{ text }</Text>
  )
}

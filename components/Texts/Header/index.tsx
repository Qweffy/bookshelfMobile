import React from 'react'
import { Text, TextStyle, ViewStyle } from 'react-native'
import { Fonts } from '../../../styles/base'
import { Colors } from '../../../styles/colors'

interface HeaderProps {
    style?: TextStyle
    color?: Colors
    size?: Fonts
    children: React.ReactNode
}

export const H = ({ style, size = Fonts.lg, color = Colors.font, ...children }: HeaderProps) => {
  
  return (
    <Text
      style={ {
        color: color,
        fontSize: size,
        ...style ,
      } }
      { ...children }
    />
  )
}

import React from 'react'
import { View, ViewStyle } from "react-native"
import { Spacing  } from "../../../styles/base"
import { Colors } from '../../../styles/colors'

interface BoxProps {
    style?: ViewStyle | ViewStyle[] 
    padding?: Spacing
    margin?: Spacing
    backgroundColor?: Colors
    children: React.ReactNode
}

export const Box = ({ style, padding = 0, margin = 0, backgroundColor = Colors.background, ...children }: BoxProps) => {
  return (
    <View
      style={ {
        margin: margin,
        paddingVertical: padding,
        backgroundColor: backgroundColor,
        ...style,
      } }
      { ...children }
    />
  )}

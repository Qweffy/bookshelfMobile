import { faSquarePlus } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import React from 'react'
import { ViewStyle } from "react-native"
import { Fonts, Spacing } from '../../../styles/base'
import { Colors } from '../../../styles/colors'
import { Paragraph } from '../../Texts'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { TouchableOpacity } from 'react-native-gesture-handler'

interface ActionButtonProps {
    style?: ViewStyle | ViewStyle[] 
    padding?: Spacing
    margin?: Spacing
    backgroundColor?: Colors
    icon?: IconProp
    text?: string
    onPress?: () => void
}

export const ActionButton = ({ style, padding = 0, margin = 0, backgroundColor = Colors.background, icon, text }: ActionButtonProps) => {
  return (
    <TouchableOpacity >
      <FontAwesomeIcon style={ { alignSelf: 'center', marginRight: 5 } } icon={ icon } color={ Colors.font }/>
      <Paragraph text={ text } size={ Fonts.md }/>
    </TouchableOpacity>
  )}

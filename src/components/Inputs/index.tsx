import React from 'react'
import { View, Text, TextInput, TextStyle } from 'react-native'
import { Colors } from '../../styles/colors'
import styles from './styles'

interface InputProps {
    onChangeText?: (text: string) => void;
    iconPosition?: IconPosition
    value?: string
    icon?: JSX.Element
    error?: boolean
    style?: TextStyle
    placeholder?: string
    isSecureEntry?: boolean
    onSubmit?: () => void
}

type IconPosition = "left" | "right"

const Input = ({
  onChangeText,
  iconPosition,
  icon,
  value,
  error,
  style,
  placeholder,
  isSecureEntry,
  onSubmit,
  ...props
}: InputProps) => {
  const [focused, setFocused] = React.useState(false)

  const getFlexDirection = () => {
    if (icon && iconPosition) {
      if (iconPosition === 'left') {
        return 'row'
      } else if (iconPosition === 'right') {
        return 'row-reverse'
      }
    }
  }

  const getBorderColor = () => {
    if (error) {
      return Colors.redError
    }

    if (focused) {
      return Colors.gradientPrimaryOne
    } else {
      return Colors.darkBlue
    }
  }
  return (
    <View style={ styles.inputContainer }>
      <View
        style={ [
          styles.wrapper,
          { alignItems: icon ? 'center' : 'baseline' },
          { borderColor: getBorderColor(), flexDirection: getFlexDirection() },
        ] }>
        <View>{ icon && icon }</View>

        <TextInput
          style={ [styles.textInput, style] }
          onChangeText={ onChangeText }
          placeholder={ placeholder }
          value={ value }
          onSubmitEditing={ onSubmit }
          placeholderTextColor={ Colors.font }
          secureTextEntry={ isSecureEntry }
          onFocus={ () => {
            setFocused(true)
          } }
          onBlur={ () => {
            setFocused(false)
          } }
          { ...props }
        />
      </View>

      { error && <Text style={ styles.error }>{ error }</Text> }
    </View>
  )
}

export default Input

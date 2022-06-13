import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { Colors } from '../../styles/colors'
import { bookshelfButtonStyles } from './style'

interface BookshelfButtonProps {
  title?: string;
  type?: ButtonKind;
  onSubmit?: () => void
}
type ButtonKind = 'primary' | 'secondary';

const Primary = ( { title, onSubmit } :BookshelfButtonProps) => {
  return (
    <>
      <LinearGradient
        colors={ [Colors.gradientPrimaryOne, Colors.gradientPrimaryTwo] }
        start={ { x: 0.0, y: 1.0 } } end={ { x: 1.0, y: 1.0 } }
        style={ bookshelfButtonStyles.grediant }
      >
        <TouchableOpacity onPress={ onSubmit }>
          <Text style={ bookshelfButtonStyles.buttonTextPrimary }>
            { title }
          </Text>
        </TouchableOpacity>
      </LinearGradient>
    </> 
  )
}

// Refactor this, reusing code

const Secondary = ({ title,onSubmit } :BookshelfButtonProps) => {
  return (
    <>
      <LinearGradient 
        colors={ [Colors.gradientPrimaryOne, Colors.gradientPrimaryTwo] }
        start={ { x: 0.0, y: 1.0 } } end={ { x: 1.0, y: 1.0 } }
        style={ bookshelfButtonStyles.grediant }
      >
        <TouchableOpacity onPress={ onSubmit } style={ bookshelfButtonStyles.buttonContainer2 }>
          <Text style={ bookshelfButtonStyles.buttonTextSecondary }>
            { title }
          </Text>
        </TouchableOpacity>
      </LinearGradient>
    </> 
  )
}

const renderButton = (bookshelfButtonProps : BookshelfButtonProps) => {
  const { type, title, onSubmit } = bookshelfButtonProps
  switch(type) {
  case 'primary' :
    return <Primary onSubmit={ onSubmit } title={ title ?? '' }/>
  case 'secondary' :
    return <Secondary onSubmit={ onSubmit } title={ title ?? '' }/>
  }
}

export const BookshelfButton = ( bookshelfButtonProps: BookshelfButtonProps) => {
  return (
    <>
      { renderButton(bookshelfButtonProps) }
    </>
  ) 
}

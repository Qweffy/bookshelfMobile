// import React, { useState } from 'react'
// import { KeyboardAvoidingView, Platform, StyleSheet, TextStyle, View, ViewStyle } from "react-native"
// import { TextInput } from 'react-native-gesture-handler'
// import { Fonts } from '../../../styles/base'
// import { Colors } from '../../../styles/colors'

// interface InputProps {
//     placeholder?: string
//     validator?:(input: string) => boolean
//     backgroundColor?: Colors
//     placeholderColor?: Colors
// }
 
// export const useForm = <T extends Object>( initState: T ) => {
    
//   const [state, setState] = useState( initState )

//   const onChange = ( value: string, field: keyof T ) => {
//     setState({
//       ...state,
//       [field]: value
//     })
//   }

//   const setFormValue = ( form: T ) =>{
//     setState( form )
//   }
  
//   return {
//     ...state,
//     form: state,
//     onChange,
//     setFormValue
//   }

// }

// const Valid = true
// const Invalid = false
// const Pristine = null
// type InputState = typeof Valid | typeof Invalid | typeof Pristine

// export const Input = ({ placeholder = 'Username', placeholderColor = Colors.font }: InputProps) => {

//   const { email, password, onChange } = useForm({
//     email: '',
//     password: ''
//   })
//   const [state, setState] = useState<InputState>(Pristine)
//   return (
//     <>
//       <KeyboardAvoidingView >
//         <TextInput 
//           placeholder={ placeholder }
//           placeholderTextColor={ placeholderColor }
//           keyboardType="email-address"

//           style={ loginStyles.inputField }
//           selectionColor={ Colors.font }

//           onChangeText={ (value) => onChange(value, 'email') }
//           value={ email }
//           autoCapitalize="none"
//           autoCorrect={ false }
//         />
//       </KeyboardAvoidingView>
//     </> 
//   )}    

// export const loginStyles = StyleSheet.create({

//   inputField: {
//     paddingBottom: 4,
//     backgroundColor: Colors.darkBlue,
//     borderRadius: 10,
//     fontSize: Fonts.md,
//     paddingLeft: 10,
//   },
// })

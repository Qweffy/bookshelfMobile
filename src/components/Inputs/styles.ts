import { StyleSheet } from 'react-native'
import { Colors } from '../../styles/colors'

export default StyleSheet.create({
  wrapper: {
    height: 42,
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 5,
    marginTop: 5,
    backgroundColor: Colors.darkBlue
  },

  inputContainer: {
    paddingVertical: 12,
    width: '100%',

  },

  textInput: {
    flex: 1,
    width: '100%',
    color: Colors.font,

  },

  error: {
    color: Colors.redError,
    paddingTop: 4,
    fontSize: 12,
  },
})

import { dimensions, Spacing } from '../../styles/base'
import { StyleSheet } from 'react-native'
import { Colors } from '../../styles/colors'

export const bookshelfButtonStyles = StyleSheet.create({
  primary: {
    paddingHorizontal: Spacing.s,
    paddingVertical: Spacing.l,
    width: dimensions.fullWidth,
  },
  secondary: {
    borderRadius: 10,
  },
  circleGradient: {
    margin: 1,
    backgroundColor: "white",
    borderRadius: 5
  },
  buttonContainer: {
    width: 200,
    alignItems: 'center',
  },
  grediant: {
    height: 44,
    width: '100%',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 10,
  },
  buttonContainer2: {
    flex: 1.0,
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: Colors.background,
    width: '99%',
    margin: 1
  },
  buttonTextPrimary: {
    textAlign: 'center',
    color: Colors.font,
    alignSelf: 'center',
  },
  buttonTextSecondary: {
    textAlign: 'center',
    color: Colors.fontSecondary,
    alignSelf: 'center',
  },

})  

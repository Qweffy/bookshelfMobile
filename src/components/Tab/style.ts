import { Dimensions, StyleSheet } from 'react-native'
import { Colors } from '../../styles/colors'

const window = Dimensions.get('window')

export const tabStyle = StyleSheet.create({
  activeTab: {
    backgroundColor: 'red',
  },
  tab: {
    backgroundColor: Colors.darkBlue,
    borderRadius: 10
  },
  hiddenContainer: {
    top: window.height,
    bottom: -window.height
  },
  showContainer: {
    overflow: 'hidden',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    position: 'absolute',
    alignItems: 'center',
    justifyContent:'center'
  }

})  

import React, { useState } from 'react'
import { Text, View, } from "react-native"
import { TouchableOpacity } from 'react-native-gesture-handler'
import Discover from '../../assets/discover.svg'
import FinishedBooks from '../../assets/finishedBooks.svg'
import ReadingList from '../../assets/readingList.svg'
import { Colors } from '../../styles/colors'
import { Layout } from '../Wrappers/Layout'
import { tabStyle } from './style'

interface TabProps {
}

// const images = {
//   'Reading List':
//       ReadingList,
//   'Finished Books':
//       FinishedBooks,
//   Discover:
//      Discover,
// }
// const data = Object.keys(images).map((i) => ({
//   key: i,
//   title: i,
//   image: images[i],
// }))

export const Tab = ({ style, padding = 0, margin = 0, backgroundColor = Colors.background, ...children }: BoxProps) => {
  const [toggleState, setToggleState] = useState(1)

  const toggleTab = (index) => {
    setToggleState(index)
  }
  
  return (
    <View style={ { flexDirection:'row', justifyContent: 'space-between' } }>
      <TouchableOpacity onPress={ () => toggleTab(1) } style={ toggleState === 1 ? tabStyle.activeTab : tabStyle.tab }>
        <ReadingList/>
      </TouchableOpacity>
      <TouchableOpacity onPress={ () => toggleTab(2) } style={ toggleState === 2 ? tabStyle.activeTab : tabStyle.tab }>
        <FinishedBooks/>
      </TouchableOpacity>
      <TouchableOpacity onPress={ () => toggleTab(3) } style={ toggleState === 3 ? tabStyle.activeTab : tabStyle.tab }>
        <Discover/>
      </TouchableOpacity>
    </View>
  )}

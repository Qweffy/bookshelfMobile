import React, { useState } from 'react'
import { View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Discover from '../../assets/discoverBooks.svg'
import FinishedBooks from '../../assets/finished.svg'
import ReadingList from '../../assets/List.svg'
import { tabStyle } from './style'

interface TabProps {}

export const Tab = ({
  ...children
}: TabProps) => {
  const [toggleState, setToggleState] = useState(1)

  const toggleTab = index => {
    setToggleState(index)
  }

  return (
    <View style={ { flexDirection: 'row', justifyContent: 'space-between', width: '100%' } }>
      <TouchableOpacity
        onPress={ () => toggleTab(1) }
        style={ toggleState === 1 ? tabStyle.activeTab : tabStyle.tab }>
        <ReadingList />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={ () => toggleTab(2) }
        style={ toggleState === 2 ? tabStyle.activeTab : tabStyle.tab }>
        <FinishedBooks />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={ () => toggleTab(3) }
        style={ toggleState === 3 ? tabStyle.activeTab : tabStyle.tab }>
        <Discover />
      </TouchableOpacity>
    </View>
  )
}

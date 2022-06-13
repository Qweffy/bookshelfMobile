import React, { useState } from 'react'
import { View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Discover from '../../assets/discoverBooks.svg'
import FinishedBooks from '../../assets/finished.svg'
import ReadingList from '../../assets/List.svg'
import { Fonts } from '../../styles/base'
import { Paragraph } from '../Texts'
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
    <>
      <View style={ { flexDirection: 'row', justifyContent: 'space-between', width: '100%' } }>
        <TouchableOpacity
          onPress={ () => toggleTab(1) }
          style={ toggleState === 1 ? tabStyle.activeTab : tabStyle.tab }>
          <ReadingList />
          <Paragraph size={ Fonts.md } text={ 'Reading List' }/>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={ () => toggleTab(2) }
          style={ toggleState === 2 ? tabStyle.activeTab : tabStyle.tab }>
          <FinishedBooks />
          <Paragraph size={ Fonts.md } text={ 'Finished Books' }/>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={ () => toggleTab(3) }
          style={ toggleState === 3 ? tabStyle.activeTab : tabStyle.tab }>
          <Discover />
          <Paragraph size={ Fonts.md } text={ 'Discover' }/>
        </TouchableOpacity>

      </View>
      <View>
        <View
          style={ toggleState === 1 ? tabStyle.showContainer : tabStyle.hiddenContainer }
        >
          <Paragraph size={ Fonts.md } text={ 'Discover' }/>
          <Paragraph size={ Fonts.sm } text={ 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos sed Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos sed Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos sed' } />
        </View>

        <View
          style={ toggleState === 2 ? tabStyle.showContainer : tabStyle.hiddenContainer }
        >
          <Paragraph size={ Fonts.md } text={ 'Reading List' }/>
          <Paragraph size={ Fonts.sm } text={ 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos sed Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos sed Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos sed' } />
        </View>

        <View
          style={ toggleState === 3 ? tabStyle.showContainer : tabStyle.hiddenContainer }
        >
          <Paragraph size={ Fonts.md } text={ 'Finished Books' }/>
          <Paragraph size={ Fonts.sm } text={ 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos sed Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos sed Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos sed' } />
        </View>
      </View>
    </>
  )
}

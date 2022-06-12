import React from 'react'
import { View , SafeAreaView } from 'react-native'
import { contentWrapperStyles } from "./style"

interface LayoutProps {
    children?: JSX.Element | JSX.Element[];
  }

export const Layout = ({ children }:LayoutProps) => {
  return (
    <SafeAreaView style={ contentWrapperStyles.safeArea }>
      <View style={ contentWrapperStyles.wrapper }>
        { children }
      </View>
    </SafeAreaView>
  ) 
}

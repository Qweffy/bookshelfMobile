import React from 'react'
import { Paragraph } from "../components/Texts"
import { Layout } from "../components/Wrappers/Layout"
import Bookfield from '../assets/Bookfield.svg'
import Home from '../assets/Home.svg'
import { Box } from '../components/Wrappers/Box'
import { Fonts, Spacing } from '../styles/base'
import { BookshelfButton } from '../components/Buttons'

export const HomeScreen = () => {

  return (
    <Layout  >
      <Bookfield/>

      <Home />
      <Box padding={ Spacing.l }>
        <Paragraph size={ Fonts.md } text={ 'Are you ready to get into reading world?' }/>
      </Box>
      
      <BookshelfButton type='primary' title='Login' />
      <Box padding={ Spacing.s }/>
      <BookshelfButton type='secondary' title='Register' />

    </Layout>
  )
}

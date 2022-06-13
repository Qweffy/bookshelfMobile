import React from 'react'
import { Dimensions, StyleSheet, Text, View , Image } from 'react-native'
import { Fonts } from '../../styles/base'
import { Paragraph } from '../Texts'

interface Props {
    movieFull: any;
}

const screenHeight = Dimensions.get('screen').height

export const BookDetails = ({ movieFull }: Props) => {
    
  const { title, description, averageRating, authors, imageLinks } = movieFull
  const uri = imageLinks.thumbnail
  return (
    <>
      <Paragraph text={ title }/>
      <Paragraph text={ averageRating }/>
      <Paragraph text={ description } size={ Fonts.sm }/>

    </>
  )
}

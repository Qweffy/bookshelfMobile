import React from 'react'
import { Dimensions, StyleSheet, Text, View , Image } from 'react-native'
import { Fonts } from '../../styles/base'
import { H } from '../Texts/Header'

interface Props {
    movieFull: any;
}

// title
// description
// avarage rating
// authors, is an array

const screenHeight = Dimensions.get('screen').height
const str = 'ÁÉÍÓÚáéíóúâêîôûàèìòùÇç/.,~!@#$%&_-12345'

export const BookDetails = ({ movieFull }: Props) => {
    
  const { title, description, averageRating, authors, imageLinks } = movieFull
  const uri = imageLinks.thumbnail
  console.log(uri)
  return (
    <>
      <H>{ title }</H>
      <H> Rating: { averageRating }</H>
      <H size={ Fonts.sm }>{ description }</H>

    </>
  )
}

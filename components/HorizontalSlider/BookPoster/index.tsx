import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import { TouchableOpacity } from 'react-native-gesture-handler'

interface Props {
    movie: any;
    height?: number;
    width?: number;
    onPress?: () => {}
}
export interface Movie {
    adult:             boolean;
    backdrop_path:     string;
    genre_ids:         number[];
    id:                number;
    original_language: OriginalLanguage;
    original_title:    string;
    overview:          string;
    popularity:        number;
    poster_path:       string;
    release_date:      string;
    title:             string;
    video:             boolean;
    vote_average:      number;
    vote_count:        number;
}
export enum OriginalLanguage {
    En = "en",
    Es = "es",
    Ja = "ja",
    Zh = "zh",
}

export const MoviePoster = ({ movie, height = 420, width = 300, onPress }: Props ) => {

  const uri = movie.volumeInfo.imageLinks.thumbnail
  const navigation = useNavigation() 

  return (
    <TouchableOpacity
      onPress={ onPress }
      activeOpacity={ 0.8 }
      style={ {
        width,
        height,
        marginHorizontal: 2,
        paddingBottom: 20,
        paddingHorizontal: 7
      } }
    >
      <View style={ styles.imageContainer }>
        <Image
          source={ { uri } }
          style={ styles.image }
        />
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    borderRadius: 18,
  },
  imageContainer: {
    flex: 1,
    borderRadius: 18,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,

    elevation: 9,
  }
})

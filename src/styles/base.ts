import { Dimensions } from 'react-native'

export const dimensions = {
  fullHeight: Dimensions.get('window').height,
  fullWidth: Dimensions.get('window').width,
}

export enum Spacing {
  xs = 8,
  s = 12,
  m = 20, 
  l = 34,
  xl = 54,
}

export enum Fonts {
  sm = 12,
  md = 18,
  lg = 28,
}

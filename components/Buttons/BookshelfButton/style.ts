import {dimensions, padding} from '../../../styles/base';
import {StyleSheet} from 'react-native';

export const bookshelfButtonStyles = StyleSheet.create({
  primary: {
    paddingHorizontal: padding.sm,
    paddingVertical: padding.lg,
    width: dimensions.fullWidth,
  },
  secondary: {
    backgroundColor: 'rgba(0, 0, 0, 0.0)',
    borderWidth: 1,
    borderColor: 'red',
    borderRadius: 10,
  },
});

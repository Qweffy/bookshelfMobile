import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {bookshelfButtonStyles} from './style';

interface bookshelfButtonProps {
  title?: string;
  type: ButtonKind;
}
type ButtonKind = 'primary' | 'secondary';

function getStyles(kind: ButtonKind) {
  switch (kind) {
    case 'primary':
      return bookshelfButtonStyles.primary;
    case 'secondary':
      return bookshelfButtonStyles.secondary;
  }
}

export const BookshelfButton = ({title, type}: bookshelfButtonProps) => {
  const styles = getStyles(type);
  return (
    <TouchableOpacity style={styles}>
      <Text>{title ? title : 'Send text to display in the button'}</Text>
    </TouchableOpacity>
  );
};

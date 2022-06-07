import React from 'react';
import {Button, Text, View} from 'react-native';
import {BookshelfButton} from './components/Buttons/BookshelfButton';
import Login from './assets/login.svg';

export const App = () => {
  return (
    <View>
      <Text>Hola mundo</Text>
      <Login />
      <Button title={'Login'} />
      <BookshelfButton type={'secondary'} title={'Register'} />
    </View>
  );
};

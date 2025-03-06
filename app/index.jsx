import React from 'react';
import { View, Text } from 'react-native';

export default function Home() {
  return (
    <View flex={1} justifyContent="center" alignItems="center">
      <Text fontSize="lg">Bem-vindo ao App de Natação!</Text>
    </View>
  );
}
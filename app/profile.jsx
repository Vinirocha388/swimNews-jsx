import React from 'react';
import { View, Text } from 'react-native';

export default function Profile() {
  return (
    <view flex={1} justifyContent="center" alignItems="center">
      <Text fontSize="lg">Nome: João Silva</Text>
      <Text fontSize="lg">Idade: 25 anos</Text>
      <Text fontSize="lg">Nadador profissional</Text>
    </view>
  );
}
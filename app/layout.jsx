import React from 'react';
import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';


export default function Layout() {
  return (
    <NativeBaseProvider>
      <Tabs>
        <Tabs.Screen
          name="Home"
          options={{
            title: 'Home',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tabs.Screen
          name="News"
          options={{
            title: 'Notícias',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="newspaper" color={color} size={size} />
            ),
          }}
        />
        <Tabs.Screen
          name="Profile"
          options={{
            title: 'Perfil',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="person" color={color} size={size} />
            ),
          }}
        />
      </Tabs>
    </NativeBaseProvider>
  );
}
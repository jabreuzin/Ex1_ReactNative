import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen
          name='Home'//Nome para rota de navegação
          component={HomeScreen}//Componente da tela
          options={{title: 'Visão Geral'}}//Opções de cabeçalho da tela
        />
        <Stack.Screen
          name='Detalhes'
          component={DetailsScreen}
          options={{title: 'Detalhes do item'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

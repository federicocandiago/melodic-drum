import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { navigationRef } from './rootNavigation';

import MainScreen from './screens/mainScreen'

import styles from './assets/styles/styles'

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer ref={navigationRef}>
    <Stack.Navigator>

      <Stack.Screen
        name="Main"
        component={MainScreen}
        options={{
          headerShown: false
        }} />

    </Stack.Navigator>
  </NavigationContainer>
  );
}

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MainScreen from './screens/mainScreen'
import AboutScreen from './screens/aboutScreen'

import styles from './assets/styles/styles'

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">

        <Stack.Screen
          name="Main"
          component={MainScreen}
          options={{
            headerShown: false
          }} />

        <Stack.Screen
          name="About"
          component={AboutScreen}
          options={{ title: 'About' }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

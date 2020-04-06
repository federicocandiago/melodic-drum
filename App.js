import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import MainScreen from './screens/mainScreen'
import AboutScreen from './screens/aboutScreen'

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const App: () => React$Node = () => {
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
};

export default App;

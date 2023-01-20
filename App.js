
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { BottomTabBar } from '@react-navigation/bottom-tabs';
import Auth from './src/Navigation/Auth'


const Stack = createNativeStackNavigator();

const App =() => {
  return (
    < Auth />
  );
}

export default App;
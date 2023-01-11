
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash1 from './src/Splash1';
import Splash from './src/Splash';
import Login from './src/Login';
import Signup from './src/Signup';
import ForgotPassword from './src/ForgotPassword';
import Home from './src/Home';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Splash1" component={Splash1} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="Home" component={Home} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
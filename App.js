
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash1 from './src/Splash1';
import Splash from './src/Splash';
import Login from './src/Login/Login';
import Signup from './src/Login/Signup';
import ForgotPassword from './src/Login/ForgotPassword';
import Home from './src/Screens/Home';
import Categories from './src/Screens/Categories';
import WriteBlog from './src/Screens/WriteBlog';
import AI from './src/Screens/AI';


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
        <Stack.Screen name="Home" component={Home} screenOptions={{ headerShown : false }} />
        <Stack.Screen name="Categories" component={Categories} screenOptions={{ headerShown : false }} />
        <Stack.Screen name="WriteBlog" component={WriteBlog} screenOptions={{ headerShown : false }} />
        <Stack.Screen name="AI" component={AI} screenOptions={{ headerShown : false }} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
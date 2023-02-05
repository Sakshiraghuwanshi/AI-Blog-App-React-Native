
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash1 from '../Screens/Splash1';
import Splash from '../Screens/Splash';
import Login from '../Screens/Login';
import Signup from '../Screens/Signup';
import ForgotPassword from '../Screens/ForgotPassword';
import Home from '../Screens/Home';
import Categories from '../Screens/Categories';
import WriteBlog from '../Screens/WriteBlog';
import AI from '../Screens/AI'
import { BottomTabBar } from '@react-navigation/bottom-tabs';
import Profile from '../Screens/Profile';
import Tabs from '../Navigation/Tabs';



const Stack = createNativeStackNavigator();

const Auth = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={Splash}>
        <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
        <Stack.Screen name="Splash1" component={Splash1} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={Tabs} options={{ headerShown: false }} />
        <Stack.Screen name="Categories" component={Categories} />
        <Stack.Screen name="WriteBlog" component={WriteBlog} />
        <Stack.Screen name="AI" component={AI} />
        <Stack.Screen name="Profile" component={Profile} />
        

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Auth;
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Screens/Home';
import Categories from '../Screens/Categories';
import WriteBlog from '../Screens/WriteBlog';
import AI from '../Screens/AI';
import Profile from '../Screens/Profile';
import { StyleSheet, Text, View, Image,ScrollView } from "react-native";



const Tab = createBottomTabNavigator();

const Tabs= () => {
  return (
   
     <Tab.Navigator screenOptions={{headerShown:false, tabBarActiveTintColor: 'purple', tabBarLabelStyle:{
      fontSize:15,
      fontWeight:'600',
      
     }}}>
      <Tab.Screen name="Home" component={Home} options={
        
        {
       
        tabBarStyle: {
          height: 60,
          position: 'absolute',
          bottom: 7,
          right: 10,
          left: 10,
          borderRadius: 16,
          elevation: 10,
          backgroundColor: 'white',
          fontweight:'bold',
          paddingBottom : 3,
          paddingTop: 6,
        
        },
        tabBarIcon: ({focused})=> {
          return (
            <Image source={require("../asset/home.png")} />
          )
        },
        
     
      }
      } />
      <Tab.Screen name="Categories" component={Categories} options={{
        tabBarStyle: {
          height: 60,
          position: 'absolute',
          bottom: 8,
          right: 10,
          left: 10,
          borderRadius: 16,
          elevation: 10,
          backgroundColor: 'white',
          
        },
        tabBarIcon: ({focused})=> {
          return (
            <Image source={require("../asset/category.png")} />
          )
        }
        
      }} />
      
      <Tab.Screen name="AI" component={AI} options={{
        tabBarStyle: {
          height: 60,
          position: 'absolute',
          bottom: 8,
          right: 10,
          left: 10,
          borderRadius: 16,
          elevation: 10,
          backgroundColor: 'white',
          
        },
        tabBarIcon: ({focused})=> {
          return (
            <Image source={require("../asset/AI.png")} />
          )
        }
      }} />
       <Tab.Screen name="WriteBlog" component={WriteBlog} options={{
        tabBarStyle: {
          height: 60,
          position: 'absolute',
          bottom: 8,
          right: 10,
          left: 10,
          borderRadius: 16,
          elevation: 10,
          backgroundColor: 'white',
          
        },
        tabBarIcon: ({focused})=> {
          return (
            <Image source={require("../asset/edit.png")} />
          )
        }
      }} />
      <Tab.Screen name="Profile" component={Profile} options={{
        tabBarStyle: {
          height: 60,
          position: 'absolute',
          bottom: 8,
          right: 10,
          left: 10,
          borderRadius: 16,
          elevation: 10,
          backgroundColor: 'white',
          
        },
        tabBarIcon: ({focused})=> {
          return (
            <Image source={require("../asset/profile.png")} />
          )
        }
      }} />
    </Tab.Navigator>
  );
}

export default Tabs;

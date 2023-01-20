
import React from 'react';
import {View, StyleSheet, Text,Image,TouchableOpacity,Press} from 'react-native';
import Background from '../components/Background';



const Splash1= (props) => {
  return (
    <Background>
    <View style={{ marginHorizontal: 40, marginVertical: 100 ,marginTop:40}}>
      <Text style={{ color: 'white', fontSize: 58 , fontFamily: "cursive" }}>Get Started</Text>
      <Text style={{ color: 'white', fontSize: 58 , fontFamily: "cursive",marginBottom:40}}>with Blogging</Text>
      <View>
      <Image source={require("../asset/Saly-22.png")} style={{ marginLeft: 40}}/>
      </View>
      <View style ={{marginBottom:30}}></View>
      <View>
            <TouchableOpacity
              onPress={() =>  props.navigation.navigate("Login") }
              style={{
                backgroundColor: '#f0f0f0',
                borderRadius: 100,
                alignItems: 'center',
                width: 314,
                height : 40,
                paddingVertical: 5,
                marginVertical: 5,
                marginLeft: 10,
              }}>
              <Text style={{ color: '#5956E9', fontSize: 20, fontWeight: 'bold'  }}>Login</Text>
            </TouchableOpacity>
            </View>
      
            <View>
            <TouchableOpacity
              onPress={() =>  props.navigation.navigate("Signup") }
              style={{
                backgroundColor: '#f0f0f0',
                borderRadius: 100,
                alignItems: 'center',
                width: 314,
                height : 40,
                paddingVertical: 5,
                marginVertical: 10,
                marginLeft: 10,
              }}>
              <Text style={{ color: '#5956E9', fontSize: 20, fontWeight: 'bold'  }}>Register</Text>
            </TouchableOpacity>
      </View>


      </View>
    </Background>
  );
};


export default Splash1;
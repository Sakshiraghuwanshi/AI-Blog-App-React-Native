
import React from 'react';
import {View, StyleSheet, Text,Image} from 'react-native';
import Background from './Background';
import Btn from './Btn';


const Home = (props) => {
  return (
    <Background>
    <View style={{ marginHorizontal: 40, marginVertical: 100 ,marginTop:40}}>
      <Text style={{ color: 'white', fontSize: 58 , fontFamily: "cursive" }}>Get Started</Text>
      <Text style={{ color: 'white', fontSize: 58 , fontFamily: "cursive",marginBottom:40}}>with Blogging</Text>
      <View>
      <Image source={require("./asset/Saly-22.png")} style={{ marginLeft: 40}}/>
      </View>
      <View style ={{marginBottom:30}}></View>
      <Btn bgColor='#f0f0f0' textColor='#5956E9' btnLabel="Login" Press={() => props.navigation.navigate("Login")} />
      <Btn bgColor='#f0f0f0' textColor='#5956E9' btnLabel="Register" Press={() => props.navigation.navigate("Signup")} />
      </View>


      
    </Background>
  );
}

const styles = StyleSheet.create({})

export default Home;
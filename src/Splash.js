
import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import Background from './Background';
import Btn from './Btn';

const Home = (props) => {
  return (
    <Background>
    <View style={{ marginHorizontal: 40, marginVertical: 100 ,marginTop:60}}>
      <Text style={{ color: 'white', fontSize: 60 , fontFamily: "cursive" }}>AI Blog</Text>
      <Text style={{ color: 'white', fontSize: 60 ,marginBottom: 40, fontFamily: "cursive", marginBottom:-20}}>APP</Text>
      
      <View>
      <Image source={require("./asset/Saly-21.png")} style={{ marginLeft: 20}}/>
      
      <View style= {{marginBottom:40}}></View>
      </View>
      <Btn bgColor='#f0f0f0' textColor='#5956E9' btnLabel="Get Started" Press={() => props.navigation.navigate("Splash1")} />
      
      </View>


      
    </Background>
  );
}

const styles = StyleSheet.create({})

export default Home;
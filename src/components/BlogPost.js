import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import {Card} from 'react-native-shadow-cards';

const Home = (props) => {
  return (

<View style={{marginLeft:40}}>
  <Card style= {{width:'90%',height: '70%',elevation:10} } >
    <Text style={{fontSize:18,fontWeight:'bold',color:'black',alignItems:'center' ,marginLeft:100}}>react native</Text>
  </Card>
</View>

  );
  
};
const styles=StyleSheet.create({
  
  
})


export default Home;

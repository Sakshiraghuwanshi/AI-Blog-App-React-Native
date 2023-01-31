<Text style={styles.textStyle}> {item.name} </Text>;
// export const whiteb = '#f0f0f0';
// export const white= '#5956E9';
//#706EFD

import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import {Card} from 'react-native-shadow-cards';

const Home = (props) => {
  return (

<View style={{marginLeft:15,marginBottom:20}}>
  <Card style= {{elevation:10,height:330,borderRadius: 25 ,width:380 } } >
    <Text style={{fontSize:18,fontWeight:'bold',color:'purple',alignItems:'center' ,marginLeft:150}}>react native</Text>
  </Card>
  
</View>

  );
  
};
const styles=StyleSheet.create({
  
  
})


export default Home;

import { StyleSheet, Text, View, Image,ScrollView } from "react-native";
import React from "react";
import BlogPost from '../components/BlogPost'
import Header from '../components/Header';

const Home = (props) => {
  return (

<View style={styles.mainview}>
<Header title={'Home'} />
 <View style={{marginTop:15}}></View>

  < BlogPost/>

  
</View>

  );
  
};

const styles=StyleSheet.create({
  mainview:{
    flex:1,
   
    backgroundColor:"#f0f0f0",
  
  }
})

export default Home;

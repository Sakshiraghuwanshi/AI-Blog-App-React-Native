import { StyleSheet, Text, View, Image,ScrollView } from "react-native";
import React from "react";
import BlogPost from '../components/BlogPost'
import Header from '../components/Header';
import Category from "../components/Category";
 

const Home = (props) => {
  return (

<View style={styles.mainview}>
<Header title={'Home'} />
 <View style={{marginTop:15}}></View>
 <ScrollView>
 < Category />
 <View style={{marginBottom:8}}/>
  < BlogPost/>
  < BlogPost/>
  <BlogPost />
  <BlogPost />
  </ScrollView>

  
</View>

  );
  
};

const styles=StyleSheet.create({
  mainview:{
    flex:1,
   
    backgroundColor:"#F6EEE0",
  
  }
})

export default Home;


import { StyleSheet, View, Image, TouchableOpacity,ScrollView } from "react-native";
import React from "react";
import Header from '../components/Header';
import { Button, Card, Text } from 'react-native-paper';

const UserBlogs = (props) => {
  return (
    <View style={styles.mainview}>
    
      <ScrollView>
    <View style={{ marginLeft: 15, marginBottom:20}}>
      <Card style={{ elevation: 30, height: 310, borderRadius: 25, width: 380 ,flex:1}} >
        <Card.Cover source={require("../asset/lad.png")} />
        <Card.Title title="Ladakh Diaries" titleVariant="headlineSmall" titleNumberOfLines={1}  />
        <Card.Content>

          
         
        </Card.Content>
       
        <Card.Actions>
      <Button>Edit</Button>
      <Button>Delete</Button>
    </Card.Actions>


      </Card>

    </View>
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


export default UserBlogs;
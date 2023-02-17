
import { StyleSheet, View, Image, TouchableOpacity,ScrollView } from "react-native";
import React from "react";
import { Button, Card, Text } from 'react-native-paper';

const UserBlogs = (props) => {
  return (
    <View style={styles.mainview}>
    
      <ScrollView>
        <View style={{marginBottom:15}}/>
    <View style={{ marginLeft: 15, marginBottom:20}}>
      <Card style={{ elevation: 30, height: 360, borderRadius: 25, width: 380 ,flex:1}} >
        <Card.Cover source={require("../asset/lad.png")} />
        <Card.Title title="Ladakh Diaries" titleVariant="headlineSmall" titleNumberOfLines={1} titleStyle={{color:'purple',fontWeight:'bold'}}  />
        <Card.Content>
        <Text variant="bodyMedium" style={{color:'black',fontWeight:'400'}}>The Ultimate Leh Ladakh Travel Guide – Explore the Unforgettable Land of High Passes!</Text>

         <View style={{marginBottom:10}}/>
        </Card.Content>
       
        <Card.Actions>
          
      <Button
        onPress={() => props.navigation.navigate('Login')}>Edit</Button>
      <Button
        onPress={() => props.navigation.navigate('Login')}>Delete</Button>
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
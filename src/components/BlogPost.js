
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import React from "react";

import { Button, Card, Text } from 'react-native-paper';
const BlogPost = (props) => {
  return (

    <View style={{ marginLeft: 15, marginBottom: 20 }}>
      <Card style={{ elevation: 30, height: 330, borderRadius: 25, width: 380 ,flex:1}} >
        <Card.Cover source={require("../asset/lad.png")} />
        <Card.Title title="Ladakh Diaries" titleVariant="headlineSmall" titleNumberOfLines={1}  />
        <Card.Content>

          <Text variant="bodyMedium">If you’re looking for something extraordinary, Ladakh is your answer! The fascinating Pangong..</Text>
         
        </Card.Content>
       
        <TouchableOpacity>
          <Button style={{marginLeft:260}}>Read More</Button>
        </TouchableOpacity>


      </Card>

    </View>

  );

};
const styles = StyleSheet.create({


})


export default BlogPost;
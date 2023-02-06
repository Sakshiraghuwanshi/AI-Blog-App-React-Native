
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import React from "react";

import { Button, Card, Text } from 'react-native-paper';
const BlogPost = ({post , navigation}) => {
  return (

    <View style={{ marginLeft: 15, marginBottom: 20 }}>
      <Card style={{ elevation: 30, height: 330, borderRadius: 25, width: 380 ,flex:1}} >
        <Card.Cover source={post.thumbnail ? {
          uri : post.thumbnail
        } : require("../asset/lad.png")} />
        <Card.Title title={post?.title} titleVariant="headlineSmall" titleNumberOfLines={1}  />
        <Card.Content>

          <Text variant="bodyMedium">{post?.meta}</Text>
          <View style={{margin:5}}/>
          <Text variant="bodyMedium"> Author :- {post?.author?.name}</Text>
         
        </Card.Content>
       
       
          <Text style={{marginLeft:285,marginTop:-20,color:'purple',fontWeight:'bold'}}>Read More</Text>
      


      </Card>

    </View>

  );

};
const styles = StyleSheet.create({


})


export default BlogPost;
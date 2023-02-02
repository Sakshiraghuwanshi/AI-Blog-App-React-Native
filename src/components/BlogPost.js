
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import React from "react";

import { Button, Card, Text } from 'react-native-paper';
const BlogPost = ({post}) => {
  return (

    <View style={{ marginLeft: 15, marginBottom: 20 }}>
      <Card style={{ elevation: 30, height: 330, borderRadius: 25, width: 380 ,flex:1}} >
        <Card.Cover source={require("../asset/lad.png")} />
        <Card.Title title={post?.title} titleVariant="headlineSmall" titleNumberOfLines={1}  />
        <Card.Content>

          <Text variant="bodyMedium">{post?.meta}</Text>
          <Text variant="bodyMedium"> Author :- {post?.author?.name}</Text>
         
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
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import BlogPost from '../components/BlogPost'
import Header from '../components/Header';
import Category from "../components/Category";
import axios from "axios";


const Home = (props) => {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await axios.get(`http://10.0.2.2:2800/api/post/posts`);
        setPosts(res?.data?.posts);
        console.log(res?.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchBlog();
  }, []);

  return (

    <View style={styles.mainview}>
      <Header title={'Home'} />
      <View style={{ marginTop: 15 }}></View>
      <ScrollView>
        < Category />
        <View style={{ marginBottom: 8 }} />

        {
          posts.map((post) => {
            return (
              <TouchableOpacity onPress={() => props.navigation.navigate('AI')}>
                < BlogPost post={post} />
              </TouchableOpacity>
            )
          })
        }
        {/* < BlogPost/> */}
      </ScrollView>


    </View>

  );

};

const styles = StyleSheet.create({
  mainview: {
    flex: 1,

    backgroundColor: "#F6EEE0",

  }
})

export default Home;

import react from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView,Image } from 'react-native';
import Header from '../components/Header';
import Dropdown from '../components/Dropdown';

const WriteBlog = (props) => {
  return (


    <View style={styles.mainview}>
      <Header title={'WriteBlogs'} />
      <ScrollView>
     <View style={{marginTop:20}}>
      <Text style={{marginLeft:60,color:'purple',fontFamily:'cursive',fontWeight:'700',fontSize:30,}}>Start Writing Your Blogs</Text>
     </View>
     
        <View style={{marginBottom:10}}/>
        <View>
          <TextInput
           editable
           multiline
           numberOfLines={4}
           maxLength={290}
            style={styles.title}
            placeholderTextColor='purple' placeholder="Enter Title" ></TextInput>
        </View>
        <View>
          <TextInput
           editable
           multiline
           numberOfLines={4}
           maxLength={290}
            style={styles.title}
            placeholderTextColor='purple' placeholder="Enter Short Description" ></TextInput>
        </View>
        <View>
          <TextInput
           editable
           multiline
           numberOfLines={7}
           maxLength={290}
            style={styles.tags}
            placeholderTextColor='purple' placeholder="Tags" ></TextInput>
        </View>
        <View style={{marginBottom:-89}}/>
        <Dropdown/>
        <View style={{marginBottom:10}}/>
        <View>
          <TextInput
           editable
           multiline
           numberOfLines={80}
           maxLength={590}
            style={styles.content} 
            placeholderTextColor='purple' placeholder="Write Blog here...." ></TextInput>
        </View>


      </ScrollView>
    </View>


  );
};
const styles = StyleSheet.create({
  mainview: {
    flex: 1,
    backgroundColor: "#F6EEE0",

  },
  title: {
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingBottom:10,
    width: 390,
    height:60,
    backgroundColor: 'white',
    marginVertical: 10,
    marginLeft:10,
    elevation:20,
    
  },
  tags: {
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingBottom:10,
    width: 390,
    height:60,
    backgroundColor: 'white',
    marginVertical: 10,
    marginLeft:10,
    elevation:20,
  },
  content: {
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingBottom:155,
    width: 390,
    height:200,
    backgroundColor: 'white',
    marginVertical: 10,
    marginLeft:10,
    elevation:20,
  }
})

export default WriteBlog;
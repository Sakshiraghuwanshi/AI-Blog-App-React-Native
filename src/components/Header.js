import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React from 'react';

const Header = ({title, icon}) => {
  return (
    <View style={styles.header}>
     

      <Text style={[styles.title, {marginLeft: 10}]}>{title}</Text>
      
    </View>
  );
};
export default Header;
const styles = StyleSheet.create({
  header: {
    height: 80,
    width: '100%',
    flexDirection: 'row',
    backgroundColor: '#c59fc5',
    elevation: 10 ,
    alignItems: 'center',
    paddingLeft: 20,
   
    
   
  },
  title:{
    fontSize:32,
    fontFamily:'cursive',
    color: 'black',
    fontWeight: '900'
  }
 
});
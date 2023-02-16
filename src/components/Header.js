import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

const Header = ({ title, icon }) => {
  return (
    <LinearGradient colors={['#c59fc5', '#DA70D6']}>
    <View style={styles.header}>
     
   <TouchableOpacity>
   <Image
            source={require('../asset/harr.png')}
            style={{width: 20, height: 20,marginLeft:-12}}
          />
   </TouchableOpacity>
    
      <Text style={[styles.title, { marginLeft: 10 }]}>{title}</Text>

    </View>
    </LinearGradient>
  );
};
export default Header;
const styles = StyleSheet.create({
  header: {
    height: 80,
    width: '100%',
    flexDirection: 'row',
    elevation: 20,
    alignItems: 'center',
    paddingLeft: 20,



  },
  title: {
    fontSize: 32,
    fontFamily: 'cursive',
    color: 'black',
    fontWeight: '900',
    paddingLeft:4
  }

});
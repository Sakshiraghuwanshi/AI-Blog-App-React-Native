import React from 'react';
import {View, ImageBackground,ScrollView} from 'react-native';

const Background = ({ children }) => {
  return (
    <View>
      
      <ImageBackground source={require("../asset/Login7.png")} style={{ height: '100%' }} />
   
      <View style={{ position: "absolute" }}>
        {children}
      </View>
      
    </View>
  );
}

export default Background;


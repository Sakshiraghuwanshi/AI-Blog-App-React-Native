
import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity, Press } from 'react-native';
import Background from '../components/Background';
import Btn from '../Btn';



const Splash = (props) => {
  return (
    <Background>
      <View style={{ marginHorizontal: 40, marginVertical: 100, marginTop: 60 }}>
        <Text style={{ color: 'white', fontSize: 60, fontFamily: "cursive" }}>AI Blog</Text>
        <Text style={{ color: 'white', fontSize: 60, marginBottom: 40, fontFamily: "cursive", marginBottom: -20 }}>APP</Text>

        <View>
          <Image source={require("../asset/Saly-21.png")} style={{ marginLeft: 16 }} />

          <View style={{ marginBottom: 40 }}></View>

          <View>
            <TouchableOpacity
              onPress={() =>  props.navigation.navigate("Splash1") }
              style={{
                backgroundColor: '#f0f0f0',
                borderRadius: 10,
                alignItems: 'center',
                width: 314,
                height : 50,
                paddingVertical: 10,
                marginVertical: 20,
                marginLeft: 10,
              }}>
              <Text style={{ color: '#5956E9', fontSize: 20, fontWeight: 'bold'  }}>Get Started</Text>
            </TouchableOpacity>
          </View>
        </View>

      </View>



    </Background>
  );
}

const styles = StyleSheet.create({})

export default Splash;

           
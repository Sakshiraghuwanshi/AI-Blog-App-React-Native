import React from 'react';
import { View, Text, Touchable, TouchableOpacity, Button, TextInput } from 'react-native';
import Background from '../components/Background';
import Btn from '../Btn';
import Field from '../Field';

const Login = (props) => {
  return (
    <Background>
      <View style={{ alignItems: 'center', width: 440 }}>
        <Text
          style={{
            color: 'white',
            fontSize: 55,
            fontWeight: 'bold',
            marginVertical: 15,
          }}>
          Forgot Password?
        </Text>
        <View
          style={{
            backgroundColor: '#f0f0f0',
            height: 700,
            width: 440,
            borderTopLeftRadius: 140,
            paddingTop: 50,
            alignItems: 'center',
          }}>
          <Text style={{ fontSize: 50, color: '#5956E9', fontWeight: 'bold', fontFamily: "cursive" }}>
            Reset
          </Text>
          <Text
            style={{
              color: '#5956E9',
              fontSize: 50,
              fontWeight: 'bold',
              marginBottom: 40,
              fontFamily: "cursive",
            }}>
            Password?
          </Text>
          <View style={{ marginBottom: 10 }}>
            <Text style={{ fontSize: 14, fontWeight: "400" }}>Please, enter your email address. </Text>
            <Text style={{ fontSize: 14, fontWeight: "400" }}>You will receive a link to create a new password via email.</Text>
          </View>

          <TextInput
            style={{ borderRadius: 100, color: 'black', paddingHorizontal: 20, width: '78%', backgroundColor: '#c5d5c5', marginVertical: 10 }}
            placeholderTextColor='grey' placeholder="Email" keyboardType="email-address" ></TextInput>

          <View style={{ marginBottom: 10 }}>

          </View>
          <Btn textColor='#f0f0f0' bgColor='#706EFD' btnLabel="Send" Press={() => alert("Link Sent")} />





        </View>


      </View>


    </Background>
  );
};

export default Login;
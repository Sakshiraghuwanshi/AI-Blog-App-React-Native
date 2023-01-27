import React from 'react';
import { View, Text, Touchable, TouchableOpacity, TextInput } from 'react-native';
import Background from '../components/Background';
import Btn from '../Btn';


const Signup = props => {
  return (
    <Background>
      <View style={{ alignItems: 'center', width: 460 }}>
        <Text
          style={{
            color: 'white',
            fontSize: 55,
            fontWeight: 'bold',
            marginTop: 10,
          }}>
          Register
        </Text>
        <Text
          style={{
            color: 'white',
            fontSize: 17,
            fontWeight: 'bold',
            marginBottom: 17,
          }}>
          Create a new account
        </Text>

        <View
          style={{
            backgroundColor: '#f0f0f0',
            height: 700,
            width: 460,
            borderTopLeftRadius: 160,
            paddingTop: 25,
            alignItems: 'center',
            marginRight: 35
          }}>
          <Text
            style={{
              color: '#5956E9',
              fontSize: 40,
              fontWeight: 'bold',
              marginBottom: 1,
              fontFamily: "cursive",
            }}>
            New User?
          </Text>
          <Text
            style={{
              color: '#706EFD',
              fontSize: 30,
              fontWeight: 'bold',
              marginBottom: 15,
              fontFamily: "cursive",
            }}>
            Register
          </Text>
          <TextInput
            style={{ borderRadius: 100, color: 'black', paddingHorizontal: 20, width: '78%', backgroundColor: '#c5d5c5', marginVertical: 10 }}
            placeholderTextColor='grey' placeholder="Name" ></TextInput>

          <TextInput
            style={{ borderRadius: 100, color: 'black', paddingHorizontal: 20, width: '78%', backgroundColor: '#c5d5c5', marginVertical: 10 }}
            placeholderTextColor='grey' placeholder="Email" keyboardType="email-address" ></TextInput>

          <TextInput
            style={{ borderRadius: 100, color: 'black', paddingHorizontal: 20, width: '78%', backgroundColor: '#c5d5c5', marginVertical: 10 }}
            placeholderTextColor='grey' placeholder="Create Password" ></TextInput>

          <TextInput
            style={{ borderRadius: 100, color: 'black', paddingHorizontal: 20, width: '78%', backgroundColor: '#c5d5c5', marginVertical: 10 }}
            placeholderTextColor='grey' placeholder="Confirm Password" ></TextInput>
          <View style={{ marginBottom: 10 }}></View>

          <Btn
            textColor="#f0f0f0"
            bgColor='#5956E9'
            btnLabel="Signup"
            Press={() => {

              props.navigation.navigate('Login');
            }}
          />
          <View style={{ marginBottom: 1 }}></View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
              Already have an account ?{' '}
            </Text>
            <TouchableOpacity
               onPress={() => props.navigation.navigate('Login')}>
              <Text
                style={{ color: '#5956E9', fontWeight: 'bold', fontSize: 16 }}>
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Background>
  );
};

export default Signup;
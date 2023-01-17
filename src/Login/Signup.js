import React from 'react';
import {View, Text, Touchable, TouchableOpacity} from 'react-native';
import Background from '../Background';
import Btn from '../Btn';
import Field from '../Field';

const Signup = props => {
  return (
    <Background>
      <View style={{alignItems: 'center', width: 460}}>
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
            marginRight:35
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
          <Field placeholder="Name" />
          
          <Field
            placeholder="Email "
            keyboardType={'email-address'}
          />
        
          <Field placeholder="Create Password" secureTextEntry={true} />
          <Field placeholder="Confirm Password" secureTextEntry={true} />
          <View style ={{marginBottom: 10}}></View>
  
          <Btn
            textColor="#f0f0f0"
            bgColor='#5956E9'
            btnLabel="Signup"
            Press={() => {
              alert('Account created');
              props.navigation.navigate('Login');
            }}
          />
          <View style= {{marginBottom: 1}}></View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <Text style={{fontSize: 16, fontWeight: 'bold'}}>
              Already have an account ?{' '}
            </Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Login')}>
              <Text
                style={{color: '#5956E9', fontWeight: 'bold', fontSize: 16}}>
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
import React, { useState } from 'react';
import {View, Text, Touchable, TouchableOpacity,Button,TextInput, Alert, KeyboardAvoidingView,ScrollView} from 'react-native';
import Background from './Background';
import Btn from './Btn';
import { Formik } from 'formik';
import * as yup from 'yup';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const Login = (props) => {
 //const [Username, setUsername]= useState("");
 //const [Password, setPassword]= useState(""); 
 const loginValidationSchema = yup.object().shape({
  email: yup.string().email('Please enter valid email').required('Email Address id required'),
  password: yup.string().min(8, ({min}) =>`Password must be atleast ${min} characters` ).required('Password is required'),

  });
  
 return (
    
  <Formik
  initialValues={{ email: '', password: '' }}
  validationSchema = {loginValidationSchema}
  onSubmit={values => console.log(values)}
>
  {({ handleChange, handleBlur, handleSubmit, values, touched, isvalid, errors }) => (
  
    <Background>
     
      <View style={{alignItems: 'center', width: 440}}>
        <Text
          style={{
            color: 'white',
            fontSize: 62,
            fontWeight: 'bold',
            marginVertical: 15,
          }}>
          Login
        </Text>
        
        <View
          style={{
            backgroundColor: '#f0f0f0',
            height: 700,
            width: 440,
            borderTopLeftRadius: 140,
            paddingTop: 60,
            alignItems: 'center',
          }}>

        
          <Text style={{fontSize: 50, 
            color: '#5956E9', 
            fontWeight: 'bold',
             fontFamily: "cursive"}}>
            Welcome Back
          </Text>

          <Text
            style={{
              color: '#706EFD',
              fontSize: 25,
              fontWeight: 'bold',
              marginBottom: 20,
              fontFamily: "cursive",
            }}>
            Login to your account
          </Text>
          
    
         <TextInput  style={{
          borderRadius: 100,
           color: 'black', 
           paddingHorizontal: 20, 
           width: '78%',
           backgroundColor: '#c5d5c5', 
           marginVertical:10}}
      placeholderTextColor='grey' placeholder = 'Email' keyboard= "email-address"  onChangeText={handleChange('email')}
      onBlur={handleBlur('email')}
      value={values.email} ></TextInput>
 
    {(errors.email && touched.email) && 
    <Text style={{fontSize:14,color:'red', fontWeight:'bold', margintop:5}}>{errors.email}</Text>}


         <TextInput  style={{
          borderRadius: 100, 
          color: 'black', 
          paddingHorizontal: 20, 
          width: '78%',
           backgroundColor: '#c5d5c5',
            marginVertical:10}}
      placeholderTextColor='grey' placeholder = 'Password'  secureTextEntry={true}  onChangeText={handleChange('password')}
      onBlur={handleBlur('password')}
      value={values.password}></TextInput>

{(errors.password && touched.password) && 
        <Text style={{fontSize:14,color:'red', fontWeight:'bold', margintop:5}}>{errors.password}</Text>}

      
          <View
            style={{alignItems: 'flex-end', width: '78%', paddingRight: 16, marginBottom: 80}}>
            <TouchableOpacity onPress={() => props.navigation.navigate("ForgotPassword")}>
            <Text style={{color: '#5956E9', fontWeight: 'bold', fontSize: 16}}>
              Forgot Password ?
            </Text>
            </TouchableOpacity>

          </View>
          
          <Btn textColor='#f0f0f0' bgColor='#706EFD' btnLabel="Login" Press={() => alert("Logged In")}  />
          <View style={{ 
            display: 'flex', 
            flexDirection :'row', 
            justifyContent: "center" }}>
            <Text style={{
               fontSize: 16,
                fontWeight:"bold" }}>Don't have an account ? </Text>
            <TouchableOpacity onPress={() => props.navigation.navigate("Signup")}>
            <Text style={{ color: '#5956E9', fontWeight: 'bold', fontSize: 16 }}>Signup</Text>
            </TouchableOpacity>
            </View>
            

            
          </View>
  
      </View>
    
    </Background>
    
    )}
    </Formik>
  );
};

export default Login;
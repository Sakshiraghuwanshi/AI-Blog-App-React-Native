import React from 'react';
import {TextInput} from 'react-native';
import {darkGreen, white} from './Constants';

const Field = props => {
  return (
    <TextInput
      {...props}
      style={{borderRadius: 100, color: white, paddingHorizontal: 20, width: '78%', backgroundColor: '#c5d5c5', marginVertical:10}}
      placeholderTextColor='grey'></TextInput>
  );
};

export default Field;
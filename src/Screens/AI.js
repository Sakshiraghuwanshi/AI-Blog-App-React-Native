import react from 'react';
import { View, Text, StyleSheet, TextInput, Image,ScrollView } from 'react-native';
import Header from '../components/Header';

const AI = (props) => {
  return (
   
    <View style={styles.mainview}>
      <Header title={'AI'} />
      
      <View style={{ margin: 20 }} />

      <View style={styles.SectionStyle}>
        <Image
          source={require('../asset/ser3.png')}
          style={styles.ImageStyle}
        />
        <TextInput
          style={{ flex: 1 }}
          placeholder="Search Title"
          placeholderTextColor='purple'
        />
      </View>
      <View style={styles.SectionStyle}>
        <Image
          source={require('../asset/ser3.png')}
          style={styles.ImageStyle}
        />

        <TextInput
          style={{ flex: 1 }}
          placeholder="Search Blog"
          placeholderTextColor='purple'
        />
      </View>
     
    </View>










  );
};
const styles = StyleSheet.create({
  mainview: {
    flex: 1,
    backgroundColor: "#F6EEE0",

  },

  SectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    width: 390,
    height: 60,
    backgroundColor: 'white',
    marginVertical: 10,
    marginLeft: 10,
    elevation: 20,
    paddingHorizontal: 5,
  },
  ImageStyle: {
    padding: 10,
    margin: 5,
    height: 35,
    width: 35,
    resizeMode: 'stretch',
    alignItems: 'center',
  }

})

export default AI;
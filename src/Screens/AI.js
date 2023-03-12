import react, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Header from '../components/Header';

// import { Configuration, OpenAIApi }  from "openai";

//   const configuration = new Configuration({
//     apiKey : `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`,
//   });

// const openai = new OpenAIApi(configuration);

const AI = props => {
  // const [title, setTitle] = useState();
  // const [value, setValue] = useState();

  const handleTitle = async () => {};
  //   try {
  //     const res = await openai.createCompletion({
  //       model: "text-davinci-003",
  //       prompt: `Genrate 10+ blog titles on a topic ${title}`,
  //       temperature: 0.8,
  //       max_tokens: 200,
  //       top_p: 1,
  //       frequency_penalty: 0,
  //       presence_penalty: 0,
  //     });

  //     console.log(res);
  //     alert(res.data.choices[0].text);
  //     setValue(res.data.choices[0].text);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  return (
    <View style={styles.mainview}>
      <Header title={'AI'} />

      <View style={{margin: 20}} />

      <View style={styles.SectionStyle}>
        <Image
          source={require('../asset/ser3.png')}
          style={styles.ImageStyle}
        />
        <TextInput
          style={{flex: 1}}
          placeholder="Search Title"
          placeholderTextColor="purple"
          onChangeText={text => setTitle(text)}
        />
      </View>

      <TouchableOpacity
        onPress={handleTitle}
        style={{
          backgroundColor: '#800080',
          borderRadius: 20,
          alignItems: 'center',
          width: 150,
          height: 50,
          paddingVertical: 10,
          marginVertical: 20,
          marginLeft: 130,
        }}>
        <Text style={{color: 'white', fontSize: 20, fontWeight: '500'}}>
          Search Title{' '}
        </Text>
      </TouchableOpacity>

      <View style={styles.SectionStyle}>
        <Image
          source={require('../asset/ser3.png')}
          style={styles.ImageStyle}
        />

        <TextInput
          style={{flex: 1}}
          placeholder="Search Blog"
          placeholderTextColor="purple"
        />
      </View>
      <TouchableOpacity
        onPress={handleTitle}
        style={{
          backgroundColor: '#800080',
          borderRadius: 100,
          alignItems: 'center',
          width: 150,
          height: 50,
          paddingVertical: 10,
          marginVertical: 20,
          marginLeft: 130,
        }}>
        <Text style={{color: 'white', fontSize: 20, fontWeight: '500'}}>
          Search Blog{' '}
        </Text>
      </TouchableOpacity>

      {/* <View>
      {value}
     </View> */}
    </View>
  );
};
const styles = StyleSheet.create({
  mainview: {
    flex: 1,
    backgroundColor: '#F6EEE0',
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
  },
});

export default AI;

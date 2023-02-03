import react from 'react';
import { View ,Text,StyleSheet,TextInput} from 'react-native';
import Header from '../components/Header';

const AI = (props) => {
    return (
            
        <View style={styles.mainview}>
            <Header title={'AI'} />
            <View>
          <TextInput
           editable
           multiline
           numberOfLines={4}
           maxLength={290}
            style={styles.title}
            placeholderTextColor='purple' placeholder="Search Title" ></TextInput>
        </View>
        <View>
          <TextInput
           editable
           multiline
           numberOfLines={4}
           maxLength={290}
            style={styles.title}
            placeholderTextColor='purple' placeholder="Search Blogs" ></TextInput>
        </View>
               </View>










    );
};
const styles=StyleSheet.create({
    mainview:{
      flex:1,
     
      backgroundColor:"#F6EEE0",
    
    },
    
  })

export default AI;
import react from 'react';
import { View ,Text,StyleSheet} from 'react-native';
import Header from '../components/Header';

const WriteBlog = (props) => {
    return (
            
           
        <View style={styles.mainview}>
            <Header title={'WriteBlogs'} />
          
               </View>









    );
};
const styles=StyleSheet.create({
    mainview:{
      flex:1,
     
      backgroundColor:"#F6EEE0",
    
    }
  })

export default WriteBlog;
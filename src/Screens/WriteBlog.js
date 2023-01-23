import react from 'react';
import { View ,Text,StyleSheet} from 'react-native';
import Header from '../components/Header';

const WriteBlog = (props) => {
    return (
            
           
        <View style={styles.mainview}>
            <Header />
          <Text style={{fontSize:78}}>Blogs</Text>
               </View>









    );
};
const styles=StyleSheet.create({
    mainview:{
      flex:1,
     
      backgroundColor:"#f0f0f0",
    
    }
  })

export default WriteBlog;
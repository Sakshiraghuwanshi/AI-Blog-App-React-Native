import react from 'react';
import { View ,Text,StyleSheet} from 'react-native';
import Header from '../components/Header';

const Categories = (props) => {
    return (
            
           
        <View style={styles.mainview}>
            <Header />
          <Text style={{fontSize:78}}>Category</Text>
               </View>










    );
};
const styles=StyleSheet.create({
    mainview:{
      flex:1,
     
      backgroundColor:"#f0f0f0",
    
    }
  })

export default Categories;
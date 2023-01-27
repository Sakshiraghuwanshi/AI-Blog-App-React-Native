import react from 'react';
import { View ,Text,StyleSheet} from 'react-native';
import Header from '../components/Header';
import Category from '../components/Category';

const Categories = (props) => {
    return (
            
           
        <View style={styles.mainview}>
            <Header title={'Categories'} />
            <View style={{marginBottom:10}}></View>
        <Category/>
               </View>










    );
};
const styles=StyleSheet.create({
    mainview:{
      flex:1,
     
      backgroundColor:"#F6EEE0",
    
    }
  })

export default Categories;
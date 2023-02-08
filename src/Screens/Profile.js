import react from 'react';
import { View ,Text,StyleSheet,ScrollView} from 'react-native';
import Header from '../components/Header';
import UserAcc from '../components/UserAcc'
import UserBlogs from '../components/UserBlogs'

const Profile = (props) => {
    const {navigation} = props;
    return (
            
            
        <View style={styles.mainview}>
            <Header title={'Profile'} />
            <ScrollView>
       <UserAcc navigation={navigation} />
      
       </ScrollView>
               </View>









    );
};
const styles=StyleSheet.create({
    mainview:{
      flex:1,
     
      backgroundColor:"#F6EEE0",
    
    }
  })

export default Profile;
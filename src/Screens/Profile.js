import react from 'react';
import { View ,Text,StyleSheet} from 'react-native';
import Header from '../components/Header';
import UserAcc from '../components/UserAcc'

const Profile = (props) => {
    return (
            
            
        <View style={styles.mainview}>
            <Header title={'Profile'} />
        <UserAcc /> 
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
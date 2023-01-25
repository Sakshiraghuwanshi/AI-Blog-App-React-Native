import react from 'react';
import { View ,Text,StyleSheet} from 'react-native';
import Header from '../components/Header';

const Profile = (props) => {
    return (
            
            
        <View style={styles.mainview}>
            <Header title={'Profile'} />
          <Text style={{fontSize:78}}>Profile</Text>
               </View>









    );
};
const styles=StyleSheet.create({
    mainview:{
      flex:1,
     
      backgroundColor:"#f0f0f0",
    
    }
  })

export default Profile;
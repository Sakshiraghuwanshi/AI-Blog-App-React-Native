import react from 'react';
import { View ,Text,StyleSheet,ScrollView} from 'react-native';
import {  Button, Card } from 'react-native-paper';

const Profile = (props) => {
    const {navigation} = props;
    return (
            <ScrollView>
        <View style={styles.mainview}>
            <View style={{marginBottom:20}}/>
           
           <Card style={{height:800,width:390,marginLeft:10,elevation:10,borderRadius: 25,}}>
           <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
     <Card.Title title="Card Title"  />
     <Card.Content>
      <Text variant="titleLarge">Short Description</Text>
      <Text variant="bodyMedium">Card content</Text>
      <Card.Cover source={require("../asset/lad.png")} />
      <Text variant="bodyMedium">Card content</Text>
     
      


    </Card.Content>
    
   
  </Card>

               </View>






               </ScrollView>


    );
};
const styles=StyleSheet.create({
    mainview:{
      flex:1,
     
      backgroundColor:"#F6EEE0",
    
    }
  })

export default Profile;
import react from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Button, Card } from 'react-native-paper';

const Profile = (props) => {
  const { navigation } = props;
  return (
    <ScrollView>
      <View style={styles.mainview}>
        <View style={{ marginBottom: 20 }} />

        <Card style={{ height: 1150, width: 390, marginLeft: 10, elevation: 10, borderRadius: 25, }}>
          <Card.Cover source={require("../asset/lad.png")} />
          <Card.Title title="Ladakh Diaries" titleVariant="headlineSmall" titleNumberOfLines={1}  titleStyle={{color:'purple',fontWeight:'bold'}}/>
          <Card.Content>
            <Text variant="titleLarge" style={{color:'black',fontWeight:'700',fontFamily:'serif'}}>The Ultimate Leh Ladakh Travel Guide – Explore the Unforgettable Land of High Passes!</Text>
            <View style={{ marginBottom: 15 }} />

            <Text variant="bodyMedium" style={{color:'black',fontWeight:'400',}}>Julley from Leh! That means Hello in Ladakh and you’ll find that everyone here is itching to say it to you.
              Leh is the super friendly mountain city that is waiting for you to visit them.</Text>

            <View style={{ marginBottom: 20 }} />
           
            <Card.Cover source={require("../asset/ladakh.jpg")} />
            <View style={{ marginBottom: 20 }} />

            <Text variant="bodyMedium" style={{color:'black',fontWeight:'400',}}>Most people use Leh as a base in Ladakh as it’s the main city with good connections to Nubra Valley, Pangong Lake, and Srinagar in Kashmir.
              It is really gorgeous to explore too with an epic mountain range, historical palaces, and the iconic Shanti Stupa.
              You can’t really get bored, even just if you gaze at the scenery around you.</Text>
           
            <View style={{ marginBottom: 20 }} />
            <Card.Cover source={require("../asset/ladak.jpg")} />
            <View style={{ marginBottom: 20 }} />

            <Text variant="bodyMedium" style={{color:'black',fontWeight:'400',}}>This would probably be a good first point of call to start off your adventure in Leh. The ancient palace looks down on the rest of the city.
              This was the home of Ladakh royalty and was modelled on the Tibetan Potala Palace in Lhasa.
              Even though it was built in the 17th century and steeped in history, not many of the ancient artifacts of the royal family remain in the palace. 
            </Text>
            <View style={{ marginBottom: 20 }} />

            <Text variant="bodyMedium" style={{color:'purple',fontWeight:'bold',fontFamily:'cursive',fontSize:20}}> Author :- Sakshi Raghuwanshi</Text>


          </Card.Content>


        </Card>

      </View>






    </ScrollView>


  );
};
const styles = StyleSheet.create({
  mainview: {
    flex: 1,

    backgroundColor: "#F6EEE0",

  }
})

export default Profile;
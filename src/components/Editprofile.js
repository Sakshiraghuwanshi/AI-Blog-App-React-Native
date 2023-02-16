import react from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, Image, TouchableOpacity,} from 'react-native';



const Editprofile = (props) => {
  const { navigation } = props;
  return (

<ScrollView>
    <View style={styles.mainview}>
      <View style={{ marginBottom: 10 }} />
      <View style={{ alignSelf: "center" }}>
        <View style={styles.profileImage}>
          <Image source={require("../asset/profilep.jpg")} style={styles.image} resizeMode="center"></Image>
        </View>

        <TouchableOpacity>
          <View style={styles.add}>
            <Image source={require("../asset/userp.png")}></Image>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.infoContainer}>

        <Text style={[styles.text, { fontWeight: "500", fontSize: 19, color: 'purple', fontFamily: "serif" }]}>Marie@gmail.com</Text>
      </View>

      <View style={{ marginBottom: 20 }} />

      <Text style={{ marginLeft: 22, fontSize: 22, fontWeight: '500', color: 'purple' }}>Name</Text>
      <TextInput
        editable
        multiline
        numberOfLines={1}
        maxLength={50}
        style={styles.box}
        placeholderTextColor='black' placeholder="Edit Name" ></TextInput>
      <View style={{ marginBottom: 10 }} />
      <Text style={{ marginLeft: 22, fontSize: 22, fontWeight: '500', color: 'purple' }}>Bio</Text>
      <TextInput
        editable
        multiline
        numberOfLines={7}
        maxLength={290}
        style={styles.box}
        placeholderTextColor='black' placeholder="Edit Bio" ></TextInput>

      <View style={{ marginTop: 20 }}>
        <TouchableOpacity

          style={{
            backgroundColor: '#800080',
            borderRadius: 100,
            alignItems: 'center',
            width: 314,
            height: 50,
            paddingVertical: 10,
            marginVertical: 20,
            marginLeft: 50,

          }}>
            
          <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>Save Changes</Text>
        </TouchableOpacity>
      </View>

    </View>

    </ScrollView>












  );
};
const styles = StyleSheet.create({
  mainview: {
    flex: 1,
    backgroundColor: "#F6EEE0",

  },
  box: {
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingBottom: 10,
    width: 380,
    height: 60,
    backgroundColor: 'white',
    marginVertical: 10,
    marginLeft: 17,
    elevation: 20,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 100,
    overflow: "hidden",
    marginTop: 30,
    borderWidth: 3,
    borderColor: '#c59fc5',
  },
  image: {
    flex: 1,
    height: undefined,
    width: undefined
  },

  add: {
    backgroundColor: "#f0f0f0",
    position: "absolute",
    bottom: 0,
    right: 0,
    width: 40,
    height: 40,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center"
  },
  infoContainer: {
    alignSelf: "center",
    alignItems: "center",
    marginTop: 10
  },
})

export default Editprofile;
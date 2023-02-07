import react from 'react';
import { View, Text, StyleSheet, TextInput, Image } from 'react-native';
import Header from '../components/Header';

const Searchbar = (props) => {
    return (

        <View style={styles.mainview}>
            <TextInput
                style={styles.box}
                placeholderTextColor='grey' placeholder="Search"  ></TextInput>


        </View>










    );
};
const styles = StyleSheet.create({
    mainview: {
        flex: 1,
        marginLeft: 140,
        alignItems: 'center',



    },

    box: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: 0.6,
        borderColor: '#000',
        height: 35,
        borderRadius: 100,
        margin: 20,
        width: 130,
        padding: 10,
        elevation: 5,




    },

    ImageStyle: {
        padding: 10,
        margin: -1,
        height: 25,
        width: 25,

    }
})

export default Searchbar;
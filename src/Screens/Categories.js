import react from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import Header from '../components/Header';


const Categories = (props) => {
    const names = [
        {
            index: "1",
            name: "Travel",
        },
        {
            index: "2",
            name: "Art & craft",
        },
        {
            index: "3",
            name: "Technology",
        },
        {
            index: "4",
            name: "Lifestyle ",
        },
        {
            index: "5",
            name: "Sports ",
        },
        {
            index: "6",
            name: "Music ",
        },
        {
            index: "7",
            name: "Religion ",
        },
    ];
    return (


        <View style={styles.mainview}>
            <Header title={'Categories'} />
            <View style={{ marginBottom: 20 }}></View>
            <View style={{ flex: 1 }}>

                <FlatList
                    keyExtractor={(key) => {
                        return key.index;
                    }}
                    data={names}
                    renderItem={({ item }) => {
                        console.log(item.name);
                        return (
                          
                            <TouchableOpacity  
                            style={styles.categorybox}>
                                <Text style={styles.textStyle}> {item.name} </Text>
                               
                            </TouchableOpacity>
                           
                        );
                    }}
                />

            </View>
        </View>


    );
};
const styles = StyleSheet.create({
    mainview: {
        flex: 1,
        backgroundColor: "#F6EEE0",

    },
    textStyle: {
        fontSize: 25,
        color: 'purple',
        fontWeight: '700',
        fontFamily: "serif",
        textShadowRadius: 10,

    },

    categorybox: {
        marginBottom: 10,
        width: 390,
        height: 150,
        borderRadius: 30,
        marginLeft: 10,
        marginRight: 8,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "white",
        elevation: 20,
        margin: 2,
        borderWidth: 3,
        borderColor: "#c59fc5",
    },

})

export default Categories;
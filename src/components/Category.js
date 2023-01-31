
import React from "react";
import { StyleSheet, FlatList, Text, TouchableOpacity ,View,Image,OnPress,ScrollView} from "react-native";




const Category = () => {
    const names = [
        {
            index: "1",
            name: "Travel ",
        },
        {
            index: "2",
            name: "Technology ",
        },
        {
            index: "3",
            name: "Food ",
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
        <View style={{flex:1}}>

        <FlatList 
            keyExtractor={(key) => {
                return key.index;
            }}
           horizontal
           showsHorizontalScrollIndicator={false}
           

            data={names}
            renderItem={({ item }) => {
                console.log(item.name);
                return (
                  
                    <TouchableOpacity style={styles.categorybox}
                  >
                        <Text style={styles.textStyle}> {item.name} </Text>
                    </TouchableOpacity>
                );
            }}
        />
       
    </View>
    );
      
};


const styles = StyleSheet.create({
    textStyle: {
        fontSize: 20,
        color: 'black',
        fontWeight:'490',
      
    },

    categorybox: {
        marginBottom: 10,
        width: 120,
        height: 40,
        borderRadius: 20,
        marginLeft: 8,
        marginRight: 8,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#f0f0f0",
        elevation:10,   
        margin:1,
    },
    

});

export default Category;
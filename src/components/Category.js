import React from "react";
import { StyleSheet, FlatList, Text, TouchableOpacity ,Image,OnPress} from "react-native";




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
    
    );
      
};


const styles = StyleSheet.create({
    textStyle: {
        fontSize: 20,
        color: 'black',
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
        backgroundColor: "#87CEFA"
    },
    

});

export default Category;
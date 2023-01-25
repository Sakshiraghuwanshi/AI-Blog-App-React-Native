import React from "react";
import { StyleSheet, FlatList, Text, TouchableOpacity ,Image} from "react-native";


const Category = () => {
    const names = [
        {
            index: "1",
            name: "Travel Blogs",
        },
        {
            index: "2",
            name: "Technology Blogs",
        },
        {
            index: "3",
            name: "Food Blogs",
        },
        {
            index: "4",
            name: "Lifestyle Blogs",
        },
        {
            index: "5",
            name: "Sports Blogs",
        },
        {
            index: "6",
            name: "Music Blogs",
        },
        {
            index: "7",
            name: "Religion Blogs",
        },
    ];
    return (
        <FlatList
            keyExtractor={(key) => {
                return key.index;
            }}

            data={names}
            renderItem={({ item }) => {
                console.log(item.name);
                return (
                    <TouchableOpacity style={styles.categorybox}>
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
        width: 390,
        height: 140,
        borderRadius: 10,
        marginLeft: 10,
        marginRight: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#87CEFA"
    },
    

});

export default Category;
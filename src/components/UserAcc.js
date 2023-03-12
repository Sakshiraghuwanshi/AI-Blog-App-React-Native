

import React from "react";
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, press } from "react-native";





const UserAcc = (props) => {

    return (

        <ScrollView>


            <View style={{ alignSelf: "center" }}>
                <View style={styles.profileImage}>
                    <Image source={require("../asset/profilep.jpg")} style={styles.image} resizeMode="center"></Image>
                </View>

            </View>

            <View style={styles.infoContainer}>
                <Text style={[styles.text, { fontWeight: "300", fontSize: 34, color: 'black', fontFamily: "serif", marginBottom: 5 }]}>Marie</Text>
                <Text style={[styles.text, { fontWeight: "200", fontSize: 17, color: 'black', fontFamily: "serif" }]}>Hey,I'm marie from LA.I like to Blog.</Text>
            </View>
            <View>
                <TouchableOpacity
                    onPress={() => props.navigation.navigate('UserBlogs')}
                    style={styles.btn}>
                    <Text style={{ color: 'purple', fontSize: 22, fontWeight: '700', textShadowRadius: 5, }}>Blogs</Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity
                    onPress={() => props.navigation.navigate('Editprofile')}
                    style={styles.btn}>
                    <Text style={{ color: 'purple', fontSize: 22, fontWeight: '700', textShadowRadius: 5, }}>Edit Profile</Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity
                    onPress={() => props.navigation.navigate('Readmore')}
                    style={styles.btn}>
                    <Text style={{ color: 'purple', fontSize: 22, fontWeight: '700', textShadowRadius: 5, }}>Logout</Text>
                </TouchableOpacity>

            </View>
        </ScrollView>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF"
    },
    text: {
        fontFamily: "HelveticaNeue",
        color: "Black"
    },
    image: {
        flex: 1,
        height: undefined,
        width: undefined
    },
    titleBar: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 24,
        marginHorizontal: 16
    },
    subText: {
        fontSize: 12,
        color: "black",
        textTransform: "uppercase",
        fontWeight: "500"
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

    infoContainer: {
        alignSelf: "center",
        alignItems: "center",
        marginTop: 10
    },
    btn: {
        backgroundColor: 'white',
        borderRadius: 10,
        alignItems: 'center',
        width: 370,
        height: 60,
        paddingVertical: 15,
        marginBottom: -8,
        marginTop: 30,
        marginLeft: 21,
        elevation: 30



    }




});

export default UserAcc;
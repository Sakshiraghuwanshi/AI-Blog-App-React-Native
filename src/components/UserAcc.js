import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';



const UserAcc = () => {
    return (
        
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.titleBar}>
                   
                </View>

                <View style={{ alignSelf: "center" }}>
                    <View style={styles.profileImage}>
                    <Image source={require("../asset/profilep.jpg")} style={styles.image} resizeMode="center"></Image>
                    </View>
                    
                   
                    <View style={styles.add}>
                    <Image source={require("../asset/userp.png")}></Image>
                    </View>
                </View>

                <View style={styles.infoContainer}>
                    <Text style={[styles.text, { fontWeight: "300", fontSize: 36,color:'black' }]}>Piyu</Text>
                    <Text style={[styles.text, { color: "#AEB5BC", fontSize: 14 }]}>Blogger</Text>
                </View>

                <View style={styles.statsContainer}>
                    <View style={styles.statsBox}>
                        <Text style={[styles.text, { fontSize: 24 }]}>1</Text>
                        <Text style={[styles.text, styles.subText]}>Posts</Text>
                    </View>
                    <View style={[styles.statsBox, { borderColor: "#DFD8C8", borderLeftWidth: 1, borderRightWidth: 1 }]}>
                        <Text style={[styles.text, { fontSize: 24 }]}>4</Text>
                        <Text style={[styles.text, styles.subText]}>Saved</Text>
                    </View>
                   
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
        color: "#52575D"
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
        color: "#AEB5BC",
        textTransform: "uppercase",
        fontWeight: "500"
    },
    profileImage: {
        width: 150,
        height: 150,
        borderRadius: 100,
        overflow: "hidden"
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
        marginTop: 16
    },
    statsContainer: {
        flexDirection: "row",
        alignSelf: "center",
        marginTop: 32
    },
    statsBox: {
        alignItems: "center",
        flex: 1
    },
    
   
   
   
});

export default UserAcc;
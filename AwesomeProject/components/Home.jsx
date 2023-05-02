import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { Entypo } from "@expo/vector-icons"


const Home = ({ navigation }) => {

    const goToListCategory = () => {
        navigation.navigate("CategoryList")
    }

    const gotoAddCategory = () => {
        navigation.navigate("AddCategory")
    }

    return (
        <View style={styles.mainView}>
            <TouchableOpacity onPress={() => goToListCategory()}>
               <View style={styles.viewStyle}>
                    <Entypo style={styles.listIcon} name="list" />
                    <Text style={styles.textStyle}>Show all restorants</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => gotoAddCategory()}>
                <View style={styles.viewStyle}>
                    <Entypo style={styles.listIcon} name="plus" />
                    <Text style={styles.textStyle}>Add new restorant</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    viewStyle: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 15,
        flexDirection: "row",
        backgroundColor:"#D5D5D5",
        width:300,
        height:50,
        borderRadius:10,
        marginHorizontal:10
        
    },
    textStyle: {
        fontSize: 23,
        color:"black",
    },
    listIcon: {
        fontSize: 20,
        marginRight: 5,
        color:"black"
    }
});
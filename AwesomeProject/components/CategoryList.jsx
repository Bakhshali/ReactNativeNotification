import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Entypo } from "@expo/vector-icons"
import { SafeAreaView } from 'react-native-safe-area-context'



const CategoryList = ({ navigation }) => {

    const [category, setCategories] = useState([]);

    useEffect(() => {
        axios.get("https://64510ccbe1f6f1bb22a68825.mockapi.io/palaces")
            .then(resp => {
                console.log(resp.data);
                setCategories(resp.data)
            })
    }, [])


    const goToDetail = (id) => {
        navigation.navigate("CategoryDetail", { id: id })
    }

    const renderItem = ({ item }) => {
        return <TouchableOpacity onPress={() => goToDetail(item.id)}>
            <View style={styles.mainView}>
                <Entypo style={styles.iconView} name="info" />
                <Text style={styles.textView}>{item.name}</Text>
            </View>
        </TouchableOpacity>
    }

    return (
        <View>
            <FlatList
                data={category}
                renderItem={renderItem}
            />
        </View>
    )
}

const styles = StyleSheet.create({

    mainView: {
        marginTop: 15,
        flexDirection: "row",
        backgroundColor: "#D5D5D5",
        width: 200,
        height: 55,
        borderRadius: 10,
        marginHorizontal: 10
    },

    textView: {
        fontSize: 18,
        marginHorizontal: 10,
        marginTop: 15
    },

    iconView: {
        fontSize: 16,
        color: "#4299DB",
        marginLeft: 10,
        marginTop: 17
    }

})

export default CategoryList
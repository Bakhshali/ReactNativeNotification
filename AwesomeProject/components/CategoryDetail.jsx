import { View, Text ,StyleSheet} from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from "axios"

const CategoryDetail = ({ route }) => {

  const [detail, setDetail] = useState()

  const { id } = route.params

  useEffect(() => {
    axios.get(`https://64510ccbe1f6f1bb22a68825.mockapi.io/palaces/${id}`)
      .then(resp => {
        setDetail(resp.data)
      })
  }, [])

  return (
    <View style={styles.mainView}>
      <Text style={{fontWeight:700,fontSize:35}}>{detail?.name}</Text>
      <Text style={styles.textView}>Address: {detail?.address}</Text>
      <Text style={styles.textView}>Price: {detail?.price}$</Text>
    </View>
  )
}


const styles = StyleSheet.create({
  textView: {
    fontSize:20,
    marginTop:7
  },
  mainView:{
    marginHorizontal:16,
    marginTop:10
  }
})

export default CategoryDetail
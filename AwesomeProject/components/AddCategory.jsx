import { View, Text, SafeAreaView ,Button,TextInput,StyleSheet} from 'react-native'
import React from 'react'
import { useForm, Controller } from "react-hook-form";
import axios from "axios"

const AddCategory = () => {

  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      name: '',
      address: '',
      price: ''
    }
  });

  const addCategory = (values) => {
    let newPalace = {
      name: values.name,
      address: values.address,
      price: values.price
    }

    axios.post('https://64510ccbe1f6f1bb22a68825.mockapi.io/palaces', newPalace)
      .then(resp => {
        console.log(resp.data)
      })
      .catch(error => {
        console.log(error);
      })
  }

  return (
    <SafeAreaView>
      <Controller
        control={control}
        rules={{
          required: true
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="Name"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="name"
      />
      {errors.name && <Text style={{ color: 'tomato' }}>This is required.</Text>}
      <Controller
        control={control}
        rules={{
          required: true
        }}

        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="Address"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="address"
      />
      {errors.address && <Text style={{ color: 'tomato' }}>This is required.</Text>}
      <Controller
        control={control}
        rules={{
          required: true
        }}

        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="Price"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="price"
      />
      {errors.price && <Text style={{ color: 'tomato' }}>This is required.</Text>}

      {errors.price && <Text style={{ color: 'tomato' }}>This is required.</Text>}
      <Button title="Create" onPress={handleSubmit(addCategory)} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
  },
});


export default AddCategory
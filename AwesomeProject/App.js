import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './components/Home'
import CategoryList from './components/CategoryList'
import CategoryDetail from './components/CategoryDetail'
import AddCategory from './components/AddCategory'

const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home}></Stack.Screen>
          <Stack.Screen name="CategoryList" component={CategoryList}></Stack.Screen>
          <Stack.Screen name="CategoryDetail" component={CategoryDetail}></Stack.Screen>
          <Stack.Screen name="AddCategory" component={AddCategory}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  )
}



export default App
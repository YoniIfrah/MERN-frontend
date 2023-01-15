import {FC, useEffect, useState} from 'react';
import { StyleSheet, Image, View, TouchableOpacity, Text, Button } from 'react-native';
import Constants from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import imgs from './ImgBundler';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import StudentList from './StudentsList';
import OS from './OS_Adapter'

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator()


const HomeScreen: FC<{route:any, navigation: any }> = ({route, navigation}) => { 
  const [message, setMessage] = useState('non...')
  useEffect (() => {
    console.log('useEffect ' + route.params?.newPostId)
    if(route.params?.newPostId) setMessage(JSON.stringify(route.params.newPostId))
  },[route.params?.newPostId])

  return (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Home Screen</Text> 
    <Text>id: {message}</Text>

    <Button
      title="Go to Details... again"
      onPress={() => navigation.navigate('Details', {itemId:'12345' })}/>
  </View>
  ); 
}
const DetailsScreen:FC<{route:any, navigation: any }> = ({route, navigation}) => { 
  const itemId = JSON.stringify(route.params.itemId)
  const name = JSON.stringify(route.params.name)
  useEffect(() => {
    console.log('useeffects')
    navigation.setOptions({
      title: "my new title",
    })
  })
  return (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Details Screen</Text>
    <Text>id: {itemId}</Text>
    <Text>{name}</Text>

    <Button
      title="Go to Home... again"
      onPress={() => navigation.navigate('Home', {newPostId:'6666'})}/>
  </View>
  ); 
}
const HeaderTitle: FC = () =>{
  return(
    <TouchableOpacity onPress={() => {console.log('image press')}}>

    <Image
     style={{height:50, width:50}}
     source={imgs.ava}
     />
     </TouchableOpacity>


  )
}
const App: FC = () => { 
  return (
  <NavigationContainer>

      <Tab.Navigator screenOptions={({ route }) => ({ tabBarIcon: ({ focused, color, size }) => {
        let iconName ="";
        if (route.name === 'Home') {
        iconName = focused  ? 'information-circle': 'information-circle-outline';
        } else if (route.name === 'Details') {
        iconName = focused ? 'list-circle' : 'list-circle-outline';
        }
        // You can return any component that you like here!
        return <Ionicons name  = {iconName} size={size} color={color} />; 
      },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray', })}>
        <Tab.Screen name='Home' component={StudentList}/>
        <Tab.Screen name='Details' component={DetailsScreen} initialParams={{id:'123123'}}/>

     </Tab.Navigator>
  </NavigationContainer>
)
}


const styles = StyleSheet.create({
  container: {
    marginTop: OS.statusBar(),
    flex: 1,
    backgroundColor: 'grey'
  },
  row:{
    flexDirection: 'row',
    backgroundColor: 'blue',
  },
  brick:{
    flex:1,
    backgroundColor: 'white',
    margin: 5,
    aspectRatio: 1
  },
  button:{
    flex:1,
  },
  test: {
    flex:1,
    backgroundColor: 'red',
  },
  centerContainer:{
    flex:1,
    // backgroundColor: 'red',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%'
  },
  image:{
    // backgroundColor: 'blue',
    height:100,
    width:100,
  }
});

export default App
 
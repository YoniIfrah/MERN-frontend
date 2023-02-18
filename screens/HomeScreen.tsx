import { View, Text, Button, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState, FC, useContext} from 'react'
import OS from '../utils/OS_Adapter'
import { AuthContext } from '../context/AuthContext'
import Spinner from 'react-native-loading-spinner-overlay'
import StudentStackCp from '../components/StudentStackCp'
import ProfileScreen from './ProfileScreen'
import InfoScreen from './InfoScreen'
import Ionicons from '@expo/vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator()



const HomeScreen:FC<{route:any, navigation: any }> = ({route, navigation}) => { 
  // const {userInfo, logout, isLoading} = useContext(AuthContext)
  // console.log("home user info", userInfo)
  return (
    <Tab.Navigator screenOptions={({ route }) => ({ tabBarIcon: ({ focused, color, size }) => {
      let iconName ="";
      if (route.name === 'InfoScreen') {
      iconName = focused  ? 'information-circle': 'information-circle-outline';
      } else if (route.name === 'StudentStackCp') {
      iconName = focused ? 'list-circle' : 'list-circle-outline';
      } else if (route.name == 'Profile') {
        iconName = focused ? 'person' : 'person-outline';
      } else if (route.name == 'Chat') {
        iconName = focused ? 'chatbubbles' : 'chatbubbles-outline';
      }
      // You can return any component that you like here!
      return <Ionicons name={iconName} size={size} color={color} />;
    },
      tabBarActiveTintColor: 'tomato',
      tabBarInactiveTintColor: 'gray', })}>
      <Tab.Screen name='StudentStackCp' component={StudentStackCp} options={{headerShown:false}}/>
      <Tab.Screen name='InfoScreen' component={InfoScreen}/>
      {/* need to change the component below to be wth the HomeScreen button (logout)! */}
      <Tab.Screen name='Profile' component={ProfileScreen}/>
      <Tab.Screen name='Chat' component={InfoScreen}/>



   </Tab.Navigator>
  )
}
// 
const styles = StyleSheet.create({
  container: {
    marginTop: OS.statusBar(),
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue'
  },
})

export default HomeScreen

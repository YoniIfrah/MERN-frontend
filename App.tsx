import {FC, useCallback, useContext, useEffect, useState} from 'react';
import { StyleSheet, Image, View, TouchableOpacity, Text, Button, TouchableHighlight, ScrollView, TextInput, ActivityIndicator, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import imgs from './ImgBundler';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import StudentList from './components/StudentsList';
import OS from './utils/OS_Adapter'
import StudentDetails from './components/StudentDetails';
import StudentAdd from './components/StudentAdd';
import StudentStackCp from './components/StudentStackCp';


import * as Keychain from 'react-native-keychain';


import { AuthContext, AuthProvider } from './context/AuthContext';

import Navigation from './components/Navigation';
import ProfileScreen from './screens/ProfileScreen';



const Tab = createBottomTabNavigator()
// const StudentStack = createNativeStackNavigator()
const Stack = createNativeStackNavigator();



const InfoScreen:FC<{route:any, navigation: any }> = ({route, navigation}) => { 
  // const itemId = JSON.stringify(route.params.itemId)
  // const name = JSON.stringify(route.params.name)
  // useEffect(() => {
  //   console.log('useeffects')
  //   navigation.setOptions({
  //     title: "my new title",
  //   })
  // })
  return (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Info Screen</Text>
    {/* <Text>id: {itemId}</Text>
    <Text>{name}</Text> */}

    {/* <Button
      title="Go to Home... again"
      onPress={() => navigation.navigate('Home', {newPostId:'6666'})}/> */}
  </View>
  ); 
}

// const StudentStackCp:FC<{route:any, navigation: any }> = ({route, navigation}) =>{
//   const addNewStudents = () => {
//     navigation.navigate('StudentAdd')
//   }
//   return(
//     <StudentStack.Navigator>
//       <StudentStack.Screen name='StudentList' component={StudentList} options={{
//         headerRight: () => (
//         <TouchableHighlight onPress={addNewStudents}>
//         <Ionicons name={'add-outline'} size={40} color={'gray'} />
//         </TouchableHighlight > ),
//         }
//         }/>
//       <StudentStack.Screen name='StudentDetails' component={StudentDetails} />
//       <StudentStack.Screen name='StudentAdd' component={StudentAdd} />

//     </StudentStack.Navigator>
//   )
// }

// const App: FC = () => { 
//   return (
//   <NavigationContainer>

//       <Tab.Navigator screenOptions={({ route }) => ({ tabBarIcon: ({ focused, color, size }) => {
//         let iconName ="";
//         if (route.name === 'InfoScreen') {
//         iconName = focused  ? 'information-circle': 'information-circle-outline';
//         } else if (route.name === 'StudentStackCp') {
//         iconName = focused ? 'list-circle' : 'list-circle-outline';
//         } else if (route.name == 'Profile') {
//           iconName = focused ? 'person' : 'person-outline';
//         } else if (route.name == 'Chat') {
//           iconName = focused ? 'chatbubbles' : 'chatbubbles-outline';
//         }
//         // You can return any component that you like here!
//         return <Ionicons name={iconName} size={size} color={color} />;
//       },
//         tabBarActiveTintColor: 'tomato',
//         tabBarInactiveTintColor: 'gray', })}>
//         <Tab.Screen name='StudentStackCp' component={StudentStackCp} options={{headerShown:false}}/>
//         <Tab.Screen name='InfoScreen' component={InfoScreen}/>
//         {/* need to change the component below to be wth the HomeScreen button (logout)! */}
//         <Tab.Screen name='Profile' component={ProfileScreen}/>
//         <Tab.Screen name='Chat' component={InfoScreen}/>



//      </Tab.Navigator>
//   </NavigationContainer>
// )
// }

const App:FC = () => {
  return(
    <AuthProvider>
      <Navigation/>
    </AuthProvider>
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
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
},
});

export default App
 
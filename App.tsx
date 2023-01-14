import {FC, useState} from 'react';
import { StyleSheet, Image, View, StatusBar, Platform, TouchableOpacity, Text } from 'react-native';
import Constants from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
const statusBarHeightIOS = Constants.statusBarHeight;
const statusBarHeightAndroid = StatusBar.currentHeight;

const HomeScreen: FC = () => { return (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Home Screen</Text> 
  </View>
  ); 
}
const DetailsScreen: FC = () => { return (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Details Screen</Text> 
  </View>
  ); 
}

const App: FC = () => { 
  return (
  <NavigationContainer>
    <Stack.Navigator screenOptions={{ title: 'Apply to all' }}>
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="Details" component={DetailsScreen} />
     </Stack.Navigator>
  </NavigationContainer>
)
}

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS == 'android' ? statusBarHeightAndroid : statusBarHeightIOS,
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
 
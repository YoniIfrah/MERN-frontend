import {FC, useEffect, useState} from 'react';
import { StyleSheet, Image, View, TouchableOpacity, Text, Button } from 'react-native';
import OS from './OS_Adapter'


const StudentAdd:FC<{route:any, navigation: any }> = ({route, navigation}) => { 

    return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>student add</Text>
    </View>
    ); 
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
  
export default StudentAdd
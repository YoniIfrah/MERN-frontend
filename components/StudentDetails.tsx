import {FC, useEffect, useState} from 'react';
import { StyleSheet, Image, View, TouchableOpacity, Text, Button } from 'react-native';


const StudnetDetails:FC<{route:any, navigation: any }> = ({route, navigation}) => { 
    const studentId = JSON.stringify(route.params.studentId)
    // useEffect(() => {
    //   console.log('useeffects')
    //   navigation.setOptions({
    //     title: "my new title",
    //   })
    // })
    return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Text>{studentId}</Text>
  
      {/* <Button
        title="Go to Home... again"
        onPress={() => navigation.navigate('Home', {newPostId:'6666'})}/> */}
    </View>
    ); 
  }

export default StudnetDetails
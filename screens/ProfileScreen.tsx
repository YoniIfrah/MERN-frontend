import { View, Text, Button, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState, FC, useContext} from 'react'
import OS from '../utils/OS_Adapter'
import { AuthContext } from '../context/AuthContext'
import Spinner from 'react-native-loading-spinner-overlay'



const ProfileScreen:FC<{route:any, navigation: any }> = ({route, navigation}) => { 
  const {userInfo, logout, isLoading} = useContext(AuthContext)
  console.log("home user info", userInfo)
  return (
    <View style={styles.container}>
        <Spinner visible={isLoading} />
          <Text style={{color:'white'}}>HomeScreen</Text>
          <Button title='Logout' color='red' onPress={logout}></Button>
    </View>
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

export default ProfileScreen

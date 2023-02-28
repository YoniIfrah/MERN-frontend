import { View, Text, Button, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState, FC, useContext } from 'react'
import { TextInput } from 'react-native-gesture-handler'
import OS from '../utils/OS_Adapter'
import { AuthContext } from '../context/AuthContext'
import Spinner from 'react-native-loading-spinner-overlay'
import GoogleAuth from '../components/GoogleAuth'



const LoginScreen:FC<{route:any, navigation: any }> = ({route, navigation}) => {
  const [Email, setEmail] = useState<string>("");
  const [Password, setPassword] = useState<string>("");
  const {isLoading,login} = useContext<any>(AuthContext)


  return (
    <View style={styles.container}>
        <Spinner visible={isLoading} />
      <View style={styles.wrapper}>
        <TextInput 
          value={Email}
          style={styles.input}
          placeholder='Enter Email'
          onChangeText = { (text) => setEmail(text)}
          ></TextInput>
        <TextInput 
          value={Password}
          style={styles.input}
          placeholder='Enter Password'
          secureTextEntry
          onChangeText = { (text) => setPassword(text)}
          ></TextInput>
        <Button title='Login' onPress={()=>{login(Email, Password)}}></Button>

        <View style={{flexDirection: 'row', marginTop:20}} >
          <Text>Don't have account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={{color:'blue'}} >Register</Text>
          </TouchableOpacity>
        </View>
      </View>
      <GoogleAuth></GoogleAuth>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: OS.statusBar(),
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'grey'
  },
  wrapper:{
    width:'80%'
  },
  input:{
    marginBottom:12,
    borderWidth:1,
    borderColor:'#bbb',
    borderRadius: 5,
    paddingHorizontal:14,
  }
})

export default LoginScreen
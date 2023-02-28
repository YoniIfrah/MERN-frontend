import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import * as WebBrowser from 'expo-web-browser'
import * as Google from 'expo-auth-session/providers/google'
import { AuthContext } from '../context/AuthContext'

WebBrowser.maybeCompleteAuthSession()

const GoogleAuth = () => {
  const {register, login} = useContext<any>(AuthContext)

    const [accessToken, setAccessToken] = useState<any>('');
    const [user, setUser] = useState<any>(null);
    const [request, response, promptAsync] = Google.useAuthRequest({
        clientId:"758893691616-6g8l1e7fst18649i2vddbotd57irp17r.apps.googleusercontent.com",
        androidClientId:"758893691616-jpgmc6ioar5pl79fdsrk6ac02bcd5l53.apps.googleusercontent.com"
    })

    useEffect(() => {
        if(response?.type === "success"){
            setAccessToken(response.authentication?.accessToken)
            accessToken && fetchUserInfo()
        }
    },[response, accessToken])

    async function fetchUserInfo() {
        let response = await fetch("https://www.googleapis.com/userinfo/v2/me", {
          headers: { Authorization: `Bearer ${accessToken}` }
        });
        const userInfo = await response.json();
        console.log("userInfo =",userInfo.email.toString());
        setUser(userInfo);
        register(userInfo.email.toString(), "123")
        login(userInfo.email.toString(), "123")
      }

    const ShowUserInfo = () =>{
        if(user){
            return(
                <View>
                   <Text style={{fontSize: 35, fontWeight: 'bold', marginBottom: 20}}>{user.email} is register</Text>
                  {/*<Image source={{uri: user.picture}} style={{width: 100, height: 100, borderRadius: 50}} />
                  <Text style={{fontSize: 20, fontWeight: 'bold'}}>{user.name}</Text> */}
                  
                </View>
              )
        } else {
            return(<View></View>)
        }
    }


  return (
    <View style={{padding: 20}}>
      {user && <ShowUserInfo />}
      {user === null &&
          <>
          {/* <Text style={{fontSize: 35, fontWeight: 'bold'}}>user:{user}</Text> */}
          {/* <Text style={{fontSize: 25, fontWeight: 'bold', marginBottom: 20, color: 'gray'}}>Please login</Text> */}
        <TouchableOpacity
          disabled={!request}
          onPress={() => {
            promptAsync();
            }} 
        >
          <Image source={require("../assets/btn.png")} style={{width: 300, height: 40}} />
        </TouchableOpacity>
        </>
      }
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default GoogleAuth
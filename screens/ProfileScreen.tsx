import { StyleSheet, Image, View, TouchableOpacity, Text, Button, TextInput, ScrollView } from 'react-native';
import React, { useState, FC, useContext} from 'react'
import OS from '../utils/OS_Adapter'
import { AuthContext } from '../context/AuthContext'
import Spinner from 'react-native-loading-spinner-overlay'
import imgs from '../ImgBundler';
import Ionicons from '@expo/vector-icons/Ionicons';
import Camera from '../components/Camera';
import Gallery from '../components/Gallery';


const ProfileScreen:FC<{route:any, navigation: any }> = ({route, navigation}) => { 
  const {userInfo, logout, isLoading} = useContext(AuthContext)
  const [avatarUri, setAvatarUri] = useState("")//will be need added to userInfo
  const [Password, setPassword] = useState<String>("");
  const onCancellCallback = () => {
    navigation.goBack()
  }
  const updateDetails = (Password: string) =>{

  }

  const setAvatar = (uri:string) =>{
    setAvatarUri(uri)
  }


  console.log("home user info", userInfo)
  return (
    <ScrollView>
      <View style={styles.container}>
          <Spinner visible={isLoading} />
          <View>
            { avatarUri == '' && <Image source={imgs.ava} style={styles.avatar} ></Image> }
            { avatarUri != '' && <Image source={{uri: avatarUri}} style={styles.avatar} ></Image> }

            {/*open camera button*/}
            <Camera setAvatar={setAvatar}></Camera>
            {/*open galary button*/}
            <Gallery setAvatar={setAvatar}></Gallery>

        </View>
        <Text>Email: {userInfo.email}</Text>
        <TextInput 
          style={styles.input}
          placeholder='Enter New Password'
          secureTextEntry
          onChangeText = { (text) => setPassword(text)}
          ></TextInput>
        <View style={styles.buttonesContainer}>
        <TouchableOpacity onPress={onCancellCallback} style={styles.button}>
            <Text style={styles.buttonText}>CANCELL</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={updateDetails(Password)} style={styles.button}>
            <Text style={styles.buttonText}>UPDATE</Text>
        </TouchableOpacity>
      </View>
        <Button title='Logout' color='red' onPress={logout}></Button>

          {/* <Text>Your Photo: </Text>
          <Text>Email: {userInfo.email}</Text>
            <Text>HomeScreen</Text>
            <Button title='Logout' color='red' onPress={logout}></Button> */}
      </View>
    </ScrollView>

  )
}
// 
const styles = StyleSheet.create({
  container: {
    marginTop: OS.statusBar(),
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    // backgroundColor: 'blue'
  },
  avatar: {
    height: 250,
    resizeMode: "contain",
    alignSelf: 'center',
    width: '100%'
  },
  cameraButton: {
      position: 'absolute',
      bottom: 0,//was -10
      left: 10,
      width: 50,
      height: 50,
  },
  galleryButton: {
      position: 'absolute',
      bottom: 0, //was -10
      right: 20, //was 10
      width: 50,
      height: 50,
  },
  input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      borderRadius: 5,
  },
  buttonesContainer: {
      flexDirection: 'row',
  },
  button: {
      flex: 1,
      margin: 12,
      padding: 12,
      backgroundColor: 'blue',
      borderRadius: 10,
  },
  buttonText: {
      textAlign: 'center',
      color: 'white'
  }
});

export default ProfileScreen


//old return cp
{/* <View style={styles.container}>
<Spinner visible={isLoading} />
<Text>Your Photo: </Text>
<Text>Email: {userInfo.email}</Text>
  <Text>HomeScreen</Text>
  <Button title='Logout' color='red' onPress={logout}></Button>
</View> */}
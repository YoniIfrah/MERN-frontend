import {FC, useEffect, useState} from 'react';
import { StyleSheet, Image, View, TouchableOpacity, Text, Button, TextInput, ScrollView } from 'react-native';
import OS from '../utils/OS_Adapter'
import imgs from '../ImgBundler';
import StudentModel, { Student } from '../model/StudentModel';
import * as ImagePicker from 'expo-image-picker';
import Ionicons from '@expo/vector-icons/Ionicons';
import FormData from 'form-data'
import Camera from './Camera';
import Gallery from './Gallery';

const StudentAdd:FC<{route:any, navigation: any }> = ({route, navigation}) => { 
    const [id, setId]= useState("")
    const [name, setName]= useState("")
    const [address, setAddress]= useState("")
    const [avatarUri, setAvatarUri] = useState("")

    const setAvatar = (uri:string) =>{
      setAvatarUri(uri)
    }


    // const askPermission = async () => {
    //   try {
    //       const res = await ImagePicker.getCameraPermissionsAsync()
    //       if (!res.granted) {
    //           alert("camera permission is requiered!")
    //       }
    //   } catch (err) {
    //       console.log("ask permission error " + err)
    //   }
    // }
    // useEffect(() => {
    //     askPermission()
    // }, [])

    // const openCamera = async () => {
    //   //need to fix for ios
    //   try {
    //       const res = await ImagePicker.launchCameraAsync()
    //       if (!res.canceled && res.assets.length > 0) {
    //           const uri = res.assets[0].uri
    //           setAvatarUri(uri)
    //       }

    //   } catch (err) {
    //       console.log("open camera error:" + err)
    //   }
    // }
  //   const openGallery = async () => {
  //     //need to fix for ios
  //     try {
  //         const res = await ImagePicker.launchImageLibraryAsync()
  //         if (!res.canceled && res.assets.length > 0) {
  //             const uri = res.assets[0].uri
  //             setAvatarUri(uri)
  //         }

  //     } catch (err) {
  //         console.log("open gallery error:" + err)
  //     }
  // }

    const onSaveCallback =  async () => {
      const student:Student = {
        id:id,
        name:name,
        image:'stam'
      }
      try {
        if (avatarUri != ''){
          console.log('uploading img')
          const url = await StudentModel.uploadImage(avatarUri)
          student.image = url
          console.log('onSaveCallback ', url )
        }
        console.log('saving std')
        await StudentModel.addStudent(student)
      } catch (error) {
        console.log("onSaveCB ",error)
      }
      navigation.goBack()

    }
    const onCancellCallback = () => {
      navigation.goBack()
    }
    return (
    <ScrollView>
    <View style={styles.container}>
      <View>
        { avatarUri == '' && <Image source={imgs.ava} style={styles.avatar} ></Image> }
        { avatarUri != '' && <Image source={{uri: avatarUri}} style={styles.avatar} ></Image> }

        {/*open camera button*/}
        {/* <TouchableOpacity onPress={openCamera} style={styles.cameraButton}>
          <Ionicons name={'camera'} style={styles.cameraButton} size={50} />
        </TouchableOpacity> */}
        <Camera setAvatar={setAvatar}></Camera>
          {/*open galary button*/}
          {/* <TouchableOpacity onPress={openGallery} style={styles.galleryButton}>
          <Ionicons name={'image'} style={styles.cameraButton} size={50} />
        </TouchableOpacity> */}
        <Gallery setAvatar={setAvatar}></Gallery>
      </View>
        <TextInput
          style={styles.input}
          onChangeText={setId}
          value={id}
          placeholder={'Student ID'}
      />
      <TextInput
          style={styles.input}
          onChangeText={setName}
          value={name}
          placeholder={'Student Name'}
      />
      <TextInput
          style={styles.input}
          onChangeText={setAddress}
          value={address}
          placeholder={'Student Address'}
      />
      <View style={styles.buttonesContainer}>
        <TouchableOpacity onPress={onCancellCallback} style={styles.button}>
            <Text style={styles.buttonText}>CANCELL</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onSaveCallback} style={styles.button}>
            <Text style={styles.buttonText}>SAVE</Text>
        </TouchableOpacity>
      </View>
    </View>
    </ScrollView>
    ); 
  }


  const styles = StyleSheet.create({
    container: {
        flex: 1,
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

  
export default StudentAdd
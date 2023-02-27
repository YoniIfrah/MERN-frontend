import { View, Text, StyleSheet,ScrollView, Image, TouchableOpacity, Button } from 'react-native'
import React, { FC, useEffect, useState } from 'react'
import imgs from '../ImgBundler';
import OS from '../utils/OS_Adapter'
import { TextInput } from 'react-native-gesture-handler';
import StudentModel from '../model/StudentModel';
import Camera from './Camera';
import Gallery from './Gallery';
import axios from 'axios';
import baseURL from '../api/baseUrl';



type Props = {
  id:String,
  email:String
  text:String
  avatarUrl:String
  navigation:any
}

const EditPost = (props:Props) => {
    const [Description, setDescription] = useState<String>(props.text);

    const [avatarUri, setAvatarUri] = useState<String>(props.avatarUrl)//will be need added to userInfo

    const setAvatar = (uri:string) =>{
      setAvatarUri(uri)
    }
    useEffect(() => {
      setDescription(props.text);
      setAvatarUri(props.avatarUrl)
  }, [props.text,props.avatarUrl])//end useEffect

    const updateDetails = async () =>{
      console.log(Description)
      if (Description != props.text){
        const res = await StudentModel.updateTextById(props.id, Description)
        console.log("changing to ",res.name)
        setDescription(res.name)
      } else {
        console.log("no http req needed")
      }//end text

      if(avatarUri != props.avatarUrl){
        try {

          const url = await StudentModel.uploadImage(avatarUri)

          //TODO: need to update student url according to the url
          console.log("URl= ",url)
          if(url==''){
            const res = await StudentModel.updateImageUrlById(props.id, avatarUri)//*need to be change it url
          } else {
            const res = await StudentModel.updateImageUrlById(props.id, url)
          }
          
        } catch (error) {
          console.log("err changing photo", error)
        }
      } else {
        console.log("no http req needed2")
      }//end photo



      props.navigation.goBack()

    }

    const deletePost = async () =>{
      console.log("deletePost")
      await StudentModel.deletePostById(props.id)
      props.navigation.goBack()
    }
    return (
      <ScrollView>
        <View style={styles.container}>
            <View>
              { avatarUri.toString() != '' && <Image source={{uri: avatarUri.toString()}} style={styles.avatar} ></Image> }
              { avatarUri.toString() == '' && <Image source={imgs.ava} style={styles.avatar} ></Image> }
            </View>
            <View style={{padding:30}}>
            <Camera setAvatar={setAvatar}></Camera>
            <Gallery setAvatar={setAvatar}></Gallery>

            </View>
          <Text style={styles.buttonText}>Email:</Text>
          <Text style={styles.input}>{props.email}</Text>
          <Text style={styles.buttonText}>description:</Text>
          <TextInput style={styles.input} onChangeText = { (text) => setDescription(text)}>{Description}</TextInput>
          <View style={styles.container}>
          <Button title='Update' color='green' onPress={updateDetails}></Button>
          </View>
          <View style={styles.container}>
          <Button title='Delete' color='red' onPress={deletePost}></Button>
          </View>
          <View style={styles.container}></View>

        </View>
      </ScrollView>
    ); 
}

const styles = StyleSheet.create({
  container: {
    marginTop: OS.statusBar(),
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    // backgroundColor: 'blue'
  },
  avatar: {
    height: 500,
    // resizeMode: "contain",
    // alignSelf: 'center',
    width: 300
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
      color: 'Black'
  }
});

export default EditPost
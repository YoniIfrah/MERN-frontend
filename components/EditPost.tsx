import { View, Text, StyleSheet,ScrollView, Image, TouchableOpacity, Button } from 'react-native'
import React, { FC, useEffect, useState } from 'react'
import imgs from '../ImgBundler';
import OS from '../utils/OS_Adapter'
import { TextInput } from 'react-native-gesture-handler';
import StudentModel from '../model/StudentModel';


type Props = {
  id:String,
  email:String
  text:String
  avatarUrl:String
  navigation:any
}

const EditPost = (props:Props) => {
    const [Description, setDescription] = useState<String>(props.text);
    useEffect(() => {
      setDescription(props.text);
  }, [props.text])//end useEffect

    const updateDetails = async () =>{
      console.log(Description)
      if (Description != props.text){
        const res = await StudentModel.updateTextById(props.id, Description)
        console.log("changing to ",res.name)
        setDescription(res.name)
      } else {
        console.log("no http req needed")
      }
      props.navigation.goBack()

    }

    const deletePost = async () =>{
      console.log("deletePost")
      //TODO add delete req
      await StudentModel.deletePostById(props.id)
      props.navigation.goBack()
    }
    return (
      <ScrollView>
        <View style={styles.container}>
            <View>
              { props.avatarUrl != '' && <Image source={{uri: props.avatarUrl.toString()}} style={styles.avatar} ></Image> }
              { props.avatarUrl == '' && <Image source={imgs.ava} style={styles.avatar} ></Image> }
  
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
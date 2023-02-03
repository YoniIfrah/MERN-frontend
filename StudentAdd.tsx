import {FC, useEffect, useState} from 'react';
import { StyleSheet, Image, View, TouchableOpacity, Text, Button, TextInput, ScrollView } from 'react-native';
import OS from './OS_Adapter'
import imgs from './ImgBundler';
import StudentModel, { Student } from './model/StudentModel';



const StudentAdd:FC<{route:any, navigation: any }> = ({route, navigation}) => { 
    const [id, setId]= useState("")
    const [name, setName]= useState("")
    const [address, setAddress]= useState("")

    const onPressCallback = () => {
      console.log("onPressCallback is called")
    }
    const onSaveCallback = () => {
      const student:Student = {
        id:id,
        name:name,
        image:'stam'
      }
      StudentModel.addStudent(student)
      navigation.goBack()

    }
    const onCancellCallback = () => {
      navigation.goBack()
    }
    return (
    <ScrollView>
    <View style={styles.container}>
        <Image source={imgs.ava} style={styles.avatar} ></Image>
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
        bottom: -10,
        left: 10,
        width: 50,
        height: 50,
    },
    galleryButton: {
        position: 'absolute',
        bottom: -10,
        right: 10,
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
import {FC, useContext, useEffect, useState} from 'react';
import { StyleSheet, Image, View, TouchableOpacity, Text, Button, TextInput, ScrollView } from 'react-native';
import OS from '../utils/OS_Adapter'
import imgs from '../ImgBundler';
import StudentModel, { Student } from '../model/StudentModel';
import Camera from './Camera';
import Gallery from './Gallery';
import { AuthContext } from '../context/AuthContext';

const StudentAdd:FC<{route:any, navigation: any }> = ({route, navigation}) => { 
    const [id, setId]= useState("")
    const [text, setText]= useState("")
    const {userInfo} = useContext(AuthContext)

    const [address, setAddress]= useState("")
    const [avatarUri, setAvatarUri] = useState("")

    const setAvatar = (uri:string) =>{
      setAvatarUri(uri)
    }

    const onSaveCallback =  async () => {
      const student:Student = {
        id:userInfo.email,
        name:text,
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
          editable={false}
          style={styles.input}
          value={userInfo.email}
      />
      <TextInput
          style={styles.input}
          onChangeText={setText}
          value={text}
          placeholder={'Post Text'}
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
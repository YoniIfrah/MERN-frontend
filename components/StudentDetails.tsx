import imgs from '../ImgBundler';
import OS from '../utils/OS_Adapter'
import {FC, useEffect, useState} from 'react';

import { StyleSheet, Image, View, TouchableOpacity, Text, Button, TextInput, ScrollView } from 'react-native';

type Props = {
  email:String
  text:String
  avatarUrl:String
}

const StudnetDetails = (props:Props) => { 

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
          <Text style={styles.input}>{props.text}</Text>


        </View>
      </ScrollView>
  
    )
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
export default StudnetDetails
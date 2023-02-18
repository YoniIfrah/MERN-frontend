import {FC, useEffect, useState} from 'react';
import { StyleSheet, Image, View, TouchableOpacity, Text, Button, TextInput, ScrollView } from 'react-native';

import * as ImagePicker from 'expo-image-picker';
import Ionicons from '@expo/vector-icons/Ionicons';

interface Props{
    setAvatar: (uri:string) => void
}

export default function Camera({setAvatar}:Props) {

    const askPermission = async () => {
        try {
            const res = await ImagePicker.getCameraPermissionsAsync()
            if (!res.granted) {
                alert("camera permission is requiered!")
            }
        } catch (err) {
            console.log("ask permission error " + err)
        }
      }
      useEffect(() => {
          askPermission()
      }, [])
      const openCamera = async () => {
        //need to fix for ios
        try {
            const res = await ImagePicker.launchCameraAsync()
            if (!res.canceled && res.assets.length > 0) {
                const uri = res.assets[0].uri
                setAvatar(uri)
            }
  
        } catch (err) {
            console.log("open camera error:" + err)
        }
      }
    return (
        <TouchableOpacity onPress={openCamera} style={styles.cameraButton}>
            <Ionicons name={'camera'} style={styles.cameraButton} size={50} />
        </TouchableOpacity>

        )
}
const styles = StyleSheet.create({

    cameraButton: {
        position: 'absolute',
        bottom: 0,//was -10
        left: 10,
        width: 50,
        height: 50,
    }
});
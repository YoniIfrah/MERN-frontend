import {FC, useEffect, useState} from 'react';
import { StyleSheet, Image, View, TouchableOpacity, Text, Button, TextInput, ScrollView } from 'react-native';

import * as ImagePicker from 'expo-image-picker';
import Ionicons from '@expo/vector-icons/Ionicons';


interface Props{
    setAvatar: (uri:string) => void
}

export default function Gallery({setAvatar}:Props) {

    const openGallery = async () => {
        //need to fix for ios
        try {
            const res = await ImagePicker.launchImageLibraryAsync()
            if (!res.canceled && res.assets.length > 0) {
                const uri = res.assets[0].uri
                setAvatar(uri)
            }
  
        } catch (err) {
            console.log("open gallery error:" + err)
        }
    }
    

  return (
    <TouchableOpacity onPress={openGallery} style={styles.galleryButton}>
        <Ionicons name={'image'} style={styles.cameraButton} size={50} />
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
    },
    galleryButton: {
        position: 'absolute',
        bottom: 0, //was -10
        right: 20, //was 10
        width: 50,
        height: 50,
    },
})
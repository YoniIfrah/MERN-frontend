import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import OS from '../../utils/OS_Adapter'
import { ScrollView } from 'react-native-gesture-handler'
import { stylesChat } from '../../utils/stylesChat'

const Chat = () => {
    const [Message, setMessage] = useState<string>();
    const handleNewMessage = () =>{
        console.log(Message)
    }
  return (
    <View>
                    <View style={stylesChat.messaginginputContainer}>
                <TextInput
                    style={stylesChat.messaginginput}
                    onChangeText={(value) => setMessage(value)}
                />
                <Pressable
                    style={stylesChat.messagingbuttonContainer}
                    onPress={handleNewMessage}
                >
                    <View>
                        <Text style={{ color: "#f2f0f1", fontSize: 20 }}>SEND</Text>
                    </View>
                </Pressable>
            </View>
    </View>
  )
}

export default Chat

const styles1 = StyleSheet.create({

    container: {
        marginTop: OS.statusBar(),
        flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center',
        backgroundColor: 'blue'
      },
      input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
        width:'80%'
    },
    messagingscreen: {
      // flex: 1,
      justifyContent: "center",
      alignContent: "center",
      alignItems: 'center',
      // height: "90%",
      height: 700,
      overflow: "scroll",
      paddingTop:22
  },
})
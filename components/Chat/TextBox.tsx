import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import OS from '../../utils/OS_Adapter'
import { ScrollView } from 'react-native-gesture-handler'
import { stylesChat } from '../../utils/stylesChat'

type Props ={
    user:string
    messages: any
    setMessages: React.Dispatch<React.SetStateAction<any>>;
    updateMessages: (messages: any) => void;

}

const TextBox = (props:Props) => {
    const {user, messages, setMessages, updateMessages} = props
    const [Message, setMessage] = useState<string>();
    const handleNewMessage = () => {
        const hour =
            new Date().getHours() < 10
                ? `0${new Date().getHours()}`
                : `${new Date().getHours()}`;

        const mins =
            new Date().getMinutes() < 10
                ? `0${new Date().getMinutes()}`
                : `${new Date().getMinutes()}`;

        console.log({
            Message,
            user,
            timestamp: { hour, mins },
        });
        // {
        //     id: "1",
        //     text: "Hello guys, welcome!",
        //     time: "07:50",
        //     user: "Tomer",
        // },
        var MsgArr = messages
        
        MsgArr.push({
            id: `${messages.length+1}`,
            text: Message,
            time: "07:55",
            user: user,
        },)
        setMessages(MsgArr)
        updateMessages(MsgArr);

        // console.log("messages = ",messages);
        
    };
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

export default TextBox

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
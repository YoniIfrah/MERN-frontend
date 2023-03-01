import { FC, useContext, useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { AuthContext } from "../context/AuthContext";
import socket from "../utils/socket";

import TextBox from "../components/Chat/TextBox";
import { ScrollView } from "react-native-gesture-handler";


const ChatScreen:FC<{route:any, navigation: any }> = ({route, navigation}) => { 
  const { userInfo } = useContext(AuthContext);
  const [RoomId, setRoomId] = useState<String>('');
  const [Message, setMessage] = useState<any[]>([]);
  const handdleSendMsg = (message:String, userId:String) => {
    socket.emit('send_message' ,{
      message,userId
    })
  }

  useEffect(() => {
    socket.auth = {
      token: "JWT "+userInfo.accessToken
    }
    socket.connect()
    const RoomId = socket.id
    setRoomId(socket.id)

    socket.on('res_messages', (messages) =>{
      setMessage(messages)
    })

    socket.on('new-message', (data) => {
      if (data) {
          setMessage(prevState => [...prevState, data]);
      }
    
    socket.emit('get_messages', RoomId);
    })
  },[])


    return (
    <View style={{ flex: 1, backgroundColor: 'gray' }}>
        <View style={{ flex: 9, backgroundColor: 'white',alignItems: 'center', justifyContent: 'center',  }}>
          <Text style={{color:'black'}}>...Header or Body</Text>
        </View>
      <TextBox></TextBox>
    </View>
    ); 
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    footer:{ flex: 1, backgroundColor: 'yellow', alignItems: 'center', justifyContent: 'center', }
  });

  export default ChatScreen
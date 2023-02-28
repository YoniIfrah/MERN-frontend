import { FC, useContext, useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { AuthContext } from "../context/AuthContext";
import socket from "../utils/socket";
import SendMessage from "../components/SendMessage";
import ShowMesseges from "../components/ShowMesseges";


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
    <View >
      <ShowMesseges messages={Message} />
      <SendMessage handleSendMessage={(val: string) => handdleSendMsg(val, userInfo.email)} />
    </View>
    ); 
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

  export default ChatScreen
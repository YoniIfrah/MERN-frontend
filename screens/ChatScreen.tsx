import { FC, useContext, useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { AuthContext } from "../context/AuthContext";
import socket from "../utils/socket";
import OS from '../utils/OS_Adapter'
import TextBox from "../components/Chat/TextBox";
import MessageComponent from "../components/Chat/MessageComponent";
import { stylesChat } from "../utils/stylesChat";


const ChatScreen:FC<{route:any, navigation: any }> = ({route, navigation}) => { 
  const { userInfo } = useContext(AuthContext);
  const [RoomId, setRoomId] = useState<String>('');
  const [Message, setMessage] = useState<any[]>([]);
  const [chatMessages, setChatMessages] = useState<any>([
    {
        id: "1",
        text: "Message from another sender",
        time: "07:50",
        user: "Tomer",
        img: ""

    },
    {
        id: "2",
        text: "Message from user",
        time: "08:50",
        user: userInfo.email,
        img: userInfo.ImgUrl
    },
]);
function handleUpdate(newValue: any) {
  setChatMessages(newValue);
}
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

  console.log("@@@@@",chatMessages);

    return (
      <View style={styles.container}>
      <Text style={{ fontSize: 25, textAlign: 'center' }}>Messages 💬</Text>
        <View
                style={[
                    stylesChat.messagingscreen,
                    { paddingVertical: 15, paddingHorizontal: 10, },
                ]}
            >
                {chatMessages[0] ? (
                    <FlatList
                        data={chatMessages}
                        renderItem={({ item }) => (
                            <MessageComponent item={item} user={userInfo.email}/>
                        )}
                        keyExtractor={(item) => item.id}
                    />
                ) : (
                    ""
                )}
            </View>
      <TextBox updateMessages={handleUpdate} messages={chatMessages} setMessages={setChatMessages} user={userInfo.email}></TextBox>
    </View>
    ); 
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: OS.statusBar(),
      backgroundColor: 'white'
    },
  });

  export default ChatScreen
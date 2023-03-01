import { View, Text, Image } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { stylesChat } from "../../utils/stylesChat";
import Img from '../../ImgBundler'

interface MessageComponentProps {
  item: {
    id: string;
    text: string;
    time: string;
    user: string;
    img: string
  };
  user: string;
}

// export default function MessageComponent({
//   item,
//   user,
// }: MessageComponentProps): JSX.Element {

const MessageComponent = (props:MessageComponentProps) => {
  const {item, user} = props
  const status = item.user !== user;

  

  return (
    <View>
      <View
        style={
          status
            ? stylesChat.mmessageWrapper
            : [stylesChat.mmessageWrapper, { alignItems: "flex-end" }]
        }
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          {/* <Ionicons
            name='person-circle-outline'
            size={30}
            color='black'
            style={stylesChat.mvatar}
          /> */}
          {/* <Image  source={{uri:item.img}} style={{height:30, width:30, borderRadius:20, margin:10}} ></Image> */}
          {
            //default image
          }
          { item.img == '' && <Image source={Img.ava} style={{height:30, width:30, borderRadius:20, margin:10}}  ></Image> }
          {
            //user image
          }
          { item.img != '' && <Image source={{uri: item.img}} style={{height:30, width:30, borderRadius:20, margin:10}}  ></Image> }


          <View
            style={
              status
                ? stylesChat.mmessage
                : [stylesChat.mmessage, { backgroundColor: "rgb(194, 243, 194)" }]
            }
          >
            <Text>{item.text}</Text>
          </View>
        </View>
        <Text style={{ marginLeft: 40 }}>{item.time}</Text>
      </View>
    </View>
  );
}
export default MessageComponent
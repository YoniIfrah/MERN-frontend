import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext';
import ViewMessage from './ViewMessage';

interface Message {
    _id: string;
    message: string;
    createdAt: Date;
    owner: MessageOwner;
    userId: string;
}

interface MessageOwner {
    avatarUrl: string;
    name: string;
}
interface Props {
    messages: Message[];
}

const ShowMesseges = ({ messages }: Props) => {
    const { userInfo } = useContext(AuthContext);
    console.log(messages.length);
    return (
        <View style={styles.messagingscreen} >
            {messages.map(msg => (
                <ViewMessage
                    key={msg._id}
                    msg={msg.message}
                    isOwner={msg.userId === userInfo.email}
                />
            ))}
        </View>
    )
}

export default ShowMesseges

const styles = StyleSheet.create({
    messagingscreen: {
        // flex: 1,
        justifyContent: "center",
        alignContent: "center",
        alignItems: 'center',
        // height: "90%",
        height: 700,
        overflow: "scroll"
    },
    messaginginputContainer: {
        width: "100%",
        minHeight: 100,
        backgroundColor: "white",
        paddingVertical: 30,
        paddingHorizontal: 15,
        justifyContent: "center",
        flexDirection: "row",
    },

})
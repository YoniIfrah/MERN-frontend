import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

interface Props {
    msg: string;
    isOwner?: boolean;
}

const ViewMessage = ({ msg, isOwner }: Props) => {
    return (
        <View style={styles.container} >
            <Text>{msg}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'grey',
        padding: 4,
        borderRadius: 5,
        height: 10,
        width: "70%",
    }
})
export default ViewMessage
//ViewMessage
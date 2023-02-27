import { FC } from "react";
import { View, Text, StyleSheet } from "react-native";

const ChatScreen:FC<{route:any, navigation: any }> = ({route, navigation}) => { 
    // const itemId = JSON.stringify(route.params.itemId)
    // const name = JSON.stringify(route.params.name)
    // useEffect(() => {
    //   console.log('useeffects')
    //   navigation.setOptions({
    //     title: "my new title",
    //   })
    // })
    return (
    <View style={styles.container}>
      <Text>ChatScreen </Text>
      {/* <Text>id: {itemId}</Text>
      <Text>{name}</Text> */}
  
      {/* <Button
        title="Go to Home... again"
        onPress={() => navigation.navigate('Home', {newPostId:'6666'})}/> */}
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
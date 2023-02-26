import { View, Text } from 'react-native'
import React, { FC } from 'react'

type Props = {
  email:String
  text:String
  avatarUrl:String
}

const EditPost= (props:Props) => {
    // const studentId = JSON.stringify(route.params.studentId)
    // useEffect(() => {
    //   console.log('useeffects')
    //   navigation.setOptions({
    //     title: "my new title",
    //   })
    // })
    return (
    <View >
      <Text>EditPost Screen</Text>
      {/* <Text>{studentId}</Text> */}
  
      {/* <Button
        title="Go to Home... again"
        onPress={() => navigation.navigate('Home', {newPostId:'6666'})}/> */}
    </View>
    ); 
}
export default EditPost
import { View, Text } from 'react-native'
import React, { FC } from 'react'
import EditPost from './EditPost'
import StudnetDetails from './StudentDetails'


const PostDetails : FC<{route:any, navigation: any }> = ({route, navigation}) => {
   const {editable} = route.params
    const studentId = JSON.stringify(route.params.studentId)

   console.log("editable = ",editable)
   console.log("studentId = ", studentId)
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        { editable == true && <EditPost></EditPost> }
        { editable == false && <StudnetDetails></StudnetDetails> }
    </View>
  )
}

export default PostDetails
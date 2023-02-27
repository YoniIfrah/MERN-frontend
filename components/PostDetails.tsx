import { View, Text } from 'react-native'
import React, { FC, useEffect, useState } from 'react'
import EditPost from './EditPost'
import StudnetDetails from './StudentDetails'
import StudentModel, { Student } from '../model/StudentModel'

const fixID = (id:string) => {
  return id.replace(/"/g, '');
}

const getPostByid = async (id:string) =>{
  id = id.replace(/"/g, '');
  let postData:Student = await StudentModel.getStudentById(id)
  postData.id = id

  return postData
}

const PostDetails : FC<{route:any, navigation: any }> = ({route, navigation}) => {
   const {editable} = route.params
    const studentId = JSON.stringify(route.params.studentId)
    const [PostData, setPostData] = useState<any>();

    useEffect(() => {
      async function fetchData() {
        try {
          const data = await getPostByid(studentId)
          setPostData(data)
        } catch (error) {
          console.log("error useEffect = ",error)
        }
      }
      fetchData()
    },[])

   console.log("editable = ",editable)
   console.log("studentId = ", studentId)
  //  console.log("postData1 = ", PostData)


  return (
    
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        { editable == true && <EditPost navigation={navigation} id={fixID(studentId) || ''}  email = {PostData?.email || ''} text={PostData?.name || ''} avatarUrl={PostData?.avatarUrl || ''}></EditPost> }
        { editable == false && <StudnetDetails email = {PostData?.email || ''} text={PostData?.name || ''} avatarUrl={PostData?.avatarUrl || ''}></StudnetDetails> }
    </View>
  )
}

export default PostDetails
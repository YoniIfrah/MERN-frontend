import { createNativeStackNavigator } from "@react-navigation/native-stack"
import React, { FC } from "react"
import { TouchableHighlight } from "react-native"
import StudentAdd from "./StudentAdd"
import addPost from './AddPost'
import StudentDetails from "./StudentDetails"
import StudentList from "./StudentsList"
import Ionicons from '@expo/vector-icons/Ionicons';

const StudentStack = createNativeStackNavigator()


const StudentStackCp:FC<{route:any, navigation: any }> = ({route, navigation}) =>{
    const addNewStudents = () => {
      navigation.navigate('AddPost')
    }
    return(
      <StudentStack.Navigator>
        <StudentStack.Screen name='StudentList' component={StudentList} options={{headerRight: () => (
            <TouchableHighlight onPress={addNewStudents}>
            <Ionicons name={'add-outline'} size={40} color={'gray'} />
            </TouchableHighlight >
            ),
          }
          }/>
        <StudentStack.Screen name='StudentDetails' component={StudentDetails} />
        <StudentStack.Screen name='AddPost' component={addPost} />
  
      </StudentStack.Navigator>
    )
}

export default StudentStackCp
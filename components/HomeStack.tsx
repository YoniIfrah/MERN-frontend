import { createNativeStackNavigator } from "@react-navigation/native-stack"
import React, { FC } from "react"
import { TouchableHighlight } from "react-native"
import StudentAdd from "./StudentAdd"
import addPost from './AddPost'
import StudentDetails from "./StudentDetails"
import StudentList from "./StudentsList"
import Ionicons from '@expo/vector-icons/Ionicons';
import PostsList from "./PostsList"
import StudnetDetails from "./StudentDetails"
import PostDetails from "./PostDetails"

const Stack = createNativeStackNavigator()


const HomeStack:FC<{route:any, navigation: any }> = ({route, navigation}) =>{
    const addNewStudents = () => {
      navigation.navigate('AddPost')
    }
    return(
      <Stack.Navigator>
        <Stack.Screen name='PostsList' component={PostsList} initialParams={{userPostsOnly: false}} options={{headerRight: () => (
            <TouchableHighlight onPress={addNewStudents}>
            <Ionicons name={'add-outline'} size={40} color={'gray'} />
            </TouchableHighlight >
            ),
          }
          }/>
          {
            //post details
          }
        <Stack.Screen name='PostDetails' component={PostDetails} initialParams={{editable:false}} />
        <Stack.Screen name='AddPost' component={addPost} />
  
      </Stack.Navigator>
    )
}

export default HomeStack
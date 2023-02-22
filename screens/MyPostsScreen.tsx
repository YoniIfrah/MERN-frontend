import { createNativeStackNavigator } from "@react-navigation/native-stack"
import React, { FC } from "react"
import PostsList from "../components/PostsList"
import EditPost from "../components/EditPost"
import PostDetails from "../components/PostDetails"

const PostStackCp = createNativeStackNavigator()


const MyPostsScreen:FC<{route:any, navigation: any }> = ({route, navigation}) =>{

    return(
      <PostStackCp.Navigator>
        {
            //list of posts
        }

        <PostStackCp.Screen name="PostsList" component={PostsList} initialParams={{userPostsOnly:true }} />

        {
            //when we press the post
        }
        <PostStackCp.Screen name='PostDetails' component={PostDetails} initialParams={{editable:true}} />
  
      </PostStackCp.Navigator>
    )
}

export default MyPostsScreen
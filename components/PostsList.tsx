import {FC, useContext, useEffect, useState} from 'react';
import { StyleSheet, Image, View, StatusBar, Platform, TouchableOpacity, Text, Button, FlatList, TouchableHighlight } from 'react-native';
import Imgs from '../ImgBundler'
import  OS  from '../utils/OS_Adapter';
import StudentModel, {Student} from '../model/StudentModel';
import { AuthContext } from '../context/AuthContext';



const ListItem: FC<{ name: String, id: String, email:String, image: String, onRowSelected:(id:String) => void}> = ({ name, id, email, image, onRowSelected }) => {
    
    const onClick=() => {
        console.log('onClick called with id:  ', id)
        onRowSelected(id)
    }
 return (
    <TouchableHighlight onPress={onClick} underlayColor={'gainsboro'}>
    <View style={styles.listRow}>
        {
            image == ""
            ? <Image style={styles.listRowImage} source={Imgs.ava}/>
            : <Image style={styles.listRowImage} source={{uri: image.toString()}}/>
        }
         

        <View style={styles.listRowTextContainer}>
        <Text style={styles.listRowName}>{name}</Text>
        <Text style={styles.listRowId}>Posted by: {email}</Text>
        </View>
    </View>
    </TouchableHighlight>
) }

const PostsList: FC<{route:any, navigation: any }> = ({route, navigation}) => {
    const {userInfo} = useContext(AuthContext)
    const {userPostsOnly} = route.params
    console.log('userPostsOnly=',userPostsOnly)

    const onRowSelected = (id:String) =>{
        console.log('selected row was ', id);
        navigation.navigate('PostDetails', {studentId: id})
    }
    const [students, setStudents] = useState<Array<Student>>()


    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', async () => {
            console.log('focus')
            let students: Student[] = []
            try {
                students = userPostsOnly ? await StudentModel.getStudentsByEmail(userInfo.email) : await StudentModel.getAllStudents()
                // console.log(students)
                console.log("fetching student complete userPostsOnly is ",userPostsOnly)
            } catch (err) {
                console.log("fail fetching studentsuserPostsOnly is ",userPostsOnly, "\nerr: " + err)
            }
            console.log("fetching finish")
            setStudents(students)
        })
        return unsubscribe
    })
    return(
        <FlatList style={styles.flatlist}
        data={students}
        keyExtractor={student => student.id.toString()}
        renderItem={({ item }) => (
          <ListItem name={item.name} id={item.id} email={item.email} image={item.image} onRowSelected={onRowSelected}/>
        )}>
        
      </FlatList>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: OS.statusBar(),
        flex: 1,
        backgroundColor: 'grey'
    },
    flatlist: {
        flex: 1,
        marginTop: OS.statusBar(),
    },
    listRow: { margin:4,
        flexDirection: "row", height: 150, elevation: 1, borderRadius: 2,
    }, 
    listRowImage: {
        margin: 10, resizeMode: "contain", height: 130,
        width: 130,
    },
    listRowTextContainer: {
        flex: 1,
        margin: 10,
        justifyContent: "space-around"
    },
    listRowName: {
        fontSize: 30 
    },
    listRowId: { fontSize: 25
    }
})

export default PostsList
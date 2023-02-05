import StudentApi from "../api/StudentApi"
import FormData from 'form-data'

export type Student = {
    id:String,
    name:String,
    image:String,
}

const students: Array<Student> = [
    {
        id: '1',
        name: 'Student 1',
        image: ''
    },
    {
        id: '2',
        name: 'Student 2',
        image: ''
    },
    {
        id: '3',
        name: 'Student 3',
        image: ''
    },
    {
        id: '4',
        name: 'Student 4',
        image: ''
    },
    {
        id: '5',
        name: 'Student 5',
        image: ''
    },
    {
        id: '6',
        name: 'Student 6',
        image: ''
    },
]

const getAllStudents = async () => {
    console.log("getAllStudents()")
    const res: any = await StudentApi.getAllStudents()
    let data = Array<Student>()
    if (res.data) {
        res.data.forEach((obj: any) => {
            // console.log("element: " + obj._id)
            const st: Student = {
                name: obj.name,
                id: obj._id,
                image: obj.avatarUrl
            }
            data.push(st)
        });
    }
    return data
}

const addStudent = (student: Student) => {
    const data = {
        _id: student.id,
        name: student.name,
        avatartUrl: student.image
    }
    try {
        const res = StudentApi.addStudent(data)
    } catch (error) {
        console.log("addStudent error", error)        
    }
}
const uploadImage = async (imageURI:String) => {
    var body = new FormData();
    body.append('file', {name: "name",type: 'image/jpeg',uri: imageURI});
    let url = '/file/file'
    try {
        const res = await StudentApi.uploadImage(body)
        if(!res.ok){
          console.log("save failed " + res.problem)
        }else{
            if (res.data) {
                const d: any = res.data
                console.log("----= url:" + d.url)
                return d.url
            }
        }
        
    } catch (error) {
        console.log("uploadImage error", error)
    }
 }

export default {getAllStudents, addStudent, uploadImage}
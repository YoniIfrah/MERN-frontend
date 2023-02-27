import apiClient from "../api/ClientApi"
import StudentApi from "../api/StudentApi"
import FormData from "form-data"

export type Student = {
    id: String,
    name: String,
    image: String,
    email:String
}

const getStudentsByEmail = async (email:string) => {
    console.log("getAllStudents()")
    const res: any = await StudentApi.getStudentsByEmail(email)
    let data = Array<Student>()
    if (res.data) {
        res.data.forEach((obj: any) => {
            // console.log("element: " + obj._id)
            const st: Student = {
                name: obj.name,
                id: obj._id,
                image: obj.avatarUrl,
                email: obj.email
            }
            data.push(st)
        });
    }
    return data
}


const getStudentById = async (id:string) => {
    console.log("getStudentById()")
    const res: any = await StudentApi.getStudentById(id)
    const data: Student = res.data
    // console.log("data = ",data)
    return data
}

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
                image: obj.avatarUrl,
                email: obj.email
            }
            data.push(st)
        });
    }
    return data
}

const addStudent = async (student: Student) => {
    console.log("addStudent")
    const data = {
        email: student.email,
        name: student.name,
        avatarUrl: student.image
    }
    try {
        const res = StudentApi.addStudent(data)
    } catch (err) {
        console.log("add student fail: " + err)
    }
}

const uploadImage = async (imageURI: String) => {
    var body = new FormData();
    body.append('file', { name: "name", type: 'image/jpeg', uri: imageURI });
    try {
        const res = await StudentApi.uploadImage(body)
        if (!res.ok) {
            console.log("save failed " + res.problem)
        } else {
            if (res.data) {
                const d: any = res.data
                console.log("----= url:" + d.url)
                return d.url
            }
        }
    } catch (err) {
        console.log("save failed " + err)
    }
    return ""
}

const updateTextById = async (id: String, text:String) => {
    console.log("updateTextById()")
    const res: any = await StudentApi.updateTextById(id, text)
    const data: Student = res.data
    // console.log("data = ",data)
    return data
}
const deletePostById =async (id:String) => {
    console.log("deletePostById()")
    const res = await StudentApi.deletePostById(id)
    console.log("res = ",res)
}


export default { getAllStudents, addStudent, uploadImage, getStudentsByEmail, getStudentById, updateTextById, deletePostById }
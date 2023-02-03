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

const getAllStudents = () => {
    return students
}

const addStudent = (student: Student) => {
    students.push(student)
}

export default {getAllStudents, addStudent}
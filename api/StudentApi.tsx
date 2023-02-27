import apiClient from "./ClientApi";

const getStudentsByEmail = async (email: string) => {
    return apiClient.get("/student/email/"+email)
}

const getStudentById = async (id: string) => {
    return apiClient.get("/student/"+id)
}

const getAllStudents = async () => {
    return apiClient.get("/student")
}

const addStudent = async (studentJson: any) => {
    return apiClient.post("/student", studentJson);
};

const uploadImage = async (image: any) => {
    return apiClient.post("/file/file", image);
};

const updateTextById = async (id:String, text:String) => {
    return apiClient.put(`/student/update/${id}`, {text})
}

const deletePostById = async (id:String) => {
    return apiClient.delete(`/student/delete/${id}`)
}

export default { getAllStudents, addStudent, uploadImage, getStudentsByEmail, getStudentById, updateTextById, deletePostById }
import apiClient from "./ClientApi";

const getStudentsByEmail = async (email: string) => {
    return apiClient.get("/student/email/"+email)
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

//will need to add get student by id and stuff

export default { getAllStudents, addStudent, uploadImage, getStudentsByEmail }
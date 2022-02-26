import axios from "axios";


const Teacher_API='http://localhost:8080/teacher';

class TeacherService {

    getTeachers (){
        return  axios.get(Teacher_API);
    }



}
export default new TeacherService();
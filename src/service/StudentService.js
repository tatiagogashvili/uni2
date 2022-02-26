import axios from "axios";


const Student_API='http://localhost:8080/students';

class StudentService {

    getStudents (){
        return  axios.get(Student_API);
    }



}
export default new StudentService();
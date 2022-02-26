import axios from "axios";


const Group_API='http://localhost:8080/group';

class GroupService {

    getGroups (){
        return  axios.get(Group_API);
    }



}
export default new GroupService();
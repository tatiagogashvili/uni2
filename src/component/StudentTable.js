import React from "react";

import StudentService from "../service/StudentService";

import  'bootstrap/dist/css/bootstrap.min.css'
class StudentTable extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            students:[]
        }
    }
    componentDidMount() {
        StudentService.getStudents().then((response)=>{
            this.setState({ students: response.data})
        });
    }
    render() {
        return (
            <div>
                <h1 className= "text-center">students list</h1><br/>
                <table className="table table-striped">
                    <thead>
                    <tr>
                        <td>id</td>
                        <td>first name</td>
                        <td>last name</td>
                        <td>personal number</td>
                        <td>email</td>
                        <td>birth date</td>
                        <td>group id</td>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.students.map(
                            students=>
                                <tr key={students.id}>
                                    <td>{students.id}</td>
                                    <td>{students.firstName}</td>
                                    <td>{students.lastName}</td>
                                    <td>{students.personalNo}</td>
                                    <td>{students.email}</td>
                                    <td>{students.birthDate}</td>
                                    <td>{students.groupId}</td>
                                </tr>
                        )
                    }
                    </tbody>
                </table>
            </div>
        )
    }
}
export default StudentTable;
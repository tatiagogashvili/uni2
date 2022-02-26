import React from "react";

import TeacherService from "../service/TeacherService";

import  'bootstrap/dist/css/bootstrap.min.css'
class TeacherTable extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            teachers:[]
        }
    }
    componentDidMount() {
        TeacherService.getTeachers().then((response)=>{
            this.setState({ teachers: response.data})
        });
    }
    render() {
        return (
            <div>
                <h1 className= "text-center">teachers list</h1><br/>
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
                        this.state.teachers.map(
                            teachers=>
                                <tr key={teachers.id}>
                                    <td>{teachers.id}</td>
                                    <td>{teachers.firstName}</td>
                                    <td>{teachers.lastName}</td>
                                    <td>{teachers.personalNo}</td>
                                    <td>{teachers.email}</td>
                                    <td>{teachers.birthDate}</td>
                                    <td>{teachers.groupId}</td>
                                </tr>
                        )
                    }
                    </tbody>
                </table>
            </div>
        )
    }
}
export default TeacherTable;
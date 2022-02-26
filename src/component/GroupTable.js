import React from "react";

import GroupService from "../service/GroupService";

import  'bootstrap/dist/css/bootstrap.min.css'
class GroupTable extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            group:[]
        }
    }
    componentDidMount() {
        GroupService.getGroups().then((response)=>{
            console.log(response.data)
            this.setState({ group: response.data})
        });
    }
    render() {
        return (
            <div>
                <h1 className= "text-center">group list</h1><br/>
                <table className="table table-striped">
                    <thead>
                    <tr>
                        <td>id</td>
                        <td>title</td>
                        <td>groupNo</td>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.group.map(
                            group=>
                                <tr key={group.id}>
                                    <td>{group.id}</td>
                                    <td>{group.title}</td>
                                    <td>{group.groupNo}</td>
                                </tr>
                        )
                    }
                    </tbody>
                </table>
            </div>
        )
    }
}
export default GroupTable;
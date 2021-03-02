import React, {Component} from 'react';
import EmployeeService from "../service/EmployeeService";

class ListEmployeeComponent extends Component {

    constructor(props)
    {
        super(props);
        this.state = {
            employees: []
        }
        this.addEmployee = this.addEmployee.bind(this);
        this.editEmployee = this.editEmployee.bind(this);
        this.deleteEmployee = this.deleteEmployee.bind(this);
    }

    addEmployee() {
        this.props.history.push("/add");
    }

    editEmployee(id) {
        this.props.history.push(`/update/${id}`);
    }

    deleteEmployee(id) {
        EmployeeService.deleteEmployee(id).then(res => {
            this.setState({employees: this.state.employees.filter(employee => employee.id !== id)});
        });
    }


    componentDidMount() {
        EmployeeService.getEmployees().then((response) => {
            this.setState({employees: response.data});
        });
    }

    render() {
        return (
            <div>
                <h3 className="text-center"> Employees List</h3>
                <div className="row">
                    <button className="btn btn-primary" onClick={this.addEmployee}>Add Employee</button>
                </div>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                        <th> Employee Firstname</th>
                        <th> Employee Lastname</th>
                        <th> Employee email</th>
                        <th> Actions </th>
                        </thead>
                        <tbody>
                        {
                            this.state.employees.map(
                                employee =>
                               <tr key = {employee.id}>
                                   <td>{employee.firstName} </td>
                                   <td>{employee.lastName} </td>
                                   <td>{employee.emailId} </td>
                                   <td>
                                       <button onClick={() => this.editEmployee(employee.id)} className="btn btn-info">Update</button>
                                       <button style={{marginLeft: "10 px"}} onClick={() => this.deleteEmployee(employee.id)} className="btn btn-danger">Delete</button>
                                   </td>
                               </tr>
                            )
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ListEmployeeComponent;
import React, {Component} from 'react';
import EmployeeService from "../service/EmployeeService";

class UpdateEmployeeComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.match.params.id,
            firstName: '',
            lastName: '',
            emailId: ''
        }
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.updateEmployee = this.updateEmployee.bind(this);
        this.cancel = this.cancel.bind(this);
    }

    cancel = (e) => {
        this.props.history.push('/employees');
    }

    componentDidMount() {
        EmployeeService.getEmployeeById(this.state.id).then(res =>{
            let employee = res.data;
            this.setState({firstName: employee.firstName,
                lastName: employee.lastName,
                emailId: employee.emailId
            });
        });
    }

    updateEmployee = (e) => {
        e.preventDefault();
        let employee = {firstName: this.state.firstName, lastName: this.state.lastName, emailId: this.state.emailId};
        console.log('employee =>' + JSON.stringify(employee));
        EmployeeService.updateEmployee(employee, this.state.id).then(res =>{
            this.props.history.push('/employees');
        });
    }

    changeFirstNameHandler = (event) => {
        this.setState({firstName: event.target.value});
    }
    changeLastNameHandler = (event) => {
        this.setState({lastName: event.target.value});
    }
    changeEmailHandler = (event) => {
        this.setState({emailId: event.target.value});
    }


    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="card col-md-5 offset-md-3">
                        <h3 className="text-center">Update employee</h3>
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label> First Name: </label>
                                    <input placeholder="First Name" name="firstName" type="text"
                                           className="form-control"
                                           value={this.state.firstName} onChange={this.changeFirstNameHandler}/>
                                </div>
                                <div className="form-group">
                                    <label> Last Name: </label>
                                    <input placeholder="Last Name" name="lastName" type="text"
                                           className="form-control"
                                           value={this.state.lastName} onChange={this.changeLastNameHandler}/>
                                </div>
                                <div className="form-group">
                                    <label> Email: </label>
                                    <input placeholder="Email" name="emailId" type="text"
                                           className="form-control"
                                           value={this.state.emailId} onChange={this.changeEmailHandler}/>
                                </div>
                                <button className="btn btn-success" onClick={this.updateEmployee}>Save</button>
                                <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft:"10px"}}>Cancel</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default UpdateEmployeeComponent;
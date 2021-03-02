import axios from 'axios';
const EMPLOYEE_API_BASE_URL = "http://localhost:8080/my-app/employees";

class EmployeeService {

    getEmployees() {
        return axios.get(EMPLOYEE_API_BASE_URL);
    }

    createEmployee(employee) {
        return axios.post( EMPLOYEE_API_BASE_URL + "/add", employee);
    }

    getEmployeeById(id) {
        return axios.get(EMPLOYEE_API_BASE_URL + '/' + id);
    }

    updateEmployee(employee, employeeId) {
        return axios.put( EMPLOYEE_API_BASE_URL + '/' + employeeId, employee);
    }

    deleteEmployee( employeeId) {
        return axios.delete( EMPLOYEE_API_BASE_URL + '/delete/' + employeeId);
    }


}

export default new EmployeeService();
/*${EMPLOYEEAPP_DB_HOST:localhost}*/
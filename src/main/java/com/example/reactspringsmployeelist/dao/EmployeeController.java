package com.example.reactspringsmployeelist.dao;

import com.example.reactspringsmployeelist.entity.Employee;
import com.example.reactspringsmployeelist.exceptions.ResourseNotFoundException;
import com.example.reactspringsmployeelist.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin (origins = "http://localhost:3000")
@RestController
@RequestMapping ("/my-app/")
public class EmployeeController
{
    @Autowired
    private EmployeeRepository employeeRepository;

    @GetMapping ("/employees")
    public List<Employee> getAllEmployees()
    {
        return employeeRepository.findAll();
    }

    @GetMapping ("/employees/{id}")
    public ResponseEntity<Employee> getEmployeeById(@PathVariable long id) {
        Employee employee = employeeRepository.findById(id).orElseThrow(() -> new ResourseNotFoundException("Employee not found: " + id));
        return  ResponseEntity.ok(employee);
    }

    @PostMapping ("/employees/add")
    public void addEmployee(@RequestBody Employee employee) {
        employeeRepository.save(employee);
    }

    @DeleteMapping ("/employees/delete/{id}")
    public void deleteEmployeeById(@PathVariable long id) {

        Employee employee = employeeRepository.findById(id).orElseThrow(() ->
                new ResourseNotFoundException("Employee not found: " + id));
        employeeRepository.delete(employee);
    }

    @PutMapping("/employees/{id}")
    public ResponseEntity<Employee> updateEmployee(@PathVariable Long id, @RequestBody Employee employeeDetails) {
        Employee employee = employeeRepository.findById(id).orElseThrow(() -> new ResourseNotFoundException("Employee not found: " + id));
        employee.setFirstName(employeeDetails.getFirstName());
        employee.setLastName(employeeDetails.getLastName());
        employee.setEmailId(employeeDetails.getEmailId());

        return ResponseEntity.ok(employeeRepository.save(employee));
    }

}

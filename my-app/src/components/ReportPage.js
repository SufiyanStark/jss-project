// ReportPage.js
import React, { useState, useEffect } from 'react';

function ReportPage() {
  const [employeesData, setEmployeesData] = useState(() => {
    // Retrieve employee data from localStorage on component mount
    const savedEmployees = localStorage.getItem('employees');
    return savedEmployees ? JSON.parse(savedEmployees) : [
      // Simulated initial employee data (replace this with your actual data)
      { employeeId: '001', name: 'John Doe', department: 'Audiology', status: 'Active' },
      { employeeId: '002', name: 'Jane Smith', department: 'Speech Sciences', status: 'Inactive' },
      // Add more employee details as needed
    ];
  });

  const [newEmployee, setNewEmployee] = useState({
    employeeId: '',
    name: '',
    department: '',
    status: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEmployee({ ...newEmployee, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const employee = { ...newEmployee };
    setEmployeesData([...employeesData, employee]);
    setNewEmployee({ employeeId: '', name: '', department: '', status: '' });
  };

  // Save employee data to localStorage when it changes
  useEffect(() => {
    localStorage.setItem('employees', JSON.stringify(employeesData));
  }, [employeesData]);

  return (
    <div>
      <h2>Report Page</h2>
      <table>
        <thead>
          <tr>
            <th>Employee ID</th>
            <th>Name</th>
            <th>Department</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {employeesData.map((employee, index) => (
            <tr key={index}>
              <td>{employee.employeeId}</td>
              <td>{employee.name}</td>
              <td>{employee.department}</td>
              <td>{employee.status}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Form to add new employee */}
      <h3>Add New Employee</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" name="employeeId" value={newEmployee.employeeId} onChange={handleInputChange} placeholder="Employee ID" />
        <input type="text" name="name" value={newEmployee.name} onChange={handleInputChange} placeholder="Name" />
        <input type="text" name="department" value={newEmployee.department} onChange={handleInputChange} placeholder="Department" />
        <input type="text" name="status" value={newEmployee.status} onChange={handleInputChange} placeholder="Status" />
        <button type="submit">Add Employee</button>
      </form>
    </div>
  );
}

export default ReportPage;

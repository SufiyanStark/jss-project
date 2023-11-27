// FinalPage.js
import React, { useState, useEffect } from 'react';

function FinalPage() {
  const [employeeList, setEmployeeList] = useState([]);
  // Fetch employee data from backend API
  useEffect(() => {
    // Fetch data from backend using fetch or Axios and set employeeList state
    // Example:
    fetch('backend-api-url/employees')
      .then(response => response.json())
      .then(data => setEmployeeList(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h2>Final Page</h2>
      <div className="card-container">
        {employeeList.map((employee) => (
          <div className="card" key={employee.employeeId}>
            <img src={employee.photo} alt={employee.name} />
            <p>ID: {employee.employeeId}</p>
            <p>Name: {employee.name}</p>
            <p>Designation: {employee.designation}</p>
            <p>Department: {employee.department}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FinalPage;

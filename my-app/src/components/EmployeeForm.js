// EmployeeForm.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function EmployeeForm() {
  const [employeeData, setEmployeeData] = useState({
    employeeId: '',
    name: '',
    gender: '',
    designation: '',
    department: '',
    status: '',
    photo: ''
  });

  const navigate = useNavigate(); // Access the navigate function

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployeeData({ ...employeeData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission - send data to backend or perform necessary actions
    console.log('Form submitted:', employeeData);
    // Reset form fields
    setEmployeeData({
      employeeId: '',
      name: '',
      gender: '',
      designation: '',
      department: '',
      status: '',
      photo: ''
    });

    // Navigate to the '/report' route upon successful form submission
    navigate('/report');
  };

  return (
    <div>
      <h2>Employee Form</h2>
      <form onSubmit={handleSubmit}>
        {/* Input fields for employee details */}
        {/* Example: */}
        <input
          type="text"
          name="employeeId"
          value={employeeData.employeeId}
          onChange={handleChange}
          placeholder="Employee ID"
        />
        {/* Other input fields for name, gender, designation, department, status, photo */}
        {/* ... */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default EmployeeForm;


// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EmployeeForm from './EmployeeForm';
import ReportPage from './ReportPage';
import FinalPage from './FinalPage';

function App() {
  return (
    <Router>
      <Routes>
        {/* Route for the EmployeeForm component */}
        <Route path="/" element={<EmployeeForm />} />

        {/* Route for the ReportPage component */}
        <Route path="/report" element={<ReportPage />} />

        {/* Route for the FinalPage component */}
        <Route path="/final" element={<FinalPage />} />
      </Routes>
    </Router>
  );
}

export default App;


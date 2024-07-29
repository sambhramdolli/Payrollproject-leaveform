// Employee.js
import React, { useState } from 'react';
import './admin.css';
import NavBar from './Navbar';
import SideBar from './sidebar.js';
import AddEmployee from './addEmployee.js'; 
import LeaveRequest from './LeaveRequests.js'; 
import SalaryReport from './SalaryReport.js'; 
import ImageSlider from './ImageSlider.js';

const AdminPage = () => {
  const [selectedComponent, setSelectedComponent] = useState(null);

  const handleButtonClick = (componentName) => {
    setSelectedComponent(componentName);
  };

  return (
    <main>
      <NavBar />
      <ImageSlider />
      <div className="employee-page">
        <SideBar onButtonClick={handleButtonClick} />
        <div className="employee-content">
          {selectedComponent === 'viewLeaveRequest' && <LeaveRequest />}
          {selectedComponent === 'salaryReports' && <SalaryReport />}
          {selectedComponent === 'addEmployee' && <AddEmployee />}
        </div>
      </div>
    </main>
  );
};

export default AdminPage;

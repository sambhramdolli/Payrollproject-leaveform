import React, { useState } from 'react';
import './Employee.css';
import NavBar from '../Navbar';
import SideBar from '../Employee/Employeesidebar.js';
import LeaveApplication from './LeaveApplication'; 
import SalaryReport from '../SalaryReport.js';  
import ImageSlider from '../ImageSlider.js';
import MyTeam from './MyTeam.js';


const Employee = () => {
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
          {selectedComponent === 'leave' && <LeaveApplication />} {/* Render LeaveApplication component */}
          {selectedComponent === 'salaryReports' && <SalaryReport />}
          {selectedComponent === 'myteam' && <MyTeam />}
        </div>
      </div>
    </main>
  );
};

export default Employee;

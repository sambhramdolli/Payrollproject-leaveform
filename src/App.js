import React from 'react';
import './App.css';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { LeaveProvider } from './components/LeaveContext.js'; // Import LeaveProvider
import LoginPage from './login.js';
import HomePage from './homepage.js'; 
import AdminPage from './components/admin.js'; 
import EmployeeLoginPage from './components/Employee/Employeelogin.js';
import EmployeePage from './components/Employee/Employee.js';


const clientId = '173863352755-p6rcbh3qkiiq654qpl7shpffrlv77l5e.apps.googleusercontent.com';

function App() {
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <LeaveProvider> {/* Wrap the application with LeaveProvider */}
      <Router>
        <div className="App">
          <header className="App-header"></header>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/admin" element={<AdminPage />} /> 
            <Route path="/Employeelogin" element={<EmployeeLoginPage />} />
            <Route path="/Employee" element={<EmployeePage />} />
          </Routes>
        </div>
      </Router>
      </LeaveProvider>
    </GoogleOAuthProvider> 
  );
}

export default App;
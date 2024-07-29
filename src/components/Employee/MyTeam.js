// MyTeam.js
import React from 'react';
import './MyTeam.css';

const MyTeam = () => {
  const manager = {
    id: 1,
    name: 'Alice Johnson',
    position: 'Manager',
    experience: '10 years',
    photo: '../../assets/profile.png' // Replace with actual path or URL
  };
  const teamLead = {
    id: 2,
    name: 'Bob Smith',
    position: 'Team Lead',
    experience: '7 years',
    photo: '../../assets/profile.png' // Replace with actual path or URL
  };
  const employees = [
    { id: 3, name: 'Carol White', position: 'Employee', experience: '3 years', photo: '../../assets/profile.png' },
    { id: 4, name: 'David Brown', position: 'Employee', experience: '4 years', photo: '../../assets/profile.png' },
    { id: 5, name: 'Eve Davis', position: 'Employee', experience: '2 years', photo: '../../assets/profile.png'},
    { id: 6, name: 'Frank Miller', position: 'Employee', experience: '5 years', photo: '../../assets/profile.png'},
    { id: 7, name: 'Grace Lee', position: 'Employee', experience: '6 years', photo: '../../assets/profile.png'},
    { id: 8, name: 'Hannah Adams', position: 'Employee', experience: '1 year', photo: '../../assets/profile.png' },
  ];

  return (
    <div className="team-structure">
      <h2>My Team</h2>
      <div className="team-member manager">
        <img src={manager.photo} alt={manager.name} className="profile-photo" />
        <h3>{manager.name}</h3>
        <p>{manager.position}</p>
        <p>{manager.experience}</p>
      </div>
      <div className="team-member team-lead">
        <img src={teamLead.photo} alt={teamLead.name} className="profile-photo" />
        <h3>{teamLead.name}</h3>
        <p>{teamLead.position}</p>
        <p>{teamLead.experience}</p>
      </div>
      <div className="employees">
        {employees.map((employee) => (
          <div key={employee.id} className="team-member employee">
            <img src={employee.photo} alt={employee.name} className="profile-photo" />
            <h3>{employee.name}</h3>
            <p>{employee.position}</p>
            <p>{employee.experience}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyTeam;





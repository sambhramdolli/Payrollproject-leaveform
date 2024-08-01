import React, { useState } from 'react';
import './MyTeam.css';
import managerPhoto from '../../assets/profile.png';
import teamLeadPhoto from '../../assets/profile.png';
import employee1Photo from '../../assets/profile.png';
import employee2Photo from '../../assets/profile.png';
import employee3Photo from '../../assets/profile.png';
import employee4Photo from '../../assets/profile.png';
import employee5Photo from '../../assets/profile.png';
import employee6Photo from '../../assets/profile.png';

const MyTeam = () => {
  const [selectedPerson, setSelectedPerson] = useState(null);
  const [showAllEmployees, setShowAllEmployees] = useState(false);

  const manager = { id: 0, name: 'Manager Name', role: 'Manager', experience: '10 years', skills: ['Leadership', 'Management'], photo: managerPhoto };
  const teamLead = { id: -1, name: 'Team Lead Name', role: 'Team Lead', experience: '8 years', skills: ['Project Management', 'Team Coordination'], photo: teamLeadPhoto };
  const employees = [
    { id: 1, name: 'Employee 1', role: 'Developer', experience: '5 years', skills: ['JavaScript', 'React'], photo: employee1Photo },
    { id: 2, name: 'Employee 2', role: 'Designer', experience: '3 years', skills: ['Photoshop', 'UI/UX'], photo: employee2Photo },
    { id: 3, name: 'Employee 3', role: 'QA', experience: '4 years', skills: ['Testing', 'Automation'], photo: employee3Photo },
    { id: 4, name: 'Employee 4', role: 'Developer', experience: '2 years', skills: ['JavaScript', 'React'], photo: employee5Photo },
    { id: 5, name: 'Employee 5', role: 'Developer', experience: '6 years', skills: ['JavaScript', 'React'], photo: employee6Photo },
    { id: 6, name: 'Employee 6', role: 'Designer', experience: '5 years', skills: ['Photoshop', 'UI/UX'], photo: employee6Photo },
    { id: 7, name: 'Employee 7', role: 'Designer', experience: '3 years', skills: ['Photoshop', 'UI/UX'], photo: employee6Photo },
  ];

  const handlePersonClick = (person) => {
    setSelectedPerson(person);
  };

  const handleBackToTeam = () => {
    setSelectedPerson(null);
  };

  return (
    <div className={`team-page ${selectedPerson ? 'employee-details-page' : 'main-team-page'}`}>
      {selectedPerson ? (
        <div className="employee-details">
          <img src={selectedPerson.photo} alt={selectedPerson.name} className="profile-photo" />
          <h2>{selectedPerson.name}</h2>
          <p>Role: {selectedPerson.role}</p>
          <p>Experience: {selectedPerson.experience}</p>
          <p>Skills: {selectedPerson.skills.join(', ')}</p>
          <button onClick={handleBackToTeam} className="back-button">
            Back to Team
          </button>
        </div>
      ) : (
        <>
          <div className="top-section">
            <div className="profile-box manager" onClick={() => handlePersonClick(manager)}>
              <div className="profile1">
                <img src={manager.photo} alt="Manager" className="profile-photo" />
                <h2>{manager.name}</h2>
                <p>{manager.role}</p>
              </div>
            </div>
            <div className="heading">
              <h1>OUR TEAM</h1>
            </div>
            <div className="profile-box team-lead" onClick={() => handlePersonClick(teamLead)}>
              <div className="profile1">
                <img src={teamLead.photo} alt="Team Lead" className="profile-photo" />
                <h2>{teamLead.name}</h2>
                <p>{teamLead.role}</p>
              </div>
            </div>
          </div>
          <div className={`employee-section ${showAllEmployees ? 'expanded' : ''}`}>
            {employees.slice(0, showAllEmployees ? employees.length : 3).map((employee) => (
              <div key={employee.id} className="profile-box" onClick={() => handlePersonClick(employee)}>
                <div className="employee">
                  <img src={employee.photo} alt={employee.name} className="profile-photo" />
                  <h3>{employee.name}</h3>
                  <p>{employee.role}</p>
                </div>
              </div>
            ))}
          </div>
          {!showAllEmployees && (
            <button onClick={() => setShowAllEmployees(true)} className="show-more-button">
              Show More
            </button>
          )}
        </>
      )}
    </div>
  );
};

export default MyTeam;




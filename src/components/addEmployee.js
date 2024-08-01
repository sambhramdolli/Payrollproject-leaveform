import React, { useState } from 'react';
import './addEmployee.css';

const AddEmployee = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [position, setPosition] = useState('');
  const [project, setProject] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Employee Added:', { name, email, position, project });
    
    setName('');
    setEmail('');
    setPosition('');
    setProject('');
  };

  return (
    <div className="add-employee-container">
      <h1>Add Employee</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            id="name"
            className="add-employee-input"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <label htmlFor="name" className="add-employee-label">Name</label>
        </div>
        <div className="form-group">
          <input
            type="email"
            id="email"
            className="add-employee-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label htmlFor="email" className="add-employee-label">Email</label>
        </div>
        <div className="form-group">
          <input
            type="text"
            id="position"
            className="add-employee-input"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
            required
          />
          <label htmlFor="position" className="add-employee-label">Position</label>
        </div>
        <div className="form-group">
          <select
            id="project"
            className="add-employee-select"
            value={project}
            onChange={(e) => setProject(e.target.value)}
            required
          >
            <option value="" disabled>Select Project</option>
            <option value="Project 1">Project 1</option>
            <option value="Project 2">Project 2</option>
            <option value="Project 3">Project 3</option>
            <option value="Project 4">Project 4</option>
            <option value="Project 5">Project 5</option>
          </select>
          <label htmlFor="project" className="add-employee-label">Project</label>
        </div>
        <button type="submit">Add Employee</button>
      </form>
    </div>
  );
};

export default AddEmployee;


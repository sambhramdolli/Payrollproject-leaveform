// LeaveContext.js
import React, { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid'; // Import uuid for generating unique IDs

export const LeaveContext = createContext();

export const LeaveProvider = ({ children }) => {
  const [leaveRequests, setLeaveRequests] = useState([]);

  const addLeaveRequest = (request) => {
    setLeaveRequests(prevRequests => [...prevRequests, { ...request, id: uuidv4() }]); // Add an id to each request
  };

  const updateLeaveStatus = (id, status) => {
    setLeaveRequests(prevRequests =>
      prevRequests.map(request =>
        request.id === id ? { ...request, status } : request
      )
    );
  };

  return (
    <LeaveContext.Provider value={{ leaveRequests, addLeaveRequest, updateLeaveStatus }}>
      {children}
    </LeaveContext.Provider>
  );
};




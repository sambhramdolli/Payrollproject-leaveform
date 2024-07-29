import React, { useContext } from 'react';
import './LeaveRequests.css'; 
import { LeaveContext } from './LeaveContext';

const LeaveRequests = () => {
  const { leaveRequests, updateLeaveStatus } = useContext(LeaveContext);

  const handleAccept = (id) => {
    updateLeaveStatus(id, 'Accepted');
  };

  const handleReject = (id) => {
    updateLeaveStatus(id, 'Rejected');
  };

  return (
    <div className="leave-requests-container">
      <h2>Leave Requests</h2>
      <ul className="leave-requests-list">
        {leaveRequests.map(request => (
          <li key={request.id} className="leave-request-item">
            <h3>{request.employeeName}</h3>
            <p>Leave Type: {request.leaveType}</p>
            <p>Start Date: {request.startDate}</p>
            <p>End Date: {request.endDate}</p>
            <p>Reason: {request.reason}</p>
            <p>Status: {request.status}</p>
            <div className="button-group1">
              <button className="accept-button" onClick={() => handleAccept(request.id)}>Accept</button>
              <button className="reject-button" onClick={() => handleReject(request.id)}>Reject</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LeaveRequests;




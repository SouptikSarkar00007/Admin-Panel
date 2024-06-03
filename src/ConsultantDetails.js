// ConsultantDetails.js
import React from 'react';

const ConsultantDetails = () => {
  // Mock data for project history
  const projectHistory = [
    { projectName: 'Project 1', client: 'Client A', rating: 4.5 },
    { projectName: 'Project 2', client: 'Client B', rating: 4.2 },
    // Add more project history as needed
  ];

  // Mock data for communication history
  const communicationHistory = ['Communication 1', 'Communication 2', 'Communication 3'];

  // Function to handle suspension of account
  const handleSuspendAccount = () => {
    // Add logic to suspend account here
    alert('Account suspended');
  };

  // Function to handle deactivation of account
  const handleDeactivateAccount = () => {
    // Add logic to deactivate account here
    alert('Account deactivated');
  };

  return (
    <div className="content-wrapper">
      {/* Content Header (Page header) */}
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 className="m-0">Consultant Details</h1>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main content */}
      <section className="content">
        <div className="container-fluid">
          {/* Consultant Profile Information */}
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Consultant Profile Information</h3>
            </div>
            <div className="card-body">
              <form>
                {/* Form fields for name, email, phone number, expertise, industry experience, location, hourly rate, profile picture, bio, and verification process */}
                {/* Example:
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" className="form-control" id="name" />
                </div>
                */}
              </form>
            </div>
          </div>
          
          {/* Project History */}
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Project History</h3>
            </div>
            <div className="card-body">
              {/* Display project history with performance ratings */}
              <table className="table">
                <thead>
                  <tr>
                    <th>Project Name</th>
                    <th>Client</th>
                    <th>Rating</th>
                  </tr>
                </thead>
                <tbody>
                  {projectHistory.map((project, index) => (
                    <tr key={index}>
                      <td>{project.projectName}</td>
                      <td>{project.client}</td>
                      <td>{project.rating}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
          {/* Communication History */}
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Communication History</h3>
            </div>
            <div className="card-body">
              {/* Display communication history with admins (internal notes) */}
              <ul>
                {communicationHistory.map((communication, index) => (
                  <li key={index}>{communication}</li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Option to Suspend or Deactivate */}
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Suspend or Deactivate Account</h3>
            </div>
            <div className="card-body">
              {/* Include buttons or options to suspend or deactivate the consultant account */}
              <button className="btn btn-danger mr-2" onClick={handleSuspendAccount}>Suspend</button>
              <button className="btn btn-warning" onClick={handleDeactivateAccount}>Deactivate</button>
            </div>
          </div>
          
        </div>
      </section>
    </div>
  );
};

export default ConsultantDetails;

// ClientDetails.js
import React, { useState } from 'react';

const ClientDetails = () => {
  const [client, setClient] = useState({
    companyName: 'Company A',
    industry: 'Technology',
    contactInfo: {
      billing: 'billing@companya.com',
      projectManagement: 'pm@companya.com',
    },
    projectHistory: [
      {
        name: 'Project Alpha',
        consultants: ['Consultant 1', 'Consultant 2'],
        communication: [
          'Kickoff meeting scheduled',
          'First draft delivered',
          'Client feedback received',
        ],
      },
      {
        name: 'Project Beta',
        consultants: ['Consultant 3'],
        communication: [
          'Project proposal sent',
          'Proposal approved',
          'Final delivery completed',
        ],
      },
    ],
    subscription: 'Premium',
    billingDetails: 'Paid annually',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setClient((prevClient) => ({
      ...prevClient,
      [name]: value,
    }));
  };

  const handleContactChange = (e, department) => {
    const { value } = e.target;
    setClient((prevClient) => ({
      ...prevClient,
      contactInfo: {
        ...prevClient.contactInfo,
        [department]: value,
      },
    }));
  };

  return (
    <div className="content-wrapper">
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 className="m-0">Client Details</h1>
            </div>
          </div>
        </div>
      </div>
      <section className="content">
        <div className="container-fluid">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Company Details</h3>
            </div>
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label htmlFor="companyName">Company Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="companyName"
                    name="companyName"
                    value={client.companyName}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="industry">Industry</label>
                  <input
                    type="text"
                    className="form-control"
                    id="industry"
                    name="industry"
                    value={client.industry}
                    onChange={handleChange}
                  />
                </div>
              </form>
            </div>
          </div>

          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Contact Information</h3>
            </div>
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label htmlFor="billing">Billing</label>
                  <input
                    type="email"
                    className="form-control"
                    id="billing"
                    value={client.contactInfo.billing}
                    onChange={(e) => handleContactChange(e, 'billing')}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="projectManagement">Project Management</label>
                  <input
                    type="email"
                    className="form-control"
                    id="projectManagement"
                    value={client.contactInfo.projectManagement}
                    onChange={(e) => handleContactChange(e, 'projectManagement')}
                  />
                </div>
              </form>
            </div>
          </div>

          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Project History</h3>
            </div>
            <div className="card-body">
              {client.projectHistory.map((project, index) => (
                <div key={index} className="mb-4">
                  <h5>{project.name}</h5>
                  <p>
                    <strong>Consultants: </strong>
                    {project.consultants.join(', ')}
                  </p>
                  <p>
                    <strong>Communication: </strong>
                  </p>
                  <ul>
                    {project.communication.map((item, commIndex) => (
                      <li key={commIndex}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Subscription and Billing Details</h3>
            </div>
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label htmlFor="subscription">Subscription</label>
                  <input
                    type="text"
                    className="form-control"
                    id="subscription"
                    name="subscription"
                    value={client.subscription}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="billingDetails">Billing Details</label>
                  <input
                    type="text"
                    className="form-control"
                    id="billingDetails"
                    name="billingDetails"
                    value={client.billingDetails}
                    onChange={handleChange}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ClientDetails;

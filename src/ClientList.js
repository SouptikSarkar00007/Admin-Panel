// ClientList.js
import React, { useState } from 'react';

const ClientList = () => {
  // Sample data for clients
  const [clients, setClients] = useState([
    {
      logo: 'logo1.png',
      name: 'Company A',
      contact: 'contactA@example.com',
      industry: 'Technology',
      projectHistory: 5,
      satisfactionRating: 4.5,
      subscribedPlan: 'Premium'
    },
    {
      logo: 'logo2.png',
      name: 'Company B',
      contact: 'contactB@example.com',
      industry: 'Finance',
      projectHistory: 3,
      satisfactionRating: 4.0,
      subscribedPlan: 'Basic'
    },
    // Add more client data as needed
  ]);

  // State for filter values
  const [filters, setFilters] = useState({
    companyName: '',
    industry: '',
    projectHistory: '',
    satisfactionRating: ''
  });

  // Handle filter change
  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  // Filtered clients based on the filters
  const filteredClients = clients.filter(client => {
    return (
      (filters.companyName === '' || client.name.toLowerCase().includes(filters.companyName.toLowerCase())) &&
      (filters.industry === '' || client.industry === filters.industry) &&
      (filters.projectHistory === '' || client.projectHistory >= parseInt(filters.projectHistory)) &&
      (filters.satisfactionRating === '' || client.satisfactionRating >= parseFloat(filters.satisfactionRating))
    );
  });

  return (
    <div className="content-wrapper">
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 className="m-0">Client List</h1>
            </div>
          </div>
        </div>
      </div>
      <section className="content">
        <div className="container-fluid">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Filters</h3>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-md-3">
                  <div className="form-group">
                    <label htmlFor="companyName">Company Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="companyName"
                      name="companyName"
                      value={filters.companyName}
                      onChange={handleFilterChange}
                    />
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="form-group">
                    <label htmlFor="industry">Industry</label>
                    <select
                      className="form-control"
                      id="industry"
                      name="industry"
                      value={filters.industry}
                      onChange={handleFilterChange}
                    >
                      <option value="">All</option>
                      <option value="Technology">Technology</option>
                      <option value="Finance">Finance</option>
                      <option value="Healthcare">Healthcare</option>
                      <option value="Education">Education</option>
                      <option value="Retail">Retail</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="form-group">
                    <label htmlFor="projectHistory">Project History (Min)</label>
                    <input
                      type="number"
                      className="form-control"
                      id="projectHistory"
                      name="projectHistory"
                      value={filters.projectHistory}
                      onChange={handleFilterChange}
                    />
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="form-group">
                    <label htmlFor="satisfactionRating">Satisfaction Rating (Min)</label>
                    <input
                      type="number"
                      step="0.1"
                      className="form-control"
                      id="satisfactionRating"
                      name="satisfactionRating"
                      value={filters.satisfactionRating}
                      onChange={handleFilterChange}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Client List</h3>
            </div>
            <div className="card-body">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Logo</th>
                    <th>Company Name</th>
                    <th>Contact Information</th>
                    <th>Industry</th>
                    <th>Project History</th>
                    <th>Satisfaction Rating</th>
                    <th>Subscribed Plan</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredClients.map((client, index) => (
                    <tr key={index}>
                      <td><img src={client.logo} alt={`${client.name} Logo`} width="50" /></td>
                      <td>{client.name}</td>
                      <td>{client.contact}</td>
                      <td>{client.industry}</td>
                      <td>{client.projectHistory}</td>
                      <td>{client.satisfactionRating}</td>
                      <td>{client.subscribedPlan}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ClientList;

// Dashboard.js
import React from 'react';

const Dashboard = () => {
  // Sample data for key metrics
  const keyMetricsData = [
    { label: 'Active Consultants', value: 12 },
    { label: 'Ongoing Projects', value: 6 },
    { label: 'Client Satisfaction Rating', value: 4.5 },
    { label: 'Active Video Consultations', value: 8 },
    { label: 'Upcoming Consultant Availability', value: 15 },
    { label: 'Average Consultation Duration', value: '1h 30m' },
  ];

  // Sample data for top industries and consultant expertise areas
  const topIndustriesData = [
    { label: 'Technology', value: 35 },
    { label: 'Finance', value: 20 },
    { label: 'Healthcare', value: 15 },
    { label: 'Education', value: 10 },
    { label: 'Retail', value: 10 },
  ];

  // Sample data for consultant expertise areas
  const consultantExpertiseData = [
    { label: 'Software Development', value: 40 },
    { label: 'Data Science', value: 20 },
    { label: 'Marketing', value: 15 },
    { label: 'Finance', value: 10 },
    { label: 'Design', value: 10 },
    { label: 'Human Resources', value: 5 },
  ];

  // Sample data for quick links
  const quickLinks = [
    { label: 'Manage New Applications', link: '#' },
    { label: 'Manage Ongoing Projects', link: '#' },
    { label: 'View Reports', link: '#' },
  ];

  return (
    <div className="content-wrapper">
      {/* Content Header (Page header) */}
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 className="m-0">Dashboard</h1>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main content */}
      <section className="content">
        <div className="container-fluid">
          <div className="row">
            {/* Key Metrics Cards */}
            {keyMetricsData.map((item, index) => (
              <div key={index} className="col-lg-3 col-6">
                <div className="small-box bg-info">
                  <div className="inner">
                    <h3>{item.value}</h3>
                    <p>{item.label}</p>
                  </div>
                  <div className="icon">
                    <i className="ion ion-bag"></i>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Graphical Representation - Top Industries */}
          <div className="row">
            <div className="col-md-6">
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">Top Industries</h3>
                </div>
                <div className="card-body">
                  <ul className="list-unstyled">
                    {topIndustriesData.map((item, index) => (
                      <li key={index} className="progress-group">
                        {item.label}
                        <span className="float-right"><b>{item.value}</b>/100</span>
                        <div className="progress progress-sm">
                          <div className="progress-bar bg-primary" style={{ width: `${item.value}%` }}></div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Graphical Representation - Consultant Expertise */}
            <div className="col-md-6">
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">Consultant Expertise</h3>
                </div>
                <div className="card-body">
                  <ul className="list-unstyled">
                    {consultantExpertiseData.map((item, index) => (
                      <li key={index} className="progress-group">
                        {item.label}
                        <span className="float-right"><b>{item.value}</b>/100</span>
                        <div className="progress progress-sm">
                          <div className="progress-bar bg-success" style={{ width: `${item.value}%` }}></div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="row">
            <div className="col-md-6">
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">Quick Links</h3>
                </div>
                <div className="card-body">
                  <ul className="list-unstyled">
                    {quickLinks.map((item, index) => (
                      <li key={index}>
                        <a href={item.link}>{item.label}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </section>
    </div>
  );
};

export default Dashboard;

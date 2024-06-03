import React, { useState } from 'react';

const mockConsultants = [
  {
    id: 1,
    profilePicture: 'https://via.placeholder.com/150',
    name: 'John Doe',
    title: 'Software Engineer',
    company: 'ABC Inc.',
    hourlyRate: 50,
    availability: [
      { date: '2024-06-01', available: true },
      { date: '2024-06-02', available: false },
    ],
    rating: 4.5,
    allowed: true,
  },
  {
    id: 2,
    profilePicture: 'https://via.placeholder.com/150',
    name: 'Jane Smith',
    title: 'Data Scientist',
    company: 'XYZ Corp.',
    hourlyRate: 70,
    availability: [
      { date: '2024-06-01', available: true },
      { date: '2024-06-02', available: true },
    ],
    rating: 4.8,
    allowed: false,
  },
];

const ConsultantList = () => {
  const [consultants, setConsultants] = useState(mockConsultants);
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleRemove = (id) => {
    setConsultants(consultants.filter((consultant) => consultant.id !== id));
  };

  const handleToggleAllow = (id) => {
    setConsultants(
      consultants.map((consultant) =>
        consultant.id === id ? { ...consultant, allowed: !consultant.allowed } : consultant
      )
    );
  };

  const handleEdit = (id) => {
    console.log('Edit consultant with id:', id);
  };

  return (
    <div className="content-wrapper">
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 className="m-0">Consultant List</h1>
            </div>
            <div className="col-sm-6">
              <div className="input-group input-group-sm">
                <input type="text" className="form-control" placeholder="Search" />
                <div className="input-group-append">
                  <button className="btn btn-primary" type="button">Search</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content">
        <div className="container-fluid">
          <div className="card">
            <div className="card-body">
              <div className="row mb-3">
                <div className="col-md-3">
                  <input type="text" className="form-control" placeholder="Name" />
                </div>
                <div className="col-md-3">
                  <input type="text" className="form-control" placeholder="Expertise" />
                </div>
                <div className="col-md-3">
                  <input type="text" className="form-control" placeholder="Industry" />
                </div>
                <div className="col-md-3">
                  <input type="text" className="form-control" placeholder="Location" />
                </div>
              </div>
              <table className="table table-bordered table-hover">
                <thead>
                  <tr>
                    <th>Profile Picture</th>
                    <th>Name</th>
                    <th>Title</th>
                    <th>Company</th>
                    <th>Hourly Rate</th>
                    <th>Availability</th>
                    <th>Rating</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {consultants.map((consultant) => (
                    <tr key={consultant.id}>
                      <td>
                        <img src={consultant.profilePicture} alt="Profile" style={{ width: '50px', height: '50px' }} />
                      </td>
                      <td>{consultant.name}</td>
                      <td>{consultant.title}</td>
                      <td>{consultant.company}</td>
                      <td>${consultant.hourlyRate}</td>
                      <td>
                        <div className="availability">
                          {consultant.availability.map((slot) => (
                            <span key={slot.date} className={`slot ${slot.available ? 'available' : 'unavailable'}`}>
                              {slot.date}
                            </span>
                          ))}
                        </div>
                      </td>
                      <td>{consultant.rating}</td>
                      <td>
                        <div className="btn-group" role="group">
                          <button className="btn btn-warning btn-sm" onClick={() => handleEdit(consultant.id)}>
                            Edit
                          </button>
                          <button className="btn btn-danger btn-sm" onClick={() => handleRemove(consultant.id)}>
                            Remove
                          </button>
                          <button
                            className={`btn btn-sm ${consultant.allowed ? 'btn-secondary' : 'btn-success'}`}
                            onClick={() => handleToggleAllow(consultant.id)}
                          >
                            {consultant.allowed ? 'Disallow' : 'Allow'}
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="card-footer clearfix">
              <ul className="pagination pagination-sm m-0 float-right">
                <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                  <button className="page-link" onClick={() => handlePageChange(currentPage - 1)}>Previous</button>
                </li>
                <li className="page-item">
                  <button className="page-link" onClick={() => handlePageChange(1)}>1</button>
                </li>
                <li className="page-item">
                  <button className="page-link" onClick={() => handlePageChange(2)}>2</button>
                </li>
                <li className="page-item">
                  <button className="page-link" onClick={() => handlePageChange(currentPage + 1)}>Next</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsultantList;

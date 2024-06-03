// AddConsultant.js
import React, { useState } from 'react';

const AddConsultant = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    expertise: '',
    industry: '',
    location: '',
    availability: '',
    hourlyRate: '',
    profilePicture: '',
    bio: '',
    verification: '',
  });

  const handleNext = () => setStep(step + 1);
  const handlePrev = () => setStep(step - 1);
  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted Data:', formData);
  };

  return (
    <div className="content-wrapper">
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 className="m-0">Add Consultant</h1>
            </div>
          </div>
        </div>
      </div>
      <section className="content">
        <div className="container-fluid">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Step {step} of 8</h3>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                {step === 1 && (
                  <>
                    <div className="form-group">
                      <label htmlFor="name">Name</label>
                      <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="phone">Phone Number</label>
                      <input type="text" className="form-control" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
                    </div>
                  </>
                )}
                {step === 2 && (
                  <div className="form-group">
                    <label htmlFor="expertise">Expertise</label>
                    <input type="text" className="form-control" id="expertise" name="expertise" value={formData.expertise} onChange={handleChange} required />
                  </div>
                )}
                {step === 3 && (
                  <div className="form-group">
                    <label htmlFor="industry">Industry Experience</label>
                    <input type="text" className="form-control" id="industry" name="industry" value={formData.industry} onChange={handleChange} required />
                  </div>
                )}
                {step === 4 && (
                  <div className="form-group">
                    <label htmlFor="location">Location</label>
                    <input type="text" className="form-control" id="location" name="location" value={formData.location} onChange={handleChange} />
                  </div>
                )}
                {step === 5 && (
                  <div className="form-group">
                    <label htmlFor="availability">Availability</label>
                    <input type="text" className="form-control" id="availability" name="availability" value={formData.availability} onChange={handleChange} required />
                  </div>
                )}
                {step === 6 && (
                  <div className="form-group">
                    <label htmlFor="hourlyRate">Hourly Rate</label>
                    <input type="number" className="form-control" id="hourlyRate" name="hourlyRate" value={formData.hourlyRate} onChange={handleChange} required />
                  </div>
                )}
                {step === 7 && (
                  <>
                    <div className="form-group">
                      <label htmlFor="profilePicture">Profile Picture</label>
                      <input type="file" className="form-control" id="profilePicture" name="profilePicture" onChange={handleChange} />
                    </div>
                    <div className="form-group">
                      <label htmlFor="bio">Bio</label>
                      <textarea className="form-control" id="bio" name="bio" value={formData.bio} onChange={handleChange}></textarea>
                    </div>
                  </>
                )}
                {step === 8 && (
                  <div className="form-group">
                    <label htmlFor="verification">Verification Documents</label>
                    <input type="file" className="form-control" id="verification" name="verification" onChange={handleChange} required />
                  </div>
                )}
                <div className="form-navigation">
                  {step > 1 && <button type="button" className="btn btn-secondary" onClick={handlePrev}>Previous</button>}
                  {step < 8 && <button type="button" className="btn btn-primary" onClick={handleNext}>Next</button>}
                  {step === 8 && <button type="submit" className="btn btn-success">Submit</button>}
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AddConsultant;

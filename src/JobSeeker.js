import React, { useState, useEffect } from 'react';
import './Styles/JobSeeker.css'; // Import the CSS for styling

const JobSeeker = ({ jobs }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({ date: '', time: '', location: '', rating: '' });
  const [jobList, setJobList] = useState(() => {
    // Load jobs from localStorage or fallback to the `jobs` prop
    const savedJobs = localStorage.getItem('jobList');
    return savedJobs ? JSON.parse(savedJobs) : jobs;
  });

  // Synchronize `jobList` with `jobs` prop
  useEffect(() => {
    setJobList(jobs);
  }, [jobs]);

  // Save `jobList` to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('jobList', JSON.stringify(jobList));
  }, [jobList]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const handleRemoveJob = (jobId) => {
    setJobList((prevJobs) => {
      const updatedJobs = prevJobs.filter((job) => job.id !== jobId);
      localStorage.setItem('jobList', JSON.stringify(updatedJobs)); // Save to localStorage
      return updatedJobs;
    });
  };

  const filteredJobs = jobList.filter((job) => {
    return (
      (searchTerm === '' || job.title.toLowerCase().includes(searchTerm.toLowerCase()) || job.description.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (filters.date === '' || job.date === filters.date) &&
      (filters.time === '' || job.time === filters.time) &&
      (filters.location === '' || job.location.toLowerCase().includes(filters.location.toLowerCase())) &&
      (filters.rating === '' || job.poster.rating >= parseFloat(filters.rating))
    );
  });

  return (
    <div className="job-seeker-page">
      <div className="job-seeker-container">
        {/* Profile Section */}
        <section className="profile">
          <img
            className="profile-pic"
            src="/profile-placeholder.jpg"
            alt="Profile"
          />
          <div className="profile-details">
            <h2>Kiel M.</h2>
            <p>
              Jobs Completed: <span>2</span>
            </p>
            <p>
              Rating: <span>4.7</span>
            </p>
          </div>
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button>🔍</button>
            <p className="search-info">Click a Job to Message Host</p>
          </div>
        </section>

        {/* Jobs Section */}
        <section className="jobs">
          <div className="jobs-header">
            <h2>Available Jobs: {filteredJobs.length}</h2>
          </div>
          <div className="filters-horizontal">
            <label>
              Date
              <input
                type="date"
                name="date"
                value={filters.date}
                onChange={handleFilterChange}
              />
            </label>
            <label>
              Time
              <input
                type="time"
                name="time"
                value={filters.time}
                onChange={handleFilterChange}
              />
            </label>
            <label>
              Location
              <input
                type="text"
                name="location"
                placeholder="Enter location"
                value={filters.location}
                onChange={handleFilterChange}
              />
            </label>
            <label>
              Rating
              <input
                type="number"
                name="rating"
                min="1"
                max="5"
                step="0.1"
                placeholder="Min Rating"
                value={filters.rating}
                onChange={handleFilterChange}
              />
            </label>
          </div>
          <div className="job-list">
            {filteredJobs.map((job) => (
              <div key={job.id} className="job-card">
                <button
                  className="close-button"
                  onClick={() => handleRemoveJob(job.id)}
                >
                  X
                </button>
                <div className="job-details">
                  <h3>{job.title}</h3>
                  <p>{job.description}</p>
                  <p><strong>Price:</strong> {job.price}</p>
                  <p><strong>Date:</strong> {job.date}</p>
                  <p><strong>Time:</strong> {job.time}</p>
                  <p><strong>Location:</strong> {job.location}</p>
                </div>
                <div className="job-poster">
                  <div className="job-poster2">
                    <p>{job.poster.name}</p>
                    <p>Rating: {job.poster.rating}</p>
                  </div>
                  <img
                    className="poster-pic"
                    src={`/${job.poster.image}`}
                    alt={job.poster.name}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default JobSeeker;

import React, { useState, useEffect } from 'react';
import Header from './Header';
import Main from './Laniding';
import Footer from './Footer';
import FirstScreen from './FirstScreen';
import CreateAccount from './CreateAccount';
import JobSeeker from './JobSeeker';
import PostJob from './PostJob';
import Chat from './Chat'; // Import Chat component
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'; // Ensure the global styles are imported

function App() {
  const [jobs, setJobs] = useState([]);

  // Fetch jobs from Flask backend
  useEffect(() => {
    fetch('http://127.0.0.1:5000/jobs')
      .then((response) => response.json())
      .then((data) => setJobs(data))
      .catch((error) => console.error('Error fetching jobs:', error));
  }, []);

  const handleNewJob = (newJob) => {
    fetch('http://127.0.0.1:5000/jobs', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newJob)
    })
      .then((response) => response.json())
      .then((data) => setJobs((prevJobs) => [data, ...prevJobs]))
      .catch((error) => console.error('Error adding job:', error));
  };

  const handleRemoveJob = (id) => {
    fetch(`http://127.0.0.1:5000/jobs/${id}`, {
      method: 'DELETE'
    })
      .then(() => setJobs((prevJobs) => prevJobs.filter((job) => job.id !== id)))
      .catch((error) => console.error('Error deleting job:', error));
  };

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/FirstScreen" element={<FirstScreen />} />
          <Route path="/create-account" element={<CreateAccount />} />
          <Route path="/jobseeker" element={<JobSeeker jobs={jobs} onRemoveJob={handleRemoveJob} />} />
          <Route path="/postjob" element={<PostJob onNewJob={handleNewJob} />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

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
  const [jobs, setJobs] = useState(() => {
    // Load jobs from localStorage or initialize with default jobs
    const savedJobs = localStorage.getItem('jobList');
    return savedJobs
      ? JSON.parse(savedJobs)
      : [
          {
            id: 1,
            title: 'Clean Up Room',
            description: 'Help clean my room, it’s so messy!',
            date: '2024-12-15',
            time: '10:00 AM',
            location: 'East Campus Dorm',
            price: '$20',
            poster: {
              name: 'Chris M. Sr (CC)',
              rating: 3.5,
              image: 'poster1-placeholder.jpg',
            },
          },
          {
            id: 2,
            title: 'Pick Up Food',
            description: 'Please pick up food at Ferris for me!',
            date: '2024-12-16',
            time: '12:00 PM',
            location: 'Ferris Booth Commons',
            price: '$15',
            poster: {
              name: 'Stephanie R. Fr (GS)',
              rating: 3.9,
              image: 'poster2-placeholder.jpg',
            },
          },
          // Additional default jobs can go here...
        ];
  });

  // Save jobs to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('jobList', JSON.stringify(jobs));
  }, [jobs]);

  const handleNewJob = (newJob) => {
    setJobs((prevJobs) => [newJob, ...prevJobs]);
  };

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/FirstScreen" element={<FirstScreen />} />
          <Route path="/create-account" element={<CreateAccount />} />
          <Route path="/jobseeker" element={<JobSeeker jobs={jobs} />} />
          <Route path="/postjob" element={<PostJob onNewJob={handleNewJob} />} />
          <Route path="/chat" element={<Chat />} /> {/* Add Chat route */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

import React from 'react';
import Header from './Header';
import Main from './Laniding';
import Footer from './Footer';
import FirstScreen from './FirstScreen';
import CreateAccount from './CreateAccount';
import JobSeeker from './JobSeeker';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'; // Ensure the global styles are imported

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/FirstScreen" element={<FirstScreen />} />
          <Route path="/create-account" element={<CreateAccount />} />
          <Route path="/jobseeker" element={<JobSeeker />} /> {/* Updated path */}
        </Routes>
        <Footer /> {/* Ensure footer stays at the bottom */}
      </div>
    </Router>
  );
}

export default App;

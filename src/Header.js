import React from 'react';
import { Link } from 'react-router-dom';
import './Styles/Header.css';
import { FaHome, FaSignInAlt, FaComments, FaFlag, FaStar } from 'react-icons/fa'; // Import icons

function Header() {
  return (
    <header className="header">
      <div className="logo" onClick={() => (window.location.href = '/')}>
        CU Gigs
      </div>
      <nav className="nav">
        <Link to="/" className="nav-link">
          <FaHome className="icon" />
          <span>Home</span>
        </Link>
        <Link to="/login" className="nav-link">
          <FaSignInAlt className="icon" />
          <span>Log In</span>
        </Link>
        <Link to="/chat" className="nav-link"> {/* Update this link */}
          <FaComments className="icon" />
          <span>Chat</span>
        </Link>
        <Link to="/postjob" className="nav-link">
          <FaFlag className="icon" />
          <span>Post Job</span>
        </Link>
        <Link to="/jobseeker" className="nav-link">
          <FaStar className="icon" />
          <span>Job Seeker</span>
        </Link>
      </nav>
    </header>
  );
}

export default Header;

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
        <a href="#chat" className="nav-link">
          <FaComments className="icon" />
          <span>Chat</span>
        </a>
        <Link to="/post-job" className="nav-link">
          <FaFlag className="icon" />
          <span>Post/Find Job</span>
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

import React from 'react';
import { Link } from 'react-router-dom'; // Use Link for navigation
import './Styles/Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo" onClick={() => window.location.href = '/'}>CU Gigs</div>
      <nav className="nav">

        <Link to="/">Home</Link>
        <a href="#chat">Chat</a>
        <a href="#post-find-job">Post/Find Job</a>
      </nav>
    </header>
  );
}

export default Header;
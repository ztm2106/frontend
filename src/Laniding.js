import React from 'react';
import { Link } from 'react-router-dom'; // Use Link for navigation
import './Styles/Main.css';
import crownLogo from './crown-logo.png';

function Main() {
  return (
    <main className="main">
      <div className="crown-logo">
        <img src={crownLogo} alt="Crown Logo" />
      </div>
      <button className="login-button">Log In</button>
      <p><Link to="/FirstScreen">Click here to create an account</Link></p>
      <h2>Find flexible gigs that fit your schedule—stress-free!</h2>
    </main>
  );
}

export default Main;

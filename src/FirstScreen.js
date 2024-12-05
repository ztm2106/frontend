import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Styles/FirstScreen.css';

function FirstScreen() {
  const navigate = useNavigate();

  return (
    <div className="first-screen">
      <h1>CU Gigs</h1>
      <p>Are you here to find a job or to post one?</p>
      <div className="button-container">
        <button
          className="button_choice"
          onClick={() => navigate('/create-account')}
        >
          Get a job!
        </button>
        <span className="or">OR</span>
        <button
          className="button_choice"
          onClick={() => navigate('/create-account')}
        >
          Post a Job!
        </button>
      </div>
    </div>
  );
}

export default FirstScreen;

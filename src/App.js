import React from 'react';
import Header from './Header';
import Main from './Laniding';
import Footer from './Footer';
import FirstScreen from './FirstScreen';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CreateAccount from './CreateAccount'; // Import the new CreateAccount component

import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/FirstScreen" element={<FirstScreen />} />
          <Route path="/create-account" element={<CreateAccount />} />
        </Routes>
      <Footer />
    </div>
    </Router>
  );
}

export default App;

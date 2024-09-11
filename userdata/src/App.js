import React, { useState } from 'react';
import MultiStepForm from './MultiStepForm';
import './App.css'; 

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <div className="page-content">
            <h1>Welcome to Our Stylish Application</h1>
            <p>Experience our sleek design and user-friendly multi-step form!</p>
            <div className="button-group">
              <button className="btn btn-primary" onClick={() => setCurrentPage('form')}>Go to Form</button>
              <button className="btn btn-secondary" onClick={() => setCurrentPage('about')}>About Us</button>
            </div>
          </div>
        );
      case 'form':
        return <MultiStepForm />;
      case 'about':
        return (
          <div className="page-content">
            <h2>About Us</h2>
            <p>We are a forward-thinking company dedicated to creating beautiful, intuitive web applications.</p>
            <p>Our multi-step form showcases our commitment to user-centric design and seamless experiences.</p>
            <button className="btn btn-secondary" onClick={() => setCurrentPage('home')}>Back to Home</button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="app-container">
      <header>
        <nav>
          <button className={`nav-btn ${currentPage === 'home' ? 'active' : ''}`} onClick={() => setCurrentPage('home')}>Home</button>
          <button className={`nav-btn ${currentPage === 'form' ? 'active' : ''}`} onClick={() => setCurrentPage('form')}>Form</button>
          <button className={`nav-btn ${currentPage === 'about' ? 'active' : ''}`} onClick={() => setCurrentPage('about')}>About</button>
        </nav>
      </header>

      <main>
        {renderPage()}
      </main>

      <footer>
        <p>&copy; 2024 Your Stylish Company. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
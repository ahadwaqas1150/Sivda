import React, { useState } from 'react';
import './Hero.css';

function Hero() {
  const [activeTab, setActiveTab] = useState('recommended');

  // Function to handle tab click
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="hero-container">
      <div className="left-section">
        <h2>Domains</h2>
        <h1>Find the perfect domain and business name with Sivda</h1>
        <button className="cta-button">Try Domain Search</button>

        {/* Tab Buttons */}
        <div className="tab-buttons">
         
        </div>
      </div>

      <div className="right-section">
        <div className="content-block">
            <>
              <h3>Websites + Marketing</h3>
              <h2>Create your free website.</h2>
              <button className="cta-button-dark">Start for Free</button>
              <p className="small-text">No charge, no obligation, nothing to cancel.</p>
            </>
          
          
        </div>
      </div>
    </div>
  );
}

export default Hero;

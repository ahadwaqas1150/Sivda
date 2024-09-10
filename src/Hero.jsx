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
        <span className="new-badge">NEW</span>
        <h2>AI Suggested Domains</h2>
        <h1>Find the perfect domain and business name with AI.</h1>
        <button className="cta-button">Try AI Domain Search</button>

        {/* Tab Buttons */}
        <div className="tab-buttons">
          <button
            className={`tab-button ${activeTab === 'recommended' ? 'active' : ''}`}
            onClick={() => handleTabClick('recommended')}
          >
            Recommended
          </button>
          <button
            className={`tab-button ${activeTab === 'wordpress' ? 'active' : ''}`}
            onClick={() => handleTabClick('wordpress')}
          >
            WordPress
          </button>
          <button
            className={`tab-button ${activeTab === 'security' ? 'active' : ''}`}
            onClick={() => handleTabClick('security')}
          >
            Security
          </button>
        </div>
      </div>

      <div className="right-section">
        <div className="content-block">
          {/* Conditionally render content based on activeTab */}
          {activeTab === 'recommended' && (
            <>
              <h3>Websites + Marketing</h3>
              <h2>Create your free website.</h2>
              <button className="cta-button-dark">Start for Free</button>
              <p className="learn-more">Learn More</p>
              <p className="small-text">No charge, no obligation, nothing to cancel.</p>
            </>
          )}
          {activeTab === 'wordpress' && (
            <>
              <h3>WordPress Hosting</h3>
              <h2>Get WordPress Hosting for Your Website.</h2>
              <button className="cta-button-dark">Learn More</button>
              <p className="learn-more">Discover WordPress</p>
              <p className="small-text">Start with free hosting and upgrade anytime.</p>
            </>
          )}
          {activeTab === 'security' && (
            <>
              <h3>Website Security</h3>
              <h2>Secure your website with SSL certificates.</h2>
              <button className="cta-button-dark">Get Protected</button>
              <p className="learn-more">Find out more</p>
              <p className="small-text">Protect your site and your customers.</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Hero;

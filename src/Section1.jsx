import React, { useState } from 'react';
import './Section1.css';

function Section1() {
  const [activeTab, setActiveTab] = useState('recommended');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="business-container">
      <h1>What's first up for your business?</h1>

      {/* Tab Buttons */}
      <div className="tab-buttons">
        <button
          className={`tab-button ${activeTab === 'domains' ? 'active' : ''}`}
          onClick={() => handleTabClick('domains')}
        >
          Domains
        </button>
        <button
          className={`tab-button ${activeTab === 'recommended' ? 'active' : ''}`}
          onClick={() => handleTabClick('recommended')}
        >
          Recommended
        </button>
        <button
          className={`tab-button ${activeTab === 'wordpress-security' ? 'active' : ''}`}
          onClick={() => handleTabClick('wordpress-security')}
        >
          WordPress and Security
        </button>
      </div>

      {/* Content */}
      <div className="content-container">
        {activeTab === 'recommended' && (
          <>
            {/* First Card */}
            <div className="card-large">
              <div className="card-image email-image"></div>
              <div className="card-content">
                <h3>Professional Email Rs199 per user/mo</h3>
                <p>Earn trust from your customers with an email address that matches your domain.</p>
                <button className="cta-button">Get Started</button>
              </div>
            </div>

            {/* Two smaller cards */}
            <div className="small-cards-container">
              <div className="card-small">
                <h3>Websites Rs849/mo</h3>
                <p>Start for free and quickly design a beautiful, mobile-friendly site.</p>
                <button className="cta-button">Create Your Site</button>
              </div>
              <div className="card-small">
                <h3>Web Hosting Rs499/mo</h3>
                <p>Get fast load times and 99.9% uptime guaranteed.</p>
                <button className="cta-button">View Plans and Pricing</button>
              </div>
            </div>
          </>
        )}

        {/* Placeholder content for other tabs */}
        {activeTab === 'domains' && <div className="placeholder">Domains Tab Content</div>}
        {activeTab === 'wordpress-security' && (
          <div className="placeholder">WordPress and Security Tab Content</div>
        )}
      </div>
    </div>
  );
}

export default Section1;

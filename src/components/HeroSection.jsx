import React from 'react';
import './herosection.css';

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-boxes">
          <div className="box-1"> {/* First Box */}
            <h2 className="box-title">Make it easy</h2>
            <p className="box-text">Experience award-winning hosting 
                solutions with seamless connectivity, streamlined 
                performance, and premium support, delivering top-tier
                 reliability and speed.</p>
          </div>
          <div className="box-2"> {/* Second Box */}
            <h2 className="box-title">Box 2</h2>
            <p className="box-text">This is the second box.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

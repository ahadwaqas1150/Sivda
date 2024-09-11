import * as React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer>
      <div id="footer">
        <div id="footer-table">
          <section id="s1">
            <h1>About Us</h1>
            <p>
              A team of inspirational and creative minds working to bring groundbreaking innovation to software services. With a vision to redefine the playing field and shape the future of technology. A never-dying flame of passion, igniting the path to a brighter and more efficient future.
            </p>
          </section>
          <section id="s2">
            <h1>Quick Links</h1>
            <a href="#team">Blog</a>
            <a href="#about">Pricing</a>
            <a href="#services">Products</a>
          </section>
          <section id="s4">
            <div className="social-links">
              <h1>Socials</h1>
              <a href="https://www.instagram.com/quinixai/?hl=en" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://www.linkedin.com/in/quinix-ai-761748322/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </section>
        </div>
        <hr />
        <div id="footer-end">
          <p>
            &copy; 2024 Sivda. All Rights Reserved. Designed by Quinix
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

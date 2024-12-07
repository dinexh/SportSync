import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="dashboard-footer">
      <div className="footer-content">
        <p>&copy; 2024 Sports Management System. All rights reserved.</p>
        <div className="footer-links">
          <a href="/terms">Terms of Service</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="/contact">Contact Us</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 
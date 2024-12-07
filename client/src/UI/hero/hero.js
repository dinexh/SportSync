import React from 'react';
import './hero.css';

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <h1 className="hero-title">Welcome to SportSync</h1>
        <p className="hero-subtitle">Discover amazing possibilities with our innovative solutions</p>
        <div className="hero-buttons">
          <button className="hero-button primary">Get Started</button>
        </div>
      </div>
      <div className="hero-overlay"></div>
    </div>
  );
};

export default Hero;

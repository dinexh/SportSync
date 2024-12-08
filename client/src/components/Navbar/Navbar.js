import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [isAccountMenuOpen, setIsAccountMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/');
    setIsAccountMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/home" className="navbar-brand">
          <span className="brand-text">Sports</span>
          <span className="brand-text accent">Sync</span>
        </Link>
        
        <div className="navbar-links">
          <div className="nav-items">
            <Link to="/home" className="nav-link">
              <i className="fas fa-home"></i>
              <span>Home</span>
            </Link>
            <Link to="/live-matches" className="nav-link">
              <i className="fas fa-play-circle"></i>
              <span>Live</span>
            </Link>
            <Link to="/tournaments" className="nav-link">
              <i className="fas fa-trophy"></i>
              <span>Tournaments</span>
            </Link>
            <Link to="/athletes" className="nav-link">
              <i className="fas fa-running"></i>
              <span>Athletes</span>
            </Link>
            <Link to="/events" className="nav-link">
              <i className="fas fa-calendar-alt"></i>
              <span>Events</span>
            </Link>
            <Link to="/stats" className="nav-link">
              <i className="fas fa-chart-bar"></i>
              <span>Stats</span>
            </Link>
            {user && (
              <Link to="/events/create" className="nav-link create-event">
                <i className="fas fa-plus-circle"></i>
                <span>Create Event</span>
              </Link>
            )}
          </div>
          
          <div className="auth-section">
            {!user ? (
              <div className="auth-buttons">
                <Link to="/login" className="nav-button">Login</Link>
                <Link to="/register" className="nav-button primary">Register</Link>
              </div>
            ) : (
              <div className="account-dropdown">
                <button 
                  className="account-button"
                  onClick={() => setIsAccountMenuOpen(!isAccountMenuOpen)}
                >
                  <div className="avatar">
                    {user.name ? user.name[0].toUpperCase() : 'U'}
                  </div>
                  <i className={`fas fa-chevron-${isAccountMenuOpen ? 'up' : 'down'}`}></i>
                </button>
                {isAccountMenuOpen && (
                  <div className="account-menu">
                    <Link to="/account" onClick={() => setIsAccountMenuOpen(false)}>
                      <i className="fas fa-user-circle"></i>
                      Account
                    </Link>
                    <Link to="/account/registrations" onClick={() => setIsAccountMenuOpen(false)}>
                      <i className="fas fa-clipboard-list"></i>
                      My Registrations
                    </Link>
                    <Link to="/account/settings" onClick={() => setIsAccountMenuOpen(false)}>
                      <i className="fas fa-cog"></i>
                      Settings
                    </Link>
                    <button onClick={handleLogout} className="logout-button">
                      <i className="fas fa-sign-out-alt"></i>
                      Logout
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 
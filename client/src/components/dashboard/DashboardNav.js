import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import './DashboardNav.css';

const DashboardNav = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="dashboard-nav">
      <div className="dashboard-nav-left">
        <Link to="/" className="dashboard-logo">
          SportSync
        </Link>
        <span className="dashboard-role">{user.role.toUpperCase()}</span>
      </div>
      
      <div className="dashboard-nav-right">
        <div className="dashboard-user-info">
          <img 
            src={user.avatar || '/default-avatar.png'} 
            alt="Profile" 
            className="dashboard-avatar"
          />
          <span className="dashboard-username">{user.name}</span>
        </div>
        <button onClick={handleLogout} className="dashboard-logout-btn">
          Logout
        </button>
      </div>
    </nav>
  );
};

export default DashboardNav; 
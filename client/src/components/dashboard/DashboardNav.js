import React, { useContext } from 'react';
import { useAuth } from '../../context/AuthContext';
import './DashboardNav.css';

const DashboardNav = () => {
  const { user } = useAuth();
  console.log('User data in DashboardNav:', user);

  return (
    <nav className="dashboard-nav">
      <div className="dashboard-nav-left">
        <h2>Dashboard</h2>
      </div>
      <div className="dashboard-nav-right">
        <div className="user-info">
          <span className="user-name">{user?.displayName || user?.email || 'User'}</span>
          <span className="user-role">{user?.userType || 'Guest'}</span>
        </div>
        <div className="user-avatar">
          <span className="avatar-placeholder">👤</span>
        </div>
      </div>
    </nav>
  );
};

export default DashboardNav; 
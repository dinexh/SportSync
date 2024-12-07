import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from '../../../components/sidebar/Sidebar';
import Overview from './components/Overview';
import Games from './components/Games';
import Teams from './components/Teams';
import Favorites from './components/Favorites';
import Profile from './components/Profile';
import '../Dashboard.css';

const UserDashboard = () => {
  const menuItems = [
    { title: 'Overview', path: '/dashboard/user', icon: '📊' },
    { title: 'Games', path: '/dashboard/user/games', icon: '⚽' },
    { title: 'Teams', path: '/dashboard/user/teams', icon: '👥' },
    { title: 'Favorites', path: '/dashboard/user/favorites', icon: '⭐' },
    { title: 'Profile', path: '/dashboard/user/profile', icon: '👤' },
  ];

  return (
    <div className="dashboard-container">
      <Sidebar menuItems={menuItems} />
      <div className="dashboard-content">
        <Routes>
          <Route path="/" element={<Overview />} />
          <Route path="/games" element={<Games />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </div>
  );
};

export default UserDashboard; 
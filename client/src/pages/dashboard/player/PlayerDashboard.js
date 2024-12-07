import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from '../../../components/sidebar/Sidebar';
import Profile from './components/Profile';
import MyMatches from './components/MyMatches';
import Schedule from './components/Schedule';
import Home from './components/Home';
import '../Dashboard.css';

const PlayerDashboard = () => {
  const menuItems = [
    { title: 'Home', path: '/player', icon: '🏠' },
    { title: 'My Matches', path: '/matches', icon: '⚽' },
    { title: 'My Schedule', path: '/schedule', icon: '📅' },
    { title: 'Profile', path: '/profile', icon: '👤' },
  ];

  return (
    <div className="dashboard-container">
      <Sidebar menuItems={menuItems} />
      <div className="dashboard-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/matches" element={<MyMatches />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </div>
  );
};

export default PlayerDashboard; 
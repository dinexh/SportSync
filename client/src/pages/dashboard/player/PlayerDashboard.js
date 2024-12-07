import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from '../../../components/sidebar/Sidebar';
import '../Dashboard.css';

const PlayerDashboard = () => {
  const menuItems = [
    { title: 'Overview', path: '/dashboard/player', icon: '�' },
    { title: 'My Team', path: '/dashboard/player/team', icon: '👥' },
    { title: 'Training', path: '/dashboard/player/training', icon: '💪' },
    { title: 'Schedule', path: '/dashboard/player/schedule', icon: '📅' },
    { title: 'My Stats', path: '/dashboard/player/stats', icon: '📈' },
    { title: 'Profile', path: '/dashboard/player/profile', icon: '👤' },
  ];

  return (
    <div className="dashboard-container">
      <Sidebar menuItems={menuItems} />
      <div className="dashboard-content">
        <Routes>
          <Route path="/" element={<h1>Player Overview</h1>} />
          <Route path="/team" element={<h1>My Team</h1>} />
          <Route path="/training" element={<h1>Training Schedule</h1>} />
          <Route path="/schedule" element={<h1>Game Schedule</h1>} />
          <Route path="/stats" element={<h1>My Statistics</h1>} />
          <Route path="/profile" element={<h1>Player Profile</h1>} />
        </Routes>
      </div>
    </div>
  );
};

export default PlayerDashboard; 
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from '../../../components/sidebar/Sidebar';
import DashboardNav from '../../../components/dashboard/DashboardNav';
import '../Dashboard.css';

const CoachDashboard = () => {
  const menuItems = [
    { title: 'Overview', path: '/dashboard/coach', icon: '👥' },
    { title: 'My Teams', path: '/dashboard/coach/teams', icon: '👥' },
    { title: 'Training Plans', path: '/dashboard/coach/training', icon: '📋' },
    { title: 'Schedule', path: '/dashboard/coach/schedule', icon: '📅' },
    { title: 'Player Stats', path: '/dashboard/coach/stats', icon: '📈' },
    { title: 'Settings', path: '/dashboard/coach/settings', icon: '⚙️' },
  ];

  return (
    <div className="dashboard-container">
      <Sidebar menuItems={menuItems} />
      <div className="dashboard-main">
        <DashboardNav />
        <div className="dashboard-content">
          <Routes>
            <Route path="/" element={<h1>Coach Overview</h1>} />
            <Route path="/teams" element={<h1>Team Management</h1>} />
            <Route path="/training" element={<h1>Training Plans</h1>} />
            <Route path="/schedule" element={<h1>Schedule</h1>} />
            <Route path="/stats" element={<h1>Player Statistics</h1>} />
            <Route path="/settings" element={<h1>Settings</h1>} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default CoachDashboard; 
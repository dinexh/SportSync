import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from '../../../components/sidebar/Sidebar';
import DashboardNav from '../../../components/dashboard/DashboardNav';
import Footer from '../../../components/dashboard/Footer';
import Home from './components/Home';
import LatestResults from './components/LatestResults';
import PlayerStats from './components/PlayerStats';
import Schedule from './components/Schedule';
import Profile from './components/Profile';
import '../Dashboard.css';

const UserDashboard = () => {
  const menuItems = [
    { title: 'Home', path: '/', icon: '🏠' },
    { title: 'Latest Results', path: '/results', icon: '📊' },
    { title: 'Player Stats', path: '/stats', icon: '📈' },
    { title: 'Schedule', path: '/schedule', icon: '📅' },
    { title: 'Profile', path: '/profile', icon: '👤' },
  ];

  return (
    <div className="dashboard-container">
      <Sidebar menuItems={menuItems} />
      <div className="dashboard-main">
        <DashboardNav />
        <div className="dashboard-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/results" element={<LatestResults />} />
            <Route path="/stats" element={<PlayerStats />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default UserDashboard; 
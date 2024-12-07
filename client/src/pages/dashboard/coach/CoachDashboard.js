import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from '../../../components/sidebar/Sidebar';
import DashboardNav from '../../../components/dashboard/DashboardNav';
import ManageUsers from './components/ManageUsers';
import ManageEvents from './components/ManageEvents';
import ViewPlayers from './components/ViewPlayers';
import ViewEvents from './components/ViewEvents';
import Profile from './components/Profile';
import Home from './components/Home';
import '../Dashboard.css';

const CoachDashboard = () => {
  const menuItems = [
    { title: 'Home', path: '/dashboard/coach', icon: '🏠' },
    { title: 'Manage Users', path: '/users', icon: '👥' },
    { title: 'Manage Events', path: '/dashboard/coach/events', icon: '📋' },
    { title: 'View Players', path: '/dashboard/coach/players', icon: '👤' },
    { title: 'View Events', path: '/dashboard/coach/view-events', icon: '📅' },
    { title: 'Profile', path: '/dashboard/coach/profile', icon: '⚙️' },
  ];

  return (
    <div className="dashboard-container">
      <Sidebar menuItems={menuItems} />
      <div className="dashboard-main">
        <DashboardNav />
        <div className="dashboard-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<ManageUsers />} />
            <Route path="/events" element={<ManageEvents />} />
            <Route path="/players" element={<ViewPlayers />} />
            <Route path="/view-events" element={<ViewEvents />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default CoachDashboard; 
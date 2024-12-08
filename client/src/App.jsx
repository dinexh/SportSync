import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Auth/Login';
import Overview from './pages/Dashboard/Overview';
import Analytics from './pages/Dashboard/Analytics';
import Users from './pages/Dashboard/Users';
import Settings from './pages/Dashboard/Settings';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Overview />} />
        <Route path="/dashboard/analytics" element={<Analytics />} />
        <Route path="/dashboard/users" element={<Users />} />
        <Route path="/dashboard/settings" element={<Settings />} />
      </Routes>
    </Router>
  );
}

export default App; 
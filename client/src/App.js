import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Events from './pages/Events/Events';
import Account from './pages/Account/Account';
import Athletes from './pages/Athletes/Athletes';
import LiveMatches from './pages/LiveMatches/LiveMatches';
import Stats from './pages/Stats/Stats';
import Tournaments from './pages/Tournaments/Tournaments';
import './styles/pages.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="/home" element={<Home />} />
            <Route path="/events" element={<Events />} />
            <Route path="/account" element={<Account />} />
            <Route path="/athletes" element={<Athletes />} />
            <Route path="/live-matches" element={<LiveMatches />} />
            <Route path="/stats" element={<Stats />} />
            <Route path="/tournaments" element={<Tournaments />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App; 
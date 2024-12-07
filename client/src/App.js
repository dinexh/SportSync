import './App.css';
import './styles/toast.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';

// components
import Nav from './components/nav/nav';
import Footer from './components/footer/Footer';
import ProtectedRoute from './components/ProtectedRoute';

// UI
import Hero from './UI/hero/hero';
import Home from './UI/home/home';

// pages
import Register from './pages/auth/register/register';
import Login from './pages/auth/login/login';
import CoachDashboard from './pages/dashboard/coach/CoachDashboard';
import PlayerDashboard from './pages/dashboard/player/PlayerDashboard';
import UserDashboard from './pages/dashboard/user/UserDashboard';

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/dashboard/coach/*"
              element={
                <ProtectedRoute role="coach">
                  <CoachDashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/dashboard/player/*"
              element={
                <ProtectedRoute role="player">
                  <PlayerDashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/dashboard/user/*"
              element={
                <ProtectedRoute role="user">
                  <UserDashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/"
              element={
                <>
                  <Nav />
                  <Hero />
                  <Home />
                  <Footer />
                </>
              }
            />
          </Routes>
        </Router>
      </div>
    </AuthProvider>
  );
}

export default App;

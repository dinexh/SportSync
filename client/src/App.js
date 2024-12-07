import './App.css';
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
    <Router>
      <AuthProvider>
        <div className="App">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            
            {/* Protected Routes */}
            <Route element={<ProtectedRoute allowedRoles={['coach']} />}>
              <Route path="/dashboard/coach" element={<CoachDashboard />} />
            </Route>
            
            <Route element={<ProtectedRoute allowedRoles={['player']} />}>
              <Route path="/dashboard/player" element={<PlayerDashboard />} />
            </Route>
            
            <Route element={<ProtectedRoute allowedRoles={['user']} />}>
              <Route path="/dashboard/user" element={<UserDashboard />} />
            </Route>
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
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;

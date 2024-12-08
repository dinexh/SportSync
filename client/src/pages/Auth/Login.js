import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FaEnvelope, FaLock, FaSignInAlt } from 'react-icons/fa';
import './Login.css';

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create a mock user object
    const mockUser = {
      id: 1,
      name: 'Demo User',
      email: 'demo@example.com',
      role: 'user'
    };
    
    // Store mock user in localStorage
    localStorage.setItem('user', JSON.stringify(mockUser));
    
    // Navigate to home/dashboard
    navigate('/dashboard');
  };

  return (
    <div className="auth-container">
      <div className="login-card">
        <h2>Welcome Back!</h2>
        <p className="auth-subtitle">Login to access your KL Sports Hub account</p>
        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <label htmlFor="email">
              <FaEnvelope className="input-icon" /> Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">
              <FaLock className="input-icon" /> Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            <FaSignInAlt className="button-icon" /> Login
          </button>
        </form>
        <div className="auth-links">
          <Link to="/register">Register</Link>
        </div>
      </div>
    </div>
  );
};

export default Login; 
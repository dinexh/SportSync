import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { FaEnvelope, FaLock, FaSignInAlt } from 'react-icons/fa';
import './Login.css';
import { database } from '../../firebase/config';
import { ref, query, orderByChild, equalTo, get } from 'firebase/database';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userRef = query(
        ref(database, 'users'),
        orderByChild('email'),
        equalTo(email)
      );
      
      const snapshot = await get(userRef);
      
      if (snapshot.exists()) {
        const userData = Object.values(snapshot.val())[0];
        if (password === userData.password) {
          localStorage.setItem('user', JSON.stringify(userData));
          navigate('/home');
        } else {
          setError('Invalid password');
        }
      } else {
        setError('User not found');
      }

    } catch (error) {
      console.error('Login error:', error);
      setError('Failed to login. Please try again.');
    }
  };

  return (
    <div className="auth-container">
      <div className="login-card">
        <h2>Welcome Back!</h2>
        <p className="auth-subtitle">Login to access your KL Sports Hub account</p>
        {error && <div className="error-alert">{error}</div>}
        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <label htmlFor="email">
              <FaEnvelope className="input-icon" /> Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
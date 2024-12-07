import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const API_BASE_URL = 'http://localhost:5001';
axios.defaults.baseURL = API_BASE_URL;

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const login = async (email, password) => {
    try {
      const response = await axios.post('/api/auth/login', {
        email,
        password
      });

      const data = response.data;
      
      // Store the token and user info
      localStorage.setItem('token', data.token);
      setUser({
        name: data.name,
        userType: data.userType,
        token: data.token
      });

      // Redirect based on user type
      switch (data.userType) {
        case 'coach':
          navigate('/dashboard/coach');
          break;
        case 'player':
          navigate('/dashboard/player');
          break;
        default:
          navigate('/dashboard/user');
      }
    } catch (error) {
      console.error('Login error:', error.response?.data || error.message);
      throw new Error(error.response?.data?.message || error.message || 'Login failed');
    }
  };

  const register = async (userData) => {
    try {
      const response = await axios.post('/api/auth/register', userData);
      navigate('/login');
    } catch (error) {
      console.error('Registration error:', error.response?.data || error.message);
      throw new Error(error.response?.data?.message || error.message || 'Registration failed');
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext); 
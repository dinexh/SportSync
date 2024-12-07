import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const API_BASE_URL = 'http://localhost:5001';
axios.defaults.baseURL = API_BASE_URL;

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      const token = localStorage.getItem('token');
      if (token) {
        const response = await axios.get(`${API_BASE_URL}/api/auth/verify`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        setUser(response.data.user);
        setIsAuthenticated(true);
      }
    } catch (error) {
      console.error('Auth verification failed:', error);
      localStorage.removeItem('token');
    } finally {
      setLoading(false);
    }
  };

  const login = async (credentials) => {
    try {
      console.log('Attempting login to:', `${API_BASE_URL}/api/auth/login`);
      const response = await axios.post(`${API_BASE_URL}/api/auth/login`, credentials);
      
      // Check if we have a response and data
      if (!response || !response.data) {
        throw new Error('Invalid response from server');
      }

      const { token, user } = response.data;

      // Check for token
      if (!token) {
        throw new Error('Authentication failed: No token received');
      }

      // Store token
      localStorage.setItem('token', token);

      // Handle case where user object might be missing or incomplete
      const userData = {
        ...user,
        role: user?.role || 'user' // Default to 'user' role if none provided
      };

      setUser(userData);
      setIsAuthenticated(true);
      
      return userData.role;
    } catch (error) {
      console.error('Login error:', error);
      
      // Enhanced error handling
      if (error.response?.data) {
        throw error.response.data;
      } else if (error.request) {
        throw new Error('No response from server. Please check if the server is running.');
      } else {
        throw new Error(error.message || 'An unexpected error occurred');
      }
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, loading, login, logout }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext); 
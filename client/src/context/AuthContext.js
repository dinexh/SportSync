import React, { createContext, useState, useContext, useEffect } from 'react';
import { database } from '../firebase/config';
import { ref, get, query, orderByChild, equalTo } from 'firebase/database';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for stored user data when the app loads
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setCurrentUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
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
          setCurrentUser(userData);
          localStorage.setItem('user', JSON.stringify(userData));
          return userData;
        } else {
          throw new Error('Invalid password');
        }
      } else {
        throw new Error('User not found');
      }
    } catch (error) {
      throw error;
    }
  };

  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem('user');
  };

  const value = {
    currentUser,
    login,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
} 
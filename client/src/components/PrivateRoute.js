import React from 'react';
import { Route } from 'react-router-dom';

// Simply render the child component without any protection
const PrivateRoute = ({ children }) => {
  return children;
};

export default PrivateRoute; 
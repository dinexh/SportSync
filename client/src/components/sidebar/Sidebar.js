import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = ({ menuItems }) => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h3>Sports Dashboard</h3>
      </div>
      <nav className="sidebar-nav">
        {menuItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className={({ isActive }) => 
              isActive ? 'sidebar-link active' : 'sidebar-link'
            }
            end
          >
            <span className="sidebar-icon">{item.icon}</span>
            <span className="sidebar-title">{item.title}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar; 
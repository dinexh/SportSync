import React from 'react';

const Home = () => {
  return (
    <div className="dashboard-home">
      <h2>Welcome, Coach!</h2>
      <div className="dashboard-stats">
        <div className="stat-card">
          <h3>Total Players</h3>
          <p>0</p>
        </div>
        <div className="stat-card">
          <h3>Upcoming Events</h3>
          <p>0</p>
        </div>
        <div className="stat-card">
          <h3>Recent Activities</h3>
          <p>0</p>
        </div>
      </div>
    </div>
  );
};

export default Home; 
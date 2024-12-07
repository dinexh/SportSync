import React from 'react';

const Home = () => {
  return (
    <div className="dashboard-page">
      <h1>Welcome to Your Dashboard</h1>
      <div className="dashboard-cards">
        <div className="dashboard-card">
          <h3>Next Match</h3>
          <p>vs Team Alpha</p>
          <p>Saturday, 2:00 PM</p>
        </div>
        <div className="dashboard-card">
          <h3>Recent Performance</h3>
          <p>Goals: 2</p>
          <p>Assists: 1</p>
        </div>
        <div className="dashboard-card">
          <h3>Team Updates</h3>
          <p>New training schedule posted</p>
        </div>
      </div>
    </div>
  );
};

export default Home; 
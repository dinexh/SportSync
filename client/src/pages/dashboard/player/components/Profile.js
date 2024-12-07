import React from 'react';

const Profile = () => {
  return (
    <div className="dashboard-page">
      <h1>My Profile</h1>
      <div className="dashboard-cards">
        <div className="dashboard-card">
          <h3>Personal Information</h3>
          <p>Name: John Doe</p>
          <p>Position: Forward</p>
          <p>Jersey Number: 10</p>
          <p>Age: 23</p>
        </div>
        <div className="dashboard-card">
          <h3>Contact Details</h3>
          <p>Email: john.doe@example.com</p>
          <p>Phone: (555) 123-4567</p>
          <p>Address: 123 Sports Street</p>
        </div>
        <div className="dashboard-card">
          <h3>Team Information</h3>
          <p>Current Team: Warriors FC</p>
          <p>Join Date: January 2023</p>
          <p>Contract Status: Active</p>
        </div>
      </div>
    </div>
  );
};

export default Profile; 
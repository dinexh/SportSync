import React from 'react';

function Account() {
  const userProfile = {
    name: "John Doe",
    email: "john@example.com",
    memberSince: "2024",
    favoriteEvents: ["Wrestling", "BJJ"]
  };

  return (
    <div className="account-page">
      <h1>My Account</h1>
      <div className="profile-section">
        <h2>Profile Information</h2>
        <p>Name: {userProfile.name}</p>
        <p>Email: {userProfile.email}</p>
        <p>Member Since: {userProfile.memberSince}</p>
        <h3>Favorite Events</h3>
        <ul>
          {userProfile.favoriteEvents.map((event, index) => (
            <li key={index}>{event}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Account; 
import React, { useState, useEffect } from 'react';

const Profile = () => {
  const [profile, setProfile] = useState({
    name: '',
    email: '',
    phone: '',
    specialization: '',
    experience: ''
  });

  useEffect(() => {
    // Fetch profile data here
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle profile update here
  };

  return (
    <div className="profile">
      <h2>Profile Settings</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            value={profile.name}
            onChange={(e) => setProfile({...profile, name: e.target.value})}
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={profile.email}
            onChange={(e) => setProfile({...profile, email: e.target.value})}
          />
        </div>
        <div className="form-group">
          <label>Phone</label>
          <input
            type="tel"
            value={profile.phone}
            onChange={(e) => setProfile({...profile, phone: e.target.value})}
          />
        </div>
        <div className="form-group">
          <label>Specialization</label>
          <input
            type="text"
            value={profile.specialization}
            onChange={(e) => setProfile({...profile, specialization: e.target.value})}
          />
        </div>
        <div className="form-group">
          <label>Experience (years)</label>
          <input
            type="number"
            value={profile.experience}
            onChange={(e) => setProfile({...profile, experience: e.target.value})}
          />
        </div>
        <button type="submit">Update Profile</button>
      </form>
    </div>
  );
};

export default Profile; 
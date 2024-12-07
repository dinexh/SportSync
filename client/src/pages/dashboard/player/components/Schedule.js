import React from 'react';

const Schedule = () => {
  const scheduleItems = [
    {
      date: '2024-03-25',
      time: '14:00',
      type: 'Match',
      details: 'vs Eagles FC',
      location: 'Main Stadium'
    },
    {
      date: '2024-03-27',
      time: '10:00',
      type: 'Training',
      details: 'Team Practice',
      location: 'Training Ground'
    },
    {
      date: '2024-03-30',
      time: '15:30',
      type: 'Match',
      details: 'vs United FC',
      location: 'Away Stadium'
    }
  ];

  return (
    <div className="dashboard-page">
      <h1>My Schedule</h1>
      <div className="matches-list">
        {scheduleItems.map((item, index) => (
          <div key={index} className="match-card">
            <h3>{item.type}</h3>
            <p>Date: {item.date}</p>
            <p>Time: {item.time}</p>
            <p>Details: {item.details}</p>
            <p>Location: {item.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Schedule; 
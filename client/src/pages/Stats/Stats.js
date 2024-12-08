import React from 'react';
import './PlayerStats.css';
function Stats() {
  const statistics = {
    topAthletes: [
      { name: "John Smith", wins: 15, losses: 2 },
      { name: "Maria Garcia", wins: 12, losses: 3 },
    ],
    popularEvents: [
      { name: "Wrestling", participants: 150 },
      { name: "BJJ", participants: 200 },
    ]
  };

  return (
    <div className="stats-page">
      <h1>Statistics</h1>
      <div className="stats-section">
        <h2>Top Athletes</h2>
        {statistics.topAthletes.map((athlete, index) => (
          <div key={index} className="athlete-stats">
            <p>{athlete.name}: {athlete.wins}W - {athlete.losses}L</p>
          </div>
        ))}
        
        <h2>Popular Events</h2>
        {statistics.popularEvents.map((event, index) => (
          <div key={index} className="event-stats">
            <p>{event.name}: {event.participants} participants</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Stats; 
import React from 'react';

function Tournaments() {
  const tournaments = [
    { 
      id: 1, 
      name: "World Wrestling Championship 2024",
      date: "2024-06-15",
      location: "New York, USA",
      status: "Upcoming"
    },
    { 
      id: 2, 
      name: "International BJJ Open",
      date: "2024-07-20",
      location: "Rio de Janeiro, Brazil",
      status: "Registration Open"
    },
  ];

  return (
    <div className="tournaments-page">
      <h1>Tournaments</h1>
      <div className="tournaments-grid">
        {tournaments.map(tournament => (
          <div key={tournament.id} className="tournament-card">
            <h3>{tournament.name}</h3>
            <p>Date: {tournament.date}</p>
            <p>Location: {tournament.location}</p>
            <p>Status: {tournament.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tournaments; 
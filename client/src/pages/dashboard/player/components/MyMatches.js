import React from 'react';

const MyMatches = () => {
  const matches = [
    { date: '2024-03-20', opponent: 'Team Alpha', result: 'Won 2-1' },
    { date: '2024-03-15', opponent: 'Team Beta', result: 'Draw 1-1' },
    { date: '2024-03-10', opponent: 'Team Gamma', result: 'Lost 0-2' },
  ];

  return (
    <div className="dashboard-page">
      <h1>My Matches</h1>
      <div className="matches-list">
        {matches.map((match, index) => (
          <div key={index} className="match-card">
            <h3>{match.opponent}</h3>
            <p>Date: {match.date}</p>
            <p>Result: {match.result}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyMatches; 
import React from 'react';

function LiveMatches() {
  const liveMatches = [
    { id: 1, event: "Wrestling Championship", athlete1: "John Smith", athlete2: "Mike Johnson", score: "2-1" },
    { id: 2, event: "BJJ Tournament", athlete1: "Sarah Connor", athlete2: "Maria Garcia", score: "Ongoing" },
  ];

  return (
    <div className="live-matches-page">
      <h1>Live Matches</h1>
      <div className="matches-grid">
        {liveMatches.map(match => (
          <div key={match.id} className="match-card">
            <h3>{match.event}</h3>
            <p>{match.athlete1} vs {match.athlete2}</p>
            <p>Score: {match.score}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LiveMatches;
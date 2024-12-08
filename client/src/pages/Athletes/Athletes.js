import React from 'react';

function Athletes() {
  const athletes = [
    { id: 1, name: "John Smith", sport: "Wrestling", rank: "1st", country: "USA" },
    { id: 2, name: "Maria Garcia", sport: "BJJ", rank: "2nd", country: "Brazil" },
    { id: 3, name: "Mike Johnson", sport: "Wrestling", rank: "3rd", country: "Canada" },
  ];

  return (
    <div className="athletes-page">
      <h1>Athletes</h1>
      <div className="athletes-grid">
        {athletes.map(athlete => (
          <div key={athlete.id} className="athlete-card">
            <h3>{athlete.name}</h3>
            <p>Sport: {athlete.sport}</p>
            <p>Rank: {athlete.rank}</p>
            <p>Country: {athlete.country}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Athletes;
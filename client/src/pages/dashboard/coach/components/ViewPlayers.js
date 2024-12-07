import React, { useState, useEffect } from 'react';

const ViewPlayers = () => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    // Fetch players data here
  }, []);

  return (
    <div className="view-players">
      <h2>View Players</h2>
      <div className="players-list">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Position</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {players.map((player) => (
              <tr key={player.id}>
                <td>{player.name}</td>
                <td>{player.age}</td>
                <td>{player.position}</td>
                <td>{player.status}</td>
                <td>
                  <button>View Details</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewPlayers; 
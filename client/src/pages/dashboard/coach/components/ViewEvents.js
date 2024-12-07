import React, { useState, useEffect } from 'react';

const ViewEvents = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Fetch events data here
  }, []);

  return (
    <div className="view-events">
      <h2>View Events</h2>
      <div className="events-list">
        <table>
          <thead>
            <tr>
              <th>Event Name</th>
              <th>Date</th>
              <th>Location</th>
              <th>Participants</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {events.map((event) => (
              <tr key={event.id}>
                <td>{event.name}</td>
                <td>{event.date}</td>
                <td>{event.location}</td>
                <td>{event.participants}</td>
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

export default ViewEvents; 
import React, { useState, useEffect } from 'react';

const ManageEvents = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Fetch events data here
  }, []);

  return (
    <div className="manage-events">
      <h2>Manage Events</h2>
      <button className="create-event-btn">Create New Event</button>
      <div className="events-list">
        <table>
          <thead>
            <tr>
              <th>Event Name</th>
              <th>Date</th>
              <th>Location</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {events.map((event) => (
              <tr key={event.id}>
                <td>{event.name}</td>
                <td>{event.date}</td>
                <td>{event.location}</td>
                <td>{event.status}</td>
                <td>
                  <button>Edit</button>
                  <button>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageEvents; 
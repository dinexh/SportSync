import React from 'react';
import './Events.css';

function Events() {
  const events = [
    {
      id: 1,
      title: "Summer Wrestling Championship",
      date: "June 15-20, 2024",
      location: "New York, USA",
      category: "Wrestling",
      registrationDeadline: "May 30, 2024",
      status: "Registration Open"
    },
    {
      id: 2,
      title: "International BJJ Tournament",
      date: "July 1-3, 2024",
      location: "Rio de Janeiro, Brazil",
      category: "BJJ",
      registrationDeadline: "June 15, 2024",
      status: "Registration Open"
    },
    {
      id: 3,
      title: "National Grappling Series",
      date: "August 5-7, 2024",
      location: "Las Vegas, USA",
      category: "Grappling",
      registrationDeadline: "July 20, 2024",
      status: "Coming Soon"
    }
  ];

  return (
    <div className="events-page">
      <h1>Upcoming Events</h1>
      <div className="events-grid">
        {events.map(event => (
          <div key={event.id} className="event-card">
            <div className="event-header">
              <h3>{event.title}</h3>
              <span className={`status-badge ${event.status.toLowerCase().replace(' ', '-')}`}>
                {event.status}
              </span>
            </div>
            <div className="event-details">
              <p><i className="fas fa-calendar"></i> {event.date}</p>
              <p><i className="fas fa-map-marker-alt"></i> {event.location}</p>
              <p><i className="fas fa-tag"></i> {event.category}</p>
              <p><i className="fas fa-clock"></i> Registration Deadline: {event.registrationDeadline}</p>
            </div>
            <button className="register-button">Register Now</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Events; 
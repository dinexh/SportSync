import React from 'react';
import './Home.css';

function Home() {
  const featuredEvents = [
    {
      id: 1,
      title: "World Wrestling Championship",
      date: "June 15-20, 2024",
      location: "New York, USA",
      image: "https://placehold.co/300x200"
    },
    {
      id: 2,
      title: "International BJJ Open",
      date: "July 1-3, 2024",
      location: "Rio de Janeiro, Brazil",
      image: "https://placehold.co/300x200"
    }
  ];

  const upcomingMatches = [
    {
      id: 1,
      title: "Quarter Finals - Wrestling",
      athletes: "John Smith vs Mike Johnson",
      time: "2:00 PM EST"
    },
    {
      id: 2,
      title: "Semi Finals - BJJ",
      athletes: "Maria Garcia vs Sarah Connor",
      time: "4:30 PM EST"
    }
  ];

  return (
    <div className="home-page">
      <section className="hero-section">
        <h1>Welcome to SportSync</h1>
        <p>Your ultimate destination for combat sports events and tournaments</p>
      </section>

      <section className="featured-events">
        <h2>Featured Events</h2>
        <div className="events-grid">
          {featuredEvents.map(event => (
            <div key={event.id} className="event-card">
              <img src={event.image} alt={event.title} />
              <h3>{event.title}</h3>
              <p>{event.date}</p>
              <p>{event.location}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="upcoming-matches">
        <h2>Upcoming Matches</h2>
        <div className="matches-list">
          {upcomingMatches.map(match => (
            <div key={match.id} className="match-item">
              <h3>{match.title}</h3>
              <p>{match.athletes}</p>
              <p>Starting at: {match.time}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;

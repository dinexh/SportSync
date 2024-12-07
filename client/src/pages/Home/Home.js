import React from 'react';
import './Home.css';

const sportsData = [
  {
    name: 'BASKETBALL',
    description: 'Join our elite basketball program featuring professional coaching, state-of-the-art facilities, and competitive leagues.'
  },
  {
    name: 'CRICKET',
    description: 'Experience cricket at its finest with specialized training programs, modern pitches, and year-round tournaments.'
  },
  {
    name: 'FOOTBALL',
    description: 'Elevate your football skills with expert coaching, advanced training methods, and competitive matches.'
  },
  {
    name: 'VOLLEYBALL',
    description: 'Master volleyball techniques through intensive training programs and participate in regional championships.'
  },
  {
    name: 'SWIMMING',
    description: 'Dive into excellence with our Olympic-sized pool, certified instructors, and comprehensive aquatics program.'
  },
  {
    name: 'TENNIS',
    description: 'Perfect your serve on our professional courts with personalized coaching and regular tournaments.'
  }
];

const upcomingEvents = [
  {
    id: 1,
    title: "University Sports Championship 2024",
    date: "2024-05-10",
    time: "09:00",
    venue: "University Sports Complex",
    teams: "All University Teams",
    sport: "Multi-Sport Event"
  },
  {
    id: 2,
    title: "Summer Tennis Tournament",
    date: "2024-05-15",
    time: "10:00",
    venue: "Central Tennis Courts",
    teams: "16 Players Knockout",
    sport: "Tennis"
  },
  {
    id: 3,
    title: "Swimming Gala",
    date: "2024-05-20",
    time: "14:00",
    venue: "Olympic Pool Complex",
    teams: "Individual & Team Events",
    sport: "Swimming"
  }
];

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Student Athlete",
    quote: "SportsSync has transformed my athletic journey. The professional coaching and facilities have helped me achieve new personal bests.",
    sport: "Swimming"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Team Captain",
    quote: "The competitive environment and structured training programs have significantly improved our team's performance.",
    sport: "Basketball"
  },
  {
    id: 3,
    name: "Emma Williams",
    role: "Sports Scholar",
    quote: "Thanks to SportsSync, I've been able to balance my academics with sports excellence. The support system is incredible.",
    sport: "Tennis"
  }
];

const Home = () => {
  return (
    <div className="home-container">
      <div className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1>ELEVATE YOUR GAME</h1>
            <h2>WITH SPORTSYNC</h2>
            <p>Your Ultimate Platform for Sports Excellence</p>
          </div>
          <div className="hero-buttons">
            <button className="cta-button primary">Get Started</button>
            <button className="cta-button secondary">Learn More</button>
          </div>
        </div>
      </div>

      <section className="stats-section">
        <div className="stat-card">
          <div className="stat-content">
            <h3>1000+</h3>
            <p>Active Athletes</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-content">
            <h3>50+</h3>
            <p>Championships</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-content">
            <h3>100+</h3>
            <p>Annual Events</p>
          </div>
        </div>
      </section>

      <section className="sports-section">
        <div className="section-header">
          <span className="section-subtitle">OUR PROGRAMS</span>
          <h2 className="section-title">EXPLORE SPORTS</h2>
        </div>
        <div className="sports-grid">
          {sportsData.map((sport, index) => (
            <div key={index} className="sport-card">
              <h3>{sport.name}</h3>
              <p>{sport.description}</p>
              <button className="learn-more-btn">
                Explore <span className="arrow">→</span>
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* <section className="events-section">
        <div className="section-header">
          <span className="section-subtitle">WHAT'S HAPPENING</span>
          <h2 className="section-title">UPCOMING EVENTS</h2>
        </div>
        <div className="events-container">
          {upcomingEvents.map((event) => (
            <div key={event.id} className="event-card">
              <div className="event-content">
                <div className="event-header">
                  <span className="event-date">
                    {new Date(event.date).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric'
                    })}
                  </span>
                  <span className="event-time">{event.time}</span>
                </div>
                <h3>{event.title}</h3>
                <div className="event-details">
                  <p>{event.venue}</p>
                  <p>{event.teams}</p>
                </div>
                <div className="event-footer">
                  <span className="event-sport-tag">{event.sport}</span>
                  <button className="register-btn">Register</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section> */}

      <section className="testimonials-section">
        <div className="section-header">
          <span className="section-subtitle">SUCCESS STORIES</span>
          <h2 className="section-title">WHAT OUR ATHLETES SAY</h2>
        </div>
        <div className="testimonials-container">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="testimonial-content">
                <p className="quote">"{testimonial.quote}"</p>
                <div className="testimonial-author">
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.role}</p>
                  <span className="sport-tag">{testimonial.sport}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;

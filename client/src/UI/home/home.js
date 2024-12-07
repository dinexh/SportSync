import React, { useState, useEffect } from 'react';
import './home.css';
import authIcon from '../../assets/auth-illustration.svg';
import eventIcon from '../../assets/event-management.svg';
import liveIcon from '../../assets/live-updates.svg';
import statsIcon from '../../assets/statistics.svg';

const Home = () => {
  const [counts, setCounts] = useState({
    users: 0,
    events: 0,
    satisfaction: 0
  });

  const targetCounts = {
    users: 8547,
    events: 432,
    satisfaction: 97
  };

  useEffect(() => {
    const duration = 2000; // 2 seconds for the animation
    const steps = 50; // Number of steps in the animation
    const interval = duration / steps;

    const counters = {
      users: { start: 0, increment: targetCounts.users / steps },
      events: { start: 0, increment: targetCounts.events / steps },
      satisfaction: { start: 0, increment: targetCounts.satisfaction / steps }
    };

    let step = 0;
    const timer = setInterval(() => {
      if (step < steps) {
        setCounts(prev => ({
          users: Math.min(Math.round(counters.users.increment * step), targetCounts.users),
          events: Math.min(Math.round(counters.events.increment * step), targetCounts.events),
          satisfaction: Math.min(Math.round(counters.satisfaction.increment * step), targetCounts.satisfaction)
        }));
        step++;
      } else {
        clearInterval(timer);
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  const testimonials = [
    {
      name: "John Cooper",
      role: "Team Coach",
      text: "SportSync Pro has revolutionized how we manage our team. The real-time updates are game-changing!",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg"
    },
    {
      name: "Sarah Williams",
      role: "League Manager",
      text: "Managing multiple events has never been easier. This platform is exactly what we needed.",
      avatar: "https://randomuser.me/api/portraits/women/2.jpg"
    },
    {
      name: "Mike Johnson",
      role: "Sports Director",
      text: "The statistical analysis tools have helped us improve player performance significantly.",
      avatar: "https://randomuser.me/api/portraits/men/3.jpg"
    }
  ];

  return (
    <div className="home-container">
      <section id="stats" className="hero-section">
        <div className="hero-stats">
          <div className="stat-item">
            <span className="stat-number">{counts.users.toLocaleString()}+</span>
            <span className="stat-label">Active Users</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">{counts.events.toLocaleString()}+</span>
            <span className="stat-label">Events Managed</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">{counts.satisfaction}%</span>
            <span className="stat-label">Satisfaction</span>
          </div>
        </div>
      </section>

      <section id="features" className="features-grid">
        <div className="feature-card">
          <img src={authIcon} alt="Authentication" className="feature-icon" />
          <div className="feature-content">
            <h2>User Authentication</h2>
            <p>Secure role-based access for coaches, players, and viewers</p>
            <ul>
              <li>Role-based permissions</li>
              <li>Secure login system</li>
              <li>Profile management</li>
            </ul>
          </div>
        </div>

        <div className="feature-card">
          <img src={eventIcon} alt="Event Management" className="feature-icon" />
          <div className="feature-content">
            <h2>Event Management</h2>
            <p>Streamline your sports events organization</p>
            <ul>
              <li>Create and schedule events</li>
              <li>Manage participants</li>
              <li>Venue coordination</li>
            </ul>
          </div>
        </div>

        <div className="feature-card">
          <img src={liveIcon} alt="Live Updates" className="feature-icon" />
          <div className="feature-content">
            <h2>Live Updates</h2>
            <p>Never miss a moment with real-time updates</p>
            <ul>
              <li>Real-time scoring</li>
              <li>Live match status</li>
              <li>Instant notifications</li>
            </ul>
          </div>
        </div>

        <div className="feature-card">
          <img src={statsIcon} alt="Statistics" className="feature-icon" />
          <div className="feature-content">
            <h2>Player Statistics</h2>
            <p>Comprehensive performance tracking</p>
            <ul>
              <li>Performance metrics</li>
              <li>Historical data</li>
              <li>Progress tracking</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="testimonials" className="testimonials-section">
        <h2>What Our Users Say</h2>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <img src={testimonial.avatar} alt={testimonial.name} className="testimonial-avatar" />
              <p className="testimonial-text">{testimonial.text}</p>
              <div className="testimonial-info">
                <h3>{testimonial.name}</h3>
                <span>{testimonial.role}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default Home;

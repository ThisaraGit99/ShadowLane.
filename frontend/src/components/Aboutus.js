import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext'; // Import useAuth from AuthContext
import './Aboutus.css';

function AboutUs() {
  return (
    <div className="about-container">
      <h2>About ShadowLane</h2>
      <p>
        Welcome to ShadowLane, your number one source for all things tech. We're dedicated to giving you the very best of electronics, with a focus on quality, customer service, and uniqueness.
      </p>
      <p>
        Founded in 2024, ShadowLane has come a long way from its beginnings in a home office. When we first started out, our passion for technology drove us to start our own business.
      </p>
      <p>
        We hope you enjoy our products as much as we enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact us.
      </p>
      <p>
        Sincerely,<br />
        Thicharan Bandara, Founder
      </p>
    </div>
  );
}

export default AboutUs;

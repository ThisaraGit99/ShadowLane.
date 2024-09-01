import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext'; // Import useAuth from AuthContext
import './Contactus.css';

function ContactUs() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement your contact form submission logic here
    console.log('Message submitted:', { name, email, message });
    // Clear the form
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            required 
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </div>
        <div className="form-group">
          <label>Message:</label>
          <textarea 
            value={message} 
            onChange={(e) => setMessage(e.target.value)} 
            required 
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ContactUs;

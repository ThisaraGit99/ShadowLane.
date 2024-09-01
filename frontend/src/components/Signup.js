import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext'; // Import useAuth from AuthContext
import './Signup.css'; // Import the CSS file


function Signup() {
  const [fullName, setFullName] = useState(''); // New state for full name
  const [phoneNumber, setPhoneNumber] = useState(''); // New state for phone number
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const mockSignup = (email, password) => {
    console.log('User signed up:', email);
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (mockSignup(email, password)) {
      navigate('/login');
    } else {
      setError('Sign-up failed');
    }
  };

  return (
    <div className="signup-container">
      
      <form onSubmit={handleSubmit}>
        <h2>Sign Up Page</h2>
        <div>
          <label>Full Name:</label>
          <input 
            type="text" 
            value={fullName} 
            onChange={(e) => setFullName(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Phone Number:</label>
          <input 
            type="tel" 
            value={phoneNumber} 
            onChange={(e) => setPhoneNumber(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Email:</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Password:</label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Confirm Password:</label>
          <input 
            type="password" 
            value={confirmPassword} 
            onChange={(e) => setConfirmPassword(e.target.value)} 
            required 
          />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default Signup;


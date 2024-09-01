import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext'; // Import useAuth from AuthContext
import './Profile.css';

function Profile() {
  return (
    <div className="profile-container">
      <h2>User Profile</h2>
      <div className="profile-details">
        <p><strong>Full Name:</strong> John Doe</p>
        <p><strong>Email:</strong> johndoe@example.com</p>
        <p><strong>Phone Number:</strong> +1 234 567 890</p>
        <p><strong>Address:</strong> 123 Main Street, City, Country</p>
      </div>
    </div>
  );
}

export default Profile;

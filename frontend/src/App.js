import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './AuthContext'; // Ensure this path is correct
import NavBar from './components/NavBar'; // Ensure this path is correct
import HomePage from './components/HomePage'; // Your other components
import Login from './components/Login'; // Your login component
import Signup from './components/Signup'; // Your signup component
import Profile from './components/Profile';
import AboutUs from './components/Aboutus';
import ContactUs from './components/Contactus';

function App() {
  return (
    <AuthProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/about" element={<AboutUs/>} />
          <Route path="/contact" element={<ContactUs/>} />
          {/* Add other routes here  .. */}
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;

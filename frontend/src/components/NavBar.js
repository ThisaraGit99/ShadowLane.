import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../AuthContext'; // Import the useAuth hook
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.css'; // Your current css

function NavBar() {
  const { user, logout } = useAuth(); // Get user state and logout function from Auth context

  return (
    <nav className="navbar navbar-expand-lg custom-navbar">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          <span className="logo-letter-red">S</span>hadow<span className="logo-letter-red">L</span>ane
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown">
              <Link to="/products" className="nav-link dropdown-toggle custom-nav-link" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Products
              </Link>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><Link to="/products/electronics" className="dropdown-item">Electronics</Link></li>
                <li><Link to="/products/gadgets" className="dropdown-item">Gadgets</Link></li>
                <li><hr className="dropdown-divider" /></li>
                <li><Link to="/products/all" className="dropdown-item">All Products</Link></li>
              </ul>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link custom-nav-link">About Us</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link custom-nav-link">Contact</Link>
            </li>
          </ul>
          <form className="d-flex me-3">
            <div className="input-group">
              <input className="form-control custom-search" type="search" placeholder="Search" aria-label="Search" />
              <span className="input-group-text custom-search-icon">
                <i className="bi bi-search"></i>
              </span>
            </div>
          </form>
          <ul className="navbar-nav mb-2 mb-lg-0">
            {/* Conditional Rendering Based on User Authentication */}
            {user ? (
              <>
                {/* If user is logged in */}
                <li className="nav-item dropdown ms-auto">
                  <a href="#" className="nav-link dropdown-toggle custom-nav-link" id="userDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="bi bi-person-lines-fill"></i>
                  </a>
                  <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="userDropdown">
                    <li><Link to="/profile" className="dropdown-item">Profile</Link></li>
                    <li><Link to="/orders" className="dropdown-item">Orders</Link></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a href="/" className="dropdown-item" onClick={logout}>Logout</a></li> {/* Call logout on click */}
                  </ul>
                </li>
                <li className="nav-item ms-auto">
                  <Link to="/cart" className="nav-link custom-nav-link position-relative">
                    <i className="bi bi-cart"></i>
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                      3
                      <span className="visually-hidden">items in cart</span>
                    </span>
                  </Link>
                </li>
              </>
            ) : (
              // If user is not logged in
              <>
                <li className="nav-item ms-auto">
                  <Link to="/login" className="nav-link custom-nav-link">Login</Link>
                </li>
                <li className="nav-item ms-auto">
                  <Link to="/signup" className="nav-link custom-nav-link">Sign Up</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;

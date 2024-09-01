import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css'; // Your custom CSS

function Footer() {
  return (
    <footer className="footer bg-dark text-white pt-5 pb-4">
      <div className="container">
        <div className="row">
          {/* Newsletter Signup Section */}
          <div className="col-lg-3 col-md-6 mb-4">
            <h5 className="footer-title">Subscribe to our Newsletter</h5>
            <form className="d-flex">
              <input
                type="email"
                className="form-control me-2"
                placeholder="Enter your email"
                aria-label="Email"
              />
              <button className="btn btn-primary" type="submit">Subscribe</button>
            </form>
          </div>

          {/* Quick Links Section */}
          <div className="col-lg-3 col-md-6 mb-4">
            <h5 className="footer-title">Quick Links</h5>
            <ul className="list-unstyled">
              <li><Link to="/about" className="footer-link">About Us</Link></li>
              <li><Link to="/contact" className="footer-link">Contact Us</Link></li>
              <li><Link to="/faq" className="footer-link">FAQ</Link></li>
              <li><Link to="/shipping" className="footer-link">Returns & Shipping Policy</Link></li>
            </ul>
          </div>

          {/* Customer Service Section */}
          <div className="col-lg-3 col-md-6 mb-4">
            <h5 className="footer-title">Customer Service</h5>
            <ul className="list-unstyled">
              <li><Link to="/track-order" className="footer-link">Track Order</Link></li>
              <li><Link to="/help" className="footer-link">Help Center</Link></li>
              <li><Link to="/privacy-policy" className="footer-link">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service" className="footer-link">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div className="col-lg-3 col-md-6 mb-4">
            <h5 className="footer-title">Follow Us</h5>
            <ul className="list-inline mb-2">
              <li className="list-inline-item">
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="footer-social-link">
                  <i className="bi bi-facebook"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="footer-social-link">
                  <i className="bi bi-twitter"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="footer-social-link">
                  <i className="bi bi-instagram"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="footer-social-link">
                  <i className="bi bi-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="row mt-4">
          <div className="col text-center">
            <p className="mb-1">&copy; 2024 ShadowLane. All rights reserved.</p>
            <ul className="list-inline">
              <li className="list-inline-item"><Link to="/sitemap" className="footer-link">Site Map</Link></li>
              <li className="list-inline-item"><Link to="/careers" className="footer-link">Careers</Link></li>
              <li className="list-inline-item"><Link to="/blog" className="footer-link">Blog</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
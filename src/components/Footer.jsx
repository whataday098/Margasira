import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Margasira</h3>
            <p>Ancient Wisdom. Modern Wellness.</p>
            <p className="footer-text">Bringing you the finest Ayurvedic products for holistic health and beauty.</p>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/shop">Shop</a></li>
              <li><a href="/subscription">Subscription</a></li>
              <li><a href="/about">About Us</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Customer Care</h4>
            <ul>
              <li><a href="#shipping">Shipping Info</a></li>
              <li><a href="#returns">Returns</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Stay Connected</h4>
            <p className="footer-text">Subscribe to our newsletter for wellness tips and exclusive offers.</p>
            <form className="newsletter-form" onSubmit={(e) => {
              e.preventDefault();
              alert('Thank you for subscribing!');
              e.target.reset();
            }}>
              <input 
                type="email" 
                placeholder="Your email" 
                required 
                className="newsletter-input"
              />
              <button type="submit" className="btn btn-primary">Subscribe</button>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Margasira. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

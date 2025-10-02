import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const brandStyle = {
    color: 'rgb(255, 102, 163)',
    fontWeight: 'bold',
    fontSize: '1.5rem',
  };

  const ctaButtonStyle = {
    backgroundColor: 'rgb(255, 102, 163)',
    borderColor: 'rgb(255, 102, 163)',
    borderRadius: '50px',
    padding: '8px 25px',
  };

  const navLinkStyle = {
    fontSize: '1.1rem',
    fontWeight: '500',
    margin: '0 0.5rem',
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top py-3">
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center" to="/" style={brandStyle}>
          {/* Simple SVG Crown Logo */}
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="30" 
            height="30" 
            fill="currentColor" 
            className="bi bi-crown-fill me-2" 
            viewBox="0 0 16 16"
            style={{ color: 'rgb(255, 102, 163)' }}
          >
            <path d="M8 0a1.5 1.5 0 0 0-1.5 1.5h3A1.5 1.5 0 0 0 8 0M5.5 2A1.5 1.5 0 0 0 4 3.5h8A1.5 1.5 0 0 0 10.5 2zM2 5.5a1.5 1.5 0 0 0-1.5 1.5v3a1.5 1.5 0 0 0 1.5 1.5h12a1.5 1.5 0 0 0 1.5-1.5v-3a1.5 1.5 0 0 0-1.5-1.5z"/>
          </svg>
          <span style={{ lineHeight: '1' }}>
            Royal Creation
          </span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/" style={navLinkStyle}>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about" style={navLinkStyle}>About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/services" style={navLinkStyle}>Services</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/reviews" style={navLinkStyle}>Reviews</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/blog" style={navLinkStyle}>Blog</Link>
            </li>
          </ul>
          <Link to="/book-event" className="btn btn-primary" style={ctaButtonStyle}>
            Book Now
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
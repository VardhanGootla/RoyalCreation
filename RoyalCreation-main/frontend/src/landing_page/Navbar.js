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

  const secondaryButtonStyle = {
    backgroundColor: 'transparent',
    border: '2px solid rgb(255, 102, 163)',
    color: 'rgb(255, 102, 163)',
    borderRadius: '50px',
    padding: '8px 20px',
    marginRight: '10px'
  };

  const navLinkStyle = {
    fontSize: '1.1rem',
    fontWeight: '500',
    margin: '0 0.5rem',
  };

  return (
    <>
      <style>
        {`
          .navbar-nav .nav-link {
            position: relative;
            transition: all 0.3s ease;
          }
          .navbar-nav .nav-link::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 50%;
            width: 0;
            height: 2px;
            background: rgb(255, 102, 163);
            transition: all 0.3s ease;
            transform: translateX(-50%);
          }
          .navbar-nav .nav-link:hover::after,
          .navbar-nav .nav-link.active::after {
            width: 80%;
          }
          .navbar-nav .nav-link:hover {
            color: rgb(255, 102, 163) !important;
          }
          .navbar-nav .nav-link.active {
            color: rgb(255, 102, 163) !important;
          }
          .btn-signin:hover {
            background-color: rgb(255, 102, 163) !important;
            color: white !important;
            transform: translateY(-2px);
          }
          .btn-booknow:hover {
            background-color: #e60073 !important;
            border-color: #e60073 !important;
            transform: translateY(-2px);
          }
          .navbar-brand:hover {
            transform: translateY(-2px);
            transition: transform 0.3s ease;
          }
          @media (max-width: 991.98px) {
            .nav-buttons {
              margin-top: 1rem;
              display: flex;
              gap: 0.5rem;
              justify-content: center;
            }
            .btn-signin, .btn-booknow {
              margin: 0.25rem;
            }
          }
        `}
      </style>
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
            <div className="nav-buttons d-flex align-items-center">
              <Link to="/signin" className="btn btn-signin" style={secondaryButtonStyle}>
                Sign In
              </Link>
              <Link to="/book-event" className="btn btn-primary btn-booknow" style={ctaButtonStyle}>
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
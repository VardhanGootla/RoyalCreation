import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './ServiceBooking.css';

// --- Event Data with Image Links (No changes here) ---
const events = [
  { name: 'Wedding', img: 'https://images.pexels.com/photos/2253870/pexels-photo-2253870.jpeg' },
  { name: 'Birthday Party', img: 'https://images.pexels.com/photos/1729797/pexels-photo-1729797.jpeg' },
  { name: 'Engagement', img: 'https://images.pexels.com/photos/724118/pexels-photo-724118.jpeg' },
  { name: 'Anniversary', img: 'https://images.pexels.com/photos/2950331/pexels-photo-2950331.jpeg' },
  { name: 'Corporate Event', img: 'https://images.pexels.com/photos/6691674/pexels-photo-6691674.jpeg' },
  { name: 'Baby Shower', img: 'https://images.pexels.com/photos/6691674/pexels-photo-6691674.jpeg' },
  { name: 'Catering Service', img: 'https://images.pexels.com/photos/6691674/pexels-photo-6691674.jpeg' },
  { name: 'Naming Ceremony', img: 'https://images.pexels.com/photos/6691674/pexels-photo-6691674.jpeg' },
];

const ServiceBooking = () => {
  // Get state from the location to pre-select an event
  const location = useLocation();
  const preselectedEvent = location.state?.eventType;

  const [selectedEvent, setSelectedEvent] = useState(preselectedEvent || null);
  const [errorMessage, setErrorMessage] = useState('');
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', date: '' });
  
  // Initialize the navigate function
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  
  const handleEventSelect = (eventName) => {
    setSelectedEvent(eventName);
    setErrorMessage(''); // Clear error message when user selects an event
  };

  // *** UPDATED SUBMIT FUNCTION ***
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedEvent) {
      setErrorMessage('Please select an event type!');
      return;
    }
    const quotationRequest = { ...formData, event: selectedEvent };
    console.log('Redirecting with data:', quotationRequest);
    
    // Navigate to the details page and pass the form data in the state
    navigate('/details', { state: { submission: quotationRequest } });
  };

  return (
    <>
      <div className="booking-container">
        <div className="booking-card">
          <h1 className="booking-title">Plan Your Perfect Event</h1>
          <p className="booking-subtitle">Select an event and fill out your details to get a personalized quotation.</p>

          <form onSubmit={handleSubmit}>
            <div className="form-section">
              <h2 className="section-title">1. Choose Your Event</h2>
              <div className="event-selection-grid">
                {events.map((event) => (
                  <div
                    key={event.name}
                    className={`event-card ${selectedEvent === event.name ? 'selected' : ''}`}
                    onClick={() => handleEventSelect(event.name)}
                  >
                    <img src={event.img} alt={event.name} className="event-image" />
                    <div className="event-name">{event.name}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="form-section">
              <h2 className="section-title">2. Your Details</h2>
              <div className="form-group">
                <input type="text" name="name" placeholder="Full Name" className="form-input" value={formData.name} onChange={handleInputChange} required />
                <input type="email" name="email" placeholder="Email Address" className="form-input" value={formData.email} onChange={handleInputChange} required />
              </div>
              <div className="form-group">
                <input type="tel" name="phone" placeholder="Phone Number" className="form-input" value={formData.phone} onChange={handleInputChange} required />
                <input type="date" name="date" className="form-input" value={formData.date} onChange={handleInputChange} required />
              </div>
            </div>
            
            {errorMessage && <p className="error-message">{errorMessage}</p>}

            <button type="submit" className="submit-btn">Get Quotation</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ServiceBooking;
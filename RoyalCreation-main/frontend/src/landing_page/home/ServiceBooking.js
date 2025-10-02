import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

// --- Component Styles (No changes here) ---
const componentStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');
  :root {
    --theme-color: rgb(255, 102, 163);
    --theme-color-dark: rgb(229, 92, 147);
    --background-color: #fdf2f7;
    --card-background: #ffffff;
    --text-color: #333;
    --border-color: #eee;
    --error-color: #e74c3c;
  }
  .booking-container { font-family: 'Poppins', sans-serif; display: flex; justify-content: center; align-items: center; min-height: 100vh; background-color: var(--background-color); padding: 2rem; }
  .booking-card { background-color: var(--card-background); padding: 2.5rem 3rem; border-radius: 20px; box-shadow: 0 10px 30px rgba(0, 0, 0, 0.07); width: 100%; max-width: 800px; }
  .booking-title { color: var(--theme-color); font-size: 2.5rem; font-weight: 700; text-align: center; margin-bottom: 0.5rem; }
  .booking-subtitle { text-align: center; color: #777; margin-bottom: 2.5rem; }
  .form-section { margin-bottom: 2rem; }
  .section-title { font-size: 1.25rem; font-weight: 600; color: var(--text-color); margin-bottom: 1.5rem; border-left: 4px solid var(--theme-color); padding-left: 0.75rem; }
  .event-selection-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)); gap: 1rem; }
  .event-card { border: 2px solid var(--border-color); border-radius: 15px; overflow: hidden; cursor: pointer; transition: all 0.3s ease; position: relative; }
  .event-card:hover { transform: translateY(-5px); box-shadow: 0 8px 20px rgba(255, 102, 163, 0.2); }
  .event-card.selected { border-color: var(--theme-color); box-shadow: 0 0 15px rgba(255, 102, 163, 0.4); }
  .event-image { width: 100%; height: 100px; object-fit: cover; display: block; }
  .event-name { padding: 0.75rem; text-align: center; font-weight: 600; color: #444; background: #fff; }
  .form-group { display: flex; gap: 1rem; margin-bottom: 1rem; }
  .form-input { width: 100%; padding: 0.9rem 1rem; border: 1px solid #ddd; border-radius: 10px; font-size: 1rem; font-family: 'Poppins', sans-serif; transition: border-color 0.3s, box-shadow 0.3s; }
  .form-input:focus { outline: none; border-color: var(--theme-color); box-shadow: 0 0 0 3px rgba(255, 102, 163, 0.2); }
  .submit-btn { width: 100%; padding: 1rem; background: var(--theme-color); color: white; border: none; border-radius: 10px; font-size: 1.1rem; font-weight: 600; cursor: pointer; transition: background-color 0.3s, transform 0.2s; margin-top: 1rem; }
  .submit-btn:hover { background: var(--theme-color-dark); transform: translateY(-2px); }
  .error-message { color: var(--error-color); text-align: center; margin-top: 1rem; font-weight: 600; }
  @media (max-width: 600px) { .form-group { flex-direction: column; gap: 1rem; } .booking-card { padding: 2rem 1.5rem; } .booking-title { font-size: 2rem; } }
`;

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
      <style>{componentStyles}</style>
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
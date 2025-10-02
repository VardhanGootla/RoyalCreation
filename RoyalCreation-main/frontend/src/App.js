import React from 'react';
import { Routes, Route } from 'react-router-dom';

import HomePage from './landing_page/home/HomePage';
import AboutPage from './landing_page/AboutPage'; // Correct path for AboutPage
import ServicesPage from './ServicesPage'; // Correct path for ServicesPage
import ReviewsPage from './landing_page/ReviewsPage';
import BlogPage from './landing_page/BlogPage';
import ServiceBooking from './landing_page/home/ServiceBooking';
import StressFreeWedding from './landing_page/weddingDiaries/blogs/StressFreeWedding';
import BirthdayThemes from './landing_page/weddingDiaries/blogs/BirthdayThemes';
import CorporateEvents from './landing_page/weddingDiaries/blogs/CorporateEvents';
import VenueSelectionGuide from './landing_page/weddingDiaries/blogs/VenueSelectionGuide';
import SignIn from './components/SignIn';
import AdminDashboard from './Admin/AdminDashboard';


function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/reviews" element={<ReviewsPage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/blog/stress-free-wedding" element={<StressFreeWedding />} />
      <Route path="/blog/birthday-themes" element={<BirthdayThemes />} />
      <Route path="/blog/corporate-events-ideas" element={<CorporateEvents />} />
      <Route path="/blog/venue-selection-guide" element={<VenueSelectionGuide />} />
      <Route path="/book-event" element={<ServiceBooking />} />
      <Route path="/details" element={<div>Details Page Placeholder</div>} />
      <Route path="/admin/dashboard/*" element={<AdminDashboard />} />
    </Routes>
  );
}

export default App;
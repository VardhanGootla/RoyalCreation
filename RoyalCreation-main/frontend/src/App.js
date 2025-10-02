import React from 'react';
import { Routes, Route } from 'react-router-dom';

import HomePage from './landing_page/home/HomePage';
import SignIn from './components/SignIn';
import AboutPage from './landing_page/AboutPage';
import ServicesPage from './ServicesPage';
import ReviewsPage from './landing_page/ReviewsPage';
import BlogPage from './landing_page/BlogPage';
import ServiceBooking from './landing_page/home/ServiceBooking';
import AdminDashboard from './Admin/AdminDashboard'; // Make sure this path is correct

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/reviews" element={<ReviewsPage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/book-event" element={<ServiceBooking />} />
      
      {/* Admin Routes */}
      <Route path="/admin/dashboard/*" element={<AdminDashboard />} />
      
      <Route path="/details" element={<div>Details Page Placeholder</div>} />
    </Routes>
  );
}

export default App;
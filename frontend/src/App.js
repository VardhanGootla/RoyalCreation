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
import EventBudgeting from './landing_page/weddingDiaries/blogs/EventBudgeting';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/reviews" element={<ReviewsPage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/blog/stress-free-wedding" element={<StressFreeWedding />} />
      <Route path="/blog/birthday-themes" element={<BirthdayThemes />} />
      <Route path="/blog/event-budgeting" component={EventBudgeting} />
      <Route path="/book-event" element={<ServiceBooking />} />
      <Route path="/details" element={<div>Details Page Placeholder</div>} />
    </Routes>
  );
}

export default App;
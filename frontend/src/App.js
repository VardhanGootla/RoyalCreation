import React from 'react';
import { Routes, Route } from 'react-router-dom';

import HomePage from './landing_page/home/HomePage';
import AboutPage from './landing_page/AboutPage'; // Correct path for AboutPage
import ServicesPage from './ServicesPage'; // Correct path for ServicesPage
import ReviewsPage from './landing_page/ReviewsPage';
import BlogPage from './landing_page/BlogPage';
import ContactUs from './landing_page/home/ContactUs';
import StressFreeWedding from './landing_page/weddingDiaries/blogs/StressFreeWedding';
import BirthdayThemes from './landing_page/weddingDiaries/blogs/BirthdayThemes';
import CorporateEvents from './landing_page/weddingDiaries/blogs/CorporateEvents';
import VenueSelectionGuide from './landing_page/weddingDiaries/blogs/VenueSelectionGuide';
import EventBudgeting from './landing_page/weddingDiaries/blogs/EventBudgeting';
import DecorTrends from './landing_page/weddingDiaries/blogs/DecorTrends';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp'; 
import AdminDashboard from './Admin/AdminDashboard';
import WeddingCategoriesPage from './landing_page/weddingDiaries/WeddingCategoriesPage';
import Meetings from './landing_page/weddingDiaries/Meetings';
import BirthdayStories from './landing_page/weddingDiaries/BirthdayStories';
import Gujarati from './landing_page/weddingDiaries/WeddingsByCultur/Gujarati';
import Maharashtrian from './landing_page/weddingDiaries/WeddingsByCultur/Maharashtrian';
import Marwadi from './landing_page/weddingDiaries/WeddingsByCultur/Marwadi';
import Punjabi from './landing_page/weddingDiaries/WeddingsByCultur/Punjabi';
import Telugu from './landing_page/weddingDiaries/WeddingsByCultur/Telugu';


function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/reviews" element={<ReviewsPage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/blog/stress-free-wedding" element={<StressFreeWedding />} />
      <Route path="/blog/birthday-themes" element={<BirthdayThemes />} />
      <Route path="/blog/corporate-events-ideas" element={<CorporateEvents />} />
      <Route path="/blog/venue-selection-guide" element={<VenueSelectionGuide />} />
      <Route path="/blog/event-budgeting" element={<EventBudgeting />} />
      <Route path="/blog/decor-trends" element={<DecorTrends />} />
      <Route path="/book-event" element={<ContactUs />} />
      <Route path="/details" element={<div>Details Page Placeholder</div>} />
      <Route path="/admin/dashboard/*" element={<AdminDashboard />} />
      <Route path="/weddings" element={<WeddingCategoriesPage />} />
      <Route path="/weddings/gujarati" element={<Gujarati />} />
      <Route path="/weddings/maharashtrian" element={<Maharashtrian />} />
      <Route path="/weddings/marwadi" element={<Marwadi />} />
      <Route path="/weddings/punjabi" element={<Punjabi />} />
      <Route path="/weddings/telugu" element={<Telugu />} />
    </Routes>
  );
}

export default App;
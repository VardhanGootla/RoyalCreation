import React from 'react';
import Hero from './Hero';
import PopularSearch from './PopularSearch';
import EventCategory from './EventCategory';
import ServiceBooking from './ServiceBooking';
import Reviews from './Reviews';
import Blog from './Blog';
import OpenAccount from './../OpenAccount';
import Navbar from '../Navbar';
import Footer from '../Footer';

function HomePage() {
  return (
  <>
      <Navbar/>  
      <Hero/>
      <PopularSearch/>
      <EventCategory/>
      <ServiceBooking/>
      <Reviews/>
      <Blog/>
      <OpenAccount/>
      <Footer/>
  </>
);
}

export default HomePage;
import React from 'react';
import Hero from './Hero';
import PopularSearch from './PopularSearch';
import EventCategory from './EventCategory';
import ContactUs from './ContactUs';
import Reviews from './Reviews';
import Blog from './Blog';
import OpenAccount from '../OpenAccount'; // This should work
import Navbar from '../Navbar'; // This should work
import Footer from '../Footer'; // This should work

function HomePage() {
  return (
    <>
      <Navbar/>  
      <Hero/>
      <PopularSearch/>
      <EventCategory/>
      <ContactUs/>
      <Reviews/>
      <Blog/>
      <OpenAccount/>
      <Footer/>
    </>
  );
}

export default HomePage;
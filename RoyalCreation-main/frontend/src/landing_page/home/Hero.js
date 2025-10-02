import React from 'react';

function Hero() {
  return (
  
   <section className="hero position-relative" style={{ height: "70vh" }}>

  {/* Background Image */}
  <img
    src="media/images/heroPhoto.jpg"
    alt="Hero"
    className="w-100 h-100 object-fit-cover position-absolute top-0 start-0"
  />

  {/* Content */}
  <div className="container position-relative d-flex flex-column justify-content-center align-items-center h-100 text-white">

   <h1 className="display-4 font-weight-bold" style={{ textShadow: "2px 2px 8px rgba(0,0,0,0.7)" }}>
  Welcome to Royal Creation
  </h1>

<p className="lead" style={{ textShadow: "1px 1px 6px rgba(0,0,0,0.7)" }}>
  Crafting unforgettable weddings & celebrations
</p>

    <a
      href="#events"
      className="btn btn-lg text-white"
      style={{ background: "#FF66A3", borderRadius: "50px" }}
    >
      Explore Events
    </a>
  </div>
</section>





    );
}

export default Hero;
import React from 'react';
import Navbar from './landing_page/Navbar';
import Footer from './landing_page/Footer';
import { Link } from 'react-router-dom';

const services = [
  {
    id: 1,
    title: 'Full-Service Wedding Planning',
    description: 'From venue selection to the final send-off, we handle every detail to create your perfect wedding day. Let us manage the logistics so you can enjoy the moment.',
    image: 'https://images.pexels.com/photos/169198/pexels-photo-169198.jpeg',
    icon: 'bi-gem'
  },
  {
    id: 2,
    title: 'Corporate Events & Conferences',
    description: 'We design and execute professional corporate events, from product launches to annual conferences, ensuring your brand message is delivered with impact.',
    image: 'https://images.pexels.com/photos/1181303/pexels-photo-1181303.jpeg',
    icon: 'bi-briefcase-fill'
  },
  {
    id: 3,
    title: 'Birthday & Private Parties',
    description: 'Celebrate your milestones in style. We create fun, memorable birthday parties and private gatherings tailored to your personality and theme.',
    image: 'https://images.pexels.com/photos/3171837/pexels-photo-3171837.jpeg',
    icon: 'bi-cake2-fill'
  },
  {
    id: 4,
    title: 'Engagement & Anniversaries',
    description: 'Mark your special romantic occasions with an elegant and intimate celebration. We specialize in creating beautiful moments for couples.',
    image: 'https://images.pexels.com/photos/724118/pexels-photo-724118.jpeg',
    icon: 'bi-heart-fill'
  },
];

const themeColor = 'rgb(255, 102, 163)';

function ServicesPage() {
  return (
    <>
      <Navbar />

      {/* Page Header */}
      <header className="py-5" style={{ backgroundColor: '#fdf2f7' }}>
        <div className="container text-center">
          <h1 className="display-4 fw-bold" style={{ color: themeColor }}>Our Services</h1>
          <p className="lead text-muted">Everything You Need for a Perfect Event</p>
        </div>
      </header>

      {/* Services Section */}
      <section className="py-5">
        <div className="container">
          <div className="row g-4">
            {services.map((service) => (
              <div key={service.id} className="col-lg-6">
                <div className="card h-100 border-0 shadow-sm overflow-hidden" style={{ borderRadius: '15px' }}>
                  <div className="row g-0">
                    <div className="col-md-5">
                      <img src={service.image} alt={service.title} className="img-fluid h-100" style={{ objectFit: 'cover' }} />
                    </div>
                    <div className="col-md-7">
                      <div className="card-body p-4">
                        <div className="mb-3">
                          <i className={`${service.icon} fs-2`} style={{ color: themeColor }}></i>
                        </div>
                        <h5 className="card-title fw-bold">{service.title}</h5>
                        <p className="card-text text-muted">{service.description}</p>
                        <Link
                          to="/book-event"
                          state={{ eventType: service.title }} // Pass the service title as state
                          className="btn btn-sm mt-auto"
                          style={{
                            backgroundColor: themeColor,
                            color: 'white',
                            alignSelf: 'flex-start'
                          }}
                        >Book This Service</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default ServicesPage;
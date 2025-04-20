// src/components/Home/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container">
      <section className="hero-section">
        <h1>Dobrodošli u našu trgovinu</h1>
        <p>Pronađite najbolje proizvode po najpovoljnijim cijenama</p>
        <Link to="/products" className="cta-button">
          Pogledajte proizvode
        </Link>
      </section>

      <section className="features-section">
        <div className="feature-card">
          <h3>Širok izbor</h3>
          <p>Više od 1000 proizvoda u ponudi</p>
        </div>
        <div className="feature-card">
          <h3>Besplatna dostava</h3>
          <p>Za narudžbe iznad 100 KM</p>
        </div>
        <div className="feature-card">
          <h3>Garancija kvalitete</h3>
          <p>Svi proizvodi sa garancijom</p>
        </div>
      </section>

      <section className="popular-products">
        <h2>Popularni proizvodi</h2>
        <div className="products-preview">
          {/* You could add a preview of 3-4 popular products here */}
          <Link to="/products/1" className="product-preview">
            <img src="https://placehold.co/300x200?text=Pametni+telefon" alt="Pametni telefon" />
            <h4>Pametni telefon</h4>
            <p>799.99 KM</p>
          </Link>
          {/* Add more preview items as needed */}
        </div>
      </section>
    </div>
  );
};

export default Home;
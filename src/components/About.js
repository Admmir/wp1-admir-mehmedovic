import React from 'react';
import { FaUsers, FaAward, FaLightbulb, FaHandshake } from 'react-icons/fa';

const About = () => {
  return (
    <div className="about-container">
      <section className="about-hero">
        <h1>O nama</h1>
        <p>Naša priča o strasti prema tehnologiji i izvrsnosti</p>
      </section>

      <section className="about-content">
        <div className="about-text">
          <h2>Naša misija</h2>
          <p>
            TechShop je osnovan 2024. godine sa ciljem da pruži najkvalitetnije proizvode 
            po najpovoljnijim cijenama. Specijalizirani smo za prodaju elektronike i 
            tehnoloških uređaja, a naš tim stručnjaka uvijek je tu da vam pomogne.
          </p>
          <p>
            Verujemo da kvalitetna tehnologija može poboljšati svakodnevni život, i zato 
            pažljivo biramo svaki proizvod u našoj ponudi.
          </p>
        </div>

        <div className="about-image">
          <img 
            src="https://placehold.co/600x400?text=TechShop+Tim" 
            alt="TechShop tim" 
          />
        </div>
      </section>

      <section className="about-features">
        <h2>Zašto izabrati nas?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <FaUsers className="feature-icon" />
            <h3>10+ godina iskustva</h3>
            <p>Naš tim ima dugogodišnje iskustvo u IT industriji</p>
          </div>
          <div className="feature-card">
            <FaAward className="feature-icon" />
            <h3>Garancija kvaliteta</h3>
            <p>Svi proizvodi sa garancijom i tehničkom podrškom</p>
          </div>
          <div className="feature-card">
            <FaLightbulb className="feature-icon" />
            <h3>Stručni savjeti</h3>
            <p>Besplatne konsultacije prije kupovine</p>
          </div>
          <div className="feature-card">
            <FaHandshake className="feature-icon" />
            <h3>Partnerstvo</h3>
            <p>Saradujemo sa vodećim svjetskim brendovima</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
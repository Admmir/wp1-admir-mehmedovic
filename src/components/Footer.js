// src/components/Footer/Footer.jsx
import { FaFacebook, FaInstagram, FaTwitter, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-about">
          <Link to="/" className="footer-logo">TechShop</Link>
          <p>
            Vaš pouzdani izvor za kvalitetnu elektroniku i tehnologiju. 
            Posvećeni smo pružanju najboljih proizvoda i usluga.
          </p>
          <div className="social-icons">
            <a href="#" className="social-icon"><FaFacebook /></a>
            <a href="#" className="social-icon"><FaInstagram /></a>
            <a href="#" className="social-icon"><FaTwitter /></a>
          </div>
        </div>

        <div className="footer-links">
          <h3>Brzi linkovi</h3>
          <ul>
            <li><a href="/">Početna</a></li>
            <li><a href="/about">O nama</a></li>
            <li><a href="/products">Proizvodi</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Kontakt</a></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h3>Kontaktirajte nas</h3>
          <p><FaMapMarkerAlt /> Zmaja od Bosne bb, Sarajevo</p>
          <p><FaPhone /> +387 33 123 456</p>
          <p><FaEnvelope /> info@techshop.ba</p>
        </div>
      </div>

      <div className="copyright">
        &copy; {new Date().getFullYear()} TechShop. Sva prava zadržana.
      </div>
    </footer>
  );
};

export default Footer;
import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import './Home.css';

import heroImage from '../assets/hero_showcase.png';

const Home = ({ addToCart, cartCount }) => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  const products = [
    { id: 1, name: 'Premium Wireless Headphones', price: '$299', image: '🎧' },
    { id: 2, name: 'Smart Fitness Watch', price: '$199', image: '⌚' },
    { id: 3, name: 'Ergonomic Designer Chair', price: '$499', image: '🪑' },
    { id: 4, name: 'Minimalist Mechanical Keyboard', price: '$159', image: '⌨️' },
  ];

  return (
    <div className="home-container">
      {/* Navigation */}
      <Navbar cartCount={cartCount} />

      {/* Hero Section */}
      <header className="hero" id="home">
        <div className="hero-content">
          <h1 className="hero-title">Elevate Your Lifestyle With Premium Essentials.</h1>
          <p className="hero-subtitle">Discover a curated collection of high-quality products designed to enhance your daily life. Experience luxury, redefined.</p>
          <Link to="/shop" className="hero-btn" style={{ textDecoration: 'none', display: 'inline-block' }}>Shop Now</Link>
        </div>
        <img src={heroImage} alt="Premium Product Showcase" className="hero-image" />
      </header>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2024 LuxeShop Inc. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;

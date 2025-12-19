import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = ({ addToCart, cartCount }) => {
  const products = [
    { id: 1, name: 'Premium Wireless Headphones', price: '$299', image: '🎧' },
    { id: 2, name: 'Smart Fitness Watch', price: '$199', image: '⌚' },
    { id: 3, name: 'Ergonomic Designer Chair', price: '$499', image: '🪑' },
    { id: 4, name: 'Minimalist Mechanical Keyboard', price: '$159', image: '⌨️' },
  ];

  return (
    <div className="home-container">
      {/* Navigation */}
      <nav className="navbar">
        <Link to="/" className="nav-logo">LuxeShop.</Link>
        <ul className="nav-links">
          <li><Link to="/" className="nav-link">Home</Link></li>
          <li><Link to="#shop" className="nav-link">Shop</Link></li>
          <li><Link to="#collections" className="nav-link">Collections</Link></li>
          <li><Link to="#about" className="nav-link">About</Link></li>
          <li><Link to="/login" className="nav-link">Login</Link></li>
        </ul>
        <Link to="/cart" className="cart-icon" style={{ textDecoration: 'none', color: 'inherit' }}>
          🛒
          {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
        </Link>
      </nav>

      {/* Hero Section */}
      <header className="hero" id="home">
        <div className="hero-content">
          <h1 className="hero-title">Elevate Your Lifestyle With Premium Essentials.</h1>
          <p className="hero-subtitle">Discover a curated collection of high-quality products designed to enhance your daily life. Experience luxury, redefined.</p>
          <button className="hero-btn">Shop Now</button>
        </div>
        <div className="hero-image-placeholder">
          Premium Product Showcase
        </div>
      </header>

      {/* Featured Products */}
      <section className="featured" id="shop">
        <h2 className="section-title">Trending Now</h2>
        <div className="product-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-image" style={{ fontSize: '4rem' }}>
                {product.image}
              </div>
              <div className="product-info">
                <h3>{product.name}</h3>
                <span className="product-price">{product.price}</span>
                <button className="add-btn" onClick={() => addToCart(product)}>
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2024 LuxeShop Inc. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;

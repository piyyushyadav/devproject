import React from 'react';
import Navbar from './Navbar';
import './Home.css';

const Collections = ({ cartCount }) => {
    return (
        <div className="home-container">
            {/* Navigation */}
            <Navbar cartCount={cartCount} />

            <div className="featured" style={{ paddingTop: '4rem', textAlign: 'center', minHeight: '60vh' }}>
                <h2 className="section-title">Our Collections</h2>
                <p className="about-text">Explore our curated sets of premium items.</p>

                <div className="product-grid">
                    {/* Mock Categories */}
                    <div className="product-card" style={{ cursor: 'pointer' }}>
                        <div className="product-image" style={{ fontSize: '3rem' }}>🍂</div>
                        <h3>Autumn Essentials</h3>
                    </div>
                    <div className="product-card" style={{ cursor: 'pointer' }}>
                        <div className="product-image" style={{ fontSize: '3rem' }}>💼</div>
                        <h3>Office Upgrade</h3>
                    </div>
                    <div className="product-card" style={{ cursor: 'pointer' }}>
                        <div className="product-image" style={{ fontSize: '3rem' }}>🏃</div>
                        <h3>Active Lifestyle</h3>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="footer">
                <p>&copy; 2024 LuxeShop Inc. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Collections;

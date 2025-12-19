import React from 'react';
import Navbar from './Navbar';
import './Home.css';

const Shop = ({ addToCart, cartCount }) => {
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

            <section className="featured" style={{ paddingTop: '2rem' }}>
                <h2 className="section-title">Shop All Products</h2>
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

export default Shop;

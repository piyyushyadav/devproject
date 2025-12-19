import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Reusing Home styles for consistency

const Cart = ({ cartItems, removeFromCart }) => {
    const total = cartItems.reduce((sum, item) => {
        const price = parseFloat(item.price.replace('$', ''));
        return sum + price;
    }, 0);

    return (
        <div className="home-container">
            <nav className="navbar">
                <Link to="/" className="nav-logo">LuxeShop.</Link>
                <ul className="nav-links">
                    <li><Link to="/" className="nav-link">Home</Link></li>
                    <li><Link to="/" className="nav-link">Shop</Link></li>
                    <li><Link to="/login" className="nav-link">Login</Link></li>
                </ul>
                <div className="cart-icon">
                    🛒 <span className="cart-badge">{cartItems.length}</span>
                </div>
            </nav>

            <div className="featured" style={{ paddingTop: '2rem' }}>
                <h2 className="section-title">Your Shopping Cart</h2>

                {cartItems.length === 0 ? (
                    <div style={{ textAlign: 'center', padding: '2rem' }}>
                        <p>Your cart is empty.</p>
                        <Link to="/" className="hero-btn" style={{ display: 'inline-block', marginTop: '1rem' }}>
                            Back to Shop
                        </Link>
                    </div>
                ) : (
                    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                        {cartItems.map((item, index) => (
                            <div key={index} className="product-card" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    <div style={{ fontSize: '2rem' }}>{item.image}</div>
                                    <div>
                                        <h3>{item.name}</h3>
                                        <p className="product-price">{item.price}</p>
                                    </div>
                                </div>
                                <button
                                    className="add-btn"
                                    style={{ width: 'auto', background: '#e11d48' }}
                                    onClick={() => removeFromCart(index)}
                                >
                                    Remove
                                </button>
                            </div>
                        ))}


                        <div style={{ marginTop: '2rem', textAlign: 'right', borderTop: '1px solid #e2e8f0', paddingTop: '1rem' }}>
                            <h3>Total: ${total.toFixed(2)}</h3>
                            <button className="hero-btn" style={{ marginTop: '1rem' }}>
                                Checkout
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Cart;

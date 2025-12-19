import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Navbar = ({ cartCount }) => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

    useEffect(() => {
        document.body.className = theme;
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
    };

    return (
        <nav className="navbar">
            <Link to="/" className="nav-logo">LuxeShop.</Link>
            <ul className="nav-links">
                <li><Link to="/" className="nav-link">Home</Link></li>
                <li><Link to="/shop" className="nav-link">Shop</Link></li>
                <li><Link to="/collections" className="nav-link">Collections</Link></li>
                <li><Link to="/about" className="nav-link">About</Link></li>
                <li><Link to="/login" className="nav-link">Login</Link></li>
            </ul>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                <button
                    onClick={toggleTheme}
                    className="theme-toggle"
                    aria-label="Toggle Dark Mode"
                >
                    {theme === 'light' ? '🌙' : '☀️'}
                </button>
                {cartCount !== undefined && (
                    <Link to="/cart" className="cart-icon" style={{ textDecoration: 'none', color: 'inherit' }}>
                        🛒
                        {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
                    </Link>
                )}
            </div>
        </nav>
    );
};

export default Navbar;

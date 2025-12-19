import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Home.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Mock login logic
        console.log('Logging in with:', email, password);
        alert('Login Successful! Redirecting to Shop...');
        navigate('/');
    };

    return (
        <div className="home-container">
            <nav className="navbar">
                <Link to="/" className="nav-logo">LuxeShop.</Link>
                <ul className="nav-links">
                    <li><Link to="/" className="nav-link">Home</Link></li>
                    <li><Link to="/" className="nav-link">Shop</Link></li>
                </ul>
            </nav>

            <div className="login-container">
                <div className="login-card">
                    <h2 className="section-title">Welcome Back</h2>
                    <p className="login-subtitle">Sign in to your account</p>

                    <form onSubmit={handleSubmit} className="login-form">
                        <div className="form-group">
                            <label htmlFor="email">Email Address</label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="you@example.com"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="••••••••"
                                required
                            />
                        </div>

                        <button type="submit" className="hero-btn login-btn">Sign In</button>
                    </form>

                    <p className="login-footer">
                        Don't have an account? <a href="#" style={{ color: 'var(--primary-color)' }}>Sign Up</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;

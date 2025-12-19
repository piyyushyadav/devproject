import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import './Home.css';

const About = ({ cartCount }) => {
    return (
        <div className="home-container">
            {/* Navigation */}
            <Navbar cartCount={cartCount} />

            {/* About Section */}
            <section className="about-section" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div className="about-content">
                    <h2 className="section-title">About the Project</h2>
                    <div className="about-card">
                        <h3>Developed by Piyush Yadav</h3>
                        <p className="about-text">
                            This website is created for the CA of DevOps. It demonstrates a modern, responsive e-commerce interface built with React.
                        </p>
                        <div className="tech-badge">
                            <span className="react-icon">⚛️</span> React is used
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="footer">
                <p>&copy; 2024 LuxeShop Inc. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default About;

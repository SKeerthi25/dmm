import React from 'react';
import { Link } from 'react-router-dom';
import { FiMail, FiPhone, FiMapPin, FiLinkedin, FiTwitter, FiFacebook, FiInstagram, FiArrowRight } from 'react-icons/fi';
import './Footer.css';

const footerServices = [
    'IT Consulting', 'Custom Software Development', 'Web Application Development',
    'Mobile App Development', 'Cloud Computing Solutions', 'AI & Data Analytics',
    'Digital Transformation', 'System Integration',
];
const quickLinks = [
    { label: 'About Us', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Solutions', path: '/solutions' },
    { label: 'Technologies', path: '/technologies' },
    { label: 'Portfolio', path: '/portfolio' },
    { label: 'Careers', path: '/careers' },
    { label: 'Blog', path: '/blog' },
    { label: 'Contact', path: '/contact' },
];

export default function Footer() {
    return (
        <footer className="footer">
            {/* CTA Banner */}
            <div className="footer-cta">
                <div className="container footer-cta-inner">
                    <div>
                        <h3>Ready to Transform Your Business?</h3>
                        <p>Let's build something extraordinary together. Schedule a free consultation today.</p>
                    </div>
                    <div className="footer-cta-btns">
                        <Link to="/contact" className="btn btn-primary">Get Free Consultation <FiArrowRight /></Link>
                        <a href="tel:07438780880" className="btn btn-outline">Call Us Now</a>
                    </div>
                </div>
            </div>

            <div className="footer-main">
                <div className="container footer-grid">
                    {/* Company Info */}
                    <div className="footer-col footer-brand">
                        <Link to="/" className="footer-logo">
                            <img 
                                src="/logo.png" 
                                alt="DMM Software Solutions" 
                                className="footer-logo-img" 
                                style={{ 
                                    height: '80px', 
                                    objectFit: 'contain', 
                                    marginBottom: '24px' 
                                }} 
                            />
                        </Link>
                        <p className="footer-desc">
                            Premium IT consulting and software development services. Building innovative technology solutions that drive business growth across the globe.
                        </p>
                        <div className="footer-contact-items">
                            <a href="mailto:dmmsolutions5073@gmail.com" className="footer-contact-item">
                                <FiMail /> dmmsolutions5073@gmail.com
                            </a>
                            <a href="tel:07438780880" className="footer-contact-item">
                                <FiPhone /> 07438780880
                            </a>
                            <div className="footer-contact-item">
                                <FiMapPin /> 56 College Road, SW19 2BS
                            </div>
                        </div>
                        <div className="footer-socials">
                            <a href="#" className="social-btn" aria-label="LinkedIn"><FiLinkedin /></a>
                            <a href="#" className="social-btn" aria-label="Twitter"><FiTwitter /></a>
                            <a href="#" className="social-btn" aria-label="Facebook"><FiFacebook /></a>
                            <a href="#" className="social-btn" aria-label="Instagram"><FiInstagram /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="footer-col">
                        <h4>Quick Links</h4>
                        <ul className="footer-links">
                            {quickLinks.map(l => (
                                <li key={l.label}><Link to={l.path}>{l.label}</Link></li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="footer-col">
                        <h4>Our Services</h4>
                        <ul className="footer-links">
                            {footerServices.map(s => (
                                <li key={s}><Link to="/services">{s}</Link></li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="container footer-bottom-inner">
                    <p>© {new Date().getFullYear()} DMM Software Solutions Limited. All rights reserved.</p>
                    <div className="footer-legal">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                        <a href="#">Cookie Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

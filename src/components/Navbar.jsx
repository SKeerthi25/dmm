import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX, FiPhone, FiMail, FiChevronDown, FiSun, FiMoon } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.css';

const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    {
        label: 'Services', path: '/services',
        dropdown: [
            { label: 'IT Consulting', path: '/services' },
            { label: 'Custom Software Development', path: '/services' },
            { label: 'Web App Development', path: '/services' },
            { label: 'Mobile App Development', path: '/services' },
            { label: 'Cloud Computing Solutions', path: '/services' },
            { label: 'AI & Data Analytics', path: '/services' },
            { label: 'Digital Transformation', path: '/services' },
            { label: 'System Integration', path: '/services' },
        ]
    },
    { label: 'Solutions', path: '/solutions' },
    { label: 'Technologies', path: '/technologies' },
    { label: 'Industries', path: '/industries' },
    {
        label: 'Company', path: '#',
        dropdown: [
            { label: 'Pricing', path: '/pricing' },
            { label: 'Blog', path: '/blog' },
            { label: 'Careers', path: '/careers' },
            { label: 'FAQ', path: '/faq' },
        ]
    },
    { label: 'Contact', path: '/contact' },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');
    const location = useLocation();

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => prev === 'dark' ? 'light' : 'dark');
    };

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        setMobileOpen(false);
        setActiveDropdown(null);
    }, [location]);

    return (
        <>
            <div className="topbar">
                <div className="container topbar-inner">
                    <div className="topbar-contact">
                        <span><FiMail size={14} /> dmmsolutions5073@gmail.com</span>
                        <span className="separator"></span>
                        <span><FiPhone size={14} /> 07438780880</span>
                    </div>
                    <div className="topbar-right">
                        <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle Theme">
                            {theme === 'dark' ? <FiSun size={18} /> : <FiMoon size={18} />}
                        </button>
                    </div>
                </div>
            </div>
            <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
                <div className="container nav-inner">
                    <Link to="/" className="nav-logo">
                        <img src="/dmm-logo.png" alt="DMM Software Solutions" className="nav-logo-img" />
                    </Link>

                    <ul className="nav-links">
                        {navLinks.map((link) => (
                            <li
                                key={link.label}
                                className={`nav-item ${link.dropdown ? 'has-dropdown' : ''}`}
                                onMouseEnter={() => link.dropdown && setActiveDropdown(link.label)}
                                onMouseLeave={() => setActiveDropdown(null)}
                            >
                                <Link
                                    to={link.path}
                                    className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
                                >
                                    {link.label}
                                    {link.dropdown && <FiChevronDown size={14} className={`chevron ${activeDropdown === link.label ? 'rotated' : ''}`} />}
                                </Link>
                                <AnimatePresence>
                                    {link.dropdown && activeDropdown === link.label && (
                                        <motion.ul
                                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                            animate={{ opacity: 1, y: 0, scale: 1 }}
                                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                            transition={{ duration: 0.2, ease: "easeOut" }}
                                            className="dropdown-menu"
                                        >
                                            {link.dropdown.map((item) => (
                                                <li key={item.label}>
                                                    <Link to={item.path} className="dropdown-item">{item.label}</Link>
                                                </li>
                                            ))}
                                        </motion.ul>
                                    )}
                                </AnimatePresence>
                            </li>
                        ))}
                    </ul>

                    <div className="nav-actions">
                        <Link to="/contact" className="btn btn-primary btn-nav">Get Consultation</Link>
                        <button className="mobile-toggle" onClick={() => setMobileOpen(!mobileOpen)}>
                            {mobileOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {mobileOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="mobile-menu"
                        >
                            <ul className="mobile-links">
                                {navLinks.map((link) => (
                                    <li key={link.label}>
                                        <Link to={link.path} className="mobile-link" onClick={() => setMobileOpen(false)}>
                                            {link.label}
                                        </Link>
                                        {link.dropdown && (
                                            <ul className="mobile-dropdown">
                                                {link.dropdown.map((item) => (
                                                    <li key={item.label}>
                                                        <Link to={item.path} className="mobile-dropdown-item" onClick={() => setMobileOpen(false)}>
                                                            {item.label}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </li>
                                ))}
                                <li className="mobile-cta">
                                    <Link to="/contact" className="btn btn-primary" style={{ width: '100%' }}>Get Consultation</Link>
                                </li>
                            </ul>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </>
    );
}

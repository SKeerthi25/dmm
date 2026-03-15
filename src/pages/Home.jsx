import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    FiArrowRight, FiCheckCircle, FiStar, FiUsers, FiAward, FiGlobe,
    FiMonitor, FiSmartphone, FiCloud, FiDatabase, FiCode, FiCpu,
    FiShield, FiTrendingUp, FiZap, FiLayers, FiActivity
} from 'react-icons/fi';
import './Home.css';

const services = [
    { icon: <FiMonitor />, title: 'IT Consulting', desc: 'Strategic technology consulting to align IT with your business goals and drive digital growth.' },
    { icon: <FiCode />, title: 'Custom Software Development', desc: 'Tailored software solutions built to your exact specifications with cutting-edge technologies.' },
    { icon: <FiSmartphone />, title: 'Mobile App Development', desc: 'Native and cross-platform mobile apps for iOS and Android that delight users.' },
    { icon: <FiCloud />, title: 'Cloud Computing', desc: 'Scalable cloud solutions on AWS, Azure, and Google Cloud for agile business operations.' },
    { icon: <FiCpu />, title: 'AI & Data Analytics', desc: 'Harness the power of AI and data science to make smarter, faster business decisions.' },
    { icon: <FiDatabase />, title: 'Enterprise Solutions', desc: 'Robust enterprise-grade software systems that streamline operations at scale.' },
];

const metrics = [
    { value: '200+', label: 'Projects Delivered', icon: <FiLayers /> },
    { value: '98%', label: 'Client Satisfaction', icon: <FiStar /> },
    { value: '50+', label: 'Expert Team', icon: <FiUsers /> },
    { value: '15+', label: 'Countries Served', icon: <FiGlobe /> },
];

const industries = [
    { icon: '🏦', name: 'Finance & Banking' },
    { icon: '🏥', name: 'Healthcare' },
    { icon: '🏗️', name: 'Construction' },
    { icon: '🛍️', name: 'Retail & E-Commerce' },
    { icon: '🎓', name: 'Education' },
    { icon: '🚚', name: 'Logistics' },
    { icon: '🚀', name: 'Startups' },
    { icon: '🏢', name: 'Enterprises' },
];

const whyUs = [
    { icon: <FiAward />, title: 'Proven Excellence', desc: '10+ years of delivering world-class IT solutions to global clients.' },
    { icon: <FiUsers />, title: 'Expert Team', desc: 'Certified professionals with deep expertise across all technology domains.' },
    { icon: <FiZap />, title: 'Agile Delivery', desc: 'Fast, iterative development with transparent communication and on-time delivery.' },
    { icon: <FiShield />, title: 'Security First', desc: 'Enterprise-grade security and compliance built into every solution we deliver.' },
    { icon: <FiTrendingUp />, title: 'Scalable Solutions', desc: 'Future-proof architectures that grow with your business needs.' },
    { icon: <FiGlobe />, title: 'Global Reach', desc: '24/7 support and service capabilities across 15+ countries worldwide.' },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.3
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" }
    }
};

export default function Home() {
    return (
        <div className="home">
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-bg">
                    <div className="hero-gradient"></div>
                    <div className="hero-grid-pattern"></div>
                </div>
                <div className="container hero-content">
                    <motion.div 
                        className="hero-text"
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <div className="hero-badge">
                            <span className="badge-dot"></span>
                            <span>Scale Your Enterprise</span>
                        </div>
                        <h1>Engineering the future of <span className="gradient-text">Digital Excellence</span></h1>
                        <p>DMM Software Solutions delivers enterprise-grade IT consulting and custom software development that empowers global organizations to innovate at scale.</p>
                        <div className="hero-actions">
                            <Link to="/contact" className="btn btn-primary btn-lg">
                                Start Consultation <FiArrowRight />
                            </Link>
                            <Link to="/portfolio" className="btn btn-outline btn-lg">
                                View Solutions
                            </Link>
                        </div>
                        <div className="hero-trust">
                            <div className="trust-item"><FiCheckCircle /> <span>Global Delivery</span></div>
                            <div className="trust-item"><FiCheckCircle /> <span>98% Retention</span></div>
                            <div className="trust-item"><FiCheckCircle /> <span>ISO Certified</span></div>
                        </div>
                    </motion.div>
                    
                    <motion.div 
                        className="hero-visual"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                    >
                        <div className="visual-container">
                            <div className="visual-card-floating vc-1">
                                <div className="vc-icon"><FiActivity /></div>
                                <div className="vc-info">
                                    <span className="vc-label">Availability</span>
                                    <span className="vc-value">99.9% Sleek</span>
                                </div>
                            </div>
                            <div className="visual-card-floating vc-2">
                                <div className="vc-icon"><FiShield /></div>
                                <div className="vc-info">
                                    <span className="vc-label">Compliance</span>
                                    <span className="vc-value">Tier 1 Secure</span>
                                </div>
                            </div>
                            <div className="main-visual-element">
                                <img 
                                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=2070" 
                                    alt="DMM Software Solutions" 
                                    className="professional-hero-img"
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Metrics */}
            <section className="metrics-section">
                <div className="container">
                    <motion.div 
                        className="metrics-grid"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        {metrics.map((m, i) => (
                            <motion.div key={i} className="metric-item" variants={itemVariants}>
                                <div className="metric-icon">{m.icon}</div>
                                <div className="metric-content">
                                    <div className="metric-value">{m.value}</div>
                                    <div className="metric-label">{m.label}</div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Services */}
            <section className="section services-section">
                <div className="container">
                    <motion.div 
                        className="section-header"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="section-tag">Expertise & Innovation</div>
                        <h2>Our Core Services</h2>
                        <p>We deliver comprehensive technology solutions that empower modern enterprises to thrive in a digital-first world.</p>
                    </motion.div>
                    
                    <motion.div 
                        className="grid-3"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                    >
                        {services.map((s, i) => (
                            <motion.div key={i} className="card service-card" variants={itemVariants}>
                                <div className="icon-box">{s.icon}</div>
                                <h3>{s.title}</h3>
                                <p>{s.desc}</p>
                                <Link to="/services" className="service-link">
                                    View Service Details <FiArrowRight />
                                </Link>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="section why-section">
                <div className="container">
                    <div className="why-grid">
                        <motion.div 
                            className="why-left"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="section-tag">The DMM Advantage</div>
                            <h2>Partnering for Success</h2>
                            <p>Our commitment to technical excellence and client success makes us the preferred choice for forward-thinking organizations.</p>
                            <div className="why-features-list">
                                {whyUs.slice(0, 3).map((w, i) => (
                                    <div key={i} className="why-feature-item">
                                        <div className="feature-icon">{w.icon}</div>
                                        <div className="feature-text">
                                            <h4>{w.title}</h4>
                                            <p>{w.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <Link to="/about" className="btn btn-primary">Learn More About Us <FiArrowRight /></Link>
                        </motion.div>
                        
                        <motion.div 
                            className="why-right"
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            {whyUs.slice(3).map((w, i) => (
                                <motion.div key={i} className="card why-card" variants={itemVariants}>
                                    <div className="why-card-icon">{w.icon}</div>
                                    <h4>{w.title}</h4>
                                    <p>{w.desc}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Industries */}
            <section className="section industries-section">
                <div className="container">
                    <motion.div 
                        className="section-header"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="section-tag">Global Impact</div>
                        <h2>Industries We Transform</h2>
                        <p>Our cross-industry expertise allows us to deliver specialized solutions that address unique market challenges.</p>
                    </motion.div>
                    
                    <motion.div 
                        className="industries-grid"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {industries.map((ind, i) => (
                            <motion.div key={i} variants={itemVariants}>
                                <Link to="/industries" className="industry-card">
                                    <span className="industry-icon">{ind.icon}</span>
                                    <span className="industry-name">{ind.name}</span>
                                </Link>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section cta-section">
                <div className="container">
                    <motion.div 
                        className="cta-card"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="cta-content">
                            <h2>Ready to Elevate Your Technology?</h2>
                            <p>Partner with DMM Software Solutions to build high-performance software that drives your business forward.</p>
                            <div className="cta-actions">
                                <Link to="/contact" className="btn btn-primary btn-lg">
                                    Get Free Consultation <FiArrowRight />
                                </Link>
                                <Link to="/about" className="btn btn-outline btn-lg">
                                    Learn More
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}

import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiTarget, FiEye, FiAward, FiUsers, FiGlobe, FiArrowRight, FiCheckCircle } from 'react-icons/fi';
import './PageStyles.css';

const values = [
    { icon: '🚀', title: 'Innovation', desc: 'We embrace emerging technologies and creative thinking to solve complex challenges.' },
    { icon: '🤝', title: 'Integrity', desc: 'Honesty, transparency and ethical practices are at the core of everything we do.' },
    { icon: '⭐', title: 'Excellence', desc: 'We are committed to delivering the highest quality in every project we undertake.' },
    { icon: '🌍', title: 'Collaboration', desc: 'We work as true partners, aligning closely with client goals and teams.' },
    { icon: '📈', title: 'Growth', desc: 'We invest in our people and clients to drive continuous improvement and success.' },
    { icon: '🔒', title: 'Security', desc: 'We embed security-first principles into every solution and process.' },
];

const team = [
    { initials: 'DK', name: 'Daniel Kumar', role: 'Chief Executive Officer', desc: '15+ years in technology leadership and enterprise consulting.' },
    { initials: 'SM', name: 'Sarah Mitchell', role: 'Chief Technology Officer', desc: 'Expert in cloud architecture, AI and enterprise software systems.' },
    { initials: 'RP', name: 'Raj Patel', role: 'Head of Development', desc: 'Full-stack engineering leader with expertise across 20+ technologies.' },
    { initials: 'AJ', name: 'Angela James', role: 'Head of Client Success', desc: 'Dedicated to ensuring client satisfaction and long-term partnerships.' },
];

const achievements = [
    { value: '200+', label: 'Projects Delivered' },
    { value: '98%', label: 'Client Retention' },
    { value: '15+', label: 'Countries Served' },
    { value: '10+', label: 'Years Excellence' },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 }
    }
};

export default function About() {
    return (
        <div className="page-wrapper">
            {/* Page Hero */}
            <div className="page-hero">
                <div className="page-hero-img bg-about"></div>
                <div className="page-hero-bg"></div>
                <div className="container">
                    <motion.div 
                        className="page-hero-content"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="section-tag">About DMM Solutions</div>
                        <h1>Transforming Businesses Through <span className="gradient-text">Technology Excellence</span></h1>
                        <p>DMM Software Solutions Limited is a premium IT consulting and software development firm dedicated to delivering innovative technology solutions that drive real business value.</p>
                    </motion.div>
                </div>
            </div>

            {/* Company Overview */}
            <section className="section">
                <div className="container">
                    <div className="two-col">
                        <motion.div 
                            className="two-col-text"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="section-tag">Our Story</div>
                            <h2>Pioneering Technology Solutions Since Day One</h2>
                            <p>Founded with a vision to bridge the gap between complex technology and business needs, DMM Software Solutions Limited has grown into a trusted partner for organisations across the globe.</p>
                            <p>We specialise in providing comprehensive IT consultancy services, from strategic planning and system architecture to custom software development and ongoing support.</p>
                            <p>Based in London, UK, with global service capabilities, we serve clients ranging from ambitious startups to multinational enterprises, delivering solutions that are innovative, scalable, and built to last.</p>
                            <Link to="/contact" className="btn btn-primary" style={{ marginTop: '24px' }}>Work With Us <FiArrowRight /></Link>
                        </motion.div>
                        <motion.div 
                            className="two-col-visual"
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <div className="about-stats-grid">
                                {achievements.map((a, i) => (
                                    <motion.div key={i} className="about-stat-card card" variants={itemVariants}>
                                        <div className="about-stat-value gradient-text">{a.value}</div>
                                        <div className="about-stat-label">{a.label}</div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Vision & Mission */}
            <section className="section" style={{ background: 'var(--primary-light)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
                <div className="container">
                    <motion.div 
                        className="section-header"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="section-tag">Vision & Mission</div>
                        <h2>Guided by Purpose</h2>
                    </motion.div>
                    <div className="grid-2">
                        <motion.div 
                            className="card vm-card"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="icon-box"><FiEye /></div>
                            <h3>Our Vision</h3>
                            <p>To be the most trusted and innovative IT consulting firm, empowering businesses worldwide to achieve their full digital potential through transformative technology solutions.</p>
                        </motion.div>
                        <motion.div 
                            className="card vm-card"
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="icon-box"><FiTarget /></div>
                            <h3>Our Mission</h3>
                            <p>To deliver exceptional IT consulting and software development services that solve real business challenges, creating lasting value through technical excellence, strategic insight, and genuine partnership.</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="section">
                <div className="container">
                    <motion.div 
                        className="section-header"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="section-tag">Our Values</div>
                        <h2>What Drives Us Every Day</h2>
                        <p>Our core values define how we work, how we treat our clients, and how we make decisions.</p>
                    </motion.div>
                    <motion.div 
                        className="grid-3"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {values.map((v, i) => (
                            <motion.div key={i} className="card value-card" variants={itemVariants}>
                                <div className="value-icon">{v.icon}</div>
                                <h3>{v.title}</h3>
                                <p>{v.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Global Reach */}
            <section className="section">
                <div className="container">
                    <motion.div 
                        className="card global-banner"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <div className="global-icon"><FiGlobe /></div>
                        <h2>Global Service Capabilities</h2>
                        <p>With our global network and 24/7 support model, we deliver consistent, high-quality service to clients across North America, Europe, Asia-Pacific and beyond. No matter where your business operates, DMM Software Solutions is your trusted technology partner.</p>
                        <Link to="/contact" className="btn btn-primary btn-lg">Start Your Project <FiArrowRight /></Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}

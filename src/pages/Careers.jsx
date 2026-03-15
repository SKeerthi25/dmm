import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiMapPin, FiUsers, FiHeart, FiTrendingUp, FiStar } from 'react-icons/fi';
import './PageStyles.css';

const openings = [
    { title: 'Senior Full-Stack Developer', type: 'Full-Time', location: 'London, UK (Hybrid)', dept: 'Engineering', skills: ['React', 'Node.js', 'AWS', 'PostgreSQL'] },
    { title: 'Cloud Solutions Architect', type: 'Full-Time', location: 'Remote', dept: 'Cloud', skills: ['AWS', 'Azure', 'Terraform', 'Kubernetes'] },
    { title: 'AI/ML Engineer', type: 'Full-Time', location: 'London, UK (Hybrid)', dept: 'AI', skills: ['Python', 'TensorFlow', 'PyTorch', 'MLOps'] },
    { title: 'Senior IT Consultant', type: 'Full-Time', location: 'London, UK', dept: 'Consulting', skills: ['Digital Transformation', 'Strategy', 'Client Management'] },
    { title: 'Mobile App Developer', type: 'Full-Time', location: 'Remote', dept: 'Engineering', skills: ['React Native', 'Flutter', 'iOS', 'Android'] },
    { title: 'UI/UX Designer', type: 'Full-Time', location: 'London, UK (Hybrid)', dept: 'Design', skills: ['Figma', 'User Research', 'Prototyping', 'Design Systems'] },
];

const benefits = [
    { icon: '💰', title: 'Competitive Salary', desc: 'Market-leading compensation with annual performance reviews and bonuses.' },
    { icon: '🏥', title: 'Health & Wellness', desc: 'Comprehensive private health insurance for you and your family.' },
    { icon: '🌴', title: 'Flexible Leave', desc: '25 days annual leave plus bank holidays and your birthday off.' },
    { icon: '📚', title: 'Learning Budget', desc: '£2,000 annual budget for courses, conferences, and certifications.' },
    { icon: '🏠', title: 'Remote First', desc: 'Flexible working model with home office equipment provided.' },
    { icon: '🚀', title: 'Career Growth', desc: 'Fast-track promotion paths and clear career development frameworks.' },
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

export default function Careers() {
    const [appForm, setAppForm] = useState({ name: '', email: '', role: '', message: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Thank you for your application! We will review your details and be in touch shortly.');
        setAppForm({ name: '', email: '', role: '', message: '' });
    };

    return (
        <div className="page-wrapper">
            <div className="page-hero">
                <div className="page-hero-img bg-careers"></div>
                <div className="page-hero-bg"></div>
                <div className="container">
                    <motion.div 
                        className="page-hero-content"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="section-tag">Careers</div>
                        <h1>Join Our <span className="gradient-text">World-Class Team</span></h1>
                        <p>Build your career at DMM Software Solutions — where innovation meets opportunity. We're always looking for exceptional people to help shape the future of technology.</p>
                    </motion.div>
                </div>
            </div>

            {/* Culture */}
            <section className="section">
                <div className="container">
                    <motion.div 
                        className="section-header"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="section-tag">Our Culture</div>
                        <h2>Why Work at DMM?</h2>
                        <p>We believe great work happens when talented people are supported, trusted, and inspired to do their best work every day.</p>
                    </motion.div>
                    <motion.div 
                        className="grid-3"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {benefits.map((b, i) => (
                            <motion.div key={i} className="card benefit-card" variants={itemVariants}>
                                <div className="benefit-emoji">{b.icon}</div>
                                <h3>{b.title}</h3>
                                <p>{b.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Openings */}
            <section className="section" style={{ background: 'var(--primary-light)', borderTop: '1px solid var(--border)' }}>
                <div className="container">
                    <motion.div 
                        className="section-header"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="section-tag">Open Positions</div>
                        <h2>Current Opportunities</h2>
                        <p>Join our growing team of technology professionals. We hire for attitude and train for skills.</p>
                    </motion.div>
                    <div className="openings-list">
                        {openings.map((job, i) => (
                            <motion.div 
                                key={i} 
                                className="card job-card"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <div className="job-info">
                                    <h3>{job.title}</h3>
                                    <div className="job-meta">
                                        <span className="badge">{job.dept}</span>
                                        <span style={{ color: 'var(--text-muted)', fontSize: '13px', display: 'flex', gap: '4px', alignItems: 'center' }}>
                                            <FiMapPin size={12} /> {job.location}
                                        </span>
                                        <span style={{ color: 'var(--text-muted)', fontSize: '13px' }}>{job.type}</span>
                                    </div>
                                    <div className="job-skills">
                                        {job.skills.map((s, j) => <span key={j} className="tech-badge">{s}</span>)}
                                    </div>
                                </div>
                                <a href="mailto:dmmsolutions5073@gmail.com?subject=Job Application: " className="btn btn-primary">Apply Now <FiArrowRight /></a>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Application Form */}
            <section className="section">
                <div className="container">
                    <motion.div 
                        className="section-header"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="section-tag">Apply Now</div>
                        <h2>Submit Your Application</h2>
                        <p>Don't see your perfect role? Send us your details and we'll be in touch when the right opportunity arises.</p>
                    </motion.div>
                    <motion.div 
                        className="careers-form-wrapper"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <div className="form-row">
                                <div className="form-group">
                                    <label>Full Name *</label>
                                    <input type="text" placeholder="John Smith" value={appForm.name} onChange={e => setAppForm({ ...appForm, name: e.target.value })} required />
                                </div>
                                <div className="form-group">
                                    <label>Email Address *</label>
                                    <input type="email" placeholder="john@example.com" value={appForm.email} onChange={e => setAppForm({ ...appForm, email: e.target.value })} required />
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Position of Interest</label>
                                <input type="text" placeholder="e.g. Senior Developer, Cloud Architect..." value={appForm.role} onChange={e => setAppForm({ ...appForm, role: e.target.value })} />
                            </div>
                            <div className="form-group">
                                <label>Cover Letter / Message *</label>
                                <textarea rows={5} placeholder="Tell us about yourself, your experience, and why you want to join DMM..." value={appForm.message} onChange={e => setAppForm({ ...appForm, message: e.target.value })} required></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>Submit Application <FiArrowRight /></button>
                        </form>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}

import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiExternalLink } from 'react-icons/fi';
import './PageStyles.css';

const projects = [
    {
        title: 'Global Logistics Platform',
        category: 'Cloud & Supply Chain',
        desc: 'Built a real-time tracking and route optimization system for a global logistics leader, improving efficiency by 35%.',
        image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800',
        tech: ['React', 'Node.js', 'AWS', 'PostgreSQL']
    },
    {
        title: 'Fintech Mobile App',
        category: 'Mobile Development',
        desc: 'Developed a secure, high-performance mobile banking application for a challenger bank, featuring real-time transactions.',
        image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800',
        tech: ['React Native', 'Firebase', 'TypeScript']
    },
    {
        title: 'Healthcare AI Diagnostic',
        category: 'AI & Data Science',
        desc: 'Specialized diagnostic tool helping clinicians identify patterns in medical imaging using advanced machine learning.',
        image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800',
        tech: ['Python', 'PyTorch', 'Docker', 'GCP']
    },
    {
        title: 'E-Commerce Engine',
        category: 'Web Development',
        desc: 'A custom, scalable e-commerce infrastructure supporting high-volume traffic for a global retail brand.',
        image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800',
        tech: ['Next.js', 'Shopify API', 'Tailwind CSS']
    }
];

export default function Portfolio() {
    return (
        <div className="page-wrapper">
            <div className="page-hero">
                <div className="page-hero-img bg-portfolio"></div>
                <div className="page-hero-bg"></div>
                <div className="container">
                    <motion.div 
                        className="page-hero-content"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="section-tag">Our Portfolio</div>
                        <h1>Delivering Impact Through <span className="gradient-text">Creative Engineering</span></h1>
                        <p>Explore our recent projects and discover how we help organizations transform their digital landscape with cutting-edge technology.</p>
                    </motion.div>
                </div>
            </div>

            <section className="section">
                <div className="container">
                    <div className="portfolio-list">
                        {projects.map((p, i) => (
                            <motion.div 
                                key={i} 
                                className="card portfolio-card"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <div className="two-col" style={{ gap: '40px' }}>
                                    <div className="pc-image" style={{ overflow: 'hidden', borderRadius: '12px' }}>
                                        <img src={p.image} alt={p.title} style={{ width: '100%', height: 'auto', display: 'block' }} />
                                    </div>
                                    <div className="pc-content">
                                        <span className="badge" style={{ marginBottom: '12px' }}>{p.category}</span>
                                        <h2 style={{ fontSize: '2rem', marginBottom: '16px', color: 'white' }}>{p.title}</h2>
                                        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '24px', lineHeight: '1.7' }}>{p.desc}</p>
                                        <div className="job-skills" style={{ marginBottom: '32px' }}>
                                            {p.tech.map((t, j) => <span key={j} className="tech-badge">{t}</span>)}
                                        </div>
                                        <button className="btn btn-primary">View Case Study <FiExternalLink /></button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

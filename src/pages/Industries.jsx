import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import './PageStyles.css';

const industries = [
    {
        image: 'https://images.unsplash.com/photo-1550565118-3a14e8d0386f?auto=format&fit=crop&q=80&w=800',
        name: 'Finance & Banking',
        desc: 'Secure, compliant fintech solutions including banking platforms, payment gateways, fraud detection, and regulatory reporting systems.',
        solutions: ['Core Banking Systems', 'Payment Processing', 'Fraud Detection AI', 'Regulatory Compliance'],
        colour: 'var(--accent)',
    },
    {
        image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800',
        name: 'Healthcare',
        desc: 'HIPAA-compliant healthcare IT systems including EHR platforms, telemedicine, patient management, and medical imaging analytics.',
        solutions: ['Electronic Health Records', 'Telemedicine Platforms', 'Patient Portals', 'Medical Data Analytics'],
        colour: '#06b6d4',
    },
    {
        image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800',
        name: 'Construction',
        desc: 'Project management platforms, BIM integration, smart site monitoring, and supply chain management systems for modern construction firms.',
        solutions: ['Project Management', 'BIM Integration', 'Site Monitoring IoT', 'Resource Planning'],
        colour: '#f59e0b',
    },
    {
        image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800',
        name: 'Retail & E-Commerce',
        desc: 'Omnichannel retail platforms, inventory management, recommendation engines, and customer loyalty systems that drive sales growth.',
        solutions: ['E-Commerce Platforms', 'Inventory Management', 'AI Recommendation Engine', 'Loyalty Programs'],
        colour: '#ec4899',
    },
    {
        image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800',
        name: 'Education',
        desc: 'Modern learning management systems, virtual classrooms, student analytics, and e-learning platforms that enhance educational outcomes.',
        solutions: ['LMS Platforms', 'Virtual Classrooms', 'Student Analytics', 'Assessment Tools'],
        colour: '#8b5cf6',
    },
    {
        image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800',
        name: 'Logistics & Supply Chain',
        desc: 'Real-time tracking systems, route optimisation, warehouse management, and supply chain visibility platforms for operational excellence.',
        solutions: ['Fleet Management', 'Route Optimisation', 'Warehouse Management', 'Supply Chain Visibility'],
        colour: '#10b981',
    },
    {
        image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&q=80&w=800',
        name: 'Startups',
        desc: 'Rapid MVP development, scalable architecture, product-market fit validation, and technical co-founding support for growth-stage startups.',
        solutions: ['MVP Development', 'Product Strategy', 'Scalable Architecture', 'Technical Leadership'],
        colour: '#0ea5e9',
    },
    {
        image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800',
        name: 'Large Enterprises',
        desc: 'Enterprise-grade digital transformation, legacy modernisation, ERP implementations, and complex systems integration for global corporations.',
        solutions: ['Digital Transformation', 'Legacy Modernisation', 'ERP Systems', 'System Integration'],
        colour: '#10b981',
    },
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

export default function Industries() {
    return (
        <div className="page-wrapper">
            <div className="page-hero">
                <div className="page-hero-img bg-industries"></div>
                <div className="page-hero-bg"></div>
                <div className="container">
                    <motion.div 
                        className="page-hero-content"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="section-tag">Industries</div>
                        <h1>Deep Expertise Across <span className="gradient-text">Key Industries</span></h1>
                        <p>We bring domain-specific knowledge and technology expertise to deliver solutions that truly fit each industry's unique challenges and requirements.</p>
                    </motion.div>
                </div>
            </div>

            <section className="section">
                <div className="container">
                    <motion.div 
                        className="grid-2"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {industries.map((ind, i) => (
                            <motion.div key={i} className="card industry-detail-card" variants={itemVariants}>
                                <div className="idc-image">
                                    <img src={ind.image} alt={ind.name} />
                                </div>
                                <div className="idc-header">
                                    <h3>{ind.name}</h3>
                                </div>
                                <p className="idc-desc">{ind.desc}</p>
                                <div className="idc-solutions">
                                    {ind.solutions.map((s, j) => (
                                        <span key={j} className="idc-badge" style={{ borderColor: `${ind.colour}40`, color: ind.colour, background: `${ind.colour}10` }}>{s}</span>
                                    ))}
                                </div>
                                <Link to="/contact" className="btn btn-outline" style={{ marginTop: '24px' }}>Discuss Your Project <FiArrowRight /></Link>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>
        </div>
    );
}

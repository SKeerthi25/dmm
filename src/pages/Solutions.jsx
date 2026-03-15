import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowRight, FiCheckCircle } from 'react-icons/fi';
import './PageStyles.css';

const solutions = [
    {
        emoji: '⚡',
        title: 'Business Process Automation',
        challenge: 'Manual, repetitive processes leading to errors, delays, and high operational costs.',
        solution: 'We design and implement intelligent automation solutions using RPA, AI, and custom workflows that eliminate manual bottlenecks, reduce costs by up to 60%, and free your team for high-value tasks.',
        results: ['60% reduction in operational costs', 'Elimination of manual errors', '3x faster process execution', 'Real-time process monitoring'],
    },
    {
        emoji: '🌐',
        title: 'Digital Transformation',
        challenge: 'Outdated systems, siloed data, and poor customer experience hindering business growth.',
        solution: 'Our end-to-end digital transformation programs modernise your technology stack, culture, and customer touchpoints, creating a truly digital-first organisation with improved agility and competitiveness.',
        results: ['Modern, scalable technology stack', 'Improved customer experience', '40% increase in operational agility', 'Data-driven culture'],
    },
    {
        emoji: '☁️',
        title: 'Cloud Migration',
        challenge: 'On-premise infrastructure that is costly, inflexible, and unable to scale with business demands.',
        solution: 'We plan and execute seamless cloud migrations to AWS, Azure, or Google Cloud with zero downtime. Our proven methodology ensures security, compliance, and cost optimisation throughout the process.',
        results: ['40% infrastructure cost reduction', 'Infinite scalability', '99.99% uptime guarantee', 'Enhanced security posture'],
    },
    {
        emoji: '📊',
        title: 'Data-Driven Decision Making',
        challenge: 'Business leaders making critical decisions based on gut feeling instead of data insights.',
        solution: 'We build comprehensive data platforms and analytics solutions that turn raw data into actionable insights, enabling confident, evidence-based decision making at every level of your organisation.',
        results: ['Unified data platform', 'Real-time dashboards', 'Predictive analytics capabilities', '35% improvement in decision speed'],
    },
    {
        emoji: '🏢',
        title: 'Enterprise Modernisation',
        challenge: 'Legacy enterprise systems that are slow, expensive to maintain, and incompatible with modern tools.',
        solution: 'We modernise your legacy applications using strangler fig patterns, microservices architecture, and phased migration approaches that minimise risk while delivering rapid, tangible improvements.',
        results: ['80% faster application performance', 'Reduced maintenance costs', 'Modern API-first architecture', 'Improved developer productivity'],
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

export default function Solutions() {
    return (
        <div className="page-wrapper">
            <div className="page-hero">
                <div className="page-hero-img bg-solutions"></div>
                <div className="page-hero-bg"></div>
                <div className="container">
                    <motion.div 
                        className="page-hero-content"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="section-tag">Our Solutions</div>
                        <h1>Solving Real Business <span className="gradient-text">Challenges</span></h1>
                        <p>We don't just build software — we solve business problems. Explore how our solutions address the most critical technology challenges facing modern organisations.</p>
                    </motion.div>
                </div>
            </div>

            <section className="section">
                <div className="container">
                    <motion.div 
                        className="solutions-list"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {solutions.map((sol, i) => (
                            <motion.div key={i} className="card solution-card" variants={itemVariants}>
                                <div className="sol-header">
                                    <span className="sol-emoji">{sol.emoji}</span>
                                    <h2>{sol.title}</h2>
                                </div>
                                <div className="sol-body">
                                    <div className="sol-block">
                                        <div className="sol-sub-block">
                                            <h4>🔴 The Challenge</h4>
                                            <p>{sol.challenge}</p>
                                        </div>
                                        <div className="sol-sub-block">
                                            <h4>✅ Our Solution</h4>
                                            <p>{sol.solution}</p>
                                        </div>
                                    </div>
                                    <div className="sol-results-block">
                                        <h4>📈 Key Results</h4>
                                        <ul className="sol-results">
                                            {sol.results.map((r, j) => (
                                                <li key={j}><FiCheckCircle className="check-green" /> {r}</li>
                                            ))}
                                        </ul>
                                        <Link to="/contact" className="btn btn-primary" style={{ marginTop: '24px' }}>Discuss This Solution <FiArrowRight /></Link>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>
        </div>
    );
}

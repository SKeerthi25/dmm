import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import './PageStyles.css';

const techCategories = [
    {
        category: 'Frontend',
        emoji: '🖥️',
        technologies: [
            { name: 'React', level: 95, desc: 'Building dynamic, high-performance UI components and single-page applications.' },
            { name: 'Angular', level: 88, desc: 'Enterprise-grade web applications with TypeScript and powerful CLI tooling.' },
            { name: 'Vue.js', level: 85, desc: 'Progressive JavaScript framework for building elegant, lightweight web interfaces.' },
            { name: 'Next.js', level: 90, desc: 'Full-stack React framework with SSR, SSG, and powerful routing capabilities.' },
            { name: 'TypeScript', level: 92, desc: 'Type-safe JavaScript development for robust and maintainable codebases.' },
        ],
    },
    {
        category: 'Backend',
        emoji: '⚙️',
        technologies: [
            { name: 'Node.js', level: 95, desc: 'High-performance server-side JavaScript for real-time and scalable APIs.' },
            { name: 'Python', level: 92, desc: 'Versatile backend development, data processing, and machine learning pipelines.' },
            { name: 'Java', level: 88, desc: 'Enterprise Java applications with Spring Boot for robust, secure backends.' },
            { name: '.NET Core', level: 85, desc: 'Cross-platform Microsoft ecosystem applications with high performance.' },
            { name: 'GraphQL', level: 87, desc: 'Flexible, efficient API development for modern data-driven applications.' },
        ],
    },
    {
        category: 'Databases',
        emoji: '🗄️',
        technologies: [
            { name: 'PostgreSQL', level: 95, desc: 'Advanced open-source relational database for complex data needs.' },
            { name: 'MySQL', level: 92, desc: 'Industry-standard relational database powering millions of applications.' },
            { name: 'MongoDB', level: 90, desc: 'Flexible NoSQL document database for modern, scalable applications.' },
            { name: 'Redis', level: 88, desc: 'High-performance in-memory data store for caching and real-time systems.' },
            { name: 'Elasticsearch', level: 84, desc: 'Powerful search and analytics engine for full-text search and logging.' },
        ],
    },
    {
        category: 'Cloud Platforms',
        emoji: '☁️',
        technologies: [
            { name: 'AWS', level: 95, desc: 'Comprehensive cloud services including EC2, S3, Lambda, RDS and more.' },
            { name: 'Microsoft Azure', level: 90, desc: 'Enterprise cloud platform with strong Active Directory and hybrid cloud.' },
            { name: 'Google Cloud', level: 87, desc: 'AI-first cloud platform with superior ML services and data analytics.' },
            { name: 'Docker & Kubernetes', level: 93, desc: 'Container orchestration for highly available, scalable microservices.' },
            { name: 'Terraform', level: 88, desc: 'Infrastructure as Code for consistent, version-controlled cloud deployments.' },
        ],
    },
    {
        category: 'Mobile',
        emoji: '📱',
        technologies: [
            { name: 'React Native', level: 92, desc: 'Cross-platform mobile apps with a single codebase for iOS and Android.' },
            { name: 'Flutter', level: 88, desc: "Google's UI toolkit for natively compiled apps across all platforms." },
            { name: 'Swift (iOS)', level: 85, desc: "Native iOS application development with Apple's modern Swift language." },
            { name: 'Kotlin (Android)', level: 85, desc: 'Native Android development with modern, concise Kotlin language.' },
        ],
    },
    {
        category: 'AI & Data',
        emoji: '🤖',
        technologies: [
            { name: 'TensorFlow', level: 88, desc: 'End-to-end machine learning platform for building and deploying ML models.' },
            { name: 'PyTorch', level: 85, desc: 'Flexible deep learning framework preferred by researchers and engineers.' },
            { name: 'Apache Spark', level: 82, desc: 'Large-scale data processing and analytics for big data pipelines.' },
            { name: 'Power BI', level: 90, desc: 'Business intelligence and interactive data visualisation at scale.' },
            { name: 'OpenAI APIs', level: 92, desc: 'Integrating GPT and DALL-E capabilities into custom business applications.' },
        ],
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
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.4 }
    }
};

export default function Technologies() {
    const [active, setActive] = useState(0);
    const cat = techCategories[active];

    return (
        <div className="page-wrapper">
            <div className="page-hero">
                <div className="page-hero-img bg-tech"></div>
                <div className="page-hero-bg"></div>
                <div className="container">
                    <motion.div 
                        className="page-hero-content"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="section-tag">Our Stack</div>
                        <h1>Our <span className="gradient-text">Technology Expertise</span></h1>
                        <p>We leverage the best modern technologies to build scalable, robust, and future-proof solutions for your business.</p>
                    </motion.div>
                </div>
            </div>

            <section className="section">
                <div className="container">
                    {/* Category Tabs */}
                    <div className="tech-tabs">
                        {techCategories.map((cat, i) => (
                            <button
                                key={i}
                                className={`tech-tab ${active === i ? 'active' : ''}`}
                                onClick={() => setActive(i)}
                            >
                                {cat.emoji} {cat.category}
                            </button>
                        ))}
                    </div>

                    {/* Technologies Grid */}
                    <AnimatePresence mode="wait">
                        <motion.div 
                            key={active}
                            className="tech-grid"
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                            exit={{ opacity: 0, y: -20 }}
                        >
                            {cat.technologies.map((tech, i) => (
                                <motion.div key={tech.name} className="card tech-card" variants={itemVariants}>
                                    <div className="tech-header">
                                        <h3 className="tech-name">{tech.name}</h3>
                                    </div>
                                    <p className="tech-desc">{tech.desc}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </AnimatePresence>

                    <motion.div 
                        style={{ textAlign: 'center', marginTop: '80px' }}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '32px', fontSize: '1.1rem' }}>
                            Don't see a technology you need? We work with many more.
                        </p>
                        <Link to="/contact" className="btn btn-primary btn-lg">Discuss Your Stack <FiArrowRight /></Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}

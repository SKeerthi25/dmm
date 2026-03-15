import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiMonitor, FiCode, FiSmartphone, FiCloud, FiCpu, FiDatabase, FiGlobe, FiSettings, FiHeadphones, FiArrowRight, FiCheckCircle } from 'react-icons/fi';
import './PageStyles.css';

const services = [
    {
        icon: <FiMonitor />,
        title: 'IT Consulting',
        desc: 'Strategic technology advisory services to align your IT infrastructure with your business vision. We assess your current state, identify gaps, and create a roadmap for transformation.',
        features: ['Technology Strategy', 'IT Roadmap Planning', 'Architecture Review', 'Digital Transformation Advisory'],
    },
    {
        icon: <FiCode />,
        title: 'Custom Software Development',
        desc: 'Bespoke software solutions designed and built to your exact requirements. From concept to deployment, we deliver robust, scalable applications that solve real business problems.',
        features: ['Requirement Analysis', 'Agile Development', 'Quality Assurance', 'Post-Launch Support'],
    },
    {
        icon: <FiGlobe />,
        title: 'Web Application Development',
        desc: 'High-performance web applications with exceptional user experiences. We use modern frameworks like React, Angular and Vue to build fast, responsive, and scalable web solutions.',
        features: ['React / Angular / Vue', 'Progressive Web Apps', 'E-Commerce Solutions', 'API Development'],
    },
    {
        icon: <FiSmartphone />,
        title: 'Mobile App Development',
        desc: 'Native and cross-platform mobile applications for iOS and Android. We create intuitive, feature-rich apps that engage users and drive business growth.',
        features: ['iOS & Android', 'React Native / Flutter', 'App Store Optimisation', 'Push Notifications'],
    },
    {
        icon: <FiCloud />,
        title: 'Cloud Computing Solutions',
        desc: 'Leverage the full power of cloud technology with services across AWS, Microsoft Azure, and Google Cloud. We migrate, optimise, and manage cloud environments for maximum efficiency.',
        features: ['Cloud Migration', 'Infrastructure as Code', 'Multi-Cloud Strategy', '24/7 Monitoring'],
    },
    {
        icon: <FiCpu />,
        title: 'AI & Data Analytics',
        desc: 'Transform raw data into strategic insights with our AI and analytics services. From machine learning models to real-time dashboards, we help you make data-driven decisions.',
        features: ['Machine Learning', 'Predictive Analytics', 'Business Intelligence', 'Natural Language Processing'],
    },
    {
        icon: <FiDatabase />,
        title: 'Enterprise Software Solutions',
        desc: 'Robust ERP, CRM, and custom enterprise platforms that streamline operations and improve productivity across your entire organisation.',
        features: ['ERP Systems', 'CRM Solutions', 'Workflow Automation', 'System Integration'],
    },
    {
        icon: <FiSettings />,
        title: 'Digital Transformation Services',
        desc: 'End-to-end digital transformation journeys that modernise your operations, culture and customer experience for the digital age.',
        features: ['Process Automation', 'Legacy Modernisation', 'Change Management', 'Digital Culture'],
    },
    {
        icon: <FiDatabase />,
        title: 'System Integration',
        desc: 'Seamlessly connect disparate systems, applications and data sources to create a unified, efficient technology ecosystem across your organisation.',
        features: ['API Integration', 'Middleware Solutions', 'Data Synchronisation', 'Third-Party Integrations'],
    },
    {
        icon: <FiHeadphones />,
        title: 'IT Support & Maintenance',
        desc: 'Proactive IT support and maintenance services that keep your systems running at peak performance. Our expert team is available around the clock.',
        features: ['24/7 Help Desk', 'Proactive Monitoring', 'Security Patching', 'Performance Optimisation'],
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

export default function Services() {
    return (
        <div className="page-wrapper">
            <div className="page-hero">
                <div className="page-hero-img bg-services"></div>
                <div className="page-hero-bg"></div>
                <div className="container">
                    <motion.div 
                        className="page-hero-content"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="section-tag">Our Services</div>
                        <h1>Comprehensive <span className="gradient-text">IT Services</span> for Every Need</h1>
                        <p>From strategy to deployment and ongoing support — we offer the full spectrum of IT services your business needs to thrive in the digital era.</p>
                    </motion.div>
                </div>
            </div>

            <section className="section">
                <div className="container">
                    <motion.div 
                        className="services-list"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {services.map((s, i) => (
                            <motion.div key={i} className="card service-detail-card" variants={itemVariants}>
                                <div className="sdc-icon"><div className="icon-box">{s.icon}</div></div>
                                <div className="sdc-content">
                                    <h3>{s.title}</h3>
                                    <p>{s.desc}</p>
                                    <ul className="sdc-features">
                                        {s.features.map((f, j) => (
                                            <li key={j}><FiCheckCircle className="check-green" /> {f}</li>
                                        ))}
                                    </ul>
                                    <Link to="/contact" className="btn btn-primary">Get Started <FiArrowRight /></Link>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>
        </div>
    );
}

import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowRight, FiClock } from 'react-icons/fi';
import './PageStyles.css';

const posts = [
    {
        category: 'AI & Technology',
        title: 'How AI is Revolutionising Enterprise Software Development in 2025',
        excerpt: 'Artificial intelligence is no longer a future concept — it\'s reshaping how businesses build, deploy, and maintain software at every level. Discover the most impactful AI applications in enterprise software.',
        date: 'March 5, 2026',
        readTime: '7 min read',
        emoji: '🤖',
    },
    {
        category: 'Cloud Computing',
        title: 'AWS vs Azure vs Google Cloud: Choosing the Right Platform for Your Business',
        excerpt: 'Selecting the right cloud platform is one of the most important technology decisions your business will make. We compare the three major cloud providers across cost, performance, and capabilities.',
        date: 'February 22, 2026',
        readTime: '9 min read',
        emoji: '☁️',
    },
    {
        category: 'IT Strategy',
        title: '5 Critical Mistakes Companies Make During Digital Transformation',
        excerpt: 'Digital transformation initiatives fail more often than they succeed. We examine the five most common mistakes organisations make — and how to avoid them in your own transformation journey.',
        date: 'February 15, 2026',
        readTime: '6 min read',
        emoji: '📊',
    },
    {
        category: 'Software Development',
        title: 'Microservices vs Monolith: Which Architecture is Right for Your Project?',
        excerpt: 'The debate between microservices and monolithic architecture remains one of the most important decisions in software design. Here\'s how to make the right choice based on your specific context.',
        date: 'February 8, 2026',
        readTime: '8 min read',
        emoji: '🏗️',
    },
    {
        category: 'Data & Analytics',
        title: 'Building a Data Strategy: From Raw Data to Business Intelligence',
        excerpt: 'Data is the new currency of business. Learn how to build a comprehensive data strategy that transforms scattered information into powerful business insights that drive competitive advantage.',
        date: 'January 28, 2026',
        readTime: '10 min read',
        emoji: '📈',
    },
    {
        category: 'Cybersecurity',
        title: 'Zero Trust Security: Why Traditional Perimeter Security is No Longer Enough',
        excerpt: 'The traditional "castle and moat" approach to cybersecurity is obsolete in today\'s distributed, cloud-first world. Discover why Zero Trust architecture is now the industry gold standard.',
        date: 'January 18, 2026',
        readTime: '7 min read',
        emoji: '🔒',
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

export default function Blog() {
    return (
        <div className="page-wrapper">
            <div className="page-hero">
                <div className="page-hero-img bg-blog"></div>
                <div className="page-hero-bg"></div>
                <div className="container">
                    <motion.div 
                        className="page-hero-content"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="section-tag">Blog</div>
                        <h1>Technology Insights &amp; <span className="gradient-text">Expert Perspectives</span></h1>
                        <p>Stay ahead of the technology curve with our expert articles on IT strategy, software development, cloud computing, AI, and digital transformation.</p>
                    </motion.div>
                </div>
            </div>

            <section className="section">
                <div className="container">
                    <motion.div 
                        className="grid-3 blog-grid"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {posts.map((post, i) => (
                            <motion.div key={i} className="card blog-card" variants={itemVariants}>
                                <div className="blog-emoji">{post.emoji}</div>
                                <span className="badge">{post.category}</span>
                                <h3 className="blog-title">{post.title}</h3>
                                <p className="blog-excerpt">{post.excerpt}</p>
                                <div className="blog-meta">
                                    <FiClock size={13} />
                                    <span>{post.date} · {post.readTime}</span>
                                </div>
                                <a href="#" className="service-link" style={{ marginTop: '16px' }}>Read Article <FiArrowRight /></a>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>
        </div>
    );
}

import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiCheckCircle } from 'react-icons/fi';
import './PageStyles.css';

const plans = [
    {
        emoji: '🎯',
        title: 'Fixed Price Project',
        subtitle: 'Perfect for well-defined projects',
        desc: 'Ideal for projects with clear, fixed scope and requirements. We provide a comprehensive proposal with fixed timeline and cost.',
        features: [
            'Fixed scope & budget agreed upfront',
            'Dedicated project manager',
            'Weekly progress reports',
            'Full source code ownership',
            'Post-launch support included',
            'Money-back guarantee if milestones missed',
        ],
        cta: 'Get a Quote',
        popular: false,
    },
    {
        emoji: '👥',
        title: 'Dedicated Development Team',
        subtitle: 'Most popular model',
        desc: 'Get a fully managed, dedicated team of expert developers, designers, and QA engineers working exclusively on your project.',
        features: [
            'Handpicked developers for your stack',
            'Full-time dedicated resource model',
            'Daily standups and transparent reporting',
            'Seamless integration with your team',
            'Flexible team scaling up or down',
            'NDA & IP protection guaranteed',
        ],
        cta: 'Build Your Team',
        popular: true,
    },
    {
        emoji: '⏱️',
        title: 'Hourly Consulting',
        subtitle: 'Flexible expert advice',
        desc: 'Pay only for the expert time you need. Perfect for advisory, code reviews, architecture planning, or technical due diligence.',
        features: [
            'Senior consultants only (10+ years)',
            'Flexible hours, on your schedule',
            'Detailed time tracking & reporting',
            'Multiple disciplines available',
            'No minimum commitment required',
            'Instant engagement, no long setup',
        ],
        cta: 'Book a Session',
        popular: false,
    },
    {
        emoji: '🛡️',
        title: 'Long-Term Support & Maintenance',
        subtitle: 'Ongoing peace of mind',
        desc: 'Comprehensive managed services including 24/7 monitoring, security patching, performance optimisation, and ongoing enhancements.',
        features: [
            '24/7 system monitoring & alerting',
            'Monthly enhancement releases',
            'Security & compliance management',
            'Priority support SLA (4-hour response)',
            'Quarterly technology reviews',
            'Dedicated account manager',
        ],
        cta: 'Learn More',
        popular: false,
    },
];

const process = [
    { step: '01', title: 'Free Consultation', desc: 'Share your project goals with us. We provide a free initial consultation and technical assessment.' },
    { step: '02', title: 'Proposal & Agreement', desc: 'We prepare a detailed proposal outlining scope, timeline, team, and investment.' },
    { step: '03', title: 'Team Assembly', desc: 'We handpick the perfect team of specialists for your specific project requirements.' },
    { step: '04', title: 'Agile Development', desc: 'Work begins with transparent agile sprints, regular demos, and open communication.' },
    { step: '05', title: 'Launch & Handover', desc: 'Smooth deployment with full documentation, training, and knowledge transfer.' },
    { step: '06', title: 'Ongoing Support', desc: 'Continue with maintenance and support to keep your solution evolving with your business.' },
];

export default function Pricing() {
    return (
        <div className="page-wrapper">
            <div className="page-hero">
                <div className="page-hero-img bg-pricing"></div>
                <div className="page-hero-bg"></div>
                <div className="container">
                    <motion.div 
                        className="page-hero-content"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="section-tag">Pricing</div>
                        <h1>Flexible Engagement Models for <span className="gradient-text">Every Business</span></h1>
                        <p>Choose the partnership model that best fits your project needs and business goals. All models include our quality guarantee and dedicated support.</p>
                    </motion.div>
                </div>
            </div>

            <section className="section">
                <div className="container">
                    <div className="pricing-grid">
                        {plans.map((plan, i) => (
                            <div key={i} className={`card pricing-card ${plan.popular ? 'pricing-featured' : ''}`}>
                                {plan.popular && <div className="pricing-badge">Most Popular</div>}
                                <div className="pricing-emoji">{plan.emoji}</div>
                                <h3>{plan.title}</h3>
                                <p className="pricing-subtitle">{plan.subtitle}</p>
                                <p className="pricing-desc">{plan.desc}</p>
                                <ul className="pricing-features">
                                    {plan.features.map((f, j) => (
                                        <li key={j}><FiCheckCircle className="check-green" /> {f}</li>
                                    ))}
                                </ul>
                                <Link to="/contact" className={`btn ${plan.popular ? 'btn-primary' : 'btn-outline'}`} style={{ width: '100%', justifyContent: 'center', marginTop: '24px' }}>
                                    {plan.cta} <FiArrowRight />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process */}
            <section className="section" style={{ background: 'rgba(255,255,255,0.02)', borderTop: '1px solid var(--border)' }}>
                <div className="container">
                    <div className="section-header">
                        <div className="section-tag">Our Process</div>
                        <h2>How We Work Together</h2>
                        <p>A transparent, collaborative process designed for your success from day one.</p>
                    </div>
                    <div className="process-grid">
                        {process.map((p, i) => (
                            <div key={i} className="card process-card">
                                <div className="process-step">{p.step}</div>
                                <h3>{p.title}</h3>
                                <p>{p.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

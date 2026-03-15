import React, { useState } from 'react';
import { FiPlus, FiMinus } from 'react-icons/fi';
import './PageStyles.css';

const faqs = [
    {
        q: 'How long does a typical software project take to develop?',
        a: 'Project timelines vary based on complexity and scope. A simple web application typically takes 6-12 weeks, a medium complexity system 3-6 months, and enterprise-level platforms 6-18 months. We provide detailed timelines during our discovery phase with clear milestones and deliverables.',
    },
    {
        q: 'What technologies do you use for development?',
        a: 'We use a broad range of modern technologies selected based on your specific requirements. For web, we work with React, Angular, Vue, Node.js, Python, and Java. For cloud, we use AWS, Azure, and Google Cloud. For mobile, React Native and Flutter. We always recommend the best technology for your specific problem, not just what we\'re most comfortable with.',
    },
    {
        q: 'Do you provide post-project support and maintenance?',
        a: 'Absolutely. We offer comprehensive post-launch support and maintenance packages including 24/7 monitoring, bug fixes, security patches, performance optimisation, and feature enhancements. We believe in long-term partnerships and won\'t simply disappear after launch.',
    },
    {
        q: 'How do we start working with DMM Software Solutions?',
        a: 'Getting started is easy! Contact us via our website form, email, or phone to schedule a free initial consultation. We\'ll discuss your requirements, assess the project scope, and provide a detailed proposal outlining approach, timeline, and investment. You\'re under no obligation until you\'re fully satisfied with the proposal.',
    },
    {
        q: 'Do you sign NDAs to protect our business ideas?',
        a: 'Yes, absolutely. We routinely sign Non-Disclosure Agreements (NDAs) before any sensitive project discussion. Protecting your intellectual property and business confidentiality is a top priority. You can trust that your ideas are safe with us.',
    },
    {
        q: 'Can you work with our in-house development team?',
        a: 'Yes, we have extensive experience working alongside in-house teams. We can augment your existing team with specialist skills, provide technical leadership, or handle specific project components. We adapt our working style to fit seamlessly with your organisation.',
    },
    {
        q: 'What is your development methodology?',
        a: 'We primarily use Agile/Scrum methodology with two-week sprint cycles, daily standups, sprint reviews, and retrospectives. This ensures maximum transparency, early issue detection, and regular delivery of working software. For some projects, we use Kanban or a hybrid approach as appropriate.',
    },
    {
        q: 'How do you handle project communication and reporting?',
        a: 'We maintain open, transparent communication throughout every project. You\'ll have access to a dedicated project manager, a shared project management board (Jira/Trello), weekly progress reports, bi-weekly stakeholder demos, and direct access to the development team via Slack or Teams. You\'ll always know exactly what we\'re working on.',
    },
    {
        q: 'Do you have experience with regulated industries like healthcare and finance?',
        a: 'Yes. We have deep experience building HIPAA-compliant healthcare systems, PCI-DSS compliant fintech platforms, and GDPR-compliant applications. Our team includes specialists in regulatory compliance who ensure your solution meets all legal and industry requirements.',
    },
    {
        q: 'What are your pricing models?',
        a: 'We offer four flexible engagement models: Fixed Price Project (for defined scope), Dedicated Development Team (for ongoing builds), Hourly Consulting (for advisory and ad-hoc work), and Long-Term Support & Maintenance contracts. Contact us for a tailored quote and more details.',
    },
    {
        q: 'Can I see examples of your previous work?',
        a: 'Yes! Visit our Portfolio & Case Studies page to see detailed case studies of completed projects across healthcare, finance, retail, construction, and more — including the challenges faced, solutions built, and results achieved. We\'re proud of the work we do and happy to share it.',
    },
    {
        q: 'What happens if I\'m not happy with the work?',
        a: 'Client satisfaction is our number one priority. We have a collaborative revision process built into every project phase. If deliverables don\'t meet the agreed specifications, we fix them at no additional cost. For Fixed Price projects, we also offer milestone-based payment structures so you only pay when value is delivered.',
    },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(null);

    return (
        <div className="page-wrapper">
            <div className="page-hero">
                <div className="page-hero-img bg-faq"></div>
                <div className="page-hero-bg"></div>
                <div className="container">
                    <div className="page-hero-content">
                        <div className="section-tag">FAQ</div>
                        <h1>Frequently Asked <span className="gradient-text">Questions</span></h1>
                        <p>Everything you need to know about working with DMM Software Solutions. Can't find the answer? Contact our team directly.</p>
                    </div>
                </div>
            </div>

            <section className="section">
                <div className="container">
                    <div className="faq-list">
                        {faqs.map((faq, i) => (
                            <div key={i} className={`faq-item ${openIndex === i ? 'open' : ''}`}>
                                <button className="faq-question" onClick={() => setOpenIndex(openIndex === i ? null : i)}>
                                    <span>{faq.q}</span>
                                    {openIndex === i ? <FiMinus /> : <FiPlus />}
                                </button>
                                {openIndex === i && (
                                    <div className="faq-answer">
                                        <p>{faq.a}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

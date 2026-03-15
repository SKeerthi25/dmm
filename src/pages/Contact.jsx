import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend, FiClock, FiCheckCircle, FiLoader } from 'react-icons/fi';
import emailjs from '@emailjs/browser';
import './PageStyles.css';

export default function Contact() {
    const formRef = useRef();
    const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' });
    const [status, setStatus] = useState({ loading: false, submitted: false, error: null });

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus({ ...status, loading: true });

        // EmailJS Configuration
        // NOTE: Make sure to replace YOUR_PUBLIC_KEY with your actual Public Key from EmailJS
        const SERVICE_ID = 'service_0dbezeb'; 
        const TEMPLATE_ID = 'template_70owtrq';
        const PUBLIC_KEY = 'D8nFiIKX52OBvtDXI';

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
            .then(() => {
                setStatus({ loading: false, submitted: true, error: null });
                setForm({ name: '', email: '', phone: '', service: '', message: '' });
            }, (error) => {
                console.error('Email failed:', error);
                setStatus({ loading: false, submitted: false, error: 'Failed to send message. Please try again later.' });
            });
    };

    return (
        <div className="page-wrapper">
            <div className="page-hero">
                <div className="page-hero-img bg-contact"></div>
                <div className="page-hero-bg"></div>
                <div className="container">
                    <motion.div 
                        className="page-hero-content"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="section-tag">Contact Us</div>
                        <h1>Let's Build Something <span className="gradient-text">Amazing Together</span></h1>
                        <p>Ready to start your project? Get in touch for a free consultation. Our team typically responds within 2 business hours.</p>
                    </motion.div>
                </div>
            </div>

            <section className="section">
                <div className="container">
                    <div className="contact-grid">
                        {/* Contact Info */}
                        <motion.div 
                            className="contact-info-col"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="section-tag">Get in Touch</div>
                            <h2>Partner with DMM Solutions</h2>
                            <p>Whether you have a project in mind, a question to ask, or just want to explore how we can help — we'd love to hear from you.</p>

                            <div className="contact-info-items">
                                <div className="contact-info-item">
                                    <div className="ci-icon"><FiMail /></div>
                                    <div className="ci-content">
                                        <div className="ci-label">Email Us</div>
                                        <a href="mailto:dmmsolutions5073@gmail.com" className="ci-value">dmmsolutions5073@gmail.com</a>
                                    </div>
                                </div>
                                <div className="contact-info-item">
                                    <div className="ci-icon"><FiPhone /></div>
                                    <div className="ci-content">
                                        <div className="ci-label">Call Us</div>
                                        <a href="tel:07438780880" className="ci-value">07438780880</a>
                                    </div>
                                </div>
                                <div className="contact-info-item">
                                    <div className="ci-icon"><FiMapPin /></div>
                                    <div className="ci-content">
                                        <div className="ci-label">Visit Us</div>
                                        <div className="ci-value">56 College Road<br />SW19 2BS, London, UK</div>
                                    </div>
                                </div>
                                <div className="contact-info-item">
                                    <div className="ci-icon"><FiClock /></div>
                                    <div className="ci-content">
                                        <div className="ci-label">Business Hours</div>
                                        <div className="ci-value">Mon–Fri: 9:00 AM – 6:00 PM<br />Weekends: By appointment</div>
                                    </div>
                                </div>
                            </div>

                            <div className="map-placeholder">
                                <iframe
                                    title="DMM Software Solutions Location"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2487.9!2d-0.1876!3d51.4299!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDI1JzQ3LjYiTiAwwrAxMSczMy4xIlc!5e0!3m2!1sen!2suk!4v1"
                                    width="100%" height="240"
                                    style={{ border: 0, borderRadius: '20px' }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div 
                            className="contact-form-col"
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="card">
                                {status.submitted ? (
                                    <div className="form-success">
                                        <div className="success-icon"><FiCheckCircle /></div>
                                        <h3>Message Sent Successfully!</h3>
                                        <p>Thank you for reaching out. Our team will review your enquiry and respond within 2 business hours.</p>
                                        <button className="btn btn-primary" onClick={() => setStatus({ ...status, submitted: false })}>Send Another Message</button>
                                    </div>
                                ) : (
                                    <>
                                        <h3 style={{ marginBottom: '32px', fontSize: '24px' }}>Send Us a Message</h3>
                                        {status.error && <div className="error-message" style={{ color: '#ef4444', marginBottom: '20px', fontSize: '14px', textAlign: 'center' }}>{status.error}</div>}
                                        <form className="contact-form" ref={formRef} onSubmit={handleSubmit}>
                                            <div className="form-row">
                                                <div className="form-group">
                                                    <label>Full Name *</label>
                                                    <input type="text" name="user_name" placeholder="John Smith" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} required />
                                                </div>
                                                <div className="form-group">
                                                    <label>Email Address *</label>
                                                    <input type="email" name="user_email" placeholder="john@company.com" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} required />
                                                </div>
                                            </div>
                                            <div className="form-row">
                                                <div className="form-group">
                                                    <label>Phone Number</label>
                                                    <input type="tel" name="user_phone" placeholder="+44 7XXX XXXXXX" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} />
                                                </div>
                                                <div className="form-group">
                                                    <label>Service Required</label>
                                                    <select name="service_type" value={form.service} onChange={e => setForm({ ...form, service: e.target.value })}>
                                                        <option value="">Select a service...</option>
                                                        <option>IT Consulting</option>
                                                        <option>Custom Software Development</option>
                                                        <option>Web Application Development</option>
                                                        <option>Mobile App Development</option>
                                                        <option>Cloud Computing Solutions</option>
                                                        <option>AI & Data Analytics</option>
                                                        <option>Digital Transformation</option>
                                                        <option>IT Support & Maintenance</option>
                                                        <option>Other</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label>Project Details *</label>
                                                <textarea name="message" rows={5} placeholder="Tell us about your project, goals, timeline, and any specific requirements..." value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} required></textarea>
                                            </div>
                                            <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%' }} disabled={status.loading}>
                                                {status.loading ? (
                                                    <><FiLoader className="spin" /> Sending...</>
                                                ) : (
                                                    <><FiSend /> Send Message</>
                                                )}
                                            </button>
                                            <p style={{ color: 'var(--text-muted)', fontSize: '12px', textAlign: 'center', marginTop: '16px' }}>
                                                🔒 Your information is 100% secure. We never share your data.
                                            </p>
                                        </form>
                                    </>
                                )}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
}

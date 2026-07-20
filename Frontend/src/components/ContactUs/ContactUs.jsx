
import { useState } from 'react';
import { Link } from "react-router-dom";
import './ContactUs.css';
import whatsappQR from '../../assets/QRCode.jpeg';

const features = [
  { icon: '🎧', title: 'Quick Response',         desc: 'We aim to respond to all inquiries within 24 hours.' },
  { icon: '🛡️', title: 'Expert Guidance',        desc: 'Get the right advice from our HR & compliance experts.' },
  { icon: '👥', title: 'Personalized Solutions', desc: 'Tailored services to meet your unique business needs.' },
  { icon: '👍', title: 'Trusted by Businesses',  desc: 'Partnering with organizations across diverse industries.' },
];

const offices = [
  {
    type: 'head',
    icon: '🏢',
    title: 'Head Office – Bengaluru',
    address: 'No 15, Lakshmi Narasimha nilaya, 3rd Main, 3rd Cross,\nNear Deepak Nursing Home, Havanur Layout,\nBengaluru, Karnataka 560073',
    phone: '+91 91089 00230',
    email: 'ashwijahrconsultancy@gmail.com',
  },

  {
    type: 'Office',
    icon: '🏢',
    title: 'Mysuru Branch',
    address: 'No 5388, 12th cross, 1st stage, Vijaynagar, Mysuru -570017',
    phone: '+91 91089 00230',
    email: 'ashwijahrconsultancy@gmail.com',
  },
  
];

const services = [
  'HR Shared Services',
  'Payroll Management',
  'Labour Law Compliance',
  'ESI & PF Compliance',
  'Accounting Services',
  'Training & Support',
  'Business Support Services',
  'GST Registration & Filing',
  'Digital Signature (DSC) Services',
  'Other',
];

const ContactUs = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', service: '', message: '' });
  const [statusMsg, setStatusMsg] = useState({ type: '', text: '' }); 
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const API_URL = import.meta.env.VITE_API_URL;

  const handleSubmit = async (e) => {
  e.preventDefault();

  setIsSubmitting(true);
  setStatusMsg({ type: "", text: "" });

  try {
    const response = await fetch(`${API_URL}/api/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const data = await response.json();

    if (response.ok) {
      setStatusMsg({
        type: "success",
        text: "✅ Message sent! We will get back to you shortly.",
      });

      setForm({
        name: "",
        email: "",
        phone: "",
        subject: "",
        service: "",
        message: "",
      });
    } else {
      setStatusMsg({
        type: "error",
        text: data.message || "❌ Failed to send message.",
      });
    }
  } catch (error) {
    console.error(error);

    setStatusMsg({
      type: "error",
      text: "❌ Server error. Please try again later.",
    });
  } finally {
    setIsSubmitting(false);
  }
};

  return (
    <div className="contact-page">

      {/* BREADCRUMB */}

      <div className="breadcrumb">
  <Link to="/" className="bc-link">
    Home
  </Link>

  <span className="bc-sep">›</span>

  <span className="bc-active">
    Contact us
  </span>
</div>


      {/* HERO + FORM */}
      <section className="contact-hero">
        <div className="contact-hero-container">
          <div className="contact-hero-left">
            <p className="section-tag">CONTACT US</p>
            <h1>We're Here to Help<br />Your Business Grow.</h1>
            <div className="orange-line" />
            <p className="contact-intro">Have a question, need expert advice, or want to know more about our services? Our team of consultants is ready to assist you in navigating HR and Compliance.</p>

            <div className="contact-info-grid">
              <div className="contact-info-item">
                <div className="ci-icon-wrap">📞</div>
                <div>
                  <div className="ci-label">Call Us</div>
                  <div className="ci-value">+91 91089 00230</div>
                </div>
              </div>
              <div className="contact-info-item">
                <div className="ci-icon-wrap">✉️</div>
                <div>
                  <div className="ci-label">Email Us</div>
                  <div className="ci-value">ashwijahrconsultancy@gmail.com</div>
                </div>
              </div>
              <div className="contact-info-item">
                <div className="ci-icon-wrap">🕐</div>
                <div>
                  <div className="ci-label">Business Hours</div>
                  <div className="ci-value">Mon – Sun: 9:30 AM – 6:30 PM</div>
                </div>
              </div>
            </div>

{/* WhatsApp QR Code */}
<div className="whatsapp-qr-card">
  <h3>Scan to Chat on WhatsApp</h3>
  <p>Quickly connect with our team by scanning the QR code below.</p>

  <img
    src={whatsappQR}
    alt="WhatsApp QR Code"
    className="whatsapp-qr-image"
  />

  <a
    href="https://wa.me/919108900230"
    target="_blank"
    rel="noopener noreferrer"
    className="whatsapp-chat-btn"
  >
    💬 Chat on WhatsApp
  </a>
</div>

</div>

          <div className="contact-form-card">
            <div className="form-header">
              <h3>Send Us a Message</h3>
              <p>Fill out the form and we'll get back to you within 24 hours.</p>
            </div>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label>Full Name *</label>
                  <div className="input-wrap">
                    <span className="fi">👤</span>
                    <input name="name" value={form.name} onChange={handleChange} placeholder="Enter your name" required />
                  </div>
                </div>
                <div className="form-group">
                  <label>Work Email *</label>
                  <div className="input-wrap">
                    <span className="fi">✉️</span>
                    <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="email@company.com" required />
                  </div>
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Phone Number *</label>
                  <div className="input-wrap">
                    <span className="fi">📞</span>
                    <input name="phone" value={form.phone} onChange={handleChange} placeholder="+91 00000 00000" required />
                  </div>
                </div>
                <div className="form-group">
                  <label>Subject *</label>
                  <div className="input-wrap">
                    <span className="fi">🏷️</span>
                    <input name="subject" value={form.subject} onChange={handleChange} placeholder="How can we help?" required />
                  </div>
                </div>
              </div>
              <div className="form-group-full">
                <label>Service Interested In</label>
                <div className="input-wrap">
                  <span className="fi">⚙️</span>
                  <select name="service" value={form.service} onChange={handleChange}>
                    <option value="">Select a Service</option>
                    {services.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
              </div>
              <div className="form-group-full">
                <label>Your Message *</label>
                <div className="input-wrap">
                  <span className="fi">💬</span>
                  <textarea
                    name="message" value={form.message} onChange={handleChange}
                    placeholder="Describe your requirements in detail..." rows={4} required
                  />
                </div>
              </div>
              
              <button type="submit" className="btn-send" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message ✈️'}
              </button>

              {statusMsg.text && (
                <p className={`status-message ${statusMsg.type}`}>{statusMsg.text}</p>
              )}

              <p className="form-privacy">🔒 Your information is encrypted and secure.</p>
            </form>
          </div>
        </div>
      </section>

      {/* FEATURES - MODERN TILE LAYOUT */}
      <section className="contact-features">
        {features.map((f, i) => (
          <div className="cf-card" key={i}>
            <div className="cf-icon-bg">{f.icon}</div>
            <h4>{f.title}</h4>
            <p>{f.desc}</p>
          </div>
        ))}
      </section>

      {/* OFFICE LOCATIONS - POLISHED UI */}
      <section className="offices-section">
        <div className="section-header">
          <h2 className="cs-title">Our Office Locations</h2>
          <div className="orange-line centered" />
        </div>
        <div className="offices-inner">
          <div className="offices-map">
            <iframe
              title="Ashwija HR Location"
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3886.7711158789457!2d77.50183177507776!3d13.050235987272385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTPCsDAzJzAwLjkiTiA3N8KwMzAnMTUuOSJF!5e0!3m2!1sen!2sin!4v1782151003485!5m2!1sen!2sin"
              width="100%" height="100%" style={{ border: 0, borderRadius: '20px' }} allowFullScreen="" loading="lazy"
            />
          </div>
          <div className="offices-list">
            {offices.map((o, i) => (
              <div className={`office-card ${o.type === 'head' ? 'office-head' : 'office-branch'}`} key={i}>
                <div className="office-details">
                  <div className="office-title-row">
                    <span className="office-icon">{o.icon}</span>
                    <h4>{o.title}</h4>
                  </div>
                  <p className="office-addr">{o.address}</p>
                  <div className="office-contact-row">
                    <span className="office-phone">📞 {o.phone}</span>
                    <span className="office-email">✉️ {o.email}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER - HIGH CONVERSION */}
      <section className="cta-banner">
        <div className="cta-container">
          <div className="cta-left">
            <span className="cta-icon">✉️</span>
            <div>
              <h3>Let's Start a Conversation</h3>
              <p>We're excited to learn about your goals and explore how we can help you achieve them.</p>
            </div>
          </div>
          <div className="cta-btns">
            <a href="mailto:ashwijahrconsultancy@gmail.com" className="btn-cta-primary">Get in Touch →</a>
            <a href="tel:+919108900230" className="btn-cta-outline">📞 Request a Callback</a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ContactUs;
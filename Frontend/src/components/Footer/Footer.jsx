
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { servicesData } from '../Services/serviceData';
import './Footer.css';
import logoImg from '../../assets/Logo.jpeg';
import LegalModal from "../LegalModal/LegalModal";

const Footer = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [privacyOpen, setPrivacyOpen] = useState(false);
const [termsOpen, setTermsOpen] = useState(false);

  const API_URL = import.meta.env.VITE_API_URL;

  const handleSubscribe = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch(`${API_URL}/api/newsletter`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    const data = await response.json();

    if (response.ok) {
      setMessage("✅ Thank you for subscribing!");
      setEmail("");
    } else {
      setMessage(data.message || "❌ Subscription failed");
    }
  } catch (error) {
    console.error(error);
    setMessage("❌ Server error");
  }
};

  return (
    <>
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-container">

          {/* Col 1 – Brand */}
          <div className="footer-col brand-col">
            <div className="navbar-logo">
              <img src={logoImg} alt="Ashwija HR Consultancy" className="logo-img" />
              <div className="logo-text">
                <span className="footer-logo-name">ASHWIJA HR</span>
                <span className="footer-logo-sub">— CONSULTANCY —</span>
              </div>
            </div>
            <p className="footer-brand-desc">
              Your trusted partner for smart HR, compliance &amp; accounting solutions.
            </p>
            <div className="footer-socials">
              <a href="https://www.facebook.com/share/19FVeyEYeU/" target="_blank" rel="noreferrer" className="fsocial">f</a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="fsocial">in</a>
              <a href="https://www.instagram.com/ashwijhrconsultancy?utm_source=qr&igsh=MWYwOTJ2aTFpbjFoZw==" target="_blank" rel="noreferrer" className="fsocial">&#9679;</a>
            </div>
          </div>

          {/* Col 2 – Quick Links */}
          <div className="footer-col">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/">› Home</Link></li>
             
              <li><Link to="/services">› Services</Link></li>
              <li><Link to="/resources">› Resources</Link></li>
              <li><Link to="/contact">› Contact us</Link></li>
               <li><Link to="/about">› About us</Link></li>
            </ul>
          </div>

          {/* Col 3 – Services (all 9, linked) */}
          <div className="footer-col">
            <h4 className="footer-heading">Our Services</h4>
            <ul className="footer-links">
              {servicesData.slice(0, 6).map(s => (
                <li key={s.slug}>
                  <Link to={`/services/${s.slug}`}>› {s.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 – Contact */}
          <div className="footer-col">
            <h4 className="footer-heading">Contact Us</h4>
            <ul className="footer-contact-list">
              <li>
                <span className="contact-icon">📍</span>
                <span>No 15, Lakshmi Narasimha nilaya, 3rd Main, 3rd Cross, Near Deepak Nursing Home, Havanur Layout, Bengaluru, Karnataka 560073</span>
              </li>
              <li>
                <span className="contact-icon">📞</span>
                <span>+91 91089 00230</span>
              </li>
              <li>
                <span className="contact-icon">✉</span>
                <span>ashwijahrconsultancy@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Col 5 – Newsletter */}
          <div className="footer-col">
            <h4 className="footer-heading">Newsletter</h4>
            <p className="footer-newsletter-desc">
              Subscribe to get latest updates on compliance &amp; HR.
            </p>
            <form className="newsletter-form" onSubmit={handleSubscribe}>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit">Subscribe</button>
            </form>
            {message && <p className="subscribe-message">{message}</p>}
          </div>

        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
  <div className="footer-bottom-inner">

    <span>
      © 2026 Ashwija HR Consultancy. All Rights Reserved.
    </span>

    <div className="footer-bottom-links">

      <button
        className="footer-link-btn"
        onClick={() => setPrivacyOpen(true)}
      >
        Privacy Policy
      </button>

      <span className="sep">|</span>

      <button
        className="footer-link-btn"
        onClick={() => setTermsOpen(true)}
      >
        Terms & Conditions
      </button>

    </div>

  </div>
</div>
    </footer>

    <LegalModal
    isOpen={privacyOpen}
    onClose={() => setPrivacyOpen(false)}
    title="Privacy Policy"
>

<h3>Introduction</h3>

<p>
Ashwija HR Consultancy values your privacy and is committed to protecting your personal information.
This Privacy Policy explains how we collect, use, and safeguard your data when you use our website or services.
</p>

<h3>Information We Collect</h3>

<p>
We may collect your name, email address, phone number, company information,
and any details you provide through our contact forms.
</p>

<h3>How We Use Your Information</h3>

<p>
Your information is used only to respond to enquiries, provide HR,
payroll, compliance, accounting, recruitment, and statutory services,
improve our services, and communicate important updates.
</p>

<h3>Data Security</h3>

<p>
We implement appropriate technical and organizational measures to protect your
personal information against unauthorized access, alteration, disclosure, or destruction.
</p>

<h3>Third-Party Sharing</h3>

<p>
We do not sell, rent, or trade your personal information.
Information may be shared only where required by law or with trusted service providers.
</p>

<h3>Contact</h3>

<p>
For any privacy-related questions, contact us at
<strong> ashwijahrconsultancy@gmail.com</strong>.
</p>

</LegalModal>


<LegalModal
    isOpen={termsOpen}
    onClose={() => setTermsOpen(false)}
    title="Terms & Conditions"
>

<h3>Acceptance</h3>

<p>
By accessing this website, you agree to these Terms and Conditions.
</p>

<h3>Services</h3>

<p>
Ashwija HR Consultancy provides HR consulting, payroll,
labour law compliance, recruitment, accounting,
GST, and statutory compliance services.
</p>

<h3>User Responsibilities</h3>

<p>
Users agree to provide accurate information and use this website lawfully.
</p>

<h3>Intellectual Property</h3>

<p>
All content, logos, graphics, text, and branding are the property of
Ashwija HR Consultancy and may not be reproduced without permission.
</p>

<h3>Limitation of Liability</h3>

<p>
Ashwija HR Consultancy shall not be liable for any indirect or consequential damages arising from the use of this website or our services.
</p>

<h3>Changes</h3>

<p>
We reserve the right to update these Terms at any time without prior notice.
Continued use of the website constitutes acceptance of the revised Terms.
</p>

<h3>Contact</h3>

<p>
For any questions regarding these Terms, contact us at
<strong> ashwijahrconsultancy@gmail.com</strong>.
</p>

</LegalModal>

    </>
  );
};


export default Footer;

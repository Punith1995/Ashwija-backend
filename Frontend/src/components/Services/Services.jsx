




import { Link } from "react-router-dom";
import { useState } from "react";
import { servicesData } from "./serviceData";
import "./Services.css";
import heroImage from '../../assets/Servicepage.png';

const processSteps = [
  {
    num: "01",
    title: "Initial Consultation",
    desc: "We understand your business, workforce size, and specific compliance requirements in a free discovery call.",
  },
  {
    num: "02",
    title: "Custom Solution Design",
    desc: "Our experts map out a tailored plan covering all statutory obligations and HR processes your business needs.",
  },
  {
    num: "03",
    title: "Seamless Onboarding",
    desc: "We collect required documents, set up your accounts, and integrate into your existing workflows within days.",
  },
  {
    num: "04",
    title: "Ongoing Management",
    desc: "We handle everything on a rolling basis filings, renewals, payroll, and queries so you never have to worry.",
  },
];

const testimonials = [
  {
    stars: 5,
    text: "Ashwija completely transformed our HR operations. Payroll used to take our team two full days — now it's done accurately within hours. Their compliance support has saved us from multiple potential penalties.",
    name: "Kiran Kumar",
    role: "MD, PKS Multitech Pvt. Ltd.",
    initials: "RS",
  },
  {
    stars: 5,
    text: "We were struggling with ESI and PF filings for over 200 employees. Ashwija stepped in, cleaned up three years of discrepancies, and now runs everything like clockwork. Absolutely professional.",
    name: "Avinash P A",
    role: "Director, Neela Finance Solutions",
    initials: "PN",
  },
  {
    stars: 5,
    text: "The POSH compliance training they conducted was exceptional. Employees at every level came away with real awareness. We finally feel protected both legally and culturally as a company.",
    name: "Girish H S",
    role: "HR Head, UVASKA ETS Pvt. Ltd.",
    initials: "SP",
  },
];

const faqs = [
  {
    q: "How quickly can Ashwija start managing our payroll?",
    a: "In most cases, we can onboard and process your first payroll cycle within 5–7 business days. We collect employee data, configure pay structures, and handle all initial setup so the transition is smooth and error-free.",
  },
  {
    q: "Do you serve startups or only large enterprises?",
    a: "We work with businesses of all sizes — from early-stage startups with 5 employees to established manufacturers with 500+. Our services are modular, so you pay only for what you need and scale up as your team grows.",
  },
  {
    q: "Is our employee data safe with Ashwija?",
    a: "Absolutely. We follow strict data confidentiality protocols. Employee salary data, personal documents, and business records are handled with complete discretion and never shared with any third party.",
  },
  {
    q: "What industries do you specialize in?",
    a: "Our clients span manufacturing, IT, retail, healthcare, logistics, and professional services. Labour law and compliance requirements vary by industry — our team is trained to navigate the specific regulations applicable to your sector.",
  },
  {
    q: "Can you handle compliance for contract / third-party workers?",
    a: "Yes. We are specialists in Contract Labour Regulation Act (CLRA) compliance, including Principal Employer registration, contractor license management, and ensuring your vendors meet their own statutory obligations.",
  },
  {
    q: "What is included in the free consultation?",
    a: "During the free consultation, our expert will assess your current compliance posture, identify gaps, and recommend a customised plan. There's no obligation — it's purely to help you understand what you need.",
  },
];

const Services = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="services-page">

      {/* ── HERO ── */}
      <section className="services-hero">
        <img src={heroImage} alt="Services" className="services-hero-image" />
        <div className="services-hero-overlay" />

        <div className="services-hero-content">
          <div className="hero-eyebrow">Ashwija HR Consultancy</div>

          <h1>
            Business Compliance,
            <span className="accent-text">HR &amp; Payroll Solutions</span>
          </h1>

          <p className="hero-desc">
            End-to-end HR, Payroll, Labour Law, Accounting, and GST services
            designed to protect your business and free you to focus on growth.
          </p>

          <div className="hero-buttons">
            <Link to="/contact" className="hero-btn-primary">
              Get Free Consultation →
            </Link>
            <a href="tel:+919108900230" className="hero-btn-secondary">
              📞 Call +91 91089 00230
            </a>
          </div>

          <div className="hero-stats-bar">
            <div className="hero-stat">
              <span className="hero-stat-number">100+</span>
              <span className="hero-stat-label">Clients Served</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-number">10+</span>
              <span className="hero-stat-label">Years Experience</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-number">9</span>
              <span className="hero-stat-label">Service Verticals</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-number">100%</span>
              <span className="hero-stat-label">Compliance Rate</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW WE WORK ── */}
      <section className="process-section">
        <div className="process-inner">
          <div className="section-header-center">
            <div className="section-label">Our Process</div>
            <h2 className="section-title" style={{ color: '#ffffff' }}>
              How We Work With You
            </h2>
          </div>

          <div className="process-grid">
            {processSteps.map((step) => (
              <div className="process-step" key={step.num}>
                <div className="process-num">{step.num}</div>
                <h4>{step.title}</h4>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="services-section">
        <div className="services-inner">
          <div className="section-header-center">
            <div className="section-label">Our Services</div>
            <h2 className="section-title">Professional Business Solutions</h2>
            <p className="section-desc">
              Comprehensive HR, compliance, accounting, and payroll solutions
              tailored to your business size and industry.
            </p>
          </div>

          <div className="services-grid">
            {servicesData.map((service) => (
              <Link
                key={service.slug}
                to={`/services/${service.slug}`}
                className="service-card"
              >
                <div className="service-image">
                  <img src={service.image} alt={service.title} />
                </div>

                <div className="service-content">
                  <div className={`service-icon service-${service.color}`}>
                    {service.icon}
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.shortDesc}</p>
                  <span className="service-link">
                    View Details <span className="arrow">→</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="why-section">
        <div className="why-inner">
          <div className="why-left">
            <div className="section-label">Why Choose Us</div>
            <h2 className="section-title">Your Trusted Compliance Partner</h2>
            <p className="section-desc">
              We go beyond filing documents. We become an extension of your
              team — proactively managing deadlines, resolving queries, and
              keeping you fully protected at every step.
            </p>

            <div className="why-features">
              {[
                { icon: "⚖️", title: "Compliance Experts", desc: "Dedicated specialists with deep knowledge of all central and state labour laws." },
                { icon: "⚡", title: "Fast Turnaround", desc: "Timely filings, proactive renewal reminders, and zero missed deadlines." },
                { icon: "💰", title: "Affordable Pricing", desc: "Enterprise-grade HR and compliance at pricing designed for growing businesses." },
                { icon: "🔗", title: "End-to-End Support", desc: "From first registration to ongoing monthly management — one partner, everything covered." },
              ].map((f, i) => (
                <div className="why-feature" key={i}>
                  <div className="why-feature-icon">{f.icon}</div>
                  <div className="why-feature-text">
                    <h4>{f.title}</h4>
                    <p>{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="why-right">
            {[
              { num: "100+", label: "Clients Across Karnataka" },
              { num: "10+", label: "Years in HR & Compliance" },
              { num: "0", label: "Penalties in Client Audits" },
              { num: "48hr", label: "Average Query Response" },
            ].map((s, i) => (
              <div className="why-stat-card" key={i}>
                <div className="why-stat-number">{s.num}</div>
                <div className="why-stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="testimonials-section">
        <div className="testimonials-inner">
          <div className="section-header-center">
            <div className="section-label">Client Reviews</div>
            <h2 className="section-title">What Our Clients Say</h2>
            <p className="section-desc">
              Trusted by businesses across Bangalore and Karnataka to manage
              their most critical HR and compliance operations.
            </p>
          </div>

          <div className="testimonials-grid">
            {testimonials.map((t, i) => (
              <div className="testimonial-card" key={i}>
                <div className="testimonial-stars">
                  {Array(t.stars).fill(null).map((_, si) => (
                    <span key={si}>★</span>
                  ))}
                </div>
                <p className="testimonial-text">{t.text}</p>
                <div className="testimonial-author">
                  <div className="author-avatar">{t.initials}</div>
                  <div>
                    <div className="author-name">{t.name}</div>
                    <div className="author-role">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="faq-section">
        <div className="faq-inner">
          <div className="section-header-center">
            <div className="section-label">FAQ</div>
            <h2 className="section-title">Common Questions</h2>
            <p className="section-desc">
              Everything you need to know before getting started with Ashwija HR Consultancy.
            </p>
          </div>

          <div className="faq-list">
            {faqs.map((faq, i) => (
              <div className="faq-item" key={i}>
                <button
                  className={`faq-question${openFaq === i ? ' open' : ''}`}
                  onClick={() => toggleFaq(i)}
                  aria-expanded={openFaq === i}
                >
                  <span className="faq-q-text">{faq.q}</span>
                  <span className="faq-icon">{openFaq === i ? '−' : '+'}</span>
                </button>
                <div className={`faq-answer${openFaq === i ? ' open' : ''}`}>
                  {faq.a}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cta-section">
        <div className="cta-inner">
          <h2>Ready to Simplify Your HR &amp; Compliance?</h2>
          <p>
            Partner with Ashwija HR Consultancy and let us handle the complexity
            while you focus on building your business.
          </p>
          <div className="cta-buttons">
            <Link to="/contact" className="hero-btn-primary">
              Book Free Consultation →
            </Link>
            <a href="tel:+919108900230" className="hero-btn-secondary">
              Call +91 91089 00230
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Services;

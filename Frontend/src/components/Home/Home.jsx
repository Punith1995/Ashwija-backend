
import { Link } from 'react-router-dom';
import './Home.css';
import About from "../../assets/Services.jpeg";
import About2 from "../../assets/About2.jpeg";
import ComplianceImg from "../../assets/Law.jpeg";
import PayrollImg from "../../assets/Payroll.jpeg";
import HRManagementImg from "../../assets/Management.jpeg";

import {
  FaUsers,
  FaUserTie,
  FaClipboardCheck,
  FaShieldAlt,
  FaGraduationCap,
  FaBuilding,
  FaClock,
  FaLock,
  // FaWhatsapp,
  FaHandshake,
  FaBullseye,
  FaLightbulb,
  FaStar,
} from "react-icons/fa";

import { MdAccountBalance } from "react-icons/md";
import { BsCalculatorFill } from "react-icons/bs";

const coreServices = [
  {
    icon: <FaUsers />,
    color: "blue",
    title: "HR Shared Services",
    desc: "End-to-end HR support including HR administration, payroll, attendance, leave & more.",
  },
  {
    icon: <FaUserTie />,
    color: "orange",
    title: "Payroll Management",
    desc: "Accurate payroll processing, salary disbursement, tax management & compliance.",
  },
  {
    icon: <FaClipboardCheck />,
    color: "green",
    title: "Labour Law Compliance",
    desc: "Factory compliance, labour registrations, returns, inspections & statutory compliance.",
  },
  {
    icon: <FaShieldAlt />,
    color: "purple",
    title: "ESI & PF Compliance",
    desc: "ESI & PF registration, returns, amendments & complete compliance support.",
  },
  {
    icon: <BsCalculatorFill />,
    color: "red",
    title: "Accounting Services",
    desc: "Bookkeeping, financial reporting, GST filing, TDS, ITR & business financial management.",
  },
  {
    icon: <FaGraduationCap />,
    color: "teal",
    title: "Training & Support",
    desc: "POSH training, workplace awareness, HR training & capacity building programs.",
  },
];

const whyChoose = [
  {
    icon: <FaUsers />,
    title: "Experienced Professionals",
    desc: "Team of experts with deep domain knowledge",
  },
  {
    icon: <FaClipboardCheck />,
    title: "End-to-End Solutions",
    desc: "From registration to compliance – we handle it all",
  },
  {
    icon: <FaClock />,
    title: "Timely & Accurate",
    desc: "We ensure timely filings & error-free processing",
  },
  {
    icon: <MdAccountBalance />,
    title: "Cost-Effective Approach",
    desc: "Quality services that fit your budget",
  },
  {
    icon: <FaLock />,
    title: "Confidential & Secure",
    desc: "100% data privacy and confidentiality assured",
  },
];

const stats = [
  
  {
    icon: <FaBuilding />,
    count: "100+",
    label: "Happy Clients",
    color: "orange",
  },
  {
    icon: <FaClipboardCheck />,
    count: "500+",
    label: "Compliances Managed",
    color: "blue",
  },
  {
    icon: <FaUsers />,
    count: "20+",
    label: "Expert Consultants",
    color: "green",
  },
  {
    icon: <FaStar />,
    count: "10+",
    label: "Years of Experience",
    color: "purple",
  },
];

const values = [
  {
    icon: <FaHandshake />,
    text: "Integrity & Transparency",
  },
  {
    icon: <FaBullseye />,
    text: "Client-Centric Approach",
  },
  {
    icon: <FaStar />,
    text: "Quality & Reliability",
  },
  {
    icon: <FaLightbulb />,
    text: "Innovation & Excellence",
  },
];

const testimonials = [
  { quote: 'Ashwija HR Consultancy has been instrumental in managing our HR & compliance functions seamlessly. Highly professional team!', name: 'Kiran Kumar.', role: 'HMD, PKS Multitech Pvt. Ltd.', stars: 5 },
  { quote: 'Their payroll management service is accurate, timely & hassle-free. We can focus on our core business without any worries.', name: 'Avinash P A.', role: 'Director, Neela Finance Solutions', stars: 5 },
  { quote: 'Excellent support for labour law compliance and statutory filings. Highly recommended for growing businesses.', name: 'Girish H S.', role: 'R Head, UVASKA ETS Pvt. Ltd.', stars: 5 },
];

const insights = [
  { cat: 'COMPLIANCE',    catColor: '#F5A623', date: 'May 10, 2024', title: 'Key Changes in Labour Laws in 2024 – What Employers Need to Know', img: ComplianceImg },
  { cat: 'PAYROLL',       catColor: '#1B3A6B', date: 'May 18, 2024', title: 'Best Practices for Payroll Management in Modern Businesses', img: PayrollImg },
  { cat: 'HR MANAGEMENT', catColor: '#2E7D32', date: 'May 05, 2024', title: 'How POSH Training Creates a Safer & More Inclusive Workplace', img: HRManagementImg },
];

const Home = () => {
  

  return (
    <div className="home-page">

      {/* HERO */}
      {/* <section className="hero-section">
        <div className="hero-left">
          <p className="hero-tag">YOUR TRUSTED PARTNER FOR SMART HR SOLUTIONS</p>
          <h1>Simplify Your Business<br />with <span className="hero-orange">Ashwija HR Consultancy</span></h1>
          <p className="hero-desc">We help organizations stay compliant, streamline HR operations, and focus on what matters most – <strong>Growth &amp; Success.</strong></p>
          <div className="hero-btns">
            <Link to="/services" className="btn-primary">Our Services →</Link>
            <Link to="/contact"  className="btn-outline">Contact Us →</Link>
          </div>
          <div className="hero-badges">
            <div className="hero-badge"><span>🛡️</span><p>100% Compliance Assurance</p></div>
            <div className="hero-badge"><span>👥</span><p>Expert HR Guidance</p></div>
            <div className="hero-badge"><span>₹</span><p>Affordable &amp; Reliable Services</p></div>
          </div>
        </div>
        <div className="hero-right">
          <div className="hero-img-placeholder"><span>👔</span><p>Add your hero image here</p></div>
          <div className="hero-curve-orange" />
          <a href="https://wa.me/917760605782" target="_blank" rel="noreferrer" className="whatsapp-btn">💬 Chat on WhatsApp</a>
        </div>
      </section> */}


      <section className="home-hero">
  <img src={About} alt="HR Consultancy Banner" className="home-hero-bg-image" />
  <div className="home-hero-overlay" />

  <div className="home-hero-content">

    <div className="home-hero-eyebrow">
      <span className="home-hero-dot" />
      YOUR TRUSTED HR PARTNER
    </div>

    <h1>
      Simplify HR &amp; Compliance<br />
      with <span className="home-hero-highlight">Ashwija HR Consultancy</span>
    </h1>

    <p className="home-hero-desc">
      End-to-end HR, Payroll &amp; Labour Law solutions for growing businesses in Karnataka — so you can focus on <strong>Growth &amp; Success.</strong>
    </p>

    <div className="hero-btns">
      <Link to="/services" className="btn-primary">Our Services →</Link>
      <Link to="/contact" className="btn-outline">Contact Us →</Link>
    </div>

    <div className="hero-trust-bar">
      <div className="hero-trust-item">
        <span className="hero-trust-num">100+</span>
        <span className="hero-trust-label">Happy Clients</span>
      </div>
      <div className="hero-trust-divider" />
      <div className="hero-trust-item">
        <span className="hero-trust-num">10+</span>
        <span className="hero-trust-label">Years Experience</span>
      </div>
      <div className="hero-trust-divider" />
      <div className="hero-trust-item">
        <span className="hero-trust-num">100%</span>
        <span className="hero-trust-label">Compliance Assured</span>
      </div>
    </div>

  </div>
</section>



      {/* CORE SERVICES */}
      <section className="core-section">
        <p className="section-tag centered">OUR CORE SERVICES</p>
        <h2 className="section-title">Comprehensive HR &amp; Compliance Solutions</h2>
        <div className="orange-line centered" />
        <div className="core-grid">
          {coreServices.map((s, i) => (
            <div className={`core-card core-${s.color}`} key={i}>
              <div className={`core-icon core-bg-${s.color}`}>{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <Link to="/services" className="learn-more">Learn More →</Link>
            </div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="home-why-section">
        <div className="home-why-inner">
          <div className="home-why-left-text">
            <p className="home-why-tag">WHY CHOOSE</p>
            <h2>Ashwija HR<br />Consultancy?</h2>
            <div className="orange-line" />
          </div>
          <div className="home-why-cards">
            {whyChoose.map((w, i) => (
              <div className="home-why-card" key={i}>
                <div className="Home-why-icon">{w.icon}</div>
                <div className="home-why-title">{w.title}</div>
                <div className="home-why-desc">{w.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

     {/* STATS */}
<section className="stats-section-wrapper">

  <div className="stats-heading">
    <p className="section-tag centered">OUR ACHIEVEMENTS</p>

    <h2 className="section-title">
      Our Impact in Numbers
    </h2>

    <p className="stats-subtitle">
      Helping businesses stay compliant, efficient, and future-ready through
      trusted HR, Payroll, Labour Law, and Business Support Services.
    </p>

    <div className="orange-line centered" />
  </div>

  <div className="stats-section">
    {stats.map((s, i) => (
      <div className={`stat-item stat-${s.color}`} key={i}>
        <div className={`stat-icon-wrap stat-bg-${s.color}`}>
          {s.icon}
        </div>

        <div className="stat-count">{s.count}</div>
        <div className="stat-label">{s.label}</div>
      </div>
    ))}
  </div>

</section>

      {/* ABOUT US */}
      <section className="about-section">
        <div className="about-img-wrap">
          <div className="about-img-placeholder"><img src={About2} alt="Home Banner" className="home-hero-bg-image" /></div>
          <div className="about-badge"><span className="ab-count">5+</span><span className="ab-text">Years of<br />Excellence</span></div>
        </div>
        <div className="about-content">
          <p className="section-tag">ABOUT US</p>
          <h2>Your Trusted HR &amp; Compliance Partner</h2>
          <div className="orange-line" />
          <p className="about-desc">Ashwija HR Consultancy is a Bengaluru-based firm offering end-to-end HR, Payroll, Labour Law &amp; Accounting solutions. We are committed to helping businesses stay compliant, efficient &amp; future-ready.</p>
          <Link to="/about" className="btn-primary" style={{ display: 'inline-flex', marginBottom: 28 }}>Know More About Us →</Link>
          <div className="values-list">
            {values.map((v, i) => (
              <div className="value-item" key={i}>
                <div className="value-icon">{v.icon}</div>
                <span>{v.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="testimonials-section">
        <p className="section-tag centered">WHAT OUR CLIENTS SAY</p>
        <h2 className="section-title">Trusted by Businesses Like Yours</h2>
        <div className="orange-line centered" />
        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <div className="t-card" key={i}>
              <div className="t-quote-icon">❝❝</div>
              <p className="t-text">{t.quote}</p>
              <div className="t-author">{t.name}</div>
              <div className="t-role">{t.role}</div>
              <div className="t-stars">{'★'.repeat(t.stars)}</div>
            </div>
          ))}
        </div>
        
        

      </section>

      {/* LATEST INSIGHTS */}
      <section className="insights-section">
        <div className="insights-header">
          <div>
            <p className="section-tag">LATEST INSIGHTS</p>
            <h2 className="section-title left">Stay Updated with HR &amp; Compliance</h2>
          </div>
          <Link to="/resources" className="btn-view-all">View All Articles →</Link>
        </div>
        <div className="orange-line" style={{ margin: '10px 0 32px' }} />
        <div className="insights-grid">
          {insights.map((a, i) => (
            <div className="insight-card" key={i}>
              <div className="insight-img-placeholder">
  <img src={a.img} alt={a.cat} className="insight-card-img" />
</div>
              <div className="insight-body">
                <span className="insight-cat" style={{ color: a.catColor }}>{a.cat}</span>
                <div className="insight-date">📅 {a.date}</div>
                <h3 className="insight-title">{a.title}</h3>
                <Link to="/resources" className="insight-link">Read More →</Link>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default Home;

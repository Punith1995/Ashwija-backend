import './AboutUs.css';
import { Link } from "react-router-dom";
import About from "../../assets/AboutUs.jpeg";
import founderImg from "../../assets/Shivu.jpeg";
import marketingImg from "../../assets/Sandeep.jpeg";
import marketing from "../../assets/Sujay.jpeg";
// import hrImg from "../../assets/About2.jpeg";


import {
  FaUsers,
  FaClock,
  FaShieldAlt,
  FaRupeeSign
} from "react-icons/fa";

const stats = [
  { icon: '👥', count: '100+',  label: 'Happy Clients',        className: 'orange' },
  { icon: '📋', count: '500+', label: 'Compliances Managed',  className: 'blue'   },
  { icon: '🤝', count: '20+',   label: 'Expert Consultants',   className: 'green'  },
  { icon: '⭐', count: '10+',    label: 'Years of Excellence',  className: 'purple' },
];

const mvv = [
  {
    icon: '🎯',
    className: 'mission',
    title: 'Our Mission',
    text: 'To deliver accurate, reliable and cost-effective HR, compliance and accounting solutions that empower businesses to operate efficiently and grow sustainably.',
  },
  {
    icon: '👁️',
    className: 'vision',
    title: 'Our Vision',
    text: 'To be the most trusted partner for businesses by setting benchmarks in compliance excellence, innovation and client satisfaction.',
  },
  {
    icon: '💎',
    className: 'values',
    title: 'Our Values',
    list: ['Integrity & Transparency', 'Client-Centric Approach', 'Quality & Reliability', 'Innovation & Excellence'],
  },
];

const whyChoose = [
  {
    icon: <FaUsers />,
    title: "Experienced Professionals",
    text: "Team of experts with deep domain knowledge."
  },
  {
    icon: <FaClock />,
    title: "Timely & Accurate",
    text: "We ensure timely filings and error-free processing."
  },
  {
    icon: <FaShieldAlt />,
    title: "Confidential & Secure",
    text: "100% data privacy and confidentiality assured."
  },
  {
    icon: <FaRupeeSign />,
    title: "Cost-Effective Approach",
    text: "Quality services that fit your budget."
  }
];

const team = [
  {
    image: founderImg,
    name: "Shivakumar M.R.",
    role: "Founder & CEO",
    desc: "HR Compliance Expert with 10+ years of experience in HR, Labour Laws & Business Solutions.",
    linkedin: "#",
  },
 {
    image: marketingImg, 
    name: "Sandeep", 
    role: "Head of Digital Marketing",
    desc: "Expert in Performance Marketing, Brand Strategy, and Lead Generation.",
    linkedin: "#",
  },

  {
    image: marketing,
    name: "Sujay Doddamani",
    role: "Marketing Manager",
    desc: "Expert in Marketing Strategy, Campaign Management and Brand Development.",
    linkedin: "#",
  },

  // {
  //   image: hrImg,
  //   name: "HR Solutions Head",
  //   role: "People & Culture Expert",
  //   desc: "Expert in HR Operations, Payroll Management and Employee Engagement.",
  //   linkedin: "#",
  // },
];

const AboutUs = () => {
  return (
    <div className="about-page">

      {/* BREADCRUMB */}
     <div className="breadcrumb">
  <Link to="/" className="bc-link">
    Home
  </Link>

  <span className="bc-sep">›</span>

  <span className="bc-active">
    About Us
  </span>
</div>

      {/* ── HERO SECTION ── */}
      <section className="about-hero">
  <img src={About} alt="About Us" className="hero-bg-image" />

  <div className="about-hero-overlay"></div>

  <div className="about-hero-content">
    <p className="about-section-tag">ABOUT US</p>

    <h1>
      Your Trusted Partner for
      <br />
      HR & Compliance Excellence
    </h1>

    <div className="about-hero-divider"></div>

    <p className="about-hero-desc">
      Ashwija HR Consultancy is a Karnataka-based firm offering
      end-to-end HR, Payroll, Labour Law & Accounting solutions.
      We are committed to helping businesses stay compliant,
      efficient & future-ready.
    </p>
  </div>


</section>

      {/* ── STORY + STATS ── */}
<section className="story-section">
  <div className="story-left">
    <p className="section-tag">OUR STORY</p>
    <h2>Built on Trust. Driven by Excellence.</h2>
    <div className="orange-line" />
    <p>Ashwija HR Consultancy was founded with a simple vision – to make HR
    operations and compliance simple, reliable, and effective for every business.</p>
    <p style={{ marginTop: 12 }}>With deep domain expertise and a client-first approach,
    we deliver customized solutions that help organizations focus on what truly
    matters – growth, people, and success.</p>
    <div className="founder-sig">Shivakumar M.R.</div>
    <p className="founder-name">Shivakumar M.R.</p>
    <p className="founder-role">Founder &amp; HR Compliance Expert</p>
  </div>

  <div className="story-right">
    <div className="stats-grid">
      {stats.map((s, i) => (
        <div className={`stat-card ${s.className}`} key={i}>
          <div className="stat-icon">
            <span>{s.icon}</span>
          </div>
          <div>
            <div className="stat-count">{s.count}</div>
            <div className="stat-label">{s.label}</div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* ── MISSION VISION VALUES ── */}
<section className="mvv-section">
  <h2 className="section-title">Our Mission, Vision &amp; Values</h2>
  <div className="orange-line centered" />
  <div className="mvv-grid">
    {mvv.map((item, i) => (
      <div className={`mvv-card ${item.className}`} key={i}>
        <div className="mvv-icon-wrap">
          <span>{item.icon}</span>
        </div>
        <h3 className="mvv-title">{item.title}</h3>
        {item.text && <p className="mvv-text">{item.text}</p>}
        {item.list && (
          <ul className="values-list">
            {item.list.map((v, j) => (
              <li key={j}><span className="vdot" /> {v}</li>
            ))}
          </ul>
        )}
      </div>
    ))}
  </div>
</section>

      {/* ── WHY CHOOSE US + TEAM ── */}
      <section className="why-team-section">
        <div className="why-left">
          <p className="section-tag">WHY CHOOSE US?</p>
          <h2>We Make Compliance Simple<br />and Business Strong</h2>
          <div className="orange-line" />
          <div className="why-list">
            {whyChoose.map((w, i) => (
              <div className="why-item" key={i}>
                <div className="why-icon">{w.icon}</div>
                <div>
                  <h4>{w.title}</h4>
                  <p>{w.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="team-right">
          <p className="section-tag">MEET OUR LEADERSHIP</p>
          <div className="team-grid">
  {team.map((member, i) => (
    <div className="team-card" key={i}>

      <div className="team-image-wrapper">
        <img
          src={member.image}
          alt={member.name}
          className="team-image"
        />
      </div>

      <div className="team-content">
        <h4>{member.name}</h4>

        <p className="team-role">
          {member.role}
        </p>

        <p className="team-desc">
          {member.desc}
        </p>

        <a
          href={member.linkedin}
          className="linkedin-btn"
          target="_blank"
          rel="noreferrer"
        >
          in
        </a>
      </div>

    </div>
  ))}
</div>
        </div>
      </section>

    </div>
  );
};

export default AboutUs;

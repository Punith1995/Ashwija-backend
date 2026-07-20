

import { useState } from 'react';
import { Link } from "react-router-dom";
import './Resources.css';
import resourcesImg from "../../assets/Resources.jpeg";
import ArticleImg1 from "../../assets/Law.jpeg";
import ArticleImg2 from "../../assets/Payroll.jpeg";
import ArticleImg3 from "../../assets/Management.jpeg";
import ArticleImg4 from "../../assets/ESI.jpeg";
import ArticleImg5 from "../../assets/Policies.jpeg";
import ArticleImg6 from "../../assets/Study.jpeg";

const categories = ['All Resources', 'Blogs', 'Guides', 'News & Updates', 'Case Studies', 'Downloads', 'Videos'];

// Professional Content created based on Ashwija HR's services
const articles = [
  { 
    id: 1,
    cat: 'COMPLIANCE', 
    categoryType: 'News & Updates',
    catColor: 'orange', 
    date: 'May 10, 2024', 
    title: 'Key Changes in Labour Laws in 2024 – What Employers Need to Know', 
    excerpt: 'Understand the latest updates in Indian Labour laws and how they impact your business operations...',
    content: `
      <h2>Understanding the 2024 Labour Law Shift</h2>
      <p>The landscape of Indian Labour Laws is undergoing a massive transformation with the introduction of the new Labour Codes. For employers in Karnataka and across India, staying updated is no longer optional—it is a legal necessity.</p>
      <h3>Major Highlights:</h3>
      <ul>
        <li><strong>Wage Definition:</strong> The definition of "wages" has been standardized, affecting how PF and Gratuity are calculated.</li>
        <li><strong>Working Hours:</strong> New guidelines on flexible working hours and overtime calculations.</li>
        <li><strong>Social Security:</strong> Expanded coverage for gig workers and platform workers.</li>
      </ul>
      <p>Failure to align with these changes can lead to heavy penalties and legal disputes. Ashwija HR Consultancy helps you perform a gap analysis of your current policies to ensure 100% compliance.</p>
    `,
    img: ArticleImg1
  },
  { 
    id: 2,
    cat: 'PAYROLL',    
    categoryType: 'Blogs',
    catColor: 'blue',   
    date: 'May 08, 2024', 
    title: 'Best Practices for Payroll Management in Modern Businesses', 
    excerpt: 'Stop relying on manual spreadsheets. Learn how automation reduces errors and increases employee trust...',
    content: `
      <h2>Modernizing Your Payroll System</h2>
      <p>Payroll is more than just transferring money. It is about accuracy, timeliness, and statutory adherence.</p>
      <h3>The 3 Pillars of Effective Payroll:</h3>
      <ol>
        <li><strong>Automation:</strong> Manual entry is the biggest source of error. Using HRMS tools ensures calculations for PT, PF, and ESI are automated.</li>
        <li><strong>Transparency:</strong> Providing detailed payslips that clearly break down earnings and deductions reduces employee queries.</li>
        <li><strong>Compliance:</strong> Ensuring that TDS is deducted and deposited on time to avoid interest and penalties.</li>
      </ol>
      <p>Our payroll management services ensure that your employees are paid accurately and your company stays on the right side of the law.</p>
    `,
    img: ArticleImg2
  },
  { 
    id: 3,
    cat: 'HR MANAGEMENT', 
    categoryType: 'Guides',
    date: 'May 05, 2024', 
    title: 'How POSH Training Creates a Safer & More Inclusive Workplace', 
    excerpt: 'POSH is not just a legal requirement; it is a commitment to a respectful work environment...',
    content: `
      <h2>The Importance of POSH Compliance</h2>
      <p>The Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act, 2013, mandates every organization with 10+ employees to have a formal mechanism for redressal.</p>
      <h3>Key Compliance Requirements:</h3>
      <ul>
        <li><strong>ICC Setup:</strong> Forming the Internal Committee (IC) with a presiding officer and external member.</li>
        <li><strong>SHE-Box Portal:</strong> Ensuring the company is registered and aware of the government's SHE-Box portal for complaint filing.</li>
        <li><strong>Awareness Training:</strong> Regular workshops for employees to understand what constitutes harassment and how to report it.</li>
      </ul>
      <p>At Ashwija HR, we handle everything from drafting your POSH policy to conducting expert-led training sessions.</p>
    `,
    img: ArticleImg3
  },
  { 
    id: 4,
    cat: 'ESI & PF',  
    categoryType: 'Guides',
    date: 'May 03, 2024', 
    title: 'ESI & PF Compliance Checklist for Employers', 
    excerpt: 'A step-by-step guide to ensure your ESI and PF filings are error-free every single month...',
    content: `
      <h2>The Ultimate ESI & PF Checklist</h2>
      <p>Missing a single deadline in ESI or PF filings can result in huge penalties and legal notices.</p>
      <h3>Monthly Checklist:</h3>
      <ul>
        <li><strong>Employee Enrolment:</strong> Ensure every new hire is registered and provided with a UAN.</li>
        <li><strong>Contribution Accuracy:</strong> Verify that 12% employee and 12% employer contributions are correctly calculated.</li>
        <li><strong>ECR Filing:</strong> Submit the Electronic Challan-cum-Return (ECR) before the 15th of every month.</li>
        <li><strong>Payment:</strong> Ensure the challan is paid on time to avoid interest.</li>
      </ul>
      <p>Ashwija HR provides end-to-end support, from registration to monthly return filing, ensuring zero errors.</p>
    `,
    img: ArticleImg4
  },
  { 
    id: 5,
    cat: 'HR POLICIES', 
    categoryType: 'Blogs',
    date: 'Apr 30, 2024', 
    title: 'Essential HR Policies Every Organization Should Have', 
    excerpt: 'Strong policies prevent disputes and set clear expectations for employees and management...',
    content: `
      <h2>Building a Foundation with Strong HR Policies</h2>
      <p>Ambiguity is the enemy of productivity. Clear, written policies ensure that every employee knows the rules of the game.</p>
      <h3>Must-Have Policies:</h3>
      <ul>
        <li><strong>Leave Policy:</strong> Clear rules on Sick Leave, Casual Leave, and Earned Leave.</li>
        <li><strong>Code of Conduct:</strong> Guidelines on professional behavior, dress code, and ethics.</li>
        <li><strong>Performance Management:</strong> A transparent process for appraisals and promotions.</li>
        <li><strong>Attendance & Punctuality:</strong> Rules regarding login times and late-coming.</li>
      </ul>
      <p>We help you draft customized employee handbooks that align with your company culture and Indian Labour Laws.</p>
    `,
    img: ArticleImg5
  },
  { 
    id: 6,
    cat: 'CASE STUDY', 
    categoryType: 'Case Studies',
    date: 'Apr 28, 2024', 
    title: 'How We Helped a Company Achieve 100% Compliance – A Case Study', 
    excerpt: 'See how a mid-sized manufacturing firm cleaned up 3 years of compliance backlog...',
    content: `
      <h2>Case Study: Path to 100% Compliance</h2>
      <p><strong>The Client:</strong> A manufacturing unit with 150 employees in Bengaluru.</p>
      <p><strong>The Challenge:</strong> The client had inconsistent PF filings and had never registered for the Factory License, leaving them vulnerable to massive fines.</p>
      <h3>Our Approach:</h3>
      <ul>
        <li><strong>Audit:</strong> We performed a complete compliance audit to identify missing returns.</li>
        <li><strong>Regularization:</strong> We filed all pending ESI/PF returns and paid the necessary interest.</li>
        <li><strong>Licensing:</strong> Successfully obtained the Factory License and Trade License.</li>
      </ul>
      <p><strong>The Result:</strong> The client is now 100% compliant, reducing legal risk by 95% and allowing the owners to focus entirely on production growth.</p>
    `,
    img: ArticleImg6
  },
];

const benefits = [
  { icon: '📄', title: 'Expert Insights',      desc: 'Articles and guides from HR & compliance experts.' },
  { icon: '🔔', title: 'Timely Updates',        desc: 'Stay informed about the latest law amendments.' },
  { icon: '⬇️', title: 'Free Resources',        desc: 'Download checklists, templates and useful documents.' },
  { icon: '⏰', title: 'Practical Solutions',   desc: 'Actionable tips to solve real business challenges.' },
  { icon: '👥', title: 'Industry Focused',      desc: 'Content relevant to Indian business and regulations.' },
];

const catColors = { orange: '#F5A623', blue: '#1B3A6B', green: '#2E7D32', purple: '#6A1B9A', teal: '#00838F' };

const Resources = () => {
  const [activeTab, setActiveTab] = useState('All Resources');
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [email, setEmail] = useState('');

  const handleSubscribe = e => {
    e.preventDefault();
    alert(`Subscribed: ${email}`);
    setEmail('');
  };

  // Filter logic
  const filteredArticles = activeTab === 'All Resources' 
    ? articles 
    : articles.filter(a => a.categoryType === activeTab);

  return (
    <div className="resources-page">

      {/* BREADCRUMB */}

      <div className="breadcrumb">
  <Link to="/" className="bc-link">
    Home
  </Link>

  <span className="bc-sep">›</span>

  <span className="bc-active">
Resources</span>
</div>

      

      {/* HERO */}
      <section className="res-hero">
        <img src={resourcesImg} alt="Resources" className="res-hero-bg-image" />
        <div className="res-hero-overlay" />
        <div className="res-hero-content">
          <p className="section-tag">RESOURCES</p>
          <h1>Knowledge Hub for<br />Businesses &amp; HR Professionals</h1>
          <div className="res-hero-divider" />
          <p className="res-hero-desc">
            Stay updated with the latest HR, compliance, labour law insights,
            guides and best practices.
          </p>
        </div>
      </section>

      {/* MAIN CONTENT AREA */}
      <div className="main-resources-container">
        
        {!selectedArticle ? (
          <>
            {/* FILTER TABS */}
            <section className="filter-section">
              <div className="filter-tabs">
                {categories.map(cat => (
                  <button
                    key={cat}
                    className={`filter-tab ${activeTab === cat ? 'active' : ''}`}
                    onClick={() => setActiveTab(cat)}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </section>

            {/* ARTICLES GRID */}
            <section className="articles-section">
              <div className="articles-grid">
                {filteredArticles.map((a, i) => (
                  <div className="article-card" key={i}>
                    <div className="article-img">
  <img src={a.img} alt={a.title} className="article-card-img" />
</div>
                    <div className="article-body">
                      <span className="article-cat" style={{ color: catColors[a.catColor] }}>{a.cat}</span>
                      <div className="article-date">📅 {a.date}</div>
                      <h3 className="article-title">{a.title}</h3>
                      <p className="article-excerpt">{a.excerpt}</p>
                      <button 
                        className="article-read-more" 
                        onClick={() => setSelectedArticle(a)}
                      >
                        Read More →
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              {/* <div className="view-more-wrap">
                <button className="btn-view-more">View More Resources →</button>
              </div> */}
            </section>
          </>
        ) : (
          /* DETAILED ARTICLE VIEW */
          <section className="article-detail-view">
            <button className="back-btn" onClick={() => setSelectedArticle(null)}>← Back to Resources</button>
            <div className="detail-content">
              <span className="detail-cat" style={{ color: catColors[selectedArticle.catColor] }}>{selectedArticle.cat}</span>
              <div className="detail-date">Published on {selectedArticle.date}</div>
              <h1 className="detail-title">{selectedArticle.title}</h1>
              <div className="detail-divider"></div>
              <div className="detail-text" dangerouslySetInnerHTML={{ __html: selectedArticle.content }} />
              
              <div className="detail-cta">
                <h3>Need help implementing these standards?</h3>
                <p>Our experts can help you stay 100% compliant with latest laws.</p>
                <a href="/contact" className="btn-cta">Talk to Our Expert</a>
              </div>
            </div>
          </section>
        )}
      </div>

      {/* NEWSLETTER BANNER */}
      <section className="newsletter-banner">
        <div className="nl-left">
          <span className="nl-icon">✉️</span>
          <div>
            <h3>Stay Updated</h3>
            <p>Subscribe to our newsletter and get the latest HR, compliance updates, guides and industry insights straight to your inbox.</p>
          </div>
        </div>
        <form className="nl-form" onSubmit={handleSubscribe}>
          <input
            type="email" value={email} onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address" required
          />
          <button type="submit">Subscribe</button>
        </form>
      </section>

      {/* BENEFITS */}
      <section className="benefits-section">
        {benefits.map((b, i) => (
          <div className="benefit-item" key={i}>
            <div className="benefit-icon">{b.icon}</div>
            <div className="benefit-title">{b.title}</div>
            <div className="benefit-desc">{b.desc}</div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Resources;
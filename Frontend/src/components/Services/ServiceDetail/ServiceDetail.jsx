import { useParams, Link, Navigate } from "react-router-dom";
import { getServiceBySlug, servicesData } from "../serviceData";
import "./ServiceDetail.css";

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = getServiceBySlug(slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const relatedServices = servicesData
    .filter((item) => item.slug !== slug)
    .slice(0, 3);

  return (
    <div className="service-detail-page">

      {/* Breadcrumb */}
      <div className="service-breadcrumb">
        <Link to="/" className="bc-link">Home</Link>
        <span>›</span>
        <Link to="/services" className="bc-link">Services</Link>
        <span>›</span>
        <strong>{service.title}</strong>
      </div>

      {/* Hero Section */}
      <section className="service-hero">
        <img
          src={service.image}
          alt={service.title}
          className="service-hero-image"
        />

        <div className="service-overlay"></div>

        <div className="service-hero-content">
          <span className="service-tagline">
            {service.tagline}
          </span>

          <h1>{service.title}</h1>

          <div className={`hero-line bg-${service.color}`}></div>

          <p>{service.intro}</p>

          <div className="hero-buttons">
            <Link to="/contact" className="btn-primary">
              Get Consultation
            </Link>

            <a href="tel:+919108900230" className="btn-outline">
              Call Now
            </a>
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="challenge-section">
        <div className="container">
          <div className="section-heading">
            <span>Business Challenges</span>
            <h2>Common Problems Businesses Face</h2>
          </div>

          <div className="challenge-grid">
            {service.painPoints.map((item, index) => (
              <div className="challenge-card" key={index}>
                <div className="challenge-icon">⚠</div>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="solution-section">
        <div className="container">
          <div className="section-heading center">
            <span>Our Solution</span>
            <h2>Comprehensive Service Coverage</h2>
          </div>

          <div className="solution-grid">
            {service.sections.map((section, index) => (
              <div className="solution-card" key={index}>
                <h3>{section.heading}</h3>

                <ul>
                  {section.items.map((item, idx) => (
                    <li key={idx}>
                      <span className="tick">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="outcome-section">
        <div className="container">
          <div className="section-heading center">
            <span>Business Results</span>
            <h2>Expected Outcomes</h2>
          </div>

          <div className="outcome-grid">
            {service.outcomes.map((item, index) => (
              <div className="outcome-card" key={index}>
                <div className="outcome-number">
                  0{index + 1}
                </div>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlight */}
      <section className={`highlight-section highlight-${service.color}`}>
        <div className="container">
          <h3>{service.highlight}</h3>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-us-section">
        <div className="container">
          <div className="section-heading center">
            <span>Why Choose Us</span>
            <h2>What Makes Us Different</h2>
          </div>

          <div className="why-grid">
            {service.whyChoose?.map((item, index) => (
              <div className="why-card" key={index}>
                <div className="why-icon">★</div>
                <h4>{item}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="service-cta">
        <div className="container">
          <h2>
            Need Expert Assistance For {service.title}?
          </h2>

          <p>
            Speak with our consultants today and get
            customized support for your organization.
          </p>

          <Link to="/contact" className="cta-btn">
            Schedule Consultation
          </Link>
        </div>
      </section>

      {/* Related Services */}
      <section className="related-services">
        <div className="container">
          <div className="section-heading center">
            <span>Explore More</span>
            <h2>Related Services</h2>
          </div>

          <div className="related-grid">
            {relatedServices.map((item) => (
              <Link
                key={item.slug}
                to={`/services/${item.slug}`}
                className="related-card"
              >
                <div className={`related-icon bg-${item.color}`}>
                  {item.icon}
                </div>

                <h4>{item.title}</h4>

                <span>Learn More →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default ServiceDetail;
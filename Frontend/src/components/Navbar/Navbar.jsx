


import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { servicesData } from '../Services/serviceData';
import './Navbar.css';
import logoImg from '../../assets/Logo.jpeg';

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  const closeAll = () => {
    setOpenDropdown(null);
    setMobileOpen(false);
  };

  const isActive = (path) => location.pathname === path;
  const isServiceActive = location.pathname.startsWith('/services');

  return (
    <>
      {/* Top Bar */}
      <div className="topbar">
        <div className="topbar-left">
          <span>✉ ashwijahrconsultancy@gmail.com</span>
          <span className="divider">|</span>
          <span>📞 +91 91089 00230</span>
        </div>
        <div className="topbar-right">
          <span>Follow Us:</span>
          <a href="https://www.facebook.com/share/19FVeyEYeU/" target="_blank" rel="noreferrer" className="social-icon">f</a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-icon">in</a>
          <a href="https://www.instagram.com/ashwijhrconsultancy?utm_source=qr&igsh=MWYwOTJ2aTFpbjFoZw==" target="_blank" rel="noreferrer" className="social-icon">&#9679;</a>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="navbar">
        <div className="navbar-container">

          {/* Logo */}
          <Link to="/" className="navbar-logo" onClick={closeAll}>
            <img src={logoImg} alt="Ashwija HR Consultancy" className="logo-img" />
            <div className="logo-text">
              <span className="logo-name">ASHWIJA HR</span>
              <span className="logo-sub">— CONSULTANCY —</span>
            </div>
          </Link>

          {/* Nav Links */}
          <ul className={`nav-links ${mobileOpen ? 'open' : ''}`}>

            <li className={isActive('/') ? 'active' : ''}>
              <Link to="/" onClick={closeAll}>Home</Link>
            </li>

           

            {/* SERVICES DROPDOWN - lists all services dynamically */}
            <li className={`has-dropdown ${isServiceActive ? 'active' : ''}`}>
  <span onClick={() => toggleDropdown("services")}>
    Services <span className="arrow">▾</span>
  </span>
              {openDropdown === 'services' && (
                <ul className="dropdown services-dropdown">
                  <li>
                    <Link to="/services" onClick={closeAll} className="dropdown-all-link">
                      📋 All Services
                    </Link>
                  </li>
                  <li className="dropdown-divider" />
                  {servicesData.map((s) => (
                    <li key={s.slug}>
                      <Link to={`/services/${s.slug}`} onClick={closeAll}>
                        <span className="dd-icon">{s.icon}{s.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>


            <li className={isActive('/resources') ? 'active' : ''}>
              <Link to="/resources" onClick={closeAll}>Resources</Link>
            </li>

            <li className={isActive('/contact') ? 'active' : ''}>
              <Link to="/contact" onClick={closeAll}>Contact us</Link>
            </li>

            <li className={isActive('/about') ? 'active' : ''}>
              <Link to="/about" onClick={closeAll}>About us</Link>
            </li>

          </ul>

          {/* CTA Button */}
          <Link to="/contact" className="btn-get-in-touch" onClick={closeAll}>🔔 Get In Touch</Link>

          {/* Mobile Toggle */}
          <button
  className="mobile-toggle"
  onClick={() => setMobileOpen(!mobileOpen)}
>
  {mobileOpen ? "✕" : "☰"}
</button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

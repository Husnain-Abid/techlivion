import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css"; // Ensure to add styles for the custom hamburger

const servicesData = [
  {
    title: "Website Development",
    services: [
      { name: "Front-End Web Development", path: "/services/front-end" },
      { name: "Back-End Web Development", path: "/services/back-end" },
      { name: "Full stack development", path: "/services/full-stack" },
      { name: "Web-Site management", path: "/services/site-management" },
      { name: "Desktop Development", path: "/services/desktop-development" },
      { name: "Mobile App Development", path: "/services/mobile-app" },
      { name: "Embedded Development", path: "/services/embedded-development" },
      { name: "Security Development", path: "/services/security-development" },
    ],
  },

  {
    title: "Graphic Designing",
    services: [
      { name: "Logo Design", path: "/services/logo-design" },
      { name: "Brouchers / Flyers / Posters", path: "/services/brouchers-flyers" },
      { name: "Outdoor & Indoor Signage", path: "/services/outdoor-indoor-signage" },
      { name: "Design Brand Identity", path: "/services/design-brand-identity" },
      { name: "Custom Design", path: "/services/custom-design" },
      { name: "Mobile App Design", path: "/services/mobile-app-design" },
      { name: "Social Media Design", path: "/services/social-media-design" },
    ],
  },

  {
    title: "UI UX Designs",
    services: [
      { name: "UX Research", path: "/services/ux-research" },
      { name: "UX Persona", path: "/services/ux-persona" },
      { name: "Wireframing", path: "/services/wire-framing" },
      { name: "Responsive", path: "/services/responsive" },
      { name: "UI Design", path: "/services/ui-design" },
    ],
  },

  {
    title: "SEO Services",
    services: [
      { name: "Off Page SEO", path: "/services/off-page-seo" },
      { name: "In Page SEO", path: "/services/in-page-seo" },
      { name: "On Page SEO", path: "/services/on-page-seo" },
      { name: "Answer Engine Optimization", path: "/services/aeo" },
      { name: "Content Creation", path: "/services/content-creation" },
      { name: "SEO Audit", path: "/services/seo-audit" },
    ],
  },

  {
    title: "Human Resource Management",
    services: [
      { name: "Human Resource Management", path: "/services/human-resource" },
    ],
  },

  {
    title: "Dev-Ops",
    services: [
      { name: "Continuous Integration", path: "/services/continuous-integration" },
      { name: "Automation", path: "/services/automation" },
      { name: "Software", path: "/services/software" },
      { name: "Deployment", path: "/services/ad-campaigns-designing" },
    ],
  },

  {
    title: "3D Product Visualization",
    services: [
      { name: "3D Prototyping and Simulation", path: "/services/3d-modelling" },
      { name: "AR Integration", path: "/services/3d-rendering" },
      { name: "VR Product", path: "/services/360-product-spins" },
    ],
  },

  {
    title: "BPO Services",
    services: [
      { name: "Graphic Designing", path: "/services/graphic-design" },
      { name: "Content Writing", path: "/services/content-writing" },
      { name: "Customer Support", path: "/services/customer-support" },
      { name: "Data Entry", path: "/services/data-entry" },
      { name: "Accounting", path: "/services/accounting" },
    ],
  },

  {
    title: "Game Development",
    services: [
      { name: "Game Development", path: "/services/mobile-game-development" },
      { name: "iOS/Android", path: "/services/pc-console-ar-vr-games" },
      { name: "Game Art Design", path: "/services/game-art" },
    ],
  },

];

export default function Header() {
  // State to track the collapse status
  const [isCollapsed, setIsCollapsed] = useState(true);
  const navbarCollapseRef = useRef(null);
  const [isServicesDropdownVisible, setIsServicesDropdownVisible] = useState(false);
  const [isInsightsDropdownVisible, setIsInsightsDropdownVisible] = useState(false);
  const [visibleSubmenu, setVisibleSubmenu] = useState(null);

  const toggleNavbar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const closeNavbar = () => {
    if (!isCollapsed) {
      setIsCollapsed(true);
    }
  };

  const navigate = useNavigate();



  return (
    <div className="bg-blk main-header">
      <div className="container">



      <nav className="navbar navbar-expand-lg pt-5 pb-3 Rubik">
          <div className="container-fluid">
            <div className="logo">
              <Link className="navbar-brand text-white" to="/">
                <img src="../assets/Techlivion.svg" alt="Logo" />
              </Link>
            </div>

            <button
              className={`navbar-toggler custom-toggler ${isCollapsed ? "" : "open"}`}
              type="button"
              onClick={toggleNavbar}
              aria-expanded={!isCollapsed}
              aria-label="Toggle navigation"
            >
              <span className="custom-hamburger"></span>
            </button>

            <div
              className={`collapse navbar-collapse ${isCollapsed ? "" : "show"}`}
              id="navbarNav"
              ref={navbarCollapseRef}
            >
              <ul className="navbar-nav ms-auto align-items-lg-center align-items-start gap-3">
                
                {/* Services Dropdown */}
                <li
                  className="nav-item"
                  onMouseEnter={() => setIsServicesDropdownVisible(true)}
                  onMouseLeave={() => setIsServicesDropdownVisible(false)}
                >
                  {/* <Link className="nav-link text-white" to="/services"> */}
                  <Link className="nav-link text-white" >
                    Services
                  </Link>
                  {isServicesDropdownVisible && (
                    <div className="dropdown">
                      {servicesData.map((serviceCategory, index) => (
                        <div
                          key={index}
                          className="dropdown-item"
                          onMouseEnter={() => setVisibleSubmenu(serviceCategory.title)}
                          onMouseLeave={() => setVisibleSubmenu(null)}
                        >
                          <span className="category-title">
                            {serviceCategory.title}
                          </span>
                          {visibleSubmenu === serviceCategory.title && (
                            <div className="submenu">
                              {serviceCategory.services.map((subService, subIndex) => (
                                <Link key={subIndex} to={subService.path} onClick={() => setIsServicesDropdownVisible(false)}>
                                  {subService.name}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </li>

                {/* Insights Dropdown */}
                <li
                  className="nav-item"
                  onMouseEnter={() => setIsInsightsDropdownVisible(true)}
                  onMouseLeave={() => setIsInsightsDropdownVisible(false)}
                >
                  <span className="nav-link text-white">Insights</span>
                  {isInsightsDropdownVisible && (
                    <div className="dropdown">
                      <Link to="https://www.forbes.com/" target="_blank" className="dropdown-item" onClick={closeNavbar}>
                        Forbes
                      </Link>
                      <Link to="https://techcrunch.com/" target="_blank" className="dropdown-item" onClick={closeNavbar}>
                      Tech Crunch
                      </Link>
                      <Link to="https://mashable.com/" target="_blank" className="dropdown-item" onClick={closeNavbar}>
                      Mashable
                      </Link>
                      <Link to="https://www.nytimes.com/international/" target="_blank" className="dropdown-item" onClick={closeNavbar}>
                      NY Times
                      </Link>
                    </div>
                  )}
                </li>

                {/* Other Links */}
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/about" onClick={closeNavbar}>
                    About Us
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/contact" onClick={closeNavbar}>
                    Contact Us
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/join-us" onClick={closeNavbar}>
                    Join Us
                  </Link>
                </li>

                <li className="gray pe-3 non-992">|</li>
              </ul>
              <div>
                <button className="hire-btn non-992" onClick={()=>navigate("/quote")}>Get A Quote</button>
              </div>
            </div>
          </div>
        </nav>
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      </div>
    </div>
  );
}

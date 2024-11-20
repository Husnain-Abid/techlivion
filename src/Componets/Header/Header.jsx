import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css"; // Ensure to add styles for the custom hamburger

const servicesData = [
  {
    title: "Website Development",
    services: [
      { name: "Front-End Web Development", path: "/services/front-end" },
      { name: "Back-End Web Development", path: "/services/back-end" },
      { name: "Full Stack Development", path: "/services/full-stack" },
      { name: "Web-Site Management", path: "/services/site-management" },
      { name: "Desktop Development", path: "/services/desktop-development" },
      { name: "Mobile Development", path: "/services/mobile-app" },
      { name: "Embedded Development", path: "/services/embedded-development" },
      { name: "Security Development", path: "/services/security-development" },
    ],
  },

  {
    title: "Graphic Designing",
    services: [
      { name: "Logo Design", path: "/services/logo-design" },
      {
        name: "Brouchers / Flyers / Posters",
        path: "/services/brouchers-flyers",
      },
      { name: "Outdoor & Indoor Signage", path: "/services/Outdoor-Indoor" },
      { name: "Design Brand Identity", path: "/services/design-brand" },
      { name: "Custom Design", path: "/services/custom-design" },
      { name: "Mobile App Design", path: "/services/mobile-app-design" },
      { name: "Social Media Design", path: "/services/social-media" },
    ],
  },

  {
    title: "UI UX Designs",
    services: [
      { name: "UX Research", path: "/services/ux-research" },
      { name: "UX Persona", path: "/services/ux-persona" },
      { name: "UX Case Study", path: "/services/ux-case-study" },
      { name: "Wire framing", path: "/services/wire-framing" },
      { name: "Prototyping", path: "/services/prototyping" },
      { name: "UI Design", path: "/services/ui-design" },
      { name: "User Flow", path: "/services/user-flow" },
    ],
  },

  {
    title: "SEO Services",
    services: [
      { name: "Off Page SEO", path: "/services/ux-research" },
      { name: "IN Page SEO", path: "/services/ux-persona" },
      { name: "Website SEO", path: "/services/ux-case-study" },
      { name: "Mobile SEO", path: "/services/wire-framing" },
      { name: "Technical SEO", path: "/services/prototyping" },
      { name: "Content Creation", path: "/services/ui-design" },
      { name: "SEO Audit", path: "/services/user-flow" },
    ],
  },

  {
    title: "Human Resource Management",
    services: [
      { name: "Core HR", path: "/services/core-hr" },
      { name: "Employee Performance", path: "/services/employee-performance" },
      { name: "Employee Database", path: "/services/employee-database" },
      { name: "LMS Systems", path: "/services/lms-systems" },
      { name: "Analytics", path: "/services/analytics" },
    ],
  },

  {
    title: "Digital Marketing",
    services: [
      { name: "PPC Advertising", path: "/services/ppc-advertising" },
      { name: "Link Building", path: "/services/link-building" },
      {
        name: "Social Media Marketing",
        path: "/services/social-media-marketing",
      },
      { name: "Content Marketing", path: "/services/content-marketing" },
      {
        name: "Ad Campaigns Designing",
        path: "/services/ad-campaigns-designing",
      },
      { name: "Content Writing", path: "/services/content-writing" },
    ],
  },

  {
    title: "3D Product Visualization",
    services: [
      { name: "3D Modelling", path: "/services/3d-modelling" },
      { name: "3D Rendering", path: "/services/3d-rendering" },
      { name: "360 Product Spins", path: "/services/360-product-spins" },
      {
        name: "Augmented Reality (AR) Integration",
        path: "/services/ar-integration",
      },
      {
        name: "Virtual Reality (VR) Product Demos",
        path: "/services/vr-product-demos",
      },
      { name: "3D Animation", path: "/services/3d-animation" },
      { name: "Custom Configurators", path: "/services/custom-configurators" },
      {
        name: "3D Prototyping and Simulation",
        path: "/services/3d-prototyping",
      },
      {
        name: "3D Printing Pre-Visualization",
        path: "/services/3d-printing-pre-visualization",
      },
      {
        name: "Web-based 3D Viewer Integration",
        path: "/services/web-based-3d-viewer",
      },
    ],
  },

  {
    title: "BPO Services",
    services: [
      {
        name: "Back Office Outsourcing",
        path: "/services/back-office-outsourcing",
      },
      {
        name: "Front Office Outsourcing",
        path: "/services/front-office-outsourcing",
      },
      { name: "Accounting", path: "/services/accounting" },
      { name: "IT", path: "/services/it" },
      {
        name: "Onshore / Offshore BPO",
        path: "/services/onshore-offshore-bpo",
      },
      { name: "Data Entry", path: "/services/data-entry" },
      { name: "Marketing", path: "/services/marketing" },
      { name: "Healthcare", path: "/services/healthcare" },
      { name: "Data Analysis", path: "/services/data-analysis" },
      { name: "Technical Support", path: "/services/technical-support" },
    ],
  },

  {
    title: "Game Development",
    services: [
      {
        name: "Mobile Game Development (iOS / Android)",
        path: "/services/mobile-game-development",
      },
      {
        name: "PC, Console, AR / VR Games",
        path: "/services/pc-console-ar-vr-games",
      },
      { name: "AI Game Development", path: "/services/ai-game-development" },
      {
        name: "Virtual Reality Game Development",
        path: "/services/vr-game-development",
      },
      {
        name: "Augmented Reality Game Development",
        path: "/services/ar-game-development",
      },
      { name: "Game Art Design Services", path: "/services/game-art-design" },
      {
        name: "Gamification Services",
        path: "/services/gamification-services",
      },
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
                      <Link to="/case-studies" className="dropdown-item" onClick={closeNavbar}>
                        Case Studies
                      </Link>
                      <Link to="/news" className="dropdown-item" onClick={closeNavbar}>
                        News
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

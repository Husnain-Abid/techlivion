import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css"; // Ensure to add styles for the custom hamburger

const servicesData = [
  {
    title: "Development",
    services: [
      { name: "Front-End Web Development", path: "/services/front-end" },
      { name: "Back-End Web Development", path: "/services/back-end" },
      { name: "Mobile App Development", path: "/services/mobile-app" },
      { name: "API Development", path: "/services/api-development" },
      { name: "Web Application Development", path: "/services/web-app" },
      { name: "UI/UX Design", path: "/services/ui-ux" },
    ],
  },
  {
    title: "Game Development",
    services: [
      { name: "2D Game Development", path: "/services/2d-game" },
      { name: "3D Game Development", path: "/services/3d-game" },
      { name: "Game Design", path: "/services/game-design" },
      { name: "Game Testing", path: "/services/game-testing" },
      { name: "VR/AR Game Development", path: "/services/vr-ar-game" },
    ],
  },
  {
    title: "Marketing",
    services: [
      { name: "Search Engine Optimization (SEO)", path: "/services/seo" },
      { name: "Social Media Marketing", path: "/services/social-media" },
      { name: "Content Marketing", path: "/services/content-marketing" },
      { name: "Email Marketing", path: "/services/email-marketing" },

      { name: "Influencer Marketing", path: "/services/influencer-marketing" },
    ],
  },
  {
    title: "Design",
    services: [
      { name: "Graphic Design", path: "/services/graphic-design" },
      { name: "Branding & Identity Design", path: "/services/branding" },
      { name: "Print Design", path: "/services/print-design" },
      { name: "Web Design", path: "/services/web-design" },
      { name: "Packaging Design", path: "/services/packaging" },
    ],
  },
  {
    title: "UI/UX",
    services: [
      { name: "User Research", path: "/services/user-research" },
      { name: "Wireframing & Prototyping", path: "/services/wireframing" },
      { name: "Usability Testing", path: "/services/usability-testing" },
      { name: "Interaction Design", path: "/services/interaction-design" },
      { name: "Responsive Design", path: "/services/responsive-design" },
    ],
  },
  {
    title: "SEO",
    services: [
      { name: "On-Page SEO", path: "/services/on-page-seo" },

      { name: "Technical SEO", path: "/services/technical-seo" },
      { name: "Keyword Research", path: "/services/keyword-research" },
      { name: "SEO Audits", path: "/services/seo-audits" },
      { name: "Local SEO", path: "/services/local-seo" },
    ],
  },
  {
    title: "Human Resource Management",
    services: [
      { name: "Recruitment Services", path: "/services/recruitment" },
      { name: "Employee Training & Development", path: "/services/training" },
      { name: "Performance Management", path: "/services/performance" },
      { name: "Payroll Management", path: "/services/payroll" },
      { name: "HR Consulting", path: "/services/hr-consulting" },
    ],
  },
  {
    title: "3D Product Visualization",
    services: [
      { name: "3D Modeling", path: "/services/3d-modeling" },
      { name: "3D Rendering", path: "/services/3d-rendering" },
      { name: "Animation & Motion Graphics", path: "/services/animation" },
      { name: "Virtual Reality Experiences", path: "/services/vr-experiences" },
      { name: "Product Prototyping", path: "/services/product-prototyping" },
    ],
  },
  {
    title: "BPO Services",
    services: [
      { name: "Customer Support", path: "/services/customer-support" },
      { name: "Technical Support", path: "/services/technical-support" },

      { name: "Telemarketing", path: "/services/telemarketing" },
      { name: "Back Office Support", path: "/services/back-office" },
    ],
  },
];

export default function Header() {
  // State to track the collapse status
  const [isCollapsed, setIsCollapsed] = useState(true);
  const navbarCollapseRef = useRef(null);

  // Function to toggle the navbar
  const toggleNavbar = () => {
    setIsCollapsed(!isCollapsed); // Toggle collapse state
  };

  // Function to close the navbar when a link is clicked
  const closeNavbar = () => {
    if (!isCollapsed) {
      setIsCollapsed(true); // Collapse the navbar when a link is clicked
    }
  };

  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [visibleSubmenu, setVisibleSubmenu] = useState(null);
  let hideTimeout;

  const handleMouseEnter = () => {
    clearTimeout(hideTimeout); // Cancel the hide if hovering back in
    setIsDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    hideTimeout = setTimeout(() => {
      setIsDropdownVisible(false);
      setVisibleSubmenu(null);
    }, 100); // Adjust delay as needed
  };

  return (
    <div className="bg-blk main-header">
      <div className="container">
        <nav className="navbar navbar-expand-lg py-3 Rubik">
          <div className="container-fluid">
            <Link className="navbar-brand text-white" to="/">
              <img src="../assets/Techlivion.png" alt="Logo" height="30" />
            </Link>

            {/* Custom Hamburger Toggle */}
            <button
              className={`navbar-toggler custom-toggler ${
                isCollapsed ? "" : "open"
              }`}
              type="button"
              onClick={toggleNavbar}
              aria-expanded={!isCollapsed}
              aria-label="Toggle navigation"
            >
              {/* Custom hamburger icon (you can style this in CSS) */}
              <span className="custom-hamburger"></span>
            </button>

            <div
              className={`collapse navbar-collapse ${
                isCollapsed ? "" : "show"
              }`}
              id="navbarNav"
              ref={navbarCollapseRef}
            >
              <ul className="navbar-nav ms-auto align-items-lg-center align-items-start gap-3 ">
                {/* service link start  */}

                <li
                  className="nav-item"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link className="nav-link text-white" to="/services">
                    Services
                  </Link>

                  {isDropdownVisible && (
                    <div className="dropdown">
                      {servicesData.map((serviceCategory, index) => (
                        <div
                          key={index}
                          className="dropdown-item"
                          onMouseEnter={() =>
                            setVisibleSubmenu(serviceCategory.title)
                          }
                          onMouseLeave={() => setVisibleSubmenu(null)}
                        >
                          <span className="category-title">{serviceCategory.title}</span>

                          {visibleSubmenu === serviceCategory.title && (
                            <div className="submenu">
                              {serviceCategory.services.map(
                                (subService, subIndex) => (
                                  <Link key={subIndex} to={subService.path} onClick={()=>{setIsDropdownVisible(false)}}>
                                    {subService.name}
                                  </Link>
                                )
                              )}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}

                </li>


                {/* service link end  */}

                <li className="nav-item">
                  <Link
                    className="nav-link text-white"
                    to="/portfolio"
                    onClick={closeNavbar}
                  >
                    Portfolio
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link text-white"
                    to="/about"
                    onClick={closeNavbar}
                  >
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link text-white"
                    to="/contact"
                    onClick={closeNavbar}
                  >
                    Contact
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link text-white"
                    to="/about#team"
                    onClick={closeNavbar}
                  >
                    Team
                  </Link>
                </li>
                <li className="gray pe-3 non-992">|</li>
              </ul>
              <div>
                <button className="hire-btn non-992">Hire Now</button>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

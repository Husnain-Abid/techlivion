import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link for routing
import "./ServicesGD.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCode, 
  faGamepad, 
  faBullhorn, 
  faPaintBrush, 
  faChartLine, 
  faObjectGroup, 
  faUserTie, 
  faCube, 
  faHeadset 
} from '@fortawesome/free-solid-svg-icons';


// Icon mapping for each title
const iconMapping = {
  "Website Development": faCode,                     // Code icon for development
  "Graphic Designing": faPaintBrush,                 // Paintbrush for graphic design work
  "UI UX Designs": faObjectGroup,                    // Object Group for UI/UX design
  "SEO Services": faChartLine,                       // Chart line for SEO growth and analysis
  "Human Resource Management": faUserTie,            // User with tie to represent HR and professionals
  "Digital Marketing": faBullhorn,                   // Bullhorn for marketing and outreach
  "3D Product Visualization": faCube,                // Cube icon for 3D modeling and visualization
  "BPO Services": faHeadset,                         // Headset for support and customer service in BPO
  "Game Development": faGamepad 
};
// Function to scroll to the top of the page
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // Smooth scrolling effect
  });
};

export default function ServicesGD() {
  const [openIndex, setOpenIndex] = useState(null); // Track which section is open

  // Toggle function to expand/collapse the section
  const toggleCollapse = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Toggle open/close
  };



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
        { name: "Off Page SEO", path: "/services/off-page-seo" },
        { name: "IN Page SEO", path: "/services/in-page-seo" },
        { name: "Website SEO", path: "/services/website-seo" },
        { name: "Mobile SEO", path: "/services/mobile-seo" },
        { name: "Technical SEO", path: "/services/technical-seo" },
        { name: "Content Creation", path: "/services/content-creation" },
        { name: "SEO Audit", path: "/services/seo-audit" },
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
        { name: "IT", path: "/services/it-outsourcing" },
        {
          name: "Onshore / Offshore BPO",
          path: "/services/onshore-offshore-bpo",
        },
        { name: "Data Entry", path: "/services/data-entry" },
        { name: "Marketing", path: "/services/marketing-outsourcing" },
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
  

  return (
    <div className="container epilogue py-5">
    <div className="row mb-3">
      {servicesData.map((section, index) => (
        <div className="col-lg-6" key={index}>
          <div className="d-flex align-items-center justify-content-between">
            <div className="d-flex justify-content-center align-items-center">
              <span className="circle-icon d-flex align-items-center">
                <FontAwesomeIcon icon={iconMapping[section.title]} />
              </span>
              <h1 className="ps-2 mb-0 question-heading">{section.title}</h1>
            </div>

            {/* Toggle Button */}
            <div>
              <img
                src="../assets/down.png"
                alt="Toggle Content"
                className="toggle-btn"
                onClick={() => toggleCollapse(index)}
                style={{
                  cursor: "pointer",
                  transform: openIndex === index ? "rotate(180deg)" : "rotate(0)",
                }}
              />
            </div>
          </div>

          {/* Collapsible content */}
          <div className={`collapse ${openIndex === index ? "show" : ""}`}>
            <div className="mt-3 p-3 border-expand">
              <div className="d-flex flex-wrap">
                {section.services.map((service, serviceIndex) => (
                  <Link to={service.path} className="border-tag mt-2 me-2 no-underline" key={serviceIndex} onClick={scrollToTop}>
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="questionBotBorder my-3"></div>
        </div>
      ))}
    </div>
  </div>
  );
}

import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link for routing
import "./ServicesGD.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faEnvelope, 
  faGamepad, 
  faBullhorn, 
  faPalette, 
  faDesktop, 
  faSearch, 
  faUsers, 
  faCube, 
  faHeadset 
} from '@fortawesome/free-solid-svg-icons';




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
    if (openIndex === index) {
      setOpenIndex(null); // Close if already open
    } else {
      setOpenIndex(index); // Open the clicked section
    }
  };

  const servicesData = [
    {
      title: "Development",
      icon: faEnvelope,
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
      icon: faGamepad,
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
      icon: faBullhorn,
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
      icon: faPalette,
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
      icon: faDesktop,
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
      icon: faSearch,
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
      icon: faUsers,
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
      icon: faCube,
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
      icon: faHeadset,
      services: [
        { name: "Customer Support", path: "/services/customer-support" },
        { name: "Technical Support", path: "/services/technical-support" },
     
        { name: "Telemarketing", path: "/services/telemarketing" },
        { name: "Back Office Support", path: "/services/back-office" },
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
                  <FontAwesomeIcon icon={section.icon} />
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

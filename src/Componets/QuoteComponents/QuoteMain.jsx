import React from "react";
import "./QuoteMain.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faMapMarkerAlt,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

export default function QuoteMain() {


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
  








  return (
    <div className="container py-Hello">
      <h1 className="epilogue text-center">Get in Touch!</h1>
      <div className="d-flex justify-content-center">
        <form action="" className="form-width pops">
          <div className="row">
            <div className="col-lg-6">
              <div className="d-flex flex-column">
                <label htmlFor="" className="underline">
                  First Name
                </label>
                <input type="text" className="input-contact" required/>
              </div>
            </div>
            <div className="col-lg-6 mt-991">
              <div className="d-flex flex-column">
                <label htmlFor="" className="underline">
                  Last Name
                </label>
                <input type="text" className="input-contact" required/>
              </div>
            </div>
            <div className="col-lg-12 mt-20">
              <div className="d-flex flex-column">
                <label htmlFor="" className="underline">
                  Email
                </label>
                <input type="email" className="input-contact" required/>
              </div>
            </div>

            {/* Add Select field here */}
            <div className="col-lg-12 mt-20">
              <div className="d-flex flex-column">
                <label htmlFor="" className="underline">
                  Select Service
                </label>
                <select className="input-contact" required>
  <option value="">Select Service Category</option>
  {servicesData.map((category, index) => (
    <option key={index} value={category.title}>
      {category.title}
    </option>
  ))}
</select>
              </div>
            </div>

            <div className="col-lg-12 mt-20">
              <div className="d-flex flex-column">
                <label htmlFor="" className="underline">
                  Message
                </label>
                <textarea
                  name="Message"
                  id=""
                  className="textArea-Contact"
                  rows={6}
                  required
                ></textarea>
              </div>
            </div>
          </div>
          <p className="mb-0 text-end">
            <button className="touch-btn text-white underline">Submit </button>
          </p>
        </form>
      </div>



      {/* HEllo bar */}
      <div className="my-Hello-bar px-Hello  epilogue">
        <div className="row">
          <div className="col-12 col-md-4 d-flex align-items-center border-Left-Hello">
            <div className="d-flex flex-column  p-4">
              <div className="d-flex  align-items-center">
                <span className="circle-icon d-flex  align-items-center">
                  <FontAwesomeIcon icon={faPhone} />
                </span>
                <p className="mb-0 ps-2">Phone</p>
              </div>
              <p className="mb-0 mt-20">+923324624623</p>
            </div>
          </div>
          <div className="col-12 col-md-4 d-flex align-items-center border-Mid-Hello">
            <div className="d-flex flex-column text-white p-4">
              <div className="d-flex  align-items-center ">
                <span className="circle-icon d-flex  align-items-center">
                  {" "}
                  <FontAwesomeIcon icon={faEnvelope} />
                </span>
                <p className="mb-0 ps-2 orange">EMail</p>
              </div>
              <p className="mb-0 mt-20">info@techlivion.com</p>
            </div>
          </div>

          <div className="col-12 col-md-4 d-flex align-items-center border-Right-Hello">
            <div className="d-flex flex-column  p-4">
              <div className="d-flex  align-items-center">
                <span className="circle-icon d-flex  align-items-center">
                  {" "}
                  <FontAwesomeIcon icon={faMapMarkerAlt} />
                </span>
                <p className="mb-0 ps-2">Address</p>
              </div>
              <p className="mb-0 mt-20">Main Raiwind Road, Lahore, Pakistan</p>
            </div>
          </div>
        </div>
      </div>
      {/* Hello bar ends */}

      {/* subbox */}

      {/* subbox ends */}
    </div>
  );
}

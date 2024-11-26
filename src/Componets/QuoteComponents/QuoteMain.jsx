import React, { useState } from "react";
import "./QuoteMain.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faMapMarkerAlt,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
        {
          name: "Embedded Development",
          path: "/services/embedded-development",
        },
        {
          name: "Security Development",
          path: "/services/security-development",
        },
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
        {
          name: "Employee Performance",
          path: "/services/employee-performance",
        },
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
        {
          name: "Custom Configurators",
          path: "/services/custom-configurators",
        },
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

  const [isSubmitting, setIsSubmitting] = useState(false); // State to track API call

  // Validation schema using Yup
  const validationSchema = Yup.object({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    service: Yup.string().required("Please select a service category"),
    message: Yup.string().required("Message is required"),
  });

  // Initial form values
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    service: "",
    message: "",
  };

  // Form submit handler
  const handleSubmit = async (values, { resetForm }) => {
    setIsSubmitting(true); // Set submitting state to true
    try {
      const response = await axios.post(
        "http://localhost:8080/send-email",
        values
      );
      toast.success(response.data.message, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        style: {
          backgroundColor: "#000",
          color: "#fff",
          border: "1px solid #fff",
        },
      }); // Display success message
      resetForm(); // Reset the form fields
    } catch (error) {
      console.error("Error sending email:", error);
      toast.error("Failed to send the message. Please try again.", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        style: {
          backgroundColor: "#000",
          color: "#fff",
          border: "1px solid #fff",
        },
      }); // Display error message
    } finally {
      setIsSubmitting(false); // Reset submitting state
    }
  };

  return (
    <div className="container py-Hello">
      <h1 className="epilogue text-center">Get in Touch!</h1>

      <div className="d-flex justify-content-center">
        {/* <form action="" className="form-width pops">
          <div className="row">
            <div className="col-lg-6">
              <div className="d-flex flex-column">
                <label htmlFor="" className="underline">
                  First Name
                </label>
                <input type="text" className="input-contact" required />
              </div>
            </div>
            <div className="col-lg-6 mt-991">
              <div className="d-flex flex-column">
                <label htmlFor="" className="underline">
                  Last Name
                </label>
                <input type="text" className="input-contact" required />
              </div>
            </div>
            <div className="col-lg-12 mt-20">
              <div className="d-flex flex-column">
                <label htmlFor="" className="underline">
                  Email
                </label>
                <input type="email" className="input-contact" required />
              </div>
            </div>

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
        </form> */}

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched }) => (
            <Form className="form-width pops">
              <div className="row">
                {/* First Name */}
                <div className="col-lg-6">
                  <div className="d-flex flex-column">
                    <label htmlFor="firstName" className="underline">
                      First Name
                    </label>
                    <Field
                      type="text"
                      id="firstName"
                      name="firstName"
                      className="input-contact"
                    />
                    <ErrorMessage
                      name="firstName"
                      component="div"
                      className="text-danger error-message"
                    />
                  </div>
                </div>

                {/* Last Name */}
                <div className="col-lg-6 mt-991">
                  <div className="d-flex flex-column">
                    <label htmlFor="lastName" className="underline">
                      Last Name
                    </label>
                    <Field
                      type="text"
                      id="lastName"
                      name="lastName"
                      className="input-contact"
                    />
                    <ErrorMessage
                      name="lastName"
                      component="div"
                      className="text-danger error-message"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="col-lg-12 mt-20">
                  <div className="d-flex flex-column">
                    <label htmlFor="email" className="underline">
                      Email
                    </label>
                    <Field
                      type="email"
                      id="email"
                      name="email"
                      className="input-contact"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-danger error-message"
                    />
                  </div>
                </div>

                {/* Select Service */}
                <div className="col-lg-12 mt-20">
                  <div className="d-flex flex-column">
                    <label htmlFor="service" className="underline">
                      Select Service
                    </label>
                    <Field
                      as="select"
                      id="service"
                      name="service"
                      className="input-contact"
                    >
                      <option value="">Select Service Category</option>
                      {servicesData.map((category, index) => (
                        <option key={index} value={category.title}>
                          {category.title}
                        </option>
                      ))}
                    </Field>
                    <ErrorMessage
                      name="service"
                      component="div"
                      className="text-danger error-message"
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="col-lg-12 mt-20">
                  <div className="d-flex flex-column">
                    <label htmlFor="message" className="underline">
                      Message
                    </label>
                    <Field
                      as="textarea"
                      id="message"
                      name="message"
                      className="textArea-Contact"
                      rows={6}
                    />
                    <ErrorMessage
                      name="message"
                      component="div"
                      className="text-danger error-message"
                    />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <p className="mb-0 text-end">
                <button
                  type="submit"
                  className="touch-btn text-white underline"
                  disabled={isSubmitting} // Disable button when submitting
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </button>
              </p>
            </Form>
          )}
        </Formik>
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

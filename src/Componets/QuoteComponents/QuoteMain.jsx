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
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import { API_URL } from "../utils/API_URL";

export default function QuoteMain() {
  const servicesData = [
    {
      title: "Website Development",
    },
    {
      title: "Graphic Designing",
    },
    {
      title: "UI UX Designs",
    },
    {
      title: "SEO Services",
    },
    {
      title: "Human Resource Management",
    },
    {
      title: "Digital Marketing",
    },
    {
      title: "3D Product Visualization",
    },

    {
      title: "BPO Services",
    },
    {
      title: "Game Development",
    },
  ];

  const [isSubmitting, setIsSubmitting] = useState(false); // State to track API call

  const location = useLocation();
  const queryParams = queryString.parse(location.search);
  const preselectedService = queryParams.service || ""; // Get the service from query params



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
    service: preselectedService, // Pre-fill service field
    message: "",
  };

  // Form submit handler
  const handleSubmit = async (values, { resetForm }) => {
    setIsSubmitting(true); // Set submitting state to true
    try {
      const response = await axios.post(
        // "http://localhost:8080/send-email",
`${API_URL}/send-email`, values
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

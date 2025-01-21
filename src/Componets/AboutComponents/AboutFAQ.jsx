import React, { useState } from "react";
import "./AboutFAQ.css";

export default function AboutFAQ() {
  // Array of FAQ questions and answers
  const faqData = [
    {
      question: "What services does Techlivion offer?",
      answer:
      'Techlivion specializes in Web Development (Full-Stack, Front-End, Back-End, DevOps, and AR/VR integration), Architecture Services (design planning, 3D visualization, and structural layouts), and BPO Services (graphic designing, HR, and SEO solutions).'    },
    {
      question: "What technologies do you use for web development?",
      answer:
        "We utilize the latest web technologies, including modern front-end frameworks (React, Angular, Vue), robust back-end systems (Node.js, Python, Java), and DevOps tools for efficient deployment and scalability.",
    },
    {
      question: "Can you customize your services to fit our unique needs?",
      answer:
        "Absolutely! We tailor every solution to align with your specific requirements, ensuring a perfect fit for your business goals and vision.",
    },
    {
      question: "How does Techlivion ensure the quality of its services?",
      answer:
        "We implement rigorous quality assurance processes, extensive testing, and a customer-centric approach to ensure top-notch quality and reliability across all touchpoints.",
    },
    {
      question: "Do you provide ongoing support after project completion?",
      answer:
        "Yes, we offer continuous support, updates, and enhancements to ensure your product stays ahead in performance and meets evolving needs.",
    },
    {
      question: "What industries do you cater to?",
      answer:
        "We work with a wide range of industries, including technology, real estate, e-commerce, healthcare, and more, delivering solutions tailored to each sector's needs.",
    },
    {
      question: "How can we get started with Techlivion?",
      answer:
        "Getting started is easy! Simply contact us through our website or email, and our team will guide you through the process of turning your ideas into reality.",
    },
  ];

  // Use state to track which FAQ item is expanded (by index)
  const [expandedIndex, setExpandedIndex] = useState(null);

  // Toggle function to expand/collapse a specific FAQ
  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="container py-FAQ epilogue">
      <div className="d-flex justify-content-center">
        <div className="FAQ-Box">
          <p className="orange">FAQ</p>
          <h1>Frequently Asked Questions</h1>
          <p className="mb-65">
            A digital agency is a business you hire to outsource your digital
            marketing efforts, instead of <br className="none-425" /> handling
            in-house.
          </p>

          {/* Loop over FAQ items */}
          {faqData.map((faq, index) => (
            <div key={index}>
              {/* FAQ Question Box */}
              <div
                className={`d-flex align-items-center justify-content-between border-FAQ p-5 ${
                  expandedIndex === index ? "expanded" : ""
                }`}
                onClick={() => toggleExpand(index)}
                style={{
                  backgroundColor:
                    expandedIndex === index ? "#ff7a00" : "transparent", // Background color when expanded
                  cursor: "pointer",
                }}
              >
                <h2
                  className="mb-0"
                  style={{ color: expandedIndex === index ? "#fff" : "#000" }} // Text color when expanded
                >
                  {faq.question}
                </h2>
                <img
                  src="../assets/Oval.png"
                  alt=""
                  style={{
                    transform:
                      expandedIndex === index
                        ? "rotate(180deg)"
                        : "rotate(0deg)", // Rotate icon on expand
                    transition: "transform 0.3s ease",
                  }}
                />
              </div>

              {/* Expanded content */}
              {expandedIndex === index && (
                <div className="FAQ-answer p-5">
                  <p className="text-white">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* subbox */}

      <div className="p-2 mt-173 pops ">
        <div className="row border-vision ">
          <div className="col-lg-6 p-3 ps-5 text-white my-auto">
            <h2>Stay in the loop</h2>
            <p>
              Join now with <span className="bold">TECHLIVION</span> to get the
              latest news
            </p>
          </div>

          {/* Bot box */}

          <div className="col-lg-6 my-auto p-VisionBotBox">
            <div className="d-flex  align-items-center row">
              <div className="col-6 col-md-8">
                <input
                  type="Enter your email"
                  className="input-sub "
                  placeholder="Enter your email"
                />
              </div>

              <div className="col-6 col-md-4">
                <button className="sub-btn ">Subscribe</button>
              </div>
            </div>
          </div>
          {/* Bot box ends */}
        </div>
      </div>

      {/* subbox ends */}
    </div>
  );
}

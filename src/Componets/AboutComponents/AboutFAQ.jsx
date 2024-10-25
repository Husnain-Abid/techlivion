import React, { useState } from "react";
import "./AboutFAQ.css";

export default function AboutFAQ() {
  // Array of FAQ questions and answers
  const faqData = [
    {
      question: "Hire to outsource your digital marketing",
      answer:
        "When you hire a digital agency, you essentially bring in an outside team to take care of your online marketing efforts. This can include anything from managing social media to optimizing your website for search engines.",
    },
    {
      question: "A digital agency is a business",
      answer:
        "Digital agencies provide services such as social media marketing, SEO, PPC advertising, email marketing, and content creation. They help businesses build and execute online marketing strategies.",
    },
    {
      question: "Marketing efforts",
      answer:
        "The cost of digital agency services varies based on the scope of the project, services needed, and the agency's pricing model. Agencies may charge hourly rates, project-based fees, or monthly retainers.",
    },
    {
      question: "Can provide your business",
      answer:
        "The cost of digital agency services varies based on the scope of the project, services needed, and the agency's pricing model. Agencies may charge hourly rates, project-based fees, or monthly retainers.",
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

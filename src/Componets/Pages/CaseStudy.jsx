import { useState, useEffect } from "react";
import { ArrowRight, BarChart2, Lightbulb, Target, Quote } from "lucide-react";
import "../../Styles/CaseStudy.css";
import { Link } from "react-router-dom";

export default function CaseStudy() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  useEffect(() => {
    const timer1 = setInterval(() => {
      setCount1((prevCount) => (prevCount < 150 ? prevCount + 1 : prevCount));
    }, 20);

    const timer2 = setInterval(() => {
      setCount2((prevCount) => (prevCount < 85 ? prevCount + 1 : prevCount));
    }, 35);

    return () => {
      clearInterval(timer1);
      clearInterval(timer2);
    };
  }, []);

  return (
    <div className="case-study">
      {/* Hero Section */}
      <section className="hero-section ">
        <img
          src="../assets/case-study.jpg"
          alt="Case Study Hero Image"
          className="position-absolute top-0 start-0 w-100 h-100 object-cover"
        />
        <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark bg-opacity-50 d-flex align-items-center justify-content-center text-center text-white">
          <div>
            <h1 className="display-4 fw-bold mb-4">
              Revolutionizing E-commerce
            </h1>
            <p className="h5">
              How we helped TechLivion increase sales by 200%
            </p>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="metrics py-5 container ">
        <div className="row g-4">
          <div className="col-md-6">
            <div className="card bg-orange text-white text-center p-4">
              <BarChart2 className="mb-3" size={48} />
              <h2 className="display-4 fw-bold">{count1}%</h2>
              <p className="lead">Increase in Conversion Rate</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card bg-blk text-white text-center p-4">
              <Target className="mb-3" size={48} />
              <h2 className="display-4 fw-bold">{count2}%</h2>
              <p className="lead">Reduction in Bounce Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-5 bg-blk text-white">
        <div className="container">
          <h2 className="text-center fw-bold mb-4">The Challenge</h2>
          <div className="d-flex align-items-start">
            <Lightbulb className="text-warning me-3" size={32} />
            <p className="lead">
              TechLivion was struggling with low conversion rates and high
              bounce rates on their e-commerce platform. They needed a complete
              overhaul of their user experience and a strategy to engage
              customers more effectively.
            </p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-5 container">
        <h2 className="text-center fw-bold mb-4">Our Solution</h2>
        <div className="row g-3">
          <div className="col-12 d-flex align-items-start">
            <ArrowRight className="text-success me-3" size={32} />
            <div>
              <h4 className="fw-semibold">Streamlined User Interface</h4>
              <p>
                We redesigned the entire user interface, focusing on simplicity
                and intuitive navigation.
              </p>
            </div>
          </div>
          <div className="col-12 d-flex align-items-start">
            <ArrowRight className="text-success me-3" size={32} />
            <div>
              <h4 className="fw-semibold">Personalized Recommendations</h4>
              <p>
                We implemented an AI-driven recommendation engine to provide
                personalized product suggestions.
              </p>
            </div>
          </div>
          <div className="col-12 d-flex align-items-start">
            <ArrowRight className="text-success me-3" size={32} />
            <div>
              <h4 className="fw-semibold">Mobile-First Approach</h4>
              <p>
                We adopted a mobile-first design strategy to cater to the
                growing number of mobile shoppers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-5 bg-orange text-white text-center ">
        <div className="container">
          <Quote size={64} className="opacity-50 mb-4" />
          <blockquote className="blockquote lead mb-4">
            "The transformation of our e-commerce platform was nothing short of
            remarkable. The innovative solutions provided have not only boosted
            our sales but also significantly enhanced our customer
            satisfaction."
          </blockquote>
          <p className="fw-semibold">John Doe, CEO of TechLivion</p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-5 text-center container">
        <h2 className="fw-bold mb-4">Ready to Transform Your Business?</h2>
        <p className="lead mb-4">Let's create your success story together.</p>
        <Link
          to="/contact"
          className="btn btn-dark bg-orange text-white d-inline-flex align-items-center"
        >
          Contact Us
          <ArrowRight className="ms-2" size={16} />
        </Link>
      </section>
    </div>
  );
}

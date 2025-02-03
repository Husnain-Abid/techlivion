import { useState, useEffect } from "react";
import { ArrowRight, BarChart2, Lightbulb, Target, Quote } from "lucide-react";
import "../../Styles/JoinUs.css";
import { useNavigate } from "react-router-dom";

export default function JoinUs() {


  const [formData, setFormData] = useState({
    name: "",
    email: "",
    reason: "",
    membershipType: "basic",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Here you would typically send the data to your backend
  };

const navigate = useNavigate();

  return (
    <div className="join-us">
      {/* Hero Section */}
      <section className="bg-orange text-white text-center py-5">
        <div className="container">
          <h1 className="display-4 mb-3">Join Our Community</h1>
          <p className="lead mb-4">
          Be part of something Extraordinary. Connect, Learn, and Grow with us.
          </p>
          <button className="btn btn-join " onClick={()=> navigate("/contact")}>Join Us</button>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center mb-4">Why Join Us?</h2>
          <div className="row">
            {[
              {
                icon: "bi-people",
                title: "Vibrant Community",
                description:
                  "Connect with like-minded individuals and expand your network.",
              },
              {
                icon: "bi-lightning-fill",
                title: "Exclusive Resources",
                description:
                  "Access cutting-edge tools and materials to boost your skills.",
              },
              {
                icon: "bi-star-fill",
                title: "Unique Opportunities",
                description:
                  "Unlock special events and career-advancing possibilities.",
              },
            ].map((benefit, index) => (
              <div className="col-md-4 mb-2" key={index}>
                <div className="card text-center">
                  <div className="card-body">
                    <i
                      className={`bi ${benefit.icon} display-4 orange mb-3`}
                    ></i>
                    <h5 className="card-title">{benefit.title}</h5>
                    <p className="card-text">{benefit.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Form Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="col-md-8 mx-auto">
            <h2 className="text-center mb-4">Apply Now</h2>
            <div className="card">
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="reason" className="form-label">
                      Why do you want to join?
                    </label>
                    <textarea
                      className="form-control"
                      id="reason"
                      name="reason"
                      rows="3"
                      value={formData.reason}
                      onChange={handleInputChange}
                      required
                    ></textarea>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Membership Type</label>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="membershipType"
                        id="basic"
                        value="basic"
                        checked={formData.membershipType === "basic"}
                        onChange={handleInputChange}
                      />
                      <label className="form-check-label" htmlFor="basic">
                        Basic
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="membershipType"
                        id="pro"
                        value="pro"
                        onChange={handleInputChange}
                      />
                      <label className="form-check-label" htmlFor="pro">
                        Pro
                      </label>
                    </div>
                  </div>
                  <button type="submit" className="btn btn-join w-100">
                    Submit Application
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-5 ">
        <div className="container">
          <h2 className="text-center mb-4">What Our Members Say</h2>
          <div className="row d-flex align-items-stretch member-say">
            {[
              {
                name: "Alex Johnson",
                role: "Developer",
                quote:
                  "Joining this community was the best decision of my career. The connections and resources are invaluable.",
              },
              {
                name: "El-Mahdy Khaled",
                role: "Designer",
                quote:
                  "I've grown so much professionally since becoming a member. The support here is amazing!",
              },
              {
                name: "Rabya Zahid",
                role: "Entrepreneur",
                quote:
                  "The opportunities I've had access to through this community have been game-changing for my business.",
              },
            ].map((testimonial, index) => (
              <div className="col-md-4 mb-2" key={index}>
                <div className="card h-100 ">
                  <div className="card-body ">
                    <h5 className="card-title">{testimonial.name}</h5>           
                    <h6 className="card-subtitle mb-2 text-muted">
                      {testimonial.role}
                    </h6>
                    <p className="card-text">"{testimonial.quote}"</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-orange text-white text-center py-5">
        <div className="container">
          <h2 className="mb-3">Ready to Take the Next Step?</h2>
          <p className="lead mb-4">
            Join our community today and start your journey towards success.
          </p>
          <button className="btn btn-join" onClick={()=> navigate("/contact")}>Join Us 
          </button>
        </div>
      </section>

    </div>
  );
}

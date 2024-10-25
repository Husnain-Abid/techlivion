import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./AboutTestimonials.css"; // Your custom styles

export default function AboutTestimonials() {
const settings = {
  centerMode: true,
  centerPadding: "0px",
  slidesToShow: 3, // Show 3 slides by default
  slidesToScroll: 1,
  dots: true,
  focusOnSelect: true,
  autoplay: false,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        centerPadding: "40px",
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: "20px", // Reduce padding for mobile
      },
    },
    {
      breakpoint: 576, // For very small screens (e.g. phones)
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: "10px",
      },
    },
  ],
};


  return (
    <div className="Testimonials-Back epilogue">
      <div className="container py-test">
        <div className="test-intro">
          <p className="orange text-center">Testimonials</p>
          <h1 className="text-center text-white">
            What Our <br />
            Clients Are Saying
          </h1>
        </div>
      </div>

      <div className="slider-container epilogue">
        <Slider {...settings}>
          {/* Testimonial 1 */}
          <div>
            <div className="border-testimonial d-flex p-3 flex-column">
              <p className="text-start star">⭐⭐⭐⭐⭐</p>
              <p className="text-start test-para">
                A digital agency is a business you hire to outsource your
                digital marketing efforts, instead of handling in-house. They
                can provide your business with a variety of digital solutions to
                promote your product or service online and help you. A digital
                agency is a business you hire to outsource your digital
                marketing efforts.
              </p>
              <div className="d-flex flex-start align-items-center center-425">
                <img src="../assets/T2.png" alt="" className="testImage" />
                <div className="d-flex flex-column ps-2">
                  <h1 className="text-header mb-0">Alan Martí</h1>
                  <p className="test-description mb-0">Meta Inc.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div>
            <div className="border-testimonial d-flex p-3 flex-column">
              <p className="text-start">⭐⭐⭐⭐⭐</p>
              <p className="text-start test-para">
                A digital agency is a business you hire to outsource your
                digital marketing efforts, instead of handling in-house. They
                can provide your business with a variety of digital solutions to
                promote your product or service online and help you. A digital
                agency is a business you hire to outsource your digital
                marketing efforts.
              </p>
              <div className="d-flex flex-start align-items-center">
                <img src="../assets/T1.png" alt="" className="testImage" />
                <div className="d-flex flex-column ps-2">
                  <h1 className="text-header mb-0">Alan Martí</h1>
                  <p className="test-description mb-0">Meta Inc.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div>
            <div className="border-testimonial d-flex p-3 flex-column">
              <p className="text-start">⭐⭐⭐⭐⭐</p>
              <p className="text-start test-para">
                A digital agency is a business you hire to outsource your
                digital marketing efforts, instead of handling in-house. They
                can provide your business with a variety of digital solutions to
                promote your product or service online and help you. A digital
                agency is a business you hire to outsource your digital
                marketing efforts.
              </p>
              <div className="d-flex flex-start align-items-center">
                <img src="../assets/T2.png" alt="" className="testImage" />
                <div className="d-flex flex-column ps-2">
                  <h1 className="text-header mb-0">Alan Martí</h1>
                  <p className="test-description mb-0">Meta Inc.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sample image (could replace with a new testimonial) */}
          {/* <div>
            <img
              src="https://images.unsplash.com/photo-1558429121-3943585e2206?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1778&q=80"
              alt="slide 4"
            />
          </div> */}
        </Slider>
      </div>
    </div>
  );
}

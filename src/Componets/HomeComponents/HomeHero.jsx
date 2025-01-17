import React from "react";
import "./HomeHero.css";
import { useNavigate } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";

export default function HomeHero() {
  const navigate = useNavigate();

  const [ref1, inView1] = useInView({ triggerOnce: true });
  const [ref2, inView2] = useInView({ triggerOnce: true });
  const [ref3, inView3] = useInView({ triggerOnce: true });


  const { ref: refImage, inView: inViewImage } = useInView({ triggerOnce: true });
  const { ref: refContent, inView: inViewContent } = useInView({
    triggerOnce: true,
  });


  return (
    <div className="hero-back text-white Rubik">
      <div className="container py-hero">
        {/* top hero */}
        <div className="row">
          <div className="col-lg-6 my-auto hero-animation">
            {/* <div className="d-flex outer-border align-items-center">
             <div className="inner-border ">30% SAVE</div> 
              <span className="px-3">For the Black Friday weekend</span>
            </div>  */}

            <h1>
              We’re Here <br className="none-425" />
              to Help Build Your <br className="none-425" />
              Dream Project
            </h1>

            <button
              className="Contact-btn d-flex align-items-center text-white"
              onClick={() => navigate("/contact")}
            >
              <div className="p-2 ">
                Contact Us
                <span className="ps-4">
                  <img src="../assets/Arrow Right.png" alt="" />
                </span>
              </div>
            </button>
          </div>
          <div className="col-lg-6 mt-992">
            <img src="../assets/Hero.png" alt="" className="w-100 hero-image" />
          </div>
        </div>
        {/* top hero ends */}

        {/* middle hero ends */}

        <div className="row section-2">
          {/* Box 1 */}
          <div className="col-lg-4 my-auto box-1">
            <h3 ref={ref1}>
              {inView1 ? <CountUp start={0} end={42} duration={3} /> : 0}+
            </h3>
            <p>Years of experience</p>
          </div>

          {/* Box 2 */}
          <div className="col-lg-4 box-2">
            <h3 ref={ref2}>
              {inView2 ? <CountUp start={0} end={73} duration={3} /> : 0}+
            </h3>
            <p>Dedicated Agency Members</p>
          </div>

          {/* Box 3 */}
          <div className="col-lg-4 box-1">
            <h3 ref={ref3}>
              {inView3 ? <CountUp start={0} end={5000} duration={3} /> : 0}+
            </h3>
            <p>Projects completed</p>
          </div>
        </div>

        {/* middle hero ends */}

          {/* bottom hero */}
          <div className="row">
          {/* Image Section */}
          <div
            ref={refImage}
            className={`col-lg-6 ${inViewImage ? "scroll-up show" : "scroll-up"}`}
          >
            <img
              src="../assets/Hero1.png"
              alt=""
              className="w-100 hero-image"
            />
          </div>

          {/* Content Section */}
          <div
            ref={refContent}
            className={`col-lg-6 mt-992 my-auto ${
              inViewContent ? "scroll-up show" : "scroll-up"
            }`}
          >
            <h3>
              Why you should choose <br /> Techlivion?
            </h3>
            <p className="Hero-para">
              Choose Techlivion for expert software development, tailored IT
              services, and a proven track record of delivering innovative
              solutions.
            </p>

            <button className="Contact-btn d-flex align-items-center text-white">
              <div className="px-3 py-2 ">Learn More</div>
            </button>
          </div>
        </div>
        {/* bottom hero ends */}
      </div>
    </div>
  );
}

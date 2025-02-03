import React from "react";
import "./AboutExperince.css";

export default function AboutExperince() {
  return (
    <div className="container py-Experience epilogue">
      <div className="row">
        {/* top */}

        <div className="col-lg-6 my-auto">
          <h1 className="orange mb-0">
            Your Vision, <br /> Our Expertise
            </h1>
        </div>
        <div className="col-lg-6 mt-991">
          <p className="mb-0">
          At Techlivion, we craft innovative solutions in web development, architectural design, and BPO services, tailored to drive success across industries. With a passion for quality, creativity, and client satisfaction, we transform your ideas into extraordinary results.

          </p>
        </div>
        {/* top */}

        {/* MID */}
        {/* <div className="col-lg-6 mt-71">
          <iframe
            width="100%"
            height="448"
            src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-youtube"
          ></iframe>
        </div> */}
        <div className="col-lg-6 mt-71">
        <img src="../assets/E5.jpg" alt=""  width="100%"
            height="448" />

        </div>
        <div className="col-lg-6 mt-71 ">
          <div className="row">
            <div className="col-lg-6">
              <img src="../assets/E1.jpg" alt="" className="exp-image w-100" />
            </div>
            <div className="col-lg-6 ">
              <img
                src="../assets/E2.jpg"
                alt=""
                className="exp-image mt-991 w-100"
              />
            </div>
            <div className="col-lg-6">
              <img
                src="../assets/E4.jpg"
                alt=""
                className="exp-image w-100 mt-32"
              />
            </div>
            <div className="col-lg-6">
              <img
                src="../assets/E3.jpg"
                alt=""
                className="exp-image w-100 mt-32"
              />
            </div>
          </div>
        </div>
        {/* MID */}

        <div className="mt-91"></div>

        {/* BOT */}
        <div className="col-lg-12 my-auto">
          {/* <p className="orange">FEATURES</p> */}
          <h2>
            A True Partnership for Long-Term <br /> Success

          </h2>

          <p>

            We immerse ourselves in the merchant's perspective, 
            {/* <br className="none-425" /> */}
             acting  as an extension of their team. Our goal is to build
              <br className="none-425" />
               lasting partnerships that drive growth and success over
                {/* <br className="none-425" />  */}
                the long haul.


          </p>
        </div>

        {/* <div className="col-lg-6">
          <div className="row">
            <div className="col-lg-6 border-exp p-46">
              <div className="p-46-575 border-exp-575">
                <div className="d-flex ">
                  <div className="circle-icon d-flex justify-content-center align-items-center">
                    <img src="../assets/exp-icon.png" alt="" className="" />
                  </div>
                </div>
                <h3>Professional</h3>
                <p className="mb-0">
                  Full service range including technical skills.
                </p>
              </div>
            </div>

            <div className="col-lg-6 border-exp p-46  mt-auto ">
              <div className="p-46-575 border-exp-575">
                <h3>Accessibility
                  
                </h3>
                <p className="mb-0">
                  Business understanding, ability to put themselves.
                </p>
              </div>
            </div>
          </div>
        </div> */}

        {/* BOT */}
      </div>
    </div>
  );
}

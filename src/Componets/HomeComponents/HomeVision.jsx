import React from "react";
import "./HomeVision.css";
import { useNavigate } from "react-router-dom";

export default function HomeVision() {

const navigate = useNavigate();

  return (
    <div className="vision-back">
      <div className="container py-vision text-white">
        {/* TOP box */}

        <div className="d-flex  flex-column text-center V-topBox">
          <p className="gray mb-0">Pull the Trigger!</p>
          <h1>
            {" "}
            <span className="orange">Let’s bring your</span> <br />
            vision to life.
          </h1>

          {/* button */}

          <div className="d-flex justify-content-center">
            <button className="vision-btn d-flex align-items-center text-white" onClick={()=> navigate("/contact") }>
              <div className="p-2 ">
                Let’s Start
                <span className="ps-3">
                  <img src="../assets/Arrow Right.png" alt="" />
                </span>
              </div>
            </button>
          </div>
          {/* button */}
        </div>
        {/* TOP box ends*/}
        <div className="p-3">
          <div className="row border-vision ">
            <div className="col-lg-6 p-3 ps-5 my-auto">
              <h1>Stay in the loop</h1>
              <p>
                Join now with <span >TECHLIVION</span> to get
                the latest news
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
      </div>
    </div>
  );
}

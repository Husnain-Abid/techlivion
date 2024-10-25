import React, { useState } from "react";
import "./PortfolioMain.css";

export default function PortfolioMain() {
  const [activeIndex, setActiveIndex] = useState(0); // Track active button index

  const buttons = [1, 2, 3, 4, 5]; // You can add more numbers if needed

  return (
    <div className="container py-portMain">
      <ul className="d-flex justify-content-center align-items-center port-link epilogue">
        <li>Show All</li>
        <li className="orange">Development</li>
        <li className="orange">Branding</li>
        <li className="orange">Marketing</li>
        <li className="orange">Motion</li>
      </ul>

      <div className="row">
        <div className="col-lg-12 mt-4">
          <img src="../assets/port1.png" alt="" className="w-100 border-port" />
        </div>
        <div className="col-lg-6 mt-4">
          <img src="../assets/port2.png" alt="" className="w-100 border-port" />
        </div>
        <div className="col-lg-6 mt-4">
          <img src="../assets/port3.png" alt="" className="w-100 border-port" />
        </div>
        <div className="col-lg-6 mt-4">
          <img src="../assets/port4.png" alt="" className="w-100 border-port" />
        </div>
        <div className="col-lg-6 mt-4">
          <img src="../assets/port5.png" alt="" className="w-100 border-port" />
        </div>
      </div>

      {/* 12345 */}
      <div className="d-flex justify-content-center my-number">
        {buttons.map((num, index) => (
          <button
            key={index}
            className={index === activeIndex ? "Num-btn" : "Num-btn-white"}
            onClick={() => setActiveIndex(index)}
          >
            {num}
          </button>
        ))}
      </div>
      {/* 12345 ends */}

      {/* Help box */}
      <div className="p-425">
      <div className="row help-border epilogue">
        <div className="col-lg-6 my-auto">
          <div className="d-flex flex-column text-white">
            <h1>
              Help To Build <br className="none-425"/>
              Your Dream <br className="none-425"/>
              Project
            </h1>
            <p>
              A digital agency is a business you hire to outsource your <br className="none-425"/>{" "}
              digital marketing efforts, instead of handling in-house.
            </p>

            <button className="portContact-btn ">Contact Now</button>
          </div>
        </div>
        <div className="col-lg-6 mt-992">
            <img src="../assets/PortHelp.png" alt="" className="w-100 port-image"/>
        </div>
      </div>
      </div>
      {/* Help box ends */}

      {/* subbox */}
        
    

      <div className="p-2 mt-PortSub">
          <div className="row border-vision ">
            <div className="col-lg-6 p-3 ps-5 text-white my-auto">
              <h1>Stay in the loop</h1>
              <p>
                Join now with <span className="bold">TECHLIVION</span> to get
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
      

      {/* subbox ends */}
    </div>
  );
}

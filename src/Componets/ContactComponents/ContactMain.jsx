import React from "react";
import "./ContactMain.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faMapMarkerAlt,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

export default function ContactMain() {
  return (
    <div className="container py-Hello">
      <h1 className="epilogue text-center">Say Hello !</h1>
      <div className="d-flex justify-content-center">
        <form action="" className="form-width pops">
          <div className="row">
            <div className="col-lg-6 ">
              <div className="d-flex flex-column">
                <label htmlFor="" className="underline">
                  First Name
                </label>
                <input type="FirstName" className="input-contact" />
              </div>
            </div>
            <div className="col-lg-6 mt-991">
              <div className="d-flex flex-column">
                <label htmlFor="" className="underline">
                  Last Name
                </label>
                <input type="LastName" className="input-contact" />
              </div>
            </div>
            <div className="col-lg-12 mt-20">
              <div className="d-flex flex-column">
                <label htmlFor="" className="underline">
                  Email
                </label>
                <input type="Email" className="input-contact" />
              </div>
            </div>
            <div className="col-lg-12 mt-20">
              <div className="d-flex flex-column">
                <label htmlFor="" className="underline">
                  Message
                </label>
                <textarea
                  name="Message"
                  id=""
                  className="textArea-Contact"
                  rows={6}
                ></textarea>
              </div>
            </div>
          </div>
          <p className="mb-0 text-end">
            <button className="touch-btn text-white underline">
              Get in touch
            </button>
          </p>
        </form>
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
              <p className="mb-0 mt-20">+1 (234) 567-89-00</p>
            </div>
          </div>
          <div className="col-12 col-md-4 d-flex align-items-center border-Mid-Hello">
          <div className="d-flex flex-column text-white p-4">
              <div className="d-flex  align-items-center ">
                <span className="circle-icon d-flex  align-items-center">
                  {" "}
                  <FontAwesomeIcon icon={ faEnvelope} />
                </span>
                <p className="mb-0 ps-2 orange">EMail</p>
              </div>
              <p className="mb-0 mt-20">info@agency.com</p>
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
              <p className="mb-0 mt-20">2247 Lunetta Street, TX 76301</p>
            </div>
          </div>

        </div>
      </div>
      {/* Hello bar ends */}


      {/* subbox */}
        
    

      <div className="p-2 mt-PortSub pops ">
          <div className="row border-vision ">
            <div className="col-lg-6 p-3 ps-5 text-white my-auto">
              <h2>Stay in the loop</h2>
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

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
      <h2 className="epilogue text-center headiing" >Give us a a brief description about your query, <br/> and our team  will respond you soon!</h2>
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
              Get a Quote
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
              <p className="mb-0 mt-20">+923324624623</p>
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
              <p className="mb-0 mt-20">info@techlivion.com</p>
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
              <p className="mb-0 mt-20">Main Raiwind Road, Lahore, Pakistan</p>
            </div>
          </div>

        </div>
      </div>
      {/* Hello bar ends */}


      {/* subbox */}
        

      {/* subbox ends */}
    </div>
  );
}

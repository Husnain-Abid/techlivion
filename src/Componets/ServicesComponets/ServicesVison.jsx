import React from 'react'
import "./ServicesVison.css"

export default function ServicesVison() {
  return (
    <div className='container py-60'>
              {/* TOP box */}

              <div className="d-flex  flex-column text-center V-topBox1">
          <p className="gray mb-0">Pull the Trigger!</p>
          <h1>
            {" "}
            <span className="orange">Let’s bring your</span> <br />
            vision to life.
          </h1>

          {/* button */}

          <div className="d-flex justify-content-center">
            <button className="vision-btn d-flex align-items-center text-white">
              <div className="p-2 ">
                Let’s Start{" "}
                <span className="ps-3">
                  <img src="../assets/Arrow Right.png" alt="" />
                </span>
              </div>
            </button>
          </div>
          {/* button */}
        </div>
        {/* TOP box ends*/}
    </div>
  )
}

import React from 'react'
import "./AboutExperince.css"

export default function AboutExperince() {
  return (
    <div className='container py-Experience epilogue'>
      <div className="row">

        {/* top */}
     
        <div className="col-lg-6 my-auto">
            <h1 className='orange mb-0'>An Experience <br />
            Design Agency</h1>
        </div>
        <div className="col-lg-6 mt-991">
            <p className='mb-0'>Techlivion is a distinguished software development company with a primary focus on catering to startups, entrepreneurs, and established enterprises, who contribute to innovation and create opportunities for the broader public. Our dedicated team is committed to providing comprehensive services, encompassing idea brainstorming, meticulous design, development, and ultimately facilitating the successful launch of your project into the market. We help optimize the businesses through our services, to make the businesses grow, stay up to date, and reach new heights of performance. 
            </p>
        </div>
           {/* top */}


           {/* MID */}
           <div className="col-lg-6 mt-71">
           <iframe
          width="100%"
          height="448"
          src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className='w-youtube'
        ></iframe>
           </div>
           <div className="col-lg-6 mt-71">
             <div className="row">
                <div className="col-lg-6">
                    <img src="../assets/E1.png" alt="" className='exp-image w-100'/>
                </div>
                <div className="col-lg-6 ">
                <img src="../assets/E2.png" alt="" className='exp-image mt-991 w-100'/>
                </div>
                <div className="col-lg-6">
                <img src="../assets/E3.png" alt="" className='exp-image w-100 mt-32'/>
                </div>
                <div className="col-lg-6">
                <img src="../assets/E4.png" alt="" className='exp-image w-100 mt-32'/>
                </div>
             </div>
           </div>
           {/* MID */}

            <div className='mt-91'></div>

           {/* BOT */}
            <div className="col-lg-6 my-auto">
                <p className="orange">FEATURES</p>
                <h2>
                Long run, and work as an extension <br className="none-425" /> of the merchant's team.
                </h2>

                <p>Ability to put themselves in the merchant's <br className="none-425" /> shoes. It is meant to partner on the long run, <br className="none-425" /> and work as an extension.</p>
            </div>
            
            <div className="col-lg-6">
                <div className="row">
                    <div className="col-lg-6 border-exp p-46">
                        <div className='p-46-575 border-exp-575'>
                        <div className="d-flex ">
                            <div className="circle-icon d-flex justify-content-center align-items-center">
                                <img src="../assets/exp-icon.png" alt="" className=''/>
                            </div>
                        </div>
                        <h3>Professional</h3>
                        <p className='mb-0'>Full service range including technical skills.</p>
                        </div>
                    </div>




                        
                   

                    <div className="col-lg-6 border-exp p-46  mt-auto ">
                        <div className='p-46-575 border-exp-575'>
                    <h3>Accessibility</h3>
                    <p className='mb-0'>Business understanding, ability to put themselves.</p>
                    </div>
                    </div>
                </div>
            </div>




           {/* BOT */}
      </div>
    </div>
  )
}

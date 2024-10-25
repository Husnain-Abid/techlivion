import React from "react";
import "./Services.css";

export default function Services() {
  const services = [
    {
      id: 1,
      title: "Web ",
      title1: "Development",
      imageSrc: "../assets/S1.png",
    },
    {
      id: 2,
      title: "Game",
      title1: "Development",
      imageSrc: "../assets/S2.png",
    },
    {
      id: 3,
      title: "UI / UX ",
      title1: "Design",
      imageSrc: "../assets/S3.png",
    },
    {
        id: 4,
        title: "Graphic",
        title1: "Designing",
        imageSrc: "../assets/S4.png",
      },
      {
        id: 5,
        title: "Digital ",
        title1: "Marketing",
        imageSrc: "../assets/S5.png",
      },
      {
        id: 6,
        title: "Search Engine ",
        title1: "Optimization",
        imageSrc: "../assets/S6.png",
      },
      {
        id: 7,
        title: "3D Product",
        title1: "Visualization",
        imageSrc: "../assets/S7.png",
      },
      {
        id: 8,
        title: "Human Resource",
        title1: "Management",
        imageSrc: "../assets/S8.png",
      },
      {
        id: 9,
        title: "BPO",
        title1: "Services",
        imageSrc: "../assets/S9.png",
      },
  ];

  return (
    <div className="bg-services Rubik text-white">
      <div className="container py-100">
        <div className="d-flex flex-column text-center">
          <h1>Services we serve</h1>
          <div className="d-flex justify-content-center">
            <p>
              With a wide range of services and proven experience across major
              industries, we understand your challenges and deliver tailored
              solutions that overcome them and drive meaningful impact.
            </p>
          </div>

          <div className="row">
            {/* Map through the services array and render each service */}
            {services.map((service) => (
              <div className="col-lg-4  mt-3 p-4" key={service.id}>
                <div className="d-flex flex-column p-5 border-services">
                  <img
                    src={service.imageSrc}
                    alt={service.title}
                    className="w-services-image"
                  />
                  <h1 className="mt-4">
                    {service.title} <br /> {service.title1}
                  </h1>
                  {/* <p>{service.description}</p> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

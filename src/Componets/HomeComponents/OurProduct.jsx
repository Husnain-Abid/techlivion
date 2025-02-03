import React from "react";
import "./OurProduct.css";
import { useInView } from "react-intersection-observer";

// Create an array of products
const products = [
  {
    id: 1,
    title: "Ideate",
    description:
      "We refine your vision into a roadmap aligned for success.",
    imgSrc: "../assets/P1.png",
  },
  {
    id: 2,
    title: "Design",
    description:
      "    Crafting MVPs that fuse sleek design with top functionality",
    imgSrc: "../assets/P2.png",
  },
  {
    id: 3,
    title: "Develop",
    description:
      "Building agile solutions with smart design for rapid delivery",
    imgSrc: "../assets/P3.png",
  },
  {
    id: 4,
    title: "Test",
    description:
      "Delivering top-tier quality with rigorous testing at every touchpoint",
    imgSrc: "../assets/P4.png",
  },
  {
    id: 5,
    title: "Launch",
    description:
      "Seamlessly launching your product with tailored plans and support",
    imgSrc: "../assets/P5.png",
  },
  {
    id: 6,
    title: "Support",
    description:
      "Driving product success with continuous support and upgrades",
    imgSrc: "../assets/P6.png",
  },
];

export default function OurProduct() {
  const [imageRef, imageInView] = useInView({ triggerOnce: true });
  const [cardsRef, cardsInView] = useInView({ triggerOnce: true });

  return (
    <div className="container Rubik py-product">
      <h1 className="text-center">
        Our Product <br />
        Development Process{" "}
      </h1>

      {/* Cards Section */}
      <div
        ref={cardsRef}
        className={`row text-white pro-425 ${cardsInView ? "card-scroll show" : "card-scroll"
          }`}
      >
        {products.map((product) => (
          <div className="col-lg-4 mt-3 p-4" key={product.id}>
            <div className="border-product p-product-box">
              <div className="row">
                <div className="col-6 mt-auto">
                  <h2>{product.title}</h2>
                </div>
                <div className="col-6">
                  <img
                    src={product.imgSrc}
                    alt={product.title}
                    className="product-image"
                  />
                </div>
                <div className="col-12 mt-2">{product.description}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Technologies Section */}
      <div className="d-flex text-center py-5 flex-column Pro">
        <h1>Technologies we use</h1>
        <div className="d-flex justify-content-center">
          <p>
          Leveraging cutting-edge web technologies, from sleek front-end frameworks to powerful back-end systems, for fast and efficient development!

          </p>
        </div>
      </div>

      {/* Image Section */}
      <div
        ref={imageRef}
        className={`row ${imageInView ? "image-scroll show" : "image-scroll"
          }`}
      >
        <div className="col-12 px-4">
          <img src="../assets/techs.png" alt="" className="w-100" />
        </div>
      </div>
    </div>
  );
}

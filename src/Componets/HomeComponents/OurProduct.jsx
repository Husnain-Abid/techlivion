import React from "react";
import "./OurProduct.css";

// Create an array of products
const products = [
  {
    id: 1,
    title: "Ideate",
    description:
      "We analyze your vision thoroughly to ensure the roadmap is perfectly aligned with your end goals, setting the stage for product success.",
    imgSrc: "../assets/P1.png",
  },
  // Add more products as needed
  {
    id: 2,
    title: "Design",
    description:
      "Crafting a minimal viable product (MVP) that balances design with core functionality, maximizing value and user satisfaction",
    imgSrc: "../assets/P2.png",
  },
  {
    id: 3,
    title: "Develop",
    description:
      "Developing end-to-end solutions with a focus onfeasibility assessment, architecture design, and agile process to ensure rapid, high-quality delivery.",
    imgSrc: "../assets/P3.png",
  },
  {
    id: 4,
    title: "Test",
    description:
      "Ensuring your product meets the highest standards of quality and reliability through extensive QA and software testing across all user touch points.",
    imgSrc: "../assets/P4.png",
  },

  {
    id: 5,
    title: "Launch",
    description:
      "Executing a successful product launch by developing tailored deployment plans, executing a smooth rollout, and offering dedicated post-launch assistance.",
    imgSrc: "../assets/P5.png",
  },

  
  {
    id: 6,
    title: "Support",
    description:
      "Providing ongoing support and enhancements to ensure continued product success.",
    imgSrc: "../assets/P6.png",
  },
];

export default function OurProduct() {
  return (
    <div className="container Rubik py-product">
      <h1 className="text-center">
        Our Product <br />
        Development Process{" "}
      </h1>
      <div className="row text-white pro-425">
        {products.map((product) => (
          <div className="col-lg-4 mt-3 p-4" key={product.id}>
            <div className="border-product p-product-box">
              <div className="row  ">
                <div className="col-6 mt-auto">
                  <h2>{product.title}</h2>
                </div>
                <div className="col-6">
                  <img src={product.imgSrc} alt={product.title} className="product-image"/>
                </div>
                <div className="col-12 mt-2">{product.description}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className=" d-flex text-center py-5 flex-column Pro">
        <h1>Technologies we use </h1>
        <div className="d-flex justify-content-center">
        <p >A variety of modern web development technologies are used, including front-end frameworks, back-end systems, and tools for efficient development and deployment.</p>
        </div>
      </div>

      <div className="row">
        <div className="col-12 px-4">
            <img src="../assets/techs.png" alt="" className="w-100"/>
        </div>
      </div>
 
    </div>
  );
}

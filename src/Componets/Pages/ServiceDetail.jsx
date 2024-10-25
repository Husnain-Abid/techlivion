import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./ServiceDetail.css";

export default function ServiceDetail() {

  const navigate = useNavigate();
  const { slug } = useParams();

  const serviceData = [
    {
      id: 1,
      image: "front.jpeg",
      heading: "Front-End Web Development",
      slug: "front-end",
      para: "Get the front-end portion of websites and web applications built according to your requirements from our professional team. It's the part that users see and interact with, making it your business's face. The best-suited technology is used according to the project or as per the client's requirement.",
    },
    {
      id: 2,
      image: "back.jpeg",
      heading: "Back-End Web Development",
      slug: "back-end",
      para: "Power your web applications with a robust backend, handling server-side logic and databases. Our back-end web development services ensure your apps run smoothly, with secure and efficient data handling, API integrations, and more.",
    },
    {
      id: 3,
      image: "mobile.jpeg",
      heading: "Mobile App Development",
      slug: "mobile-app",
      para: "Develop high-performance mobile applications for Android and iOS platforms, tailored to your business needs. From native apps to cross-platform solutions, we ensure smooth user experiences and cutting-edge functionality.",
    },
    {
      id: 4,
      image: "api.png",
      heading: "API Development",
      slug: "api-development",
      para: "Streamline your business operations with custom API development. Our API solutions ensure smooth integration between various systems, enabling seamless communication between your applications and third-party services.",
    },
    {
      id: 5,
      image: "web.png",
      heading: "Web Application Development",
      slug: "web-app",
      para: "Build dynamic web applications that scale with your business needs. Our team develops secure, efficient, and feature-rich web apps that enhance user engagement and meet your business objectives.",
    },
    {
      id: 6,
      image: "ui.jpeg",
      heading: "UI/UX Design",
      slug: "ui-ux",
      para: "Deliver an exceptional user experience with our UI/UX design services. We create visually stunning and highly intuitive designs that ensure user satisfaction and boost engagement across digital platforms.",
    },
    {
      id: 7,
      image: "s11.jpeg",
      heading: "2D Game Development",
      slug: "2d-game",
      para: "Create engaging 2D games with our expert development team. We handle everything from design to deployment, delivering games that captivate players with immersive visuals and smooth gameplay.",
    },
    {
      id: 8,
      image: "s11.jpeg",
      heading: "3D Game Development",
      slug: "3d-game",
      para: "Bring your game ideas to life with our advanced 3D game development services. We specialize in creating stunning 3D environments and characters, along with immersive gameplay experiences.",
    },
    {
      id: 9,
      image: "s11.jpeg",
      heading: "Game Design",
      slug: "game-design",
      para: "Transform your concepts into reality with our comprehensive game design services. We focus on creating innovative game mechanics, engaging storylines, and visually appealing graphics that keep players hooked.",
    },
    {
      id: 10,
      image: "s11.jpeg",
      heading: "Game Testing",
      slug: "game-testing",
      para: "Ensure your game is bug-free and ready for launch with our thorough game testing services. Our experienced QA team conducts extensive testing to identify and fix any issues, ensuring optimal performance and user satisfaction.",
    },
    {
      id: 11,
      image: "s11.jpeg",
      heading: "VR/AR Game Development",
      slug: "vr-ar-game",
      para: "Explore the future of gaming with our VR/AR development services. We create immersive experiences that transport players into new worlds, enhancing their interaction with digital content.",
    },
    {
      id: 12,
      image: "s8.jpeg",
      heading: "Search Engine Optimization (SEO)",
      slug: "seo",
      para: "Enhance your website's visibility and drive organic traffic with our tailored SEO services. We optimize your website's on-page and off-page SEO, ensuring higher search engine rankings and increased conversions.",
    },
    {
      id: 13,
      image: "s13.jpeg",
      heading: "Social Media Marketing",
      slug: "social-media",
      para: "Boost your brand presence with our comprehensive social media marketing services. We create and manage campaigns that engage your audience and drive results.",
    },
    {
      id: 14,
      image: "s13.jpeg",
      heading: "Content Marketing",
      slug: "content-marketing",
      para: "Attract and retain customers with our content marketing strategies. We craft compelling content that resonates with your target audience and drives engagement.",
    },
    {
      id: 15,
      image: "s13.jpeg",
      heading: "Email Marketing",
      slug: "email-marketing",
      para: "Connect with your customers through personalized email marketing campaigns. We design strategies that increase open rates, click-through rates, and conversions.",
    },
    {
      id: 16,
      image: "s1.png",
      heading: "Pay-Per-Click Advertising (PPC)",
      slug: "ppc",
      para: "Maximize your ROI with our PPC advertising services. We manage campaigns that target your ideal customers, driving traffic and sales to your website.",
    },
    {
      id: 17,
      image: "s13.jpeg",
      heading: "Influencer Marketing",
      slug: "influencer-marketing",
      para: "Leverage the power of influencers to promote your brand. Our influencer marketing strategies connect you with the right personalities to reach your target audience.",
    },
    {
      id: 18,
      image: "s1.png",
      heading: "Graphic Design",
      slug: "graphic-design",
      para: "Transform your ideas into stunning visuals with our professional graphic design services. From logos to full branding suites, we craft designs that make a lasting impression.",
    },
    {
      id: 19,
      image: "s1.png",
      heading: "Branding & Identity Design",
      slug: "branding",
      para: "Establish a strong brand identity with our branding services. We create unique and memorable brand assets that communicate your values and connect with your audience.",
    },
    {
      id: 20,
      image: "s1.png",
      heading: "Print Design",
      slug: "print-design",
      para: "Bring your marketing materials to life with our print design services. We create visually appealing brochures, flyers, and more that capture attention and convey your message.",
    },
    {
      id: 21,
      image: "s1.png",
      heading: "Web Design",
      slug: "web-design",
      para: "Create a stunning online presence with our web design services. We build responsive and user-friendly websites that reflect your brand and drive conversions.",
    },
    {
      id: 22,
      image: "s1.png",
      heading: "Packaging Design",
      slug: "packaging",
      para: "Enhance your product's appeal with our packaging design services. We create eye-catching packaging that stands out on shelves and attracts customers.",
    },
    {
      id: 23,
      image: "s1.png",
      heading: "User Research",
      slug: "user-research",
      para: "Understand your users better with our user research services. We gather insights that inform design decisions and improve user experiences.",
    },
    {
      id: 24,
      image: "s1.png",
      heading: "Wireframing & Prototyping",
      slug: "wireframing",
      para: "Visualize your ideas with our wireframing and prototyping services. We create interactive prototypes that help you refine your designs before development.",
    },
    {
      id: 25,
      image: "s1.png",
      heading: "Usability Testing",
      slug: "usability-testing",
      para: "Ensure your product meets user expectations with our usability testing services. We identify areas for improvement to enhance user satisfaction.",
    },
    {
      id: 26,
      image: "s1.png",
      heading: "Interaction Design",
      slug: "interaction-design",
      para: "Design intuitive and engaging interactions with our interaction design services. We focus on creating experiences that captivate users.",
    },
    {
      id: 27,
      image: "s1.png",
      heading: "Responsive Design",
      slug: "responsive-design",
      para: "Ensure your website looks great on all devices with our responsive design services. We create designs that adapt seamlessly to different screen sizes.",
    },
    {
      id: 28,
      image: "s11.jpeg",
      heading: "On-Page SEO",
      slug: "on-page-seo",
      para: "Optimize your website's content and structure with our on-page SEO services. We improve your site's relevance and visibility in search engines.",
    },
    {
      id: 29,
      image: "s11.jpeg",
      heading: "Off-Page SEO",
      slug: "off-page-seo",
      para: "Enhance your site's authority and credibility with our off-page SEO services. We implement strategies that improve your online presence.",
    },
    {
      id: 30,
      image: "s11.jpeg",
      heading: "Technical SEO",
      slug: "technical-seo",
      para: "Enhance your website's performance with our technical SEO services. We optimize your site’s structure, speed, and other technical aspects to improve search engine visibility.",
    },
    {
      id: 31,
      image: "s1.png",
      heading: "s11.jpeg",
      slug: "keyword-research",
      para: "Identify the best keywords for your business with our comprehensive keyword research services. We analyze trends and competition to help you rank higher on search engines.",
    },
    {
      id: 32,
      image: "s8.jpeg",
      heading: "Seo Audit",
      slug: "seo-audits",
      para: "Evaluate your website’s SEO performance with our detailed audits. We identify strengths and weaknesses, providing actionable insights to enhance your SEO strategy.",
    },
    {
      id: 33,
      image: "s11.jpeg",
      heading: "Local SEO",
      slug: "local-seo",
      para: "Target local customers effectively with our local SEO services. We optimize your online presence to increase visibility in local search results.",
    },
    {
      id: 34,
      image: "s10.jpeg",
      heading: "Recruitment Services",
      slug: "recruitment",
      para: "Streamline your hiring process with our recruitment services. We connect you with the right talent to meet your business needs efficiently.",
    },
    {
      id: 35,
      image: "s10.jpeg",
      heading: "Employee Training & Development",
      slug: "training",
      para: "Enhance your workforce’s skills with our employee training and development programs. We design customized training solutions that align with your organizational goals.",
    },
    {
      id: 36,
      image: "s9.jpeg",
      heading: "3D Modeling",
      slug: "3d-modeling",
      para: "Create detailed and accurate 3D models with our expert services. We cater to various industries, delivering high-quality models for visualization and presentation.",
    },
    {
      id: 37,
      image: "s9.jpeg",
      heading: "3D Rendering",
      slug: "3d-rendering",
      para: "Bring your 3D models to life with our rendering services. We produce photorealistic images and animations that effectively showcase your designs.",
    },
    {
      id: 38,
      image: "s9.jpeg",
      heading: "Animation & Motion Graphics",
      slug: "animation",
      para: "Engage your audience with captivating animations and motion graphics. We create dynamic content that enhances storytelling and boosts brand recognition.",
    },
    {
      id: 39,
      image: "s9.jpeg",
      heading: "Virtual Reality Experiences",
      slug: "vr-experiences",
      para: "Immerse users in your content with our virtual reality experience development. We craft interactive VR experiences that captivate and engage audiences.",
    },
    {
      id: 40,
      image: "s10.jpeg",
      heading: "Product Prototyping",
      slug: "product-prototyping",
      para: "Turn your ideas into tangible products with our prototyping services. We help you visualize and refine your product concepts before moving to production.",
    },
    {
      id: 41,
      image: "s10.jpeg",
      heading: "Performance Management",
      slug: "performance",
      para: "Optimize employee performance with our performance management solutions. We provide tools and strategies to help you evaluate and enhance productivity.",
    },
    {
      id: 42,
      image: "s10.jpeg",
      heading: "Payroll Management",
      slug: "payroll",
      para: "Simplify your payroll process with our payroll management services. We ensure accurate and timely payroll processing, compliance with regulations, and employee satisfaction.",
    },
    {
      id: 43,
      image: "s10.jpeg",
      heading: "HR Consulting",
      slug: "hr-consulting",
      para: "Enhance your HR practices with our consulting services. We provide expert advice on HR strategies, policies, and compliance to support your business growth.",
    },
    {
      id: 44,
      image: "s8.jpg",
      heading: "Customer Support",
      slug: "customer-support",
      para: "Provide exceptional customer support with our dedicated services. We help you build strong relationships with your customers through effective communication and problem-solving.",
    },
    {
      id: 45,
      image: "s8.jpg",
      heading: "Technical Support",
      slug: "technical-support",
      para: "Ensure smooth operation with our technical support services. We provide assistance with IT issues, software troubleshooting, and system maintenance.",
    },

    {
      id: 46,
      image: "s8.jpg",
      heading: "Telemarketing",
      slug: "telemarketing",
      para: "Boost your sales efforts with our telemarketing services. We connect with potential customers, promote your products, and generate leads for your business.",
    },
    {
      id: 47,
      image: "s8.jpg",
      heading: "Back Office Support",
      slug: "back-office",
      para: "Enhance your operational efficiency with our back office support services. We manage administrative tasks, allowing you to focus on core business activities.",
    },
    
    
  ];
  

  // Find the service data that matches the param id
  const service = serviceData.find((service) => service.slug === slug);

  if (!service) {
    return <p>Service not found</p>;
  }

  return (
    <>
      <div className="service-detail epilogue">
        <div className="bg-ser">
          <div className="container text-white py-ServiceDetail">
            <p className="text-center">
              <img
                src={`../assets/service-img/${service.image}`}
                alt={service.heading}
                className="service-image"
              />
            </p>
            <div className="row mt-5">
              <div className="col-12">
                <h2 className="text-center">{service.heading}</h2>
                <p>{service.para}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./ServiceDetail.css";

export default function ServiceDetail() {
  const navigate = useNavigate();
  const { slug } = useParams();

  const serviceData = [
    {
      id: 1,
      image: "front-end.png",
      heading: "Front-End Web Development",
      slug: "front-end",
      para: "Get the front-end portion of websites and web applications built according to your requirements from our professional team. It's the part that users see and interact with, making it your business's face. The best-suited technology is used according to the project or as per the client's requirement.",
      category: "Website Development",
    },
    {
      id: 2,
      image: "back-end.png",
      heading: "Back-End Web Development",
      slug: "back-end",
      para: "We provide with professional back-end website development in order to ensure smooth running of you website.",
      category: "Website Development",
    },
    {
      id: 3,
      image: "full-stack.png",
      heading: "Full stack development",
      slug: "full-stack",
      para: "Get both front-end and back-end developed through us to get best out of your user interface and ensure smooth running of your Database and logic section of website.",
      category: "Website Development",
    },
    {
      id: 4,
      image: "site-management.png",
      heading: "Web-Site management",
      slug: "site-management",
      para: "We provide you with the maintenance, upgradation, Bug removal of your website and also provide long term maintenance contracts and short-term management services.",
      category: "Website Development",
    },
    {
      id: 5,
      image: "desktop-development.png",
      heading: "Desktop Development",
      slug: "desktop-development",
      para: " Get your personalised operating system application from us through professionals.",
      category: "Website Development",
    },
    {
      id: 6,
      image: "mobile-app.png",
      heading: "Mobile App Development",
      slug: "mobile-app",
      para: "  We will provide you with tailor-made softwares for your smartphones, tablets, and other digital assistants.",
      category: "Website Development",
    },
    {
      id: 7,
      image: "embedded-development.png",
      heading: "Embedded Development",
      slug: "embedded-development",
      para: " We will provide with systematic series of steps and activities involved in designing, developing, testing, deploying, and maintaining software that is embedded within a hardware system.",
      category: "Website Development",
    },
    {
      id: 8,
      image: "security-development.png",
      heading: "Security Development",
      slug: "security-development",
      para: " Security First! Every system requires to be secure, we provide with Secure systems development lifecycle to ensure safety of your systems from every threat.",
      category: "Website Development",
    },
    {
      id: 9,
      image: "logo-design.png",
      heading: "Logo Design",
      slug: "logo-design",
      para: "We help our clients, create a Logo that represents their online prescence in a visually appealing way. We will provide Logos that will create brand recognition and recall, helping you increase customer loyalty and recognition.",
      category: "Graphic Designing",
    },
    {
      id: 10,
      image: "brouchers-flyers.png",
      heading: "Brouchers / Flyers / Posters ",
      slug: "brouchers-flyers",
      para: "Security First! Every system requires to be secure, we provide with Secure systems development lifecycle to ensure safety of your systems from every threat.",
      category: "Graphic Designing",
    },
    {
      id: 11,
      image: "outdoor-indoor-signage.png",
      heading: "Outdoor & Indoor Signage",
      slug: "outdoor-indoor-signage",
      para: "Captivate public from outdoors and engage within your premises through tailormade and modernly designed Signages.",
      category: "Graphic Designing",
    },
    {
      id: 12,
      image: "design-brand-identity.png",
      heading: "Design Brand Identity",
      slug: "design-brand-identity",
      para: "Get a package deal for your Design identity encompassing Logos, color palette, and other graphic elements, as well as marketing materials like business cards, product packaging, and any related services on demand.",
      category: "Graphic Designing",
    },
    {
      id: 13,
      image: "custom-design.png",
      heading: "Custom Design",
      slug: "custom-design",
      para: "Let us bring your ideas to reality through customized designed services for your products.",
      category: "Graphic Designing",
    },
    {
      id: 14,
      image: "mobile-app-design.png",
      heading: "Mobile App Design",
      slug: "mobile-app-design",
      para: "We will design your mobile app to optimize its usability, accessibility, engagement, and overall user experience.",
      category: "Graphic Designing",
    },
    {
      id: 15,
      image: "social-media-design.png",
      heading: "Social Media Design",
      slug: "social-media-design",
      para: "Get optimal designs for your social media like Facebook, Instagram, TikTok, Twitter, and more, from our social media designing packages.",
      category: "Graphic Designing",
    },

    {
      id: 16,
      image: "ux-research.png",
      heading: "UX Research",
      slug: "ux-research",
      para: "To add realistic contexts and insights to the design process, we will provide you with systematic studies of target users and their requirements.",
      category: "UI UX Designs",
    },
    {
      id: 17,
      image: "ux-persona.png",
      heading: "UX Persona",
      slug: "ux-persona",
      para: "We provide you with your target user, as a fictitious character, so that you can better understand your customers before getting in touch with them.",
      category: "UI UX Designs",
    },
    {
      id: 18,
      image: "ux-case-study.png",
      heading: "UX Case Study",
      slug: "ux-case-study",
      para: "Teclivion provides you with detailed analysis and narrative of user experience design projects. This will illustrate the challenges you can face while dealing with your clients, and in advance, this will give you the required edge over the competitors and provide your clients with a better experience of your services.",
      category: "UI UX Designs",
    },
    {
      id: 19,
      image: "wire-framing.png",
      heading: "Wireframing",
      slug: "wire-framing",
      para: "Techlivion provides its clients with an overview of interactive products to establish the structure and flow of design solutions. This helps to conceive the optimal user-focused prototypes and products.",
      category: "UI UX Designs",
    },
    {
      id: 20,
      image: "responsive-design.png",
      heading: "Responsive",
      slug: "responsive",
      para: "To ensure usability and satisfaction, Techlivion provides responsive design that makes your online page adjustable to various devices, windows, and screen sizes.",
      category: "UI UX Designs",
    },
    {
      id: 21,
      image: "prototyping.png",
      heading: "Prototyping",
      slug: "prototyping",
      para: "Get the required prototype, be it for clients, users, or any other stakeholders, to prepare in advance the best experience for them.",
      category: "UI UX Designs",
    },
    {
      id: 22,
      image: "ui-design.png",
      heading: "UI Design",
      slug: "ui-design",
      para: "Get the best user interfaces designed for your computers, home appliances, mobile devices, and any user interface to ensure the best user experience.",
      category: "UI UX Designs",
    },
    {
      id: 23,
      image: "user-flow.png",
      heading: "User Flow",
      slug: "user-flow",
      para: "Techlivion provides you with diagrams, wireframes, prototypes, flowcharts, and other tools to help you understand how your user will navigate through your online presence. We will make it easy and impressive to get maximum modernization and ease for the user.",
      category: "UI UX Designs",
    },
    {
      id: 24,
      image: "off-page-seo.png",
      heading: "Off Page SEO",
      slug: "off-page-seo",
      para: "Techlivion is your best shot to get optimal Off page SEO. It will enhance traffic to your page through link building, content marketing, social media, influencer marketing, guest postings, brand mentions, and other public relations strategies.",
      category: "SEO Services",
    },
    {
      id: 25,
      image: "in-page-seo.png",
      heading: "In Page SEO",
      slug: "in-page-seo",
      para: "Techlivion will boost your online presence through improvement in site content, keywords, title tags, meta descriptions, headers, URLs, internal linking, external linking, images, user engagements, page speed, featured snippets, and schema markups. We have experienced professionals who know how to play with the online world for your benefit, remaining ethical and smart.",
      category: "SEO Services",
    },
    {
      id: 26,
      image: "website-seo.png",
      heading: "Website SEO",
      slug: "website-seo",
      para: "Along with paid marketing, we also boost traffic on your page through unpaid means, and all this will be organic traffic. We will use modern tools and techniques, improving your content and designs to encourage inflow from potential clients.",
      category: "SEO Services",
    },
    {
      id: 27,
      image: "mobile-seo.png",
      heading: "Mobile SEO",
      slug: "mobile-seo",
      para: "Techlivion will improve your website to make it suitable for mobile traffic, a vital part of SEO as most of the users engage through their smartphones. We will build mobile-friendly design and optimize your content for voice search so that you don't miss any part of this traffic.",
      category: "SEO Services",
    },
    {
      id: 28,
      image: "technical-seo.png",
      heading: "Technical SEO",
      slug: "technical-seo",
      para: "Through crawling, indexing, rendering, and website architecture, we will optimize your site to ensure it meets the modern requirements of search engines. This will increase the organic traffic, all that you want, to your page.",
      category: "SEO Services",
    },
    {
      id: 29,
      image: "content-creation.png",
      heading: "Content Creation",
      slug: "content-creation",
      para: "Our specialized team will provide you with blog posts, articles, social media posts, videos, podcasts, infographics, and other forms of media to enhance value to your online presence.",
      category: "SEO Services",
    },
    {
      id: 30,
      image: "seo-audit.png",
      heading: "SEO Audit",
      slug: "seo-audit",
      para: "Get the perfect analysis of your online presence with updated tools and professionals to get the exact idea of where you stand in the market, where there is room for improvement, be it in content, speed, or other technical aspects.",
      category: "SEO Services",
    },
    {
      id: 31,
      image: "market-analysis.png",
      heading: "Market Analysis",
      slug: "market-analysis",
      para: "We think market analysis is a vital step in understanding your footing and that of your competitors. It also gives you detailed insights about your target audience, such as their needs, preferences, and behaviors. This will help us both to create and design better.",
      category: "Human Resource Management",
    },
    {
      id: 32,
      image: "guest-blogging.png",
      heading: "Guest Blogging",
      slug: "guest-blogging",
      para: "Techlivion has experts that will write for your website's blogs, which will provide a great user experience and also serve as a much-needed SEO ingredient. It is the quality that we ensure and that you can trust.",
      category: "Human Resource Management",
    },
    {
      id: 33,
      image: "social-media-marketing.png",
      heading: "Social Media Marketing",
      slug: "social-media-marketing",
      para: "Who can neglect SMM! We provide you with technical and modernized social media marketing across all related platforms. This will increase your reach and enable potential users to easily get in touch with you.",
      category: "Human Resource Management",
    },
    {
      id: 34,
      image: "seo-progress-reporting.png",
      heading: "SEO Progress Reporting",
      slug: "seo-progress-reporting",
      para: "Adaptation is permanent, and we believe in it. We can provide you with updates on the results SEO is having on your online presence and suggest areas for improvement. This is done with honesty and professionalism so that no aspect is missing.",
      category: "Human Resource Management",
    },

    {
      id: 35,
      image: "core-hr.png",
      heading: "Core HR",
      slug: "core-hr",
      para: "Techlivion can, on demand, take up all the HR services you require, from hiring, to training, onboarding, managing, paying, and scheduling your employees for you. This way, the HR function becomes a one-window operation for you.",
      category: "Human Resource Management",
    },
    {
      id: 36,
      image: "employee-performance.png",
      heading: "Employee Performance",
      slug: "employee-performance",
      para: "It is inevitable to monitor the performance of your employees. We provide services that offer insights about employee performance through monitoring work output, satisfaction, and comparison with the market. This helps you better understand the performance of your employees.",
      category: "Human Resource Management",
    },
    {
      id: 37,
      image: "employee-database.png",
      heading: "Employee Database",
      slug: "employee-database",
      para: "Techlivion can provide you with software to easily maintain a database about your employees, including absenteeism, work outputs, monetary worth, demographics, and other key entries, helping you have a clear image of your company's standings.",
      category: "Human Resource Management",
    },
    {
      id: 38,
      image: "lms-systems.png",
      heading: "LMS Systems",
      slug: "lms-systems",
      para: "Get tailor-made Learning Management Systems (LMS) to train yourself and your employees on specific tasks. We also provide suggestions based on your requirements to help you build a better training experience, not only for employees but also for the users of your product.",
      category: "Human Resource Management",
    },
    {
      id: 39,
      image: "analytics.png",
      heading: "Analytics",
      slug: "analytics",
      para: "To improve workforce processes and promote a positive employee experience, we can provide you with the collection and application of talent data. This enables you to make informed decisions on talent acquisition and management.",
      category: "Human Resource Management",
    },
    {
      id: 40,
      image: "ppc-advertising.png",
      heading: "PPC Advertising",
      slug: "ppc-advertising",
      para: "Increase your traffic and potential customers by paying per click on your ads. We facilitate you to get the best deal for buying traffic in addition to the organic traffic we generate for you.",
      category: "Digital Marketing",
    },
    {
      id: 41,
      image: "link-building.png",
      heading: "Link Building",
      slug: "link-building",
      para: "Increase the rank and authority of your pages by linking them with other sites. This will not only increase the traffic to your page but also help establish you in the market.",
      category: "Digital Marketing",
    },
    {
      id: 42,
      image: "social-media-marketing.png",
      heading: "Social Media Marketing",
      slug: "social-media-marketing",
      para: "Techlivion gives you a complete package for all the social media marketing services to help you boost your online presence.",
      category: "Digital Marketing",
    },
    {
      id: 43,
      image: "content-marketing.png",
      heading: "Content Marketing",
      slug: "content-marketing",
      para: "Techlivion provides professional content marketing through experts who are experienced and updated with the modern requirements of the digital world.",
      category: "Digital Marketing",
    },
    {
      id: 44,
      image: "ad-campaigns-designing.png",
      heading: "Ad Campaigns Designing",
      slug: "ad-campaigns-designing",
      para: "Techlivion provides you with the visual vocabulary of your ads, including imagery, styles, and messaging. We offer a strategic blend of creativity, precise targeting, and data analysis to positively engage target customers and achieve beneficial results.",
      category: "Digital Marketing",
    },
    {
      id: 45,
      image: "content-writing.png",
      heading: "Content Writing",
      slug: "content-writing",
      para: "Techlivion has a dedicated team of experienced professionals to offer content writing services to boost your product and even more, to create content that represents your product. This includes both general and technical writing.",
      category: "Digital Marketing",
    },
    {
      id: 46,
      image: "3d-modelling.png",
      heading: "3D Modelling",
      slug: "3d-modelling",
      para: "Creation of accurate 3D models of products, including detailed geometries, textures, and materials. This service can cover anything from consumer electronics to furniture, machinery, or apparel. It can be used in product design, virtual prototypes, or e-commerce displays.",
      category: "3D Product Visualization",
    },
    {
      id: 47,
      image: "3d-rendering.png",
      heading: "3D Rendering",
      slug: "3d-rendering",
      para: "High-quality, photorealistic renders of 3D models, often used for marketing, advertisements, or presentations. The rendering process involves lighting, shading, and environmental effects to create lifelike images. It can be used in product catalogs, advertisements, or website displays.",
      category: "3D Product Visualization",
    },
    {
      id: 48,
      image: "360-product-spins.png",
      heading: "360 Product Spins",
      slug: "360-product-spins",
      para: "Interactive 360-degree views of products that users can rotate and explore from all angles. These can be embedded on websites or apps, allowing clients to showcase their products in an engaging, interactive format. It can be used in e-commerce platforms, online product showcases.",
      category: "3D Product Visualization",
    },
    {
      id: 49,
      image: "ar-integration.png",
      heading: "Augmented Reality (AR) Integration",
      slug: "ar-integration",
      para: "Integration of 3D product models into AR applications, allowing users to view products in their real-world environment using smartphones or AR headsets. It can be used in furniture placement in homes, virtual try-ons for clothing, or product visualization in retail settings.",
      category: "3D Product Visualization",
    },
    {
      id: 50,
      image: "vr-product-demos.png",
      heading: "Virtual Reality (VR) Product Demos",
      slug: "vr-product-demos",
      para: "Fully immersive VR environments where clients or customers can interact with 3D product models, test features, or explore virtual showrooms. It can be used in trade shows, virtual product demos, or interactive training programs.",
      category: "3D Product Visualization",
    },
    {
      id: 51,
      image: "3d-animation.png",
      heading: "3D Animation",
      slug: "3d-animation",
      para: "Creation of animated 3D models that demonstrate how a product functions, its features, or its assembly process. These animations can be used for marketing or instructional content. It can be used in product demos, explainer videos, or assembly guides.",
      category: "3D Product Visualization",
    },
    {
      id: 52,
      image: "custom-configurators.png",
      heading: "Custom Configurators",
      slug: "custom-configurators",
      para: "Interactive 3D product configurators that allow users to customize product features such as colors, materials, or components in real-time. It can be used in automotive configurators, furniture customization, or fashion product variations.",
      category: "3D Product Visualization",
    },
    {
      id: 53,
      image: "3d-prototyping.png",
      heading: "3D Prototyping and Simulation",
      slug: "3d-prototyping",
      para: "Digital prototyping services that allow clients to visualize and test product designs before physical production. Includes simulation of mechanical properties or product behavior under different conditions. It can be used in engineering prototypes, product testing, or virtual prototyping for R&D.",
      category: "3D Product Visualization",
    },
    {
      id: 54,
      image: "3d-printing-pre-visualization.png",
      heading: "3D Printing Pre-Visualization",
      slug: "3d-printing-pre-visualization",
      para: "Providing visual previews of how a 3D printed product will look once completed. This service helps clients adjust designs before sending them to a 3D printer. It can be used in rapid prototyping, pre-production design review.",
      category: "3D Product Visualization",
    },
    {
      id: 55,
      image: "web-based-3d-viewer.png",
      heading: "Web-based 3D Viewer Integration",
      slug: "web-based-3d-viewer",
      para: "Embedding 3D product visualizations directly onto websites with interactive viewers, allowing users to explore and interact with products within a web browser. It can be used in e-commerce websites, product portfolios, or client presentations.",
      category: "3D Product Visualization",
    },

    {
      id: 56,
      image: "back-office-outsourcing.png",
      heading: "Back Office Outsourcing",
      slug: "back-office-outsourcing",
      para: "Outsource your HR management, payroll, finance and accounting, information technology management, data entry to Techlivion. We will fulfill these operations professionally and as you would have cared for these. We have teams and individuals that are experienced in handling these tasks.",
      category: "BPO Services",
    },
    {
      id: 57,
      image: "front-office-outsourcing.png",
      heading: "Front Office Outsourcing",
      slug: "front-office-outsourcing",
      para: "Techlivion can handle your sales, marketing, customer services, tech-support, and other business processes requiring direct contact with customers, with dignity, pride, and professionalism.",
      category: "BPO Services",
    },
    {
      id: 58,
      image: "accounting.png",
      heading: "Accounting",
      slug: "accounting",
      para: "You can outsource your accounting works to our experts. We will provide you with accounting management, bookkeeping, payroll processing, financial analysis, auditing, bank reconciliation, management consulting, balance sheets, taxes and other such services, with confidence and reliance.",
      category: "BPO Services",
    },
    {
      id: 59,
      image: "it-outsourcing.png",
      heading: "IT Outsourcing",
      slug: "it-outsourcing",
      para: "Outsource all your IT requirements to us, may it be software development of any kind or management, or software services, to Techlivion and we will give you an experience worth marketing about.",
      category: "BPO Services",
    },
    {
      id: 60,
      image: "onshore-offshore-bpo.png",
      heading: "Onshore / Off Shore BPO",
      slug: "onshore-offshore-bpo",
      para: "Outsource your business processes, be these in your country or any other country of your requirement. We manage such services on your behalf so that you can be trouble-free from processes and focus on other aspects of your business.",
      category: "BPO Services",
    },
    {
      id: 61,
      image: "data-entry.png",
      heading: "Data Entry",
      slug: "data-entry",
      para: "Like other services, data entry services are provided by Techlivion at competitive prices and with reliability and time efficiency.",
      category: "BPO Services",
    },
    {
      id: 62,
      image: "marketing-outsourcing.png",
      heading: "Marketing",
      slug: "marketing-outsourcing",
      para: "Outsource your company's marketing to us and we will help you enhance your reach in the target areas to help you grow.",
      category: "BPO Services",
    },
    {
      id: 63,
      image: "healthcare.png",
      heading: "Health Care",
      slug: "healthcare",
      para: "We provide healthcare process outsourcing, including coding, billing services, transcription, calling, e-mail support and others, to help individuals and organizations in the medical field.",
      category: "BPO Services",
    },
    {
      id: 64,
      image: "data-analysis.png",
      heading: "Data Analysis",
      slug: "data-analysis",
      para: "Interpret complex data through us to make enhanced decisions and customer experience. We offer skills of both technical type like data cleaning and statistical analysis and also equally important skills of critical thinking and communication.",
      category: "BPO Services",
    },
    {
      id: 65,
      image: "technical-support.png",
      heading: "Technical Support",
      slug: "technical-support",
      para: "Are you frustrated from the daily interruptions caused by IT lags? Allow us to help you provide with technical support that resolves software, and network problems. It will enhance productivity and ensure the smooth operations of technology and maximize its performance.",
      category: "BPO Services",
    },
    {
      id: 66,
      image: "mobile-game-development.png",
      heading: "Mobile Game Development (IOS / Android)",
      slug: "mobile-game-development",
      para: "Techlivion specializes in Game Development. We develop gaming apps for Android, iOS, and other mobile operating systems. We can work to realize your ideas about games and also provide you with innovative and workable ideas.",
      category: "Game Development",
    },
    {
      id: 67,
      image: "pc-console-ar-vr-games.png",
      heading: "PC, Console, AR / VR Games",
      slug: "pc-console-ar-vr-games",
      para: "Like Mobile gaming apps, we also provide apps that will run on PC, Consoles, AR / VR technologies. We are your partners from conceptualization to user feedback.",
      category: "Game Development",
    },
    {
      id: 68,
      image: "ai-game-development.png",
      heading: "AI Game Development",
      slug: "ai-game-development",
      para: "AI is the thing in gaming today. We can develop for you responsive and adaptive games that will give ultimate gaming experience to you and / or to your clients.",
      category: "Game Development",
    },
    {
      id: 69,
      image: "vr-game-development.png",
      heading: "Virtual Reality Game Development",
      slug: "vr-game-development",
      para: "VR reality games development will be specifically designed to be played with VR hardware. This is done through experts.",
      category: "Game Development",
    },
    {
      id: 70,
      image: "ar-game-development.png",
      heading: "Augmented Reality Game Development",
      slug: "ar-game-development",
      para: "As VR game, we also offer our clients AR games development at the most competitive rates and give users the ultimate gaming experience of augmented reality.",
      category: "Game Development",
    },
    {
      id: 71,
      image: "game-art-design.png",
      heading: "Game Art Design Services",
      slug: "game-art-design",
      para: "Techlivion has expert designers who will design the games with the software engineers to artistically design the backgrounds and characters of the games.",
      category: "Game Development",
    },
    {
      id: 72,
      image: "gamification-services.png",
      heading: "Gamification Services",
      slug: "gamification-services",
      para: "Techlivion can provide you with gamification services that will integrate the games with websites, online communities, learning management systems, and other online platforms to engage the users, help them interact, inspire, collaborate, and share.",
      category: "Game Development",
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
            <div className="text-center img-box">
              <img
                src={`../assets/service-img/${service.image}`}
                alt={service.heading}
                className="service-image"
              />
            </div>

            <div className="row my-5">
              <div className="col-12 service-content">
                <h2>{service.heading}</h2>
                <p>{service.para}</p>

                <div className="mt-5">
                  {/* <button className="btn-service" onClick={()=> navigate("/quote")}>Get A Quote</button> */}

                  <button
                    className="btn-service"
                    onClick={() =>
                      navigate(`/quote?service=${service.category}`)
                    }
                  >
                    Get A Quote
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

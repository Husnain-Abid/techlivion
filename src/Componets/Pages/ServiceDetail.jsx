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
      para: `Welcome to Techlivion's Front-End Web Development services! We specialize in creating stunning, user-friendly websites that deliver seamless user experiences and drive results for your business.
The front-end of a website or web application is the very essence of your digital presence—the face of your business that users see, interact with, and remember. At Techlivion, our skilled team of front-end developers is here to bring your vision to life. Whether you’re looking to create a sleek corporate site or a dynamic web application, we ensure the front-end is built precisely to your requirements, blending functionality, design, and user experience.
`,
      category: "Website Development",
    },
    {
      id: 2,
      image: "back-end.png",
      heading: "Back-End Web Development",
      slug: "back-end",
      para: `Welcome to Techlivion's Back-End Web Development services! We specialize in building robust, secure, and scalable server-side solutions that power your websites and applications, ensuring seamless performance and functionality.
The back-end of a website or web application is the backbone of your digital presence—the engine that drives the user experience and handles all the critical behind-the-scenes operations. At Techlivion, our team of expert back-end developers is dedicated to bringing your ideas to life by creating efficient, reliable, and high-performing solutions tailored to your unique needs. Whether you’re looking to develop a custom API, manage databases, or integrate third-party services, we ensure the back-end is designed to deliver on every front, combining innovation, security, and performance.
`,
      category: "Website Development",
    },
    {
      id: 3,
      image: "full-stack.png",
      heading: "Full stack development",
      slug: "full-stack",
      para: `Welcome to Techlivion's Full Stack Development services! We specialize in delivering end-to-end web and application solutions by seamlessly integrating front-end design with robust back-end functionality to meet all your business needs.
Full stack development combines the best of both worlds—the front-end that users see and interact with, and the back-end that powers the experience behind the scenes. At Techlivion, our team of highly skilled full stack developers is here to handle your project from concept to completion. Whether you need a sleek, interactive interface or a powerful, secure server-side solution, we ensure a cohesive development process that brings your vision to life, combining aesthetics, functionality, and scalability.
`,
      category: "Website Development",
    },
    {
      id: 4,
      image: "site-management.png",
      heading: "Web-Site management",
      slug: "site-management",
      para: `Welcome to Techlivion's Website Management services! We specialize in maintaining, optimizing, and updating your website to ensure it operates smoothly and continues to meet the evolving needs of your business and customers.
Your website is more than just an online presence; it's a vital tool for your business’s success. At Techlivion, we provide comprehensive website management solutions to keep your site secure, up-to-date, and running at peak performance. Whether you're managing a corporate website, an e-commerce store, or a dynamic web application, our team has the expertise to handle it all.
`,
      category: "Website Development",
    },
    {
      id: 5,
      image: "desktop-development.png",
      heading: "Desktop Development",
      slug: "desktop-development",
      para: ` Welcome to Techlivion's Desktop Development services! We specialize in crafting robust, high-performance desktop applications tailored to meet your specific business needs.
Desktop applications remain a crucial solution for businesses requiring powerful, offline, and secure systems for various tasks. At Techlivion, our team of experienced developers is dedicated to building user-friendly, feature-rich applications that run seamlessly on Windows, macOS, or Linux platforms. Whether you need a custom business tool, a standalone software solution, or an enterprise-level application, we've got you covered.
`,
      category: "Website Development",
    },
    {
      id: 6,
      image: "mobile-app.png",
      heading: "Mobile App Development",
      slug: "mobile-app",
      para: `Welcome to Techlivion's Mobile App Development services! At Techlivion, we specialize in building innovative and high-performance mobile applications that deliver exceptional user experiences across both iOS and Android platforms.
In today's mobile-first world, having a responsive and intuitive mobile app is crucial for engaging your audience and staying competitive. Our team of expert mobile developers is dedicated to transforming your ideas into seamless, feature-rich apps that meet the unique needs of your business and users. We’ve got the expertise to create the perfect mobile experience tailored to your brand. Let Techlivion take your business to the next level with cutting-edge mobile applications that are designed for the future of digital interaction.
`,
      category: "Website Development",
    },
    {
      id: 7,
      image: "embedded-development.png",
      heading: "Embedded Development",
      slug: "embedded-development",
      para: `Embedded systems are at the heart of modern technology, enabling devices to perform specialized functions with precision and efficiency. At Techlivion, our team of experienced embedded developers works with the latest hardware and software technologies to create embedded solutions that meet your specific needs, ensuring optimal performance and minimal power consumption.
Whether you need custom firmware development, real-time operating systems (RTOS) integration, or full embedded solutions, we have the expertise to deliver high-quality products. From concept to deployment, we focus on precision engineering and performance optimization, ensuring your embedded system operates seamlessly in the real world.
Partner with Techlivion to bring your innovative embedded solutions to life, and let us help you stay ahead in the ever-evolving landscape of technology.
`,
      category: "Website Development",
    },
    {
      id: 8,
      image: "security-development.png",
      heading: "Security Development",
      slug: "security-development",
      para: `In today’s digital landscape, safeguarding your applications, data, and infrastructure is more critical than ever. At Techlivion, we specialize in creating robust security solutions designed to protect your business from cyber threats and vulnerabilities. Our team of security experts understands the complexities of modern cybersecurity and is dedicated to ensuring that your systems remain resilient against evolving threats.
Whether you're building a new application or securing an existing system, we provide end-to-end security solutions that include encryption, authentication, intrusion detection, and compliance management. Trust Techlivion to fortify your digital infrastructure and provide the peace of mind you need in an increasingly interconnected world.
`,
      category: "Website Development",
    },
    {
      id: 9,
      image: "logo-design.png",
      heading: "Logo Design",
      slug: "logo-design",
      para: `A great logo is the cornerstone of your brand identity, serving as the first impression of your business to the world. At Techlivion, we specialize in crafting custom logo designs that not only represent your business values but also make a lasting impact on your audience.
Our team of creative designers works closely with you to understand your brand’s vision, audience, and industry to create a logo that perfectly reflects your unique identity. We blend artistry with strategy to produce logos that are visually appealing, memorable, and versatile across various digital and print mediums.
`,
      category: "Graphic Designing",
    },
    {
      id: 10,
      image: "brouchers-flyers.png",
      heading: "Brouchers / Flyers / Posters ",
      slug: "brouchers-flyers",
      para: `At Techlivion, we understand the power of print materials in conveying your brand’s message. Whether you're looking to promote an event, advertise a new product, or showcase your services, our brochure, flyer, and poster design services are tailored to make your message stand out.
We create visually engaging designs that capture attention and communicate your key messages effectively. Our team works with you to craft compelling layouts and impactful visuals that align with your brand identity and marketing goals. From sleek brochures to eye-catching flyers and posters, we ensure your materials are not only informative but also memorable.
`,
      category: "Graphic Designing",
    },
    {
      id: 11,
      image: "outdoor-indoor-signage.png",
      heading: "Outdoor & Indoor Signage",
      slug: "outdoor-indoor-signage",
      para: `Effective signage plays a crucial role in guiding, informing, and attracting customers, both inside and outside your business. At Techlivion, we specialize in designing custom outdoor and indoor signage that enhances your brand visibility and ensures a memorable experience for your audience.
Our experienced team works with you to create signage that not only stands out but also aligns with your brand’s aesthetics and functional requirements. Whether it's a striking outdoor sign to grab attention or an informative indoor sign to guide customers, we combine design expertise with durable materials to produce high-quality, long-lasting signage solutions.
`,
      category: "Graphic Designing",
    },
    {
      id: 12,
      image: "design-brand-identity.png",
      heading: "Design Brand Identity",
      slug: "design-brand-identity",
      para: `Your brand identity is the essence of how your business is perceived, and it’s crucial to establish a consistent and impactful presence across all platforms. At Techlivion, we specialize in crafting comprehensive brand identities that resonate with your target audience and leave a lasting impression.
We take a holistic approach to brand identity design, ensuring every visual element, from logos and color palettes to typography and graphic styles, works harmoniously to represent your company’s core values and message. Our team collaborates with you to deeply understand your brand’s personality, mission, and vision, creating an identity that reflects your unique story and differentiates you in the marketplace.
`,
      category: "Graphic Designing",
    },
    {
      id: 13,
      image: "custom-design.png",
      heading: "Custom Design",
      slug: "custom-design",
      para: `At Techlivion, we believe that every design should be as unique as your business. Our custom design services are tailored to meet your specific needs, ensuring that each project we work on is crafted to reflect your vision and make a statement.
Whether you're looking for a custom logo, website design, product packaging, or any other creative asset, we focus on delivering designs that are both visually compelling and functional. We integrate your feedback throughout the process to ensure the end result aligns perfectly with your brand's identity and values.
`,
      category: "Graphic Designing",
    },
    {
      id: 14,
      image: "mobile-app-design.png",
      heading: "Mobile App Design",
      slug: "mobile-app-design",
      para: `In today’s digital age, mobile apps have become essential tools for engaging users and expanding business reach. At Techlivion, we specialize in designing intuitive, user-friendly mobile applications that deliver a seamless experience across both iOS and Android platforms.
Our mobile app design services focus on creating visually appealing and highly functional interfaces that enhance user interaction. We understand the importance of user experience (UX) and user interface (UI) design, and we collaborate closely with you to ensure that your app aligns perfectly with your brand identity while providing an intuitive, enjoyable experience for your users. Let Techlivion help you turn your mobile app ideas into a polished, engaging product that will captivate your audience and drive business success.
`,
      category: "Graphic Designing",
    },
    {
      id: 15,
      image: "social-media-design.png",
      heading: "Social Media Design",
      slug: "social-media-design",
      para: `In today’s digital landscape, a strong social media presence is essential for connecting with your audience and building brand recognition. At Techlivion, we specialize in creating custom social media designs that elevate your online presence and capture attention across all platforms.
We focus on crafting designs that not only attract attention but also drive engagement. Our design team works with you to understand your brand’s tone, message, and audience, creating visually compelling content that resonates with your followers. Whether you need eye-catching graphics, promotional content, or branded templates, we provide comprehensive solutions that enhance your brand’s visibility and foster growth on social media.
`,
      category: "Graphic Designing",
    },

    {
      id: 16,
      image: "ux-research.png",
      heading: "UX Research",
      slug: "ux-research",
      para: `UX research is the foundation of user-centered design. At Techlivion, we understand that great design starts with a deep understanding of your users. Our UX research services are dedicated to uncovering valuable insights about your audience, enabling you to create products and experiences that truly meet their needs and expectations.
By analyzing user behavior, preferences, and pain points, we help you make informed decisions that enhance usability and satisfaction. Our team employs a wide range of research methods, including user interviews, usability testing, surveys, and analytics, to provide you with actionable insights tailored to your project’s goals.
`,
      category: "UI UX Designs",
    },
    {
      id: 17,
      image: "ux-persona.png",
      heading: "UX Persona",
      slug: "ux-persona",
      para: `Understanding your users is key to creating meaningful and effective design solutions. At Techlivion, we specialize in developing detailed UX personas that provide valuable insights into your audience, ensuring your products meet the client’s expectations.
These personas serve as a guiding tool for your design and development processes, ensuring that every decision is aligned with your users’ needs. Partner with Techlivion to develop UX personas that empower your team to design with clarity, purpose, and user-focused precision.
`,
      category: "UI UX Designs",
    },
    {
      id: 18,
      image: "ux-case-study.png",
      heading: "UX Case Study",
      slug: "ux-case-study",
      para: `Welcome to Techlivion's Wireframing services! We specialize in designing clear and intuitive wireframes that serve as the blueprint for your websites or applications, ensuring your project starts on a solid foundation.
Wireframing is an essential step in the development process, bridging the gap between your ideas and the final product. It defines the layout, structure, and functionality of your digital project, setting the stage for seamless design and development. At Techlivion, our team of experts creates wireframes tailored to your vision, helping you visualize your project and refine it before moving to the next phase.
`,
      category: "UI UX Designs",
    },
    {
      id: 19,
      image: "wire-framing.png",
      heading: "Wireframing",
      slug: "wire-framing",
      para: `Welcome to Techlivion's Wireframing services! We specialize in designing clear and intuitive wireframes that serve as the blueprint for your websites or applications, ensuring your project starts on a solid foundation.
      Wireframing is an essential step in the development process, bridging the gap between your ideas and the final product. It defines the layout, structure, and functionality of your digital project, setting the stage for seamless design and development. At Techlivion, our team of experts creates wireframes tailored to your vision, helping you visualize your project and refine it before moving to the next phase.
      `,
      category: "UI UX Designs",
    },
    {
      id: 20,
      image: "responsive-design.png",
      heading: "Responsive",
      slug: "responsive",
      para: `Creating visually stunning and intuitive interfaces is at the heart of what we do at Techlivion. We specialize in crafting user interface (UI) designs that captivate users and ensure seamless interaction, delivering exceptional digital experiences tailored to your brand.
UI design is more than just aesthetics—it’s about creating interfaces that combine beauty with functionality. At Techlivion, we understand the importance of balancing visual appeal and usability, ensuring every element is designed to enhance the user experience while staying true to your brand identity.
`,
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
      para: `Building your website’s authority and visibility is key to driving traffic and achieving higher search engine rankings. At Techlivion, we specialize in delivering comprehensive Off-Page SEO strategies that help your website gain credibility, attract high-quality backlinks, and expand its online presence.
Off-Page SEO goes beyond optimizing your website—it focuses on establishing your brand's authority in the digital space. From link building to social media engagement, our tailored strategies ensure your website consistently ranks higher and drives meaningful results for your business.
`,
      category: "SEO Services",
    },
    {
      id: 25,
      image: "in-page-seo.png",
      heading: "In Page SEO",
      slug: "in-page-seo",
      para: `Enhancing your website's structure, content, and functionality is vital to achieving higher search engine rankings and delivering a superior user experience. At Techlivion, we specialize in On-Page SEO strategies designed to optimize every aspect of your website or mobile, ensuring it meets search engine guidelines and connects effectively with your audience`,
      category: "SEO Services",
    },
    {
      id: 26,
      image: "website-seo.png",
      heading: "Website SEO",
      slug: "website-seo",
      para: `Create keyword-rich, engaging content while improving internal linking, image optimization, and page speed to deliver an exceptional user experience.`,
      category: "SEO Services",
    },
    {
      id: 27,
      image: "mobile-seo.png",
      heading: "Mobile SEO",
      slug: "mobile-seo",
      para: `Optimize your website for mobile devices, ensuring fast load times, responsive design, and enhanced usability for mobile users.`,
      category: "SEO Services",
    },
    {
      id: 28,
      image: "technical-seo.png",
      heading: "Technical SEO",
      slug: "technical-seo",
      para: `Fine-tune your website’s structure, meta tags, URLs, and schema markup to enhance search engine crawlability and indexing.`,
      category: "SEO Services",
    },
    {
      id: 29,
      image: "content-creation.png",
      heading: "Content Creation",
      slug: "content-creation",
      para: `Creating impactful content is key to building meaningful connections with your audience and achieving your business goals. At Techlivion, we specialize in crafting high-quality, engaging content that resonates with your target audience and drives results.
Content is the foundation of your online presence—it informs, engages, and inspires action. From blog posts and website copy to social media content and beyond, our content creation services are tailored to your unique needs, ensuring every word aligns with your brand’s voice and vision.`,
      category: "SEO Services",
    },
    {
      id: 30,
      image: "seo-audit.png",
      heading: "SEO Audit",
      slug: "seo-audit",
      para: `Uncover the full potential of your website and take the guesswork out of improving your search engine rankings. At Techlivion, we specialize in comprehensive SEO audits that provide valuable insights into your website’s performance, identify issues, and recommend actionable solutions to boost visibility and traffic.
An SEO audit serves as a roadmap for your digital success, ensuring your website aligns with search engine guidelines and meets your audience's expectations. With Techlivion’s expert analysis, you’ll gain clarity and direction to optimize your site effectively.
`,
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
      para: `Track, assess, and optimize employee performance with tailored KPIs, feedback systems, and goal-setting tools.`,
      category: "Human Resource Management",
    },
    {
      id: 37,
      image: "employee-database.png",
      heading: "Employee Database",
      slug: "employee-database",
      para: `Maintain a secure and organized database for all employee records, ensuring compliance and easy access.`,
      category: "Human Resource Management",
    },
    {
      id: 38,
      image: "lms-systems.png",
      heading: "LMS Systems",
      slug: "lms-systems",
      para: `Implement Learning Management Systems that facilitate employee training, upskilling, and knowledge sharing across teams.`,
      category: "Human Resource Management",
    },
    {
      id: 39,
      image: "analytics.png",
      heading: "Analytics",
      slug: "analytics",
      para: `Unlock insights into your workforce with advanced analytics tools that help improve retention, productivity, and engagement.`,
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

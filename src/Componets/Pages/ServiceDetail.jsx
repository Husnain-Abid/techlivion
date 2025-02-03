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
      image: "wire-framing.png",
      heading: "Wireframing",
      slug: "wire-framing",
      para: `Welcome to Techlivion's Wireframing services! We specialize in designing clear and intuitive wireframes that serve as the blueprint for your websites or applications, ensuring your project starts on a solid foundation.
      Wireframing is an essential step in the development process, bridging the gap between your ideas and the final product. It defines the layout, structure, and functionality of your digital project, setting the stage for seamless design and development. At Techlivion, our team of experts creates wireframes tailored to your vision, helping you visualize your project and refine it before moving to the next phase.
      `,
      category: "UI UX Designs",
    },
    {
      id: 19,
      image: "responsive-design.png",
      heading: "Responsive",
      slug: "responsive",
      para: `Creating visually stunning and intuitive interfaces is at the heart of what we do at Techlivion. We specialize in crafting user interface (UI) designs that captivate users and ensure seamless interaction, delivering exceptional digital experiences tailored to your brand.
UI design is more than just aesthetics—it’s about creating interfaces that combine beauty with functionality. At Techlivion, we understand the importance of balancing visual appeal and usability, ensuring every element is designed to enhance the user experience while staying true to your brand identity.
`,
      category: "UI UX Designs",
    },

    {
      id: 20,
      image: "ui-design.png",
      heading: "UI Design",
      slug: "ui-design",
      para: `Creating visually stunning and intuitive interfaces is at the heart of what we do at Techlivion. We specialize in crafting user interface (UI) designs that captivate users and ensure seamless interaction, delivering exceptional digital experiences tailored to your brand.
UI design is more than just aesthetics—it’s about creating interfaces that combine beauty with functionality. At Techlivion, we understand the importance of balancing visual appeal and usability, ensuring every element is designed to enhance the user experience while staying true to your brand identity.
`,
      category: "UI UX Designs",
    },

    {
      id: 21,
      image: "off-page-seo.png",
      heading: "Off Page SEO",
      slug: "off-page-seo",
      para: `Building your website’s authority and visibility is key to driving traffic and achieving higher search engine rankings. At Techlivion, we specialize in delivering comprehensive Off-Page SEO strategies that help your website gain credibility, attract high-quality backlinks, and expand its online presence.
Off-Page SEO goes beyond optimizing your website—it focuses on establishing your brand's authority in the digital space. From link building to social media engagement, our tailored strategies ensure your website consistently ranks higher and drives meaningful results for your business.
`,
      category: "SEO Services",
    },
    {
      id: 22,
      image: "in-page-seo.png",
      heading: "In Page SEO",
      slug: "in-page-seo",
      para: `Enhancing your website's structure, content, and functionality is vital to achieving higher search engine rankings and delivering a superior user experience. At Techlivion, we specialize in On-Page SEO strategies designed to optimize every aspect of your website or mobile, ensuring it meets search engine guidelines and connects effectively with your audience`,
      category: "SEO Services",
    },

    {
      id: 23,
      image: "on-page-seo.png",
      heading: "In Page SEO",
      slug: "on-page-seo",
      para: `Enhancing your website's structure, content, and functionality is vital to achieving higher search engine rankings and delivering a superior user experience. At Techlivion, we specialize in On-Page SEO strategies designed to optimize every aspect of your website or mobile, ensuring it meets search engine guidelines and connects effectively with your audience.
      <br>
      <br>
      <br>
      <br>
      <br>
      <p>Our On-Page SEO Services Include:</p>
      <ul>
        <li><strong>Mobile SEO:</strong> Optimize your website for mobile devices, ensuring fast load times, responsive design, and enhanced usability for mobile users.</li>
        <li><strong>Technical SEO:</strong> Fine-tune your website’s structure, meta tags, URLs, and schema markup to enhance search engine crawlability and indexing.</li>
        <li><strong>Website SEO:</strong> Create keyword-rich, engaging content while improving internal linking, image optimization, and page speed to deliver an exceptional user experience.</li>
      </ul>`,
      category: "SEO Services",
    },

    {
      id: 24,
      image: "AEO-seo.png",
      heading: "Answer Engine Optimization",
      slug: "aeo",
      para: `
      
      In the evolving world of search, it’s no longer just about ranking higher—it’s about delivering precise answers to user queries. At Techlivion, we specialize in Answer Engine Optimization (AEO), helping your content get featured in search engine results as rich answers, featured snippets, and voice search responses. <br><br>
AEO focuses on optimizing your content for modern search engines that prioritize answering user questions directly. By understanding user intent and structuring your content effectively, we ensure your business remains visible and relevant in an increasingly competitive digital landscape.

      
      `,
      category: "SEO Services",
    },

    {
      id: 25,
      image: "content-creation.png",
      heading: "Content Creation",
      slug: "content-creation",
      para: `Creating impactful content is key to building meaningful connections with your audience and achieving your business goals. At Techlivion, we specialize in crafting high-quality, engaging content that resonates with your target audience and drives results.
Content is the foundation of your online presence—it informs, engages, and inspires action. From blog posts and website copy to social media content and beyond, our content creation services are tailored to your unique needs, ensuring every word aligns with your brand’s voice and vision.`,
      category: "SEO Services",
    },
    {
      id: 26,
      image: "seo-audit.png",
      heading: "SEO Audit",
      slug: "seo-audit",
      para: `Uncover the full potential of your website and take the guesswork out of improving your search engine rankings. At Techlivion, we specialize in comprehensive SEO audits that provide valuable insights into your website’s performance, identify issues, and recommend actionable solutions to boost visibility and traffic.
An SEO audit serves as a roadmap for your digital success, ensuring your website aligns with search engine guidelines and meets your audience's expectations. With Techlivion’s expert analysis, you’ll gain clarity and direction to optimize your site effectively.
`,
      category: "SEO Services",
    },

    {
      id: 27,
      image: "hr.png",
      heading: "Human Resource Management ",
      slug: "human-resource",
      para: `
    <p>Empowering businesses with innovative HR solutions is our mission at Techlivion. We specialize in delivering tailored HR services that streamline your workforce management, enhance employee performance, and provide actionable insights to drive organizational success. We have professionals on board and we can help you with hiring an HR professional for your in-house team. If you intend to outsource your HR Department, we can do that for you with the help of our expert team.</p>

    <p><strong>Why Choose Techlivion for HR Services?</strong></p>
    <ul>
      <li><strong>Comprehensive Solutions:</strong> We provide end-to-end HR management tools that simplify processes and improve efficiency.</li>
      <li><strong>Employee-Centric Approach:</strong> Our services focus on empowering employees and fostering a productive work environment.</li>
      <li><strong>Data-Driven Insights:</strong> Leverage advanced analytics to make informed decisions and enhance workforce strategies.</li>
    </ul>

    <p><strong>Our HR Services Include:</strong></p>
    <ul>
      <li><strong>Employee Performance Management:</strong> Track, assess, and optimize employee performance with tailored KPIs, feedback systems, and goal-setting tools.</li>
      <li><strong>Employee Database Management:</strong> Maintain a secure and organized database for all employee records, ensuring compliance and easy access.</li>
      <li><strong>LMS Systems:</strong> Implement Learning Management Systems that facilitate employee training, upskilling, and knowledge sharing across teams.</li>
      <li><strong>HR Analytics:</strong> Unlock insights into your workforce with advanced analytics tools that help improve retention, productivity, and engagement.</li>
    </ul>

    <p>Elevate your human resources strategy with Techlivion’s HR services. Let us help you create a more efficient and people-focused workplace. Contact us today to learn more!</p>
  `,
      category: "Human Resource Management",
    },

    // devOps start
    {
      id: 28,
      image: "continuous-integration.png",
      heading: "Continuous Integration ",
      slug: "continuous-integration",
      para: `Streamlining your development process is essential for delivering high-quality software quickly and efficiently. At Techlivion, we specialize in Continuous Integration (CI) services that automate code integration, improve collaboration, and ensure your projects stay on track. <br> <br>
Continuous Integration is a development practice where code changes are automatically tested and integrated into a shared repository. This ensures early detection of errors, faster development cycles, and smoother deployment processes. Partner with Techlivion to implement robust CI pipelines that enhance your team's productivity and ensure consistent software quality.
`,
      category: "Dev-Ops",
    },
    {
      id: 29,
      image: "automation.png",
      heading: "Automation",
      slug: "automation",
      para: `Streamline your processes and maximize efficiency with Techlivion’s Automation services. We specialize in implementing cutting-edge automation solutions tailored to your business needs, enabling you to save time, reduce errors, and focus on growth. <br> <br>
      
Automation is the key to simplifying complex workflows and boosting productivity. At Techlivion, we understand the importance of aligning technology with your objectives. Whether it’s automating repetitive tasks, optimizing workflows, or integrating advanced systems, our solutions are designed to empower your business.      
`,
      category: "Dev-Ops",
    },
    {
      id: 30,
      image: "software.png",
      heading: "Software",
      slug: "software",
      para: `Ensure your software meets the highest standards of quality and performance with Techlivion’s comprehensive software testing solutions. We specialize in providing rigorous testing services tailored to your unique needs, allowing you to deliver flawless products, reduce risks, and enhance user satisfaction.
Software testing is the cornerstone of reliable and functional applications. At Techlivion, we understand the critical role testing plays in the development lifecycle. Whether it’s functional testing, performance testing, security testing, or automated testing, our services are designed to give you peace of mind knowing that your software is ready for deployment and meets all expectations.
`,
      category: "Dev-Ops",
    },

    {
      id: 31,
      image: "deployment.png",
      heading: "Deployment",
      slug: "ad-campaigns-designing",
      para: `Ensure a smooth and efficient launch with Techlivion’s deployment services. We specialize in implementing reliable deployment strategies tailored to your business needs, allowing you to deploy applications faster, reduce downtime, and ensure seamless user experiences. <br> <br>
Deployment is the final and crucial step in bringing your software to life. At Techlivion, we understand the importance of a flawless rollout. Whether it's deploying to a cloud environment, on-premises infrastructure, or through continuous delivery pipelines, our solutions are designed to meet your needs, optimize performance, and set you up for success.
`,
      category: "Dev-Ops",
    },

    {
      id: 32,
      image: "3d-modelling.png",
      heading: "3D Prototyping and Simulation",
      slug: "3d-modelling",
      para: `
        <p>Revolutionize your product development process with Techlivion’s advanced 3D prototyping and simulation services. We specialize in creating immersive, interactive 3D experiences that allow you to visualize, test, and refine your ideas before they hit production.</p>
        
        <p><strong>Our services include:</strong></p>
        <ul>
          <li><strong>3D Animation:</strong> Bring your designs to life with high-quality 3D animations that showcase every angle and detail of your product.</li>
          <li><strong>Custom Configurators:</strong> Enable users to interact with and customize products in real-time, providing them with a personalized experience.</li>
          <li><strong>3D Modeling:</strong> Create precise and detailed 3D models for prototypes, ensuring the digital version matches your vision.</li>
          <li><strong>3D Rendering:</strong> Generate realistic renderings that provide lifelike representations of your product, offering a clear view of its design.</li>
          <li><strong>3D Viewer Integration:</strong> Seamlessly integrate 3D viewers into your website or app to allow customers to interact with your product directly.</li>
          <li><strong>360 Product Spins:</strong> Let your customers explore every angle of your product with immersive 360-degree spins, giving them a comprehensive view of your offerings.</li>
        </ul>
    
        <p>At Techlivion, we believe that visualization is key to innovation. Our state-of-the-art technology empowers you to iterate faster, reduce errors, and bring your ideas to market with confidence.</p>
      `,
      category: "3D Product Visualization",
    },
    {
      id: 33,
      image: "3d-rendering.png",
      heading: "AR Integration",
      slug: "3d-rendering",
      para: `Transform the way your customers interact with your products and services through Techlivion’s Augmented Reality (AR) integration solutions. We specialize in implementing cutting-edge AR technologies tailored to your business needs, enabling you to engage users in immersive and interactive ways, drive customer satisfaction, and enhance brand experiences. <br>
AR integration is the key to bridging the physical and digital worlds. At Techlivion, we understand the power of seamless AR experiences. Whether it’s enhancing shopping experiences, creating interactive product demos, or enabling virtual try-ons, our solutions are designed to empower your business and captivate your audience.
`,
    },
    {
      id: 34,
      image: "360-product-spins.png",
      heading: "VR Product",
      slug: "360-product-spins",
      para: `
Take customer engagement to the next level with Techlivion’s immersive VR product demos. We specialize in creating interactive, virtual reality experiences tailored to your products, allowing customers to explore and experience your offerings in a fully immersive environment.
      
VR product demos are the key to providing customers with a unique, hands-on experience that enhances understanding and drives purchase decisions. At Techlivion, we understand how VR can transform product showcases, allowing users to interact with and experience products like never before. Whether it’s walking through a virtual store, exploring complex machinery, or visualizing products in 3D space, our VR demos are designed to elevate your business and provide unforgettable customer experiences.
      
      `,
      category: "3D Product Visualization",
    },

    {
      id: 35,
      image: "graphic-design.jpg ",
      heading: "Graphic Designing",
      slug: "graphic-design",
      para: `Create a Lasting Impression with Techlivion’s Graphic Designing Services. Stand out in a competitive market with Techlivion’s professional graphic designing services. We specialize in crafting visually compelling designs that represent your brand and engage your audience, allowing you to communicate your message effectively and create a memorable presence. <br>
Graphic design is the key to building a strong visual identity and connecting with your audience. At Techlivion, we understand the importance of design in shaping your business’s image. Whether it’s designing a unique Logo Design that reflects your brand's essence or developing a comprehensive Brand Identity to ensure consistency across all touchpoints, our solutions are designed to make your business visually appealing and unforgettable.
`,
      category: "BPO Services",
    },
    {
      id: 36,
      image: "content-writing.png",
      heading: "Content Writing",
      slug: "content-writing",
      para: `
        <p>Engage and Inform with Techlivion’s Content Writing Services. Elevate your brand's voice with Techlivion’s professional content writing services. We specialize in crafting high-quality, engaging content tailored to your audience, ensuring your message resonates and drives results. Whether you're looking to inform, educate, or entertain, we have the expertise to deliver the perfect content for your needs.</p>
    
        <p>Content writing is the key to creating a strong connection with your audience and enhancing your online presence. At Techlivion, we offer a wide range of writing services, including:</p>
        
        <ul>
          <li><strong>Article Writing:</strong> Delivering in-depth, informative articles that engage readers and establish authority in your industry.</li>
          <li><strong>SEO Optimized Writing:</strong> Creating content that not only reads well but is also optimized for search engines, ensuring better visibility and higher rankings.</li>
          <li><strong>Technical Writing:</strong> Producing clear, concise, and accurate documentation, manuals, and guides for complex topics and products.</li>
          <li><strong>Ghost Writing:</strong> Providing professional writing services while maintaining your unique voice, perfect for books, speeches, and articles published under your name.</li>
          <li><strong>Blog Writing:</strong> Crafting insightful and engaging blog posts that resonate with your audience, increase traffic, and drive meaningful engagement.</li>
        </ul>
    
        <p>At Techlivion, we understand the importance of compelling content in shaping perceptions and influencing decisions. Our expert writers are here to help you create content that stands out and drives success.</p>
      `,
      category: "BPO Services",
    },

    {
      id: 37,
      image: "customer-support.png",
      heading: "Customer Support",
      slug: "customer-support",
      para: `Enhance Your Customer Experience with Techlivion’s Customer Support Services. Provide exceptional support to your customers with Techlivion’s tailored customer support services. Whether you're looking to outsource your customer service operations or enhance your existing support team, we are here to help you create seamless, effective, and personalized experiences for your customers.<br><br>
Customer support is crucial in building strong, lasting relationships with your clients. At Techlivion, we specialize in offering comprehensive customer support solutions that can include both chat and call support. If you're looking to outsource your customer support entirely, we can handle the entire process for you—ensuring timely, professional, and reliable service for your customers.<br> <br>
Our support services are designed to meet your business’ needs, whether you require 24/7 assistance, dedicated support teams, or customer service that aligns with your brand voice. With our expertise, you can focus on growing your business while we handle the customer interactions that keep your clients satisfied.`,
      category: "BPO Services",
    },
    {
      id: 38,
      image: "data-entry.png",
      heading: "Data Entry",
      slug: "data-entry",
      para: `
      Streamline Your Operations with Techlivion’s Data Entry Services. Enhance your operational efficiency with Techlivion’s expert data entry services. We specialize in offering accurate, fast, and cost-effective data management solutions tailored to your business needs, helping you save time, reduce manual errors, and focus on more strategic tasks. <br>  <br>
Data entry is the key to organizing and managing critical information effectively. At Techlivion, we understand the importance of maintaining clean, accurate, and up-to-date data. Whether it’s entering large volumes of information, updating databases, or processing forms, our solutions are designed to streamline your data management processes, enabling your business to operate smoothly and efficiently.
      `,
      category: "BPO Services",
    },
    {
      id: 39,
      image: "accounting.png",
      heading: "Accounting",
      slug: "accounting",
      para: `Streamline Your Finances with Techlivion’s Accounting Services. Simplify your financial processes and gain better control over your business with Techlivion’s expert accounting services. We specialize in offering comprehensive accounting solutions tailored to your unique needs, enabling you to save time, reduce errors, and focus on growth.
Accounting is the key to ensuring financial accuracy and compliance. At Techlivion, we understand the importance of sound financial management. Whether it’s managing payroll, tax preparation, financial reporting, or bookkeeping, our solutions are designed to optimize your accounting functions, ensuring you have reliable insights to make informed business decisions.
`,
      category: "BPO Services",
    },

    {
      id: 40,
      image: "mobile-game-development.png",
      heading: "Game Development",
      slug: "mobile-game-development",
      para: `
Game development is the key to creating memorable experiences that captivate and entertain. At Techlivion, we understand the importance of designing games that are not only fun to play but also visually stunning and technically innovative. Whether you’re looking to develop mobile games, PC games, console games, or create immersive AR/VR experiences, our solutions are designed to provide a dynamic and exciting user experience across all platforms. <br/>
 
Game development is the key to creating memorable experiences that captivate and entertain. At Techlivion, we understand the importance of designing games that are not only fun to play but also visually stunning and technically innovative. Whether you’re looking to develop mobile games, PC games, console games, or create immersive AR/VR experiences, our solutions are designed to provide a dynamic and exciting user experience across all platforms.
      
      `,
      category: "Game Development",
    },
    {
      id: 41,
      image: "pc-console-ar-vr-games.png",
      heading: "iOS/Android",
      slug: "pc-console-ar-vr-games",
      para: `Unlock the potential of mobile technology with Techlivion’s expert iOS and Android development services. We specialize in creating innovative, high-performance mobile applications, including games, for both platforms. Whether you're targeting iPhone, iPad, Android smartphones, or tablets, we have the expertise to bring your ideas to life. <br/> <br/>
We offer custom mobile game development solutions that are engaging, immersive, and tailored to your audience. At Techlivion, we understand the unique requirements of iOS and Android platforms and ensure seamless integration, performance optimization, and exceptional user experiences. From concept to launch, our team will work with you to develop games that captivate users and achieve your business goals.
`,
      category: "Game Development",
    },
    {
      id: 42,
      image: "ai-game-development.png",
      heading: "Game Art Design ",
      slug: "game-art",
      para: `
      Bring Your Game to Life with Techlivion’s Game Art Design Services. Create stunning visuals that captivate and engage players with Techlivion’s professional game art design services. We specialize in crafting high-quality, visually immersive art for games across all platforms, ensuring that your game not only plays well but also looks exceptional. <br/> <br/>
Game art design is the key to creating an unforgettable player experience. At Techlivion, we offer a wide range of art design services, including character design, environment art, user interface design, and 2D/3D assets. Our experienced team works closely with you to understand your vision, ensuring that every artistic element aligns with the overall style and tone of your game. <br/> <br/>
Whether you’re creating a mobile game, console title, or VR experience, our custom-designed art will help your game stand out and deliver a visually engaging experience for players.      
      `,
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
                <p dangerouslySetInnerHTML={{ __html: service.para }} />

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

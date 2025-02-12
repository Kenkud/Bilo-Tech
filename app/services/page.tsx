"use client";

import servicesStyles from "../../styles/Services.module.css"; // Styles unique to Services
import Image from "next/image";

export default function ServicesPage() {
  // 10 Key Services
  const services = [
    {
      title: "AI Consultation & Strategy",
      img: "/ai-consultation.jpg",
      alt: "BiloTech AI Consultation",
      description:
        "We guide businesses through the complex world of AI, helping define goals, scope, and strategy to ensure maximum ROI from AI investments.",
    },
    {
      title: "Predictive Analytics",
      img: "/predictive-analytics.jpg",
      alt: "Predictive Analytics Dashboard",
      description:
        "Leverage historical data to forecast future events, optimize decision-making, and identify emerging trends for proactive strategies.",
    },
    {
      title: "NLP & Chatbots",
      img: "/nlp-chatbots.jpg",
      alt: "NLP and Chatbots Icon",
      description:
        "Automate customer engagement and streamline communication through advanced Natural Language Processing models and custom chatbot solutions.",
    },
    {
      title: "Computer Vision",
      img: "/computer-vision.jpg",
      alt: "Computer Vision Technology",
      description:
        "From image classification to object detection, our computer vision solutions transform visual data into actionable insights.",
    },
    {
      title: "Recommendation Systems",
      img: "/recommendation-systems.jpg",
      alt: "Recommendation System",
      description:
        "Drive user engagement and boost sales by providing personalized recommendations tailored to each customer’s unique preferences.",
    },
    {
      title: "AI-driven Data Visualization",
      img: "/data-visualization.jpg",
      alt: "Data Visualization Charts",
      description:
        "Transform raw data into intuitive dashboards and visuals, enabling faster, smarter decisions supported by real-time insights.",
    },
    {
      title: "Edge AI Solutions",
      img: "/edge-ai.jpg",
      alt: "Edge AI Device",
      description:
        "Deploy AI models on edge devices for real-time analytics, reduced latency, and improved performance—even in bandwidth-limited environments.",
    },
    {
      title: "Robotic Process Automation",
      img: "/rpa.jpg",
      alt: "RPA Robots",
      description:
        "Automate repetitive tasks and workflows with RPA, freeing up human resources for more strategic and creative endeavors.",
    },
    {
      title: "Anomaly Detection",
      img: "/anomaly-detection.jpg",
      alt: "Anomaly Detection Alert",
      description:
        "Identify irregularities or outliers in data streams to prevent fraud, predict failures, and maintain operational stability.",
    },
    {
      title: "MLOps & Deployment",
      img: "/mlops.jpg",
      alt: "MLOps Pipeline",
      description:
        "Streamline model development, deployment, and monitoring with robust MLOps processes, ensuring reliability and scalability.",
    },
  ];

  return (
    <div>
      {/* ====== HERO SECTION FOR SERVICES ====== */}
      <section className={servicesStyles.servicesHero}>
        <div className={servicesStyles.heroContent}>
          <h1 className={servicesStyles.servicesTitle}>Our AI Services</h1>
          <p className={servicesStyles.heroText}>
            Transform your business with cutting-edge AI solutions 
            tailored to your needs. Explore our diverse range of 
            services and discover how BiloTech AI can drive innovation, 
            efficiency, and growth.
          </p>
        </div>
      </section>

      {/* ====== SERVICES LIST ====== */}
      <section className={servicesStyles.servicesListSection}>
        <div className={servicesStyles.servicesListWrapper}>
          {services.map((service, index) => (
            <div className={servicesStyles.serviceCard} key={index}>
              <Image
                src={service.img}
                alt={service.alt}
                width={400}
                height={250}
                className={servicesStyles.serviceImage}
              />
              <h2 className={servicesStyles.serviceTitle}>{service.title}</h2>
              <p className={servicesStyles.serviceDescription}>
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

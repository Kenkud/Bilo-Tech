"use client";

import styles from "../styles/Home.module.css"; // Or "../styles/Home.module.css", if that's where your homepage styles live

// export const metadata = {
//   title: "BiloTech AI",
//   description: "Leading AI Solutions and Innovations",
// };

export default function Home() {
  return (
    <div className={styles.container}>
      {/* ====== HERO SECTION with VIDEO BACKGROUND (or whatever you need) ====== */}
      <section id="/" className={styles.hero}>
        <video
          autoPlay
          muted
          loop
          playsInline
          className={styles.heroVideo}
          poster="/hero-fallback.jpg"
        >
          <source src="/hero-bg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            We Design Better AI Solutions. <span className={styles.animatePeriod}>Period.</span>
          </h1>
          <h2 className={styles.heroSubTitle}>
            We innovate. We iterate. We deliver.
            <br />
            We are the next paradigm in artificial intelligence.
          </h2>
          {/* Hero CTA button linking to #quote or /quote as needed */}
          <a href="/quote" className={styles.ctaButton}>
            Get a Quote
          </a>
        </div>
      </section>

      {/* ====== ABOUT SECTION ====== */}
      <section id="about" className={styles.aboutSection}>
        <div className={styles.aboutOverlay}></div>
        <div className={styles.aboutContent}>
          <h3 className={styles.sectionTitle}>Our Vision</h3>
          <p className={styles.sectionText}>
            BiloTech AI is committed to building robust and scalable AI solutions
            that empower businesses. Our approach is grounded in cutting-edge
            research, innovative thinking, and a dedication to excellence.
          </p>
          <a href="/about" className={styles.learnMoreButton}>
            Learn More
          </a>
        </div>
      </section>

      {/* ====== SERVICES SECTION ====== */}
      <section id="services" className={styles.servicesSection}>
        <div className={styles.sectionContent}>
          <h3 className={styles.sectionTitle}>Our Services</h3>
          <p className={styles.sectionText}>
            From predictive analytics to machine learning automation, our diverse
            range of services helps you gain a competitive edge, leveraging the
            power of AI for tangible business outcomes.
          </p>
          {/* Example of your auto-scrolling or marquee-like layout for services */}
          <div className={styles.servicesCarousel}>
            <div className={styles.slidingTrack}>
              <div className={styles.serviceCard}>AI Consultation & Strategy</div>
              <div className={styles.serviceCard}>Predictive Analytics</div>
              <div className={styles.serviceCard}>NLP & Chatbots</div>
              <div className={styles.serviceCard}>Computer Vision</div>
              <div className={styles.serviceCard}>Recommendation Systems</div>
              <div className={styles.serviceCard}>Edge AI Solutions</div>
              <div className={styles.serviceCard}>Robotic Process Automation</div>
              <div className={styles.serviceCard}>Anomaly Detection</div>
              <div className={styles.serviceCard}>MLOps & Deployment</div>
            </div>
          </div>
          {/* 'Learn More' button linking to your /services page */}
          <a href="/services" className={styles.learnMoreButton}>
            Learn More
          </a>
        </div>
      </section>

      {/* ====== CASE STUDIES SECTION ====== */}
      <section id="caseStudies" className={styles.caseStudiesSection}>
        <div className={styles.sectionContent}>
          <h3 className={styles.sectionTitle}>Case Studies</h3>
          <p className={styles.sectionText}>
            Explore how we&apos;ve partnered with industry-leading brands to transform
            challenges into opportunities. From data-driven insights to
            production-grade AI pipelines, we stand by our results.
          </p>
          <div>
            {/* 'Learn More' button linking to your /services page */}
          <a href="/case-studies" className={styles.learnMoreButton}>
            Learn More
          </a>
          </div>
        </div>
      </section>

      {/* ====== CONTACT SECTION ====== */}
      <section id="contact" className={styles.contactSection}>
        <div className={styles.sectionContent}>
          <h3 className={styles.sectionTitle}>Ready to Start?</h3>
          <p className={styles.sectionText}>
            Get in touch and discover how BiloTech AI can revolutionize your
            business processes with next-gen artificial intelligence solutions.
          </p>
          <a href="mailto:contact@bilotechai.com" className={styles.contactButton}>
            Get In Touch
          </a>
        </div>
      </section>

      {/* ====== OPTIONAL QUOTE SECTION ====== */}
      <section id="quote" className={styles.quoteSection}>
        <div className={styles.sectionContent}>
          <h3 className={styles.sectionTitle}>Get a Quote</h3>
          <p className={styles.sectionText}>
            Ready to transform your business with AI? Let us tailor a solution to your needs.
            Email us at <strong>info@bilotechnologies.com</strong> or fill out our 
            quote request form for a custom plan.
          </p>
          <a href="/quote" className={styles.learnMoreButton}>
               Learn More
             </a>
        </div>
      </section>
    </div>
  );
}


// "use client";

// import Image from "next/image";
// import { useState, useEffect } from "react";
// import Link from "next/link";
// import styles from "../styles/Home.module.css";

// export default function Home() {
//   const [scrolled, setScrolled] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 0);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   const toggleMenu = () => {
//     setMenuOpen((prev) => !prev);
//   };

//   return (
//     <div className={styles.container}>
//       {/* ====== HEADER ====== */}
//       <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
//         <nav className={styles.navbar}>
//           {/* Logo */}
//           <div className={styles.logoArea}>
//             <Image
//               src="/logo.png"
//               alt="BiloTech AI Logo"
//               width={150}
//               height={45}
//               priority
//               className={styles.logo}
//             />
//           </div>

//           {/* Hamburger Button (visible on tablet/mobile) */}
//           <button
//             className={styles.hamburger}
//             onClick={toggleMenu}
//             aria-label="Toggle navigation"
//             aria-expanded={menuOpen}
//           >
//             <span className={styles.bar}></span>
//             <span className={styles.bar}></span>
//             <span className={styles.bar}></span>
//           </button>

//           {/* Nav Links */}
//           <ul
//             className={`${styles.navLinks} ${
//               menuOpen ? styles.navActive : ""
//             }`}
//           >
//             <li>
//               <a href="/home" onClick={() => setMenuOpen(false)}>
//                 Home
//               </a>
//             </li>
//             <li>
//             <Link href="/about" onClick={() => setMenuOpen(false)}>
//               About
//             </Link>
//             </li>
//             <li>
//               <a href="/services" onClick={() => setMenuOpen(false)}>
//                 Services
//               </a>
//             </li>
//             <li>
//               <a href="/case-studies" onClick={() => setMenuOpen(false)}>
//                 Case Studies
//               </a>
//             </li>
//             <li>
//               <a href="/contact" onClick={() => setMenuOpen(false)}>
//                 Contact
//               </a>
//             </li>
//             <li>
//               <a href="/quote" onClick={() => setMenuOpen(false)}>
//                 Get a Quote
//               </a>
//             </li>
//           </ul>
//         </nav>
//       </header>

//       {/* ====== HERO SECTION with VIDEO BACKGROUND ====== */}
//       <section id="home" className={styles.hero}>
//         <video
//           autoPlay
//           muted
//           loop
//           playsInline
//           className={styles.heroVideo}
//           poster="/hero-fallback.jpg"
//         >
//           <source src="/hero-bg.mp4" type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>
//         <div className={styles.heroOverlay}></div>
//         <div className={styles.heroContent}>
//           <h1 className={styles.heroTitle}>
//             We Design Better AI Solutions.{" "}
//             <span className={styles.animatePeriod}>Period.</span>
//           </h1>
//           <h2 className={styles.heroSubTitle}>
//             We innovate. We iterate. We deliver.
//             <br />
//             We are the next paradigm in artificial intelligence.
//           </h2>
//           <a href="/quote" className={styles.ctaButton}>
//             Get a Quote
//           </a>
//         </div>
//       </section>

//       {/* ====== ABOUT SECTION with AI Background ====== */}
//       <section id="about" className={styles.aboutSection}>
//         <div className={styles.aboutOverlay}></div>
//         <div className={styles.aboutContent}>
//           <h3 className={styles.sectionTitle}>Our Vision</h3>
//           <p className={styles.sectionText}>
//             BiloTech AI is committed to building robust and scalable AI solutions
//             that empower businesses. Our approach is grounded in cutting-edge
//             research, innovative thinking, and a dedication to excellence.
//           </p>
//           <Link href="/about" className={styles.learnMoreButton}>
//             Learn More
//           </Link>
//         </div>
//       </section>

//       {/* ====== SERVICES SECTION ====== */}
// <section id="services" className={styles.servicesSection}>
//   <div className={styles.sectionContent}>
//     <h3 className={styles.sectionTitle}>What We Are Good At</h3>
//     <p className={styles.sectionText}>
//       From predictive analytics to machine learning automation, our diverse
//       range of services helps you gain a competitive edge, leveraging the
//       power of AI for tangible business outcomes.
//     </p>

//           {/* New Carousel Container */}
//           <div className={styles.servicesCarousel}>
//             <div className={styles.slidingTrack}>
//               <div className={styles.serviceCard}>Predictive Analytics</div>
//               <div className={styles.serviceCard}>Machine Learning Automation</div>
//               <div className={styles.serviceCard}>NLP & Chatbots</div>
//               <div className={styles.serviceCard}>Computer Vision</div>
//               <div className={styles.serviceCard}>Recommendation Systems</div>
//               <div className={styles.serviceCard}>AI Consultation & Strategy</div>
//               <div className={styles.serviceCard}>Edge AI Solutions</div>
//               <div className={styles.serviceCard}>AI-driven Data Visualization</div>
//               <div className={styles.serviceCard}>Anomaly Detection</div>
//               <div className={styles.serviceCard}>Robotic Process Automation</div>
//             </div>
//           </div>

//           {/* Learn More Button to Future Services Page */}
//           <Link href="/services" className={styles.learnMoreButton}>
//             Learn More
//           </Link>
//         </div>
//       </section>


//       {/* ====== CASE STUDIES SECTION ====== */}
//       <section id="caseStudies" className={styles.caseStudiesSection}>
//         <div className={styles.sectionContent}>
//           <h3 className={styles.sectionTitle}>Case Studies</h3>
//           <p className={styles.sectionText}>
//             Explore how we've partnered with industry-leading brands to transform
//             challenges into opportunities. From data-driven insights to
//             production-grade AI pipelines, we stand by our results.
//           </p>

//           {/* Learn More Button to Future Services Page */}
//           <Link href="/case-studies" className={styles.learnMoreButton}>
//             Learn More
//           </Link>
//         </div>
        
//       </section>

//       {/* ====== CONTACT SECTION ====== */}
//       <section id="contact" className={styles.contactSection}>
//         <div className={styles.sectionContent}>
//           <h3 className={styles.sectionTitle}>Ready to Start?</h3>
//           <p className={styles.sectionText}>
//             Get in touch and discover how BiloTech AI can revolutionize your
//             business processes with next-gen artificial intelligence solutions.
//           </p>
//           <a href="mailto:contact@bilotechai.com" className={styles.contactButton}>
//             Get In Touch
//           </a>
//         </div>
//       </section>

//     </div>
//   );
// }

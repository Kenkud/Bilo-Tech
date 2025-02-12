"use client";

//import homeStyles from "../../styles/Home.module.css";
import aboutStyles from "../../styles/About.module.css";

export default function AboutPage() {
  return (
    <div>
      {/* ====== ABOUT HERO SECTION ====== */}
      <section className={aboutStyles.hero}>
        <h1 className={aboutStyles.title}>About BiloTech AI</h1>
      </section>

      {/* ====== ABOUT CONTENT ====== */}
      <section className={aboutStyles.contentSection}>
        <div className={aboutStyles.contentWrapper}>
          <h2 className={aboutStyles.heading}>Our Mission</h2>
          <p className={aboutStyles.paragraph}>
            At BiloTech AI, our mission is to help businesses unlock 
            the full potential of Artificial Intelligence. Our team 
            of experts specializes in leveraging AI-driven insights 
            to improve operations, enhance customer experiences, and 
            create data-driven solutions.
          </p>

          <h2 className={aboutStyles.heading}>Our Story</h2>
          <p className={aboutStyles.paragraph}>
            Founded in 2025, BiloTech AI began as a small group of 
            passionate data scientists and engineers determined to 
            revolutionize the AI industry. We’ve grown into a global 
            team committed to pushing the boundaries of machine 
            learning, automation, and analytics.
          </p>

          <h2 className={aboutStyles.heading}>Our Approach</h2>
          <p className={aboutStyles.paragraph}>
            We believe in continuous innovation, collaboration, and 
            ethical AI practices. Our solutions are designed with 
            scalability, performance, and security in mind, ensuring 
            every project meets the highest standards of excellence.
          </p>
        </div>
      </section>
    </div>
  );
}

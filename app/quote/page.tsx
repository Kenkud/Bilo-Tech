"use client";

import homeStyles from "../../styles/Home.module.css";

export default function QuotePage() {
  return (
    <div className={homeStyles.container}>
      {/* ====== HERO SECTION ====== */}
      <section className={homeStyles.hero}>
        <div className={homeStyles.heroOverlay}></div>
        <div className={homeStyles.heroContent}>
          <h1 className={homeStyles.heroTitle}>Get a Quote</h1>
          <h2 className={homeStyles.heroSubTitle}>
            Let us tailor an AI solution that meets your unique needs.
          </h2>
        </div>
      </section>

      {/* ====== QUOTE CONTENT ====== */}
      <section className={homeStyles.aboutSection}>
        <div className={homeStyles.aboutOverlay}></div>
        <div className={homeStyles.aboutContent}>
          <h3 className={homeStyles.sectionTitle}>Ready to Begin?</h3>
          <p className={homeStyles.sectionText}>
            We’ll work with you to understand your business challenges, 
            goals, and data infrastructure to design a custom AI solution 
            that fits your budget and timeline.
          </p>

          <p className={homeStyles.sectionText}>
            <strong>Email:</strong>{" "}
            <a href="mailto:info@bilotechnologies.com">
              info@bilotechnologies.com
            </a>
          </p>

          <p className={homeStyles.sectionText}>
            Drop us an email with your project details, and our team 
            will prepare a comprehensive quote and implementation plan 
            to help you make an informed decision.
          </p>
        </div>
      </section>
    </div>
  );
}

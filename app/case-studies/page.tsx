"use client";

import homeStyles from "../../styles/Home.module.css";

export default function CaseStudiesPage() {
  return (
    <div className={homeStyles.container}>
      {/* ====== HERO SECTION ====== */}
      <section className={homeStyles.hero}>
        <div className={homeStyles.heroOverlay}></div>
        <div className={homeStyles.heroContent}>
          <h1 className={homeStyles.heroTitle}>Case Studies</h1>
          <h2 className={homeStyles.heroSubTitle}>
            Explore how we’ve driven real-world success 
            through AI innovations.
          </h2>
        </div>
      </section>

      {/* ====== MAIN CONTENT ====== */}
      <section className={homeStyles.aboutSection}>
        <div className={homeStyles.aboutOverlay}></div>
        <div className={homeStyles.aboutContent}>
          <h3 className={homeStyles.sectionTitle}>BiloTech AI Success Stories</h3>
          <p className={homeStyles.sectionText}>
            At BiloTech AI, we pride ourselves on delivering tangible 
            results that transform businesses. Below are a few examples 
            of how we’ve partnered with clients to modernize 
            operations, enhance customer experiences, and spark 
            data-driven innovation.
          </p>
          <ul className={homeStyles.sectionText} style={{ textAlign: "left" }}>
            <li>
              <strong>Retail Chain Optimization:</strong> Implemented 
              predictive analytics for inventory management, increasing 
              product availability by 30%.
            </li>
            <li>
              <strong>Chatbot & NLP Solutions:</strong> Streamlined 
              customer support for a telecom giant, reducing handling 
              times by 45%.
            </li>
            <li>
              <strong>Computer Vision for Manufacturing:</strong> 
              Automated quality checks, cutting defect rates by 25%.
            </li>
            <li>
              <strong>Financial Fraud Detection:</strong> Utilized 
              anomaly detection to save over $1 million in potential 
              fraud losses.
            </li>
          </ul>
          <p className={homeStyles.sectionText}>
            Want to learn more about how we can replicate these 
            successes for your business? Reach out today at 
            <strong> info@bilotechnologies.com</strong>.
          </p>
        </div>
      </section>
    </div>
  );
}

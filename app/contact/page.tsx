"use client";

import homeStyles from "../../styles/Home.module.css";

export default function ContactPage() {
  return (
    <div className={homeStyles.container}>
      {/* ====== HERO SECTION ====== */}
      <section className={homeStyles.hero}>
        <div className={homeStyles.heroOverlay}></div>
        <div className={homeStyles.heroContent}>
          <h1 className={homeStyles.heroTitle}>Contact Us</h1>
          <h2 className={homeStyles.heroSubTitle}>
            Let&apos;s discuss your AI aspirations and challenges.
          </h2>
        </div>
      </section>

      {/* ====== CONTACT CONTENT ====== */}
      <section className={homeStyles.aboutSection}>
        <div className={homeStyles.aboutOverlay}></div>
        <div className={homeStyles.aboutContent}>
          <h3 className={homeStyles.sectionTitle}>We&apos;d Love to Hear from You</h3>
          <p className={homeStyles.sectionText}>
            Whether you&apos;re curious about our services, exploring partnership 
            opportunities, or looking for support, feel free to reach out. Our 
            AI experts are here to help you transform your business with 
            cutting-edge technology and data-driven solutions.
          </p>

          <p className={homeStyles.sectionText}>
            <strong>Email:</strong> 
            <a href="mailto:info@bilotechnologies.com" style={{ marginLeft: "0.5rem" }}>
              info@bilotechnologies.com
            </a>
          </p>

          <p className={homeStyles.sectionText}>
            We typically respond within one business day. Let&apos;s build the 
            future of AI together!
          </p>
        </div>
      </section>
    </div>
  );
}

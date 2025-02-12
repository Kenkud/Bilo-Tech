"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import homeStyles from "../styles/Home.module.css"; // Adjust path if needed

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [muted, setMuted] = useState(true); // starts muted
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    // Sticky header logic
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // Attempt to play audio (muted = true ensures autoplay is allowed in modern browsers)
    if (audioRef.current) {
      audioRef.current.muted = true;
      //audioRef.current.volume = 0.05; // Volume set; won't matter while muted=true
      audioRef.current
        .play()
        .catch((err) => {
          console.log("Audio autoplay blocked by browser until user interacts:", err);
        });
    }
  }, []);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  // Toggle muted state on button click
  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !audioRef.current.muted;
      setMuted(audioRef.current.muted);
    }
  };

  return (
    <html lang="en">
      <body>
        {/* ====== SITE-WIDE STICKY HEADER ====== */}
        <header
          className={`${homeStyles.header} ${scrolled ? homeStyles.scrolled : ""}`}
        >
          <nav className={homeStyles.navbar}>
            {/* Logo */}
            <div className={homeStyles.logoArea}>
              <Link href="/">
                <Image
                  src="/logo.png"
                  alt="BiloTech AI Logo"
                  width={150}
                  height={45}
                  priority
                  style={{ cursor: "pointer" }}
                />
              </Link>
            </div>

            {/* Hamburger Button (mobile) */}
            <button
              className={homeStyles.hamburger}
              onClick={toggleMenu}
              aria-label="Toggle navigation"
              aria-expanded={menuOpen}
            >
              <span className={homeStyles.bar}></span>
              <span className={homeStyles.bar}></span>
              <span className={homeStyles.bar}></span>
            </button>

            {/* Nav Links */}
            <ul
              className={`${homeStyles.navLinks} ${
                menuOpen ? homeStyles.navActive : ""
              }`}
            >
              <li>
                <Link href="/" onClick={() => setMenuOpen(false)}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" onClick={() => setMenuOpen(false)}>
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" onClick={() => setMenuOpen(false)}>
                  Services
                </Link>
              </li>
              <li>
                <Link href="/case-studies" onClick={() => setMenuOpen(false)}>
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/contact" onClick={() => setMenuOpen(false)}>
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/quote" onClick={() => setMenuOpen(false)}>
                  Get a Quote
                </Link>
              </li>
            </ul>
          </nav>
        </header>

        {/* ====== MAIN CONTENT ====== */}
        <main>{children}</main>

        {/* ====== SITE-WIDE FOOTER ====== */}
        <footer className={homeStyles.footer}>
          <div className={homeStyles.footerNav}>
            {/* Legal Menu */}
            <div className={homeStyles.legalMenu}>
              <h4>Legal</h4>
              <ul>
                <li>
                  <Link href="/terms-of-use">Terms of Use</Link>
                </li>
                <li>
                  <Link href="/privacy-policy">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="/refund-policy">Refund Policy</Link>
                </li>
                <li>
                  <Link href="/disclaimer">Disclaimer</Link>
                </li>
              </ul>
            </div>

            {/* General Menu */}
            <div className={homeStyles.generalMenu}>
              <h4>General</h4>
              <ul>
                <li>
                  <Link href="/about">About</Link>
                </li>
                <li>
                  <Link href="/services">Services</Link>
                </li>
                <li>
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
            </div>
          </div>

          <p className={homeStyles.footerText}>
            &copy; {new Date().getFullYear()} BiloTech AI, Inc. All Rights Reserved.
          </p>
        </footer>

        {/* ====== BACKGROUND AUDIO (STARTS MUTED) & TOGGLE BUTTON ====== */}
        <audio
          ref={audioRef}
          src="/background-music.mp3" 
          loop
        />

        {/* Mute/Unmute Button */}
        <button
          style={{
            position: "fixed",
            bottom: "1rem",
            right: "1rem",
            padding: "0.6rem 1rem",
            borderRadius: "4px",
            backgroundColor: "#fff",
            color: "#000",
            fontWeight: "700",
            cursor: "pointer",
            border: "none",
            zIndex: "99999"
          }}
          onClick={toggleMute}
        >
          {muted ? "Unmute" : "Mute"}
        </button>
      </body>
    </html>
  );
}

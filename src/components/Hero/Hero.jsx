import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">We are Digital Agency.</h1>
          <p className="hero-description">
            Providing innovative solutions for your business. Let us help you grow with our expertise and creative strategies.
          </p>
          <button className="hero-btn">Get Started</button>
        </div>
        <div className="hero-image">
          <img
            src="image/digital.webp"
            alt="Hero Section"
            className="image"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

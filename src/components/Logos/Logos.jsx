import React from "react";
import "./logos.css";

const Logos = () => {
  const logos = [
    { src: "./image/1.webp", alt: "Brand 1" },
    { src: "./image/2.png", alt: "Brand 2" },
    { src: "./image/6.png", alt: "Brand 3" },
    { src: "./image/4.webp", alt: "Brand 4" },
    { src: "./image/6.png", alt: "Brand 5" },
    { src: "./image/3.jpg", alt: "Brand 6" },
  ];

  return (
    <section className="logos-section">
      <div className="logos-container">
        {logos.map((logo, index) => (
          <img key={index} src={logo.src} alt={logo.alt} className="logo-image" />
        ))}
      </div>
    </section>
  );
};

export default Logos;

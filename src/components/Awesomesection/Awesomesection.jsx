import React from "react";
import "./Awesomesection.css";
import { FaCode, FaPalette, FaSearch, FaChartLine } from "react-icons/fa";

const Awesomesection = () => {
  const services = [
    { icon: <FaCode />, title: "Web Development", description: "Modern web solutions for your business." },
    { icon: <FaPalette />, title: "Graphic Design", description: "Creative designs to enhance your brand." },
    { icon: <FaSearch />, title: "SEO Optimization", description: "Boost your online presence effectively." },
    { icon: <FaChartLine />, title: "Marketing Strategy", description: "Grow your audience with proven strategies." },
  ];

  return (
    <section className="awesome-section">
      <div className="container">
        <h2 className="section-title">Our Awesome Services</h2>
        <p className="section-description">
          Explore the wide range of services we offer to help you achieve your goals.
        </p>
        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awesomesection;

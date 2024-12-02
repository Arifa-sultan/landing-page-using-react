import React from "react";
import "./study.css";

const Study = () => {
  return (
    <section className="study-section">
      <div className="study-container">
        <div className="study-text">
          <h2>A Study of Creativity</h2>
          <p>
            Dive into the world of creativity and innovation. Discover how
            remarkable ideas are transformed into reality through our unique
            approach and dedication.
          </p>
          <button className="study-btn">Learn More</button>
        </div>
        <div className="study-image">
          <img
            src="image/digital.webp"
            alt="Creativity"
          />
        </div>
      </div>
    </section>
  );
};

export default Study;

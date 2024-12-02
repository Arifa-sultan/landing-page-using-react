import React from "react";
import "./CreativitySection.css";

const CreativitySection = () => {
  return (
    <section className="creativity-section">
      <div className="container">
        <div className="creativity-content">
          <div className="text-content">
            <h2 className="section-title">A Study of Creativity</h2>
            <p className="section-description">
              Explore the impact of creativity through innovative and visually
              appealing designs.
            </p>
            <button className="explore-button">Explore Now</button>
          </div>
          <div className="image-grid">
            <div className="image-top-row">
              <div className="big-image">
                <img
                  src="image/cr 1.avif"
                  alt="Big Image 1"
                />
              </div>
              <div className="big-image">
                <img
                  src="image/cr 2.png"
                  alt="Big Image 2"
                />
              </div>
            </div>
            <div className="image-bottom-row">
              <div className="small-image">
                <img
                  src="image/cr 4.jpg"
                  alt="Small Image 1"
                />
              </div>
              <div className="small-image">
                <img
                  src="image/cr 3.jpg"
                  alt="Small Image 2"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreativitySection;

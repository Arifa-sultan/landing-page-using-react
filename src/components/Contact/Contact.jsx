import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="contact-container">
        <h2 className="contact-heading">Let's Get in Touch</h2>
        <div className="contact-content">
          <form className="contact-form">
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="form-input"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="form-input"
                required
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                className="form-textarea"
                rows="5"
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </form>
          <div className="contact-info">
            <p className="info-text">
              We’d love to hear from you! Whether you have a question, want to
              start a project, or simply say hi, feel free to reach out.
            </p>
            <div className="contact-images">
              <img
                src="image/digital.webp"
                alt="Contact Image 1"
                className="contact-image"
              />
              <img
                src="image/cr 4.jpg"
                alt="Contact Image 2"
                className="contact-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

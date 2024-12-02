import React from "react";
import "./testimonial.css";

const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      feedback:
        "This team exceeded my expectations. Their attention to detail and creative solutions were top-notch!",
      designation: "CEO, TechCorp",
    },
    {
      id: 2,
      name: "Jane Smith",
      feedback:
        "Working with this company was a pleasure. The delivery was on time and the quality was amazing.",
      designation: "Marketing Manager, Innovate Inc.",
    },
    {
      id: 3,
      name: "Robert Brown",
      feedback:
        "Highly recommended! The team brought my vision to life with their outstanding skills.",
      designation: "Freelance Designer",
    },
  ];

  return (
    <section className="testimonial-section">
      <div className="testimonial-container">
        <h2 className="testimonial-heading">What They Say?</h2>
        <div className="testimonial-grid">
          {testimonials.map((testimonial) => (
            <div className="testimonial-card" key={testimonial.id}>
              <p className="testimonial-feedback">"{testimonial.feedback}"</p>
              <h3 className="testimonial-name">{testimonial.name}</h3>
              <p className="testimonial-designation">{testimonial.designation}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;

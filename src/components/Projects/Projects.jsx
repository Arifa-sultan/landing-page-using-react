import React from "react";
import "./Projects.css";

const projectsData = [
  { id: 1, image: "image/pr1.webp", title: "Project One" },
  { id: 2, image: "image/pr2.webp", title: "Project Two" },
  { id: 3, image: "image/pr1.webp", title: "Project Three" },
  { id: 4, image: "image/pr3.avif", title: "Project Four" },
  { id: 5, image: "image/pr1.webp", title: "Project Five" },
  { id: 6, image: "image/pr3.avif", title: "Project Six" },
];

const Projects = () => {
  return (
    <section className="projects-section">
      <div className="container">
        <h2 className="section-title">Awesome Projects</h2>
        <p className="section-description">
          Explore a diverse range of creative and innovative projects.
        </p>
        <div className="projects-grid">
          {projectsData.map((project) => (
            <div className="project-card" key={project.id}>
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />
              <h3 className="project-title">{project.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

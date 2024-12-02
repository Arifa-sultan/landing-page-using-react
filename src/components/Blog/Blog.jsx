import React from "react";
import "./blog.css";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of Web Design",
      description: "Explore the latest trends in web design and development.",
      link: "#",
    },
    {
      id: 2,
      title: "Mastering React for Beginners",
      description: "Step into the world of React with this beginner's guide.",
      link: "#",
    },
    {
      id: 3,
      title: "CSS Tricks for Modern Layouts",
      description: "Learn advanced CSS techniques to improve your layouts.",
      link: "#",
    },
  ];

  return (
    <section className="blog-section">
      <div className="blog-container">
        <h2 className="blog-heading">Our Blog Stories</h2>
        <div className="blog-grid">
          {blogPosts.map((post) => (
            <div className="blog-card" key={post.id}>
              <div className="blog-content">
                <h3 className="blog-title">{post.title}</h3>
                <p className="blog-description">{post.description}</p>
                <a href={post.link} className="blog-link">
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;

import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="navbar-logo">Fanatic</div>

      {/* Links */}
      <div className="navbar-links">
        <a href="#home">Home</a>
        <a href="#services">Services</a>
        <a href="#projects">Projects</a>
        <a href="#blog">Blog</a>
        <a href="#pricing">Pricing</a>
        <a href="#get-started" className="navbar-button">Get Started</a>
      </div>
    </nav>
  );
};

export default Navbar;

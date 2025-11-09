// src/components/navbar.jsx (Updated with React Router)

import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link
import './navbar.css'; // Assuming you have a CSS file for styling

// Placeholder for your actual logo image
//import CollegeLogo from '../assets/college-logo.png'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  // Array of navigation links
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Academics", path: "/academics" },
    { name: "Admissions", path: "/admissions" },
    // Facilities is currently on the homepage, but you can create a page for it later.
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="navbar-container">
      
      {/* Brand/Logo - Links to Home */}
      <Link to="/" className="navbar-brand">
        {/* Replace this with your actual logo component/image */}
        {/* Assuming you have a light-colored logo since the navbar background is dark blue */}
       {/* <img src={CollegeLogo} alt="D Y Patil College Logo" className="logo-image" /> */}
        <span className="college-name">D.Y. Patil College of Engineering & Technology, Kolhapur</span>
      </Link>

      {/* Main Navigation Links */}
      <div className={`nav-links ${isOpen ? 'open' : ''}`}>
        {navLinks.map((link) => (
          <Link 
            key={link.name} 
            to={link.path} 
            className="nav-item"
            onClick={() => setIsOpen(false)} // Close menu on mobile click
          >
            {link.name}
          </Link>
        ))}
        
        {/* Prominent CTA Button */}
        <a href="https://coek.dypgroup.edu.in/admission/apply-online/" target="_blank" rel="noopener noreferrer" className="nav-cta-button">
          Apply Now
        </a>
      </div>

      {/* Hamburger Menu Icon (For mobile view) */}
      <button className="hamburger-menu" onClick={() => setIsOpen(!isOpen)}>
        &#9776; 
      </button>

    </nav>
  );
};

export default Navbar;
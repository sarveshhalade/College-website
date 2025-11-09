// src/components/facilities.jsx

import React from 'react';
import './facilities.css'; // Create this file

const facilitiesData = [
  { 
    title: "Modern Labs", 
    description: "Equipped with the latest technology and specialized instruments for practical, hands-on learning across all disciplines.",
    icon: "🔬" // Using emojis as placeholder icons, replace with actual images/SVGs
  },
  { 
    title: "Central Library", 
    description: "A vast collection of over 80,000 books, international journals, and digital e-resources for uninterrupted research and study.",
    icon: "📚" 
  },
  { 
    title: "Hostel & Housing", 
    description: "Safe, comfortable, and well-maintained residential facilities for both male and female students, fostering community living.",
    icon: "🏠" 
  },
  { 
    title: "Sports Complex", 
    description: "Dedicated facilities for indoor and outdoor games including courts and a gymnasium for holistic student development.",
    icon: "⚽" 
  },
  { 
    title: "Auditorium", 
    description: "A state-of-the-art venue with high-quality acoustics and seating for major events, seminars, and cultural programs.",
    icon: "🎤" 
  },
  { 
    title: "Transport & Canteen", 
    description: "Reliable bus service covering major routes and a hygienic canteen providing quality meals and refreshments.",
    icon: "🚌" 
  },
];

const Facilities = () => {
  return (
    <section className="facilities-section">
      <div className="container">
        <h2 className="section-title">Campus Life & Facilities</h2>
        <p className="section-subtitle">Investing in infrastructure to support an enriching academic and social environment.</p>

        <div className="facilities-grid">
          {facilitiesData.map((facility, index) => (
            <div key={index} className="facility-card">
              <span className="facility-icon">{facility.icon}</span>
              <h3>{facility.title}</h3>
              <p>{facility.description}</p>
            </div>
          ))}
        </div>
        
        {/* CTA to view more detailed infrastructure */}
        <div className="facilities-cta">
            <a href="https://coek.dypgroup.edu.in/infrastructure/" target="_blank" rel="noopener noreferrer" className="read-more-button">
                Explore Detailed Infrastructure &rarr;
            </a>
        </div>
      </div>
    </section>
  );
};

export default Facilities;
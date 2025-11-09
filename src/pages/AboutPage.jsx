// src/pages/AboutPage.js (New File)

import React from 'react';
import './AboutPage.css'; // Create this CSS file

const AboutPage = () => {
  return (
    <section className="about-page-container">
      <h1 className="page-title">About D.Y. Patil College of Engineering & Technology</h1>

      {/* --- Section 1: History and Overview (Two-Column Layout) --- */}
      <div className="overview-section">
        <div className="overview-text">
          <h2>Our Legacy of Excellence</h2>
          <p>D.Y. Patil College of Engineering and Technology, Kolhapur, established in 1984, is a premier institute offering world-class technical education. We are driven by the philosophy of providing quality education that blends deep academic knowledge with practical industry exposure.</p>
          <p>The college is known for its **strong academic foundation**, **state-of-the-art infrastructure**, and a persistent emphasis on **innovation and research**. With a vast campus and a diverse student body, we create an environment conducive to holistic development.</p>
          
          <div className="stats-grid">
              <div className="stat-item"><strong>40+</strong><p>Years of Legacy</p></div>
              <div className="stat-item"><strong>15+</strong><p>Accredited Programs</p></div>
              <div className="stat-item"><strong>8,000+</strong><p>Alumni Worldwide</p></div>
          </div>
        </div>
        
        <div className="overview-image">
          {/* Use a high-quality image of the main college building or campus */}
          <img src="/path/to/college-history-photo.jpg" alt="College History Building" className="responsive-image" />
        </div>
      </div>
      
      {/* --- Section 2: Mission, Vision, Values --- */}
      <div className="vvm-section">
        <div className="vvm-card">
          <h3>Vision</h3>
          <p>To be a globally recognized institution fostering technical competence, entrepreneurship, and innovation for societal well-being.</p>
        </div>
        <div className="vvm-card">
          <h3>Mission</h3>
          <p>To nurture engineers who are not only technically skilled but also socially responsible citizens, contributing to the development of the nation through quality education and research.</p>
        </div>
        <div className="vvm-card">
          <h3>Core Values</h3>
          <ul>
            <li>Integrity and Ethics</li>
            <li>Excellence in Education</li>
            <li>Innovation and Research</li>
            <li>Social Responsibility</li>
          </ul>
        </div>
      </div>
      
    </section>
  );
};

export default AboutPage;
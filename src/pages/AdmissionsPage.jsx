// /src/pages/AdmissionsPage.js (New File)

import React from 'react';
import './AdmissionsPage.css'; // Assume you are using CSS for styling

const AdmissionsPage = () => {
  return (
    <section className="admissions-container">
      <h1 className="page-title">Admissions 2024-25</h1>
      <p className="subtitle">
        Your gateway to quality engineering education at D.Y. Patil College, Kolhapur.
      </p>

      {/* --- Section 1: Application Link CTA --- */}
      <div className="cta-banner">
          <h2>Ready to Join?</h2>
          <p>Click below to start your application process now.</p>
          <a href="https://coek.dypgroup.edu.in/admission/apply-online/" target="_blank" rel="noopener noreferrer" className="apply-button">
            Apply Online Now &rarr;
          </a>
      </div>

      {/* --- Section 2: Eligibility Card Layout (Inspired by official site structure) --- */}
      <div className="eligibility-cards-grid">
        <div className="info-card">
          <h3>Undergraduate Programs (B.Tech)</h3>
          <p>Eligibility: Must have passed 10+2 with Physics and Mathematics as compulsory subjects along with Chemistry/Biotechnology/Biology/Technical Vocational subject.</p>
          <p className="mode">Selection: Based on entrance exams (MHT-CET / JEE Main) and merit.</p>
        </div>
        <div className="info-card">
          <h3>Postgraduate Programs (M.Tech)</h3>
          <p>Eligibility: Bachelor's degree in relevant Engineering/Technology discipline (B.E./B.Tech) with a minimum required score.</p>
          <p className="mode">Selection: Based on GATE score or university entrance exams.</p>
        </div>
      </div>
      
      {/* --- Section 3: Key Dates (You would update this frequently) --- */}
      <div className="key-dates">
          <h2>Important Dates</h2>
          <ul>
              <li><span className="date-label">Application Start:</span> October 1, 2024</li>
              <li><span className="date-label">Application Deadline:</span> December 31, 2024</li>
              <li><span className="date-label">Entrance Exam (If Applicable):</span> January 2025</li>
          </ul>
      </div>

    </section>
  );
};

export default AdmissionsPage;
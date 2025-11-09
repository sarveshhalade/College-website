// /src/pages/AcademicsPage.js (New File)
import { Link } from 'react-router-dom';

import React from 'react';
import './AcademicsPage.css'; 

const AcademicsPage = () => {
  // Data for the main departments based on the official college structure
  const departments = [
    { name: "Computer Science & Engineering", focus: "AI & ML, Data Science", icon: "💻" },
    { name: "Electronics & Telecommunication", focus: "VLSI, Communication Systems", icon: "📡" },
    { name: "Mechanical Engineering", focus: "Design, Thermal, Production", icon: "⚙️" },
    { name: "Civil Engineering", focus: "Structural, Environmental", icon: "🏗️" },
    { name: "Chemical Engineering", focus: "Process Control, Optimization", icon: "🧪" },
    { name: "Architecture (B. Arch)", focus: "Sustainable Design, Urban Planning", icon: "📐" },
  ];

  return (
    <section className="academics-container">
      <h1 className="page-title">Academics & Programs</h1>
      <p className="subtitle">
        Explore our wide range of Undergraduate (B.Tech, B.Arch) and Postgraduate (M.Tech) programs, all affiliated with Shivaji University and accredited by NBA.
      </p>

      <div className="departments-grid">
        {departments.map((dept) => (
          <div key={dept.name} className="dept-card">
            <span className="dept-icon">{dept.icon}</span>
            <h3>{dept.name}</h3>
            <p className="dept-focus">{dept.focus}</p>
            {/* Link to a detailed department page (which you can build later) */}
            <Link to={`/academics/${dept.name.toLowerCase().replace(/\s+/g, '-')}`} className="dept-link">
              View Details &rarr;
            </Link>
          </div>
        ))}
      </div>

      <div className="syllabus-section">
          <h2>Academic Resources</h2>
          <p>Access the latest academic calendar, rules, and syllabi for all programs:</p>
          <div className="resource-links">
             <a href="https://coek.dypgroup.edu.in/academics/academic-calender/" target="_blank" rel="noopener noreferrer" className="resource-link">Academic Calendar</a>
             <a href="https://coek.dypgroup.edu.in/academics/syllabus/" target="_blank" rel="noopener noreferrer" className="resource-link">Latest Syllabus</a>
             <a href="https://coek.dypgroup.edu.in/academics/academic-rules-and-regulations/" target="_blank" rel="noopener noreferrer" className="resource-link">Academic Rules</a>
          </div>
      </div>
    </section>
  );
};

export default AcademicsPage;
// src/router.js (Corrected Structure - assuming this file is your main App component)

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Footer from './components/Footer';

// Page components you've created:
import HomePage from './pages/homepage'; // Contains Hero, About, Facilities, Gallery
import AboutPage from './pages/about'; // Or use the single About component for now
import AdmissionsPage from './pages/Admissions';
import AcademicsPage from './pages/academics';
//import ContactPage from './pages/ContactPage';

function App() {
  return (
    // <> is the React Fragment wrapper
    <>
      {/* 1. SHARED LAYOUT: Renders on EVERY page */}
      <Navbar /> 

      {/* 2. ROUTING LOGIC: Renders ONLY the component matching the URL path */}
      <main>
        <Routes>
          {/* Homepage (Path: /) */}
          <Route path="/" element={<HomePage />} /> 

          {/* Individual Pages (Path: /about, /admissions, etc.) */}
          {/* Note: If you have a separate AboutPage, use it here instead of HomePage. */}
          <Route path="/about" element={<AboutPage />} /> 
          <Route path="/academics" element={<AcademicsPage />} />
          <Route path="/admissions" element={<AdmissionsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          
          {/* Add a 404/Not Found Page here if you like */}
          {/* <Route path="*" element={<h1>404 Not Found</h1>} /> */}
        </Routes>
      </main>

      {/* 3. SHARED LAYOUT: Renders on EVERY page */}
      <Footer />
    </>
  );
}

export default App;
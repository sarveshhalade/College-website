import React from 'react';
// We only need Routes and Route here, as BrowserRouter is in index.js
import { Routes, Route } from 'react-router-dom';

// Global Layout Components
import Navbar from './components/navbar';
import Footer from './components/Footer';

// Page Components
import HomePage from './pages/homepage'; 
import AboutPage from './pages/AboutPage'; 
import AdmissionsPage from './pages/AdmissionsPage';
import AcademicsPage from './pages/AcademicsPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    // We use a React Fragment (<>) here, NOT <Router>, 
    // because <BrowserRouter> is already used in index.js.
    <>
      {/* Renders on EVERY page */}
      <Navbar /> 

      <main>
        <Routes>
          {/* Default Homepage: Renders the combined Hero, Facilities, Gallery sections */}
          <Route path="/" element={<HomePage />} /> 

          {/* Dedicated Full Pages */}
          <Route path="/about" element={<AboutPage />} /> 
          <Route path="/academics" element={<AcademicsPage />} />
          <Route path="/admissions" element={<AdmissionsPage />} />
          <Route path="/contact" element={<ContactPage />} /> 

          
          {/* Future Routes (e.g., for Departments or detailed Facilities) can go here */}
          
          {/* Fallback for invalid paths */}
          <Route path="*" element={
            <div style={{textAlign: 'center', padding: '100px'}}>
              <h1>404</h1>
              <p>Page Not Found</p>
            </div>
          } />
        </Routes>
      </main>

      {/* Renders on EVERY page */}
      <Footer />
    </>
  );
}

export default App;
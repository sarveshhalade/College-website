// /src/pages/HomePage.js

import React from 'react';
import Hero from '../components/hero';
import About from '../pages/AboutPage';
import Facilities from '../components/facilities';
import Gallery from '../components/Gallery';

const HomePage = () => {
  return (
    <>
      <Hero />
      <About />
      <Facilities />
      {/* Admissions is now a separate page, so we remove it here */}
      <Gallery />
    </>
  );
};

export default HomePage;
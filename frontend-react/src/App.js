import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './container/Home/Home'; 
import Portfolio from './container/Portfolio/Portfolio'; 
import WhoIam from './container/WhoIam/WhoIam';
import Pricing from './container/Pricing/Pricing';
import Contact from './container/Contact/Contact';
import Contactthankyou from './container/Contact/Contactthankyou';
import Testimonials from './container/Testimonials/Testimonials';
import Maternity from './container/Gallery/Maternity/Maternity';
import Newborn from './container/Gallery/Newborn/Newborn';
import CakeSmash from './container/Gallery/Cakesmash/Cakesmash';

import './App.scss';

const App = () => {
  console.log("App Component is Running");

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/whoiam" element={<WhoIam />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/contact-thank-you" element={<Contactthankyou />} />
          <Route path="/testimonial" element={<Testimonials />} />
          <Route path="/gallery/maternity" element={<Maternity />} />
          <Route path="/gallery/newborn" element={<Newborn />} />
          <Route path="/gallery/cakesmash" element={<CakeSmash />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Pricing from './components/Pricing';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1);
      if (hash === 'pricing') {
        setCurrentPage('pricing');
      } else {
        setCurrentPage('home');
      }
    };

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    
    // Check initial hash
    handleHashChange();

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  if (currentPage === 'pricing') {
    return (
      <div className="min-h-screen bg-[#f5f2ed]">
        <Header />
        <Pricing />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f5f2ed]">
      <Header />
      <Hero />
      <About />
      <Services />
      <Reviews />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
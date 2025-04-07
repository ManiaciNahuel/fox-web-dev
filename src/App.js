import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import './styles/main.scss';

function App() {
  return (
    <>
      <Navbar />
      <div className="scroll-container">
        <Hero />
        {/* <FoxPreview /> */}
        <About />
        <Services />
        <Contact />
      </div>
    </>
  );
}

export default App;

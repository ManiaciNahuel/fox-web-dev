import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Porfolio from './components/Porfolio';
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
        <Porfolio />
      </div>
    </>
  );
}

export default App;

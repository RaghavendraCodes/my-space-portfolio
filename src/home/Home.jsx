// src/Home.jsx
import React, { useState } from 'react';
import Hero from '../hero/Hero';
import Projects from '../projects/Projects';
import Blogs from '../blogs/Blogs';
import TerminalCard from '../terminal/TerminalCard';
import Footer from '../footer/Footer';

const Home = () => {
  const [gradientStyle, setGradientStyle] = useState({
    background: 'none',
    WebkitTextFillColor: '#ffffff',
  });

  const handleMouseMove = (e) => {
    const { clientX, clientY, currentTarget } = e;
    const { width, height, left, top } = currentTarget.getBoundingClientRect();
    const xPos = (clientX - left) / width;
    const yPos = (clientY - top) / height;

    setGradientStyle({
      backgroundImage: `radial-gradient(circle at ${xPos * 100}% ${yPos * 100}%, rgba(255, 255, 100, 0.9), #4b5563)`,
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    });
  };

  const handleMouseLeave = () => {
    setGradientStyle({
      background: 'none',
      WebkitTextFillColor: '#ffffff',
    });
  };

  return (
    <div>
      <div className="mt-6 mb-8">
        <Hero />
      </div>
      <div className="flex flex-col md:flex-row justify-around w-full">
        <Projects />
      </div>
      <div className="flex flex-col md:flex-col justify-around items-center w-full">
        <TerminalCard />
      </div>
      <div className="flex flex-col md:flex-row justify-around items-center w-full">
        <Blogs />
      </div>
      <div className="flex justify-center items-center w-full h-[30vh] md:h-[40vh]">
        <Footer />
      </div>
    </div>
  );
};

export default Home;

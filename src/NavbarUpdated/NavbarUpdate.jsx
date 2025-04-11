import React, {useState, useEffect} from 'react'
import Navbar from '@/navbar/Navbar';

const NavbarUpdate = () => {

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
    <div className="flex flex-col lg:flex-row justify-between items-center mb-4">
        <h1
            className="text-white font-bold text-lg md:text-xl cursor-pointer hover:text-blue-600 transition-all mb-6"
            style={gradientStyle}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            RAGHAVENDRA R
          </h1>
        <Navbar />
    </div>
  )
}

export default NavbarUpdate
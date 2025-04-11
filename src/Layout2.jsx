// src/Layout.jsx
import React from 'react';
import Navbar from './navbar/Navbar';
import MusicPlayer from './components/MusicPlayer';
import Layout from './Layout';

const Layout2 = ({ children }) => {
  return (
    <div className="min-h-screen flex justify-center overflow-x-hidden text-white">
        <Layout starCount={1500} starColor={[255, 255, 255]} speedFactor={0.05} backgroundColor="black" />
      <MusicPlayer />
      <div className="w-full max-w-[100vw] sm:w-[90vw] md:w-[80vw] lg:w-[65vw] min-h-screen rounded-md mt-4 p-4 md:p-8">
        <div className="flex flex-col lg:flex-row justify-between items-center mb-4">
          <h1 className="text-white font-bold text-lg md:text-xl cursor-pointer hover:text-blue-600 transition-all">
            RAGHAVENDRA R
          </h1>
          <Navbar />
        </div>
        {children}
      </div>
    </div>
  );
};

export default Layout2;

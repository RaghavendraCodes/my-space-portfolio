import React, { useState } from "react";
import MyImage from '../assets/raghu.jpg';
import { FaGithub, FaLinkedin, FaFileAlt, FaCode } from 'react-icons/fa';
import { SiLeetcode, } from 'react-icons/si'; // Import LeetCode icon
import './hero.css'

const Hero = () => {
    const [gradientStyle, setGradientStyle] = useState({
        background: 'none',
        WebkitTextFillColor: '#ffffff', // Start with white text
    });

    const handleMouseMove = (e) => {
        const { clientX, clientY, currentTarget } = e;
        const { width, height, left, top } = currentTarget.getBoundingClientRect();

        // Calculate percentage relative to the element's position
        const xPos = (clientX - left) / width;
        const yPos = (clientY - top) / height;

        // Apply radial gradient effect on hover
        setGradientStyle({
            backgroundImage: `radial-gradient(circle at ${xPos * 100}% ${yPos * 100}%, rgba(255, 255, 128, 0.7), #1f2937)`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent', // Make text transparent to show gradient
        });
    };

    const handleMouseLeave = () => {
        // Reset to white text
        setGradientStyle({
            background: 'none',
            WebkitTextFillColor: '#ffffff', // Set text back to white
        });
    };

    return (
        <>
            {/* outer div */}
            <div className="flex flex-col w-full"> {/* Ensuring full width for responsiveness */}
                {/* inner div */}
                <div className="mt-10 flex flex-col lg:flex-row justify-evenly items-center" style={{ fontFamily: 'Helvetica Neue, sans-serif', padding: '20px', borderRadius: '10px' }}>
                    {/* inner div for image - left column */}
                    <div className='rounded-full border-4 border-light-blue-300 overflow-hidden shadow-lg transition-transform transform mb-10'>
                        <img src={MyImage} alt="Raghavendra" className="h-56 w-56 object-cover transition-opacity duration-500 hover:opacity-80" />
                    </div>
                    {/* inner div for texts - right column */}
                    <div className="lg:-mt-7 flex flex-col justify-center text-center md:text-left"> {/* Center text for small screens */}
                        <h1
                            className="text-[1.8em] font-bold animate-fadeIn transition-all duration-200 cursor-pointer gradient-hover gradient-text "
                            style={gradientStyle}
                            onMouseMove={handleMouseMove}
                            onMouseLeave={handleMouseLeave}
                        >
                            Hey, I'm Raghavendra R.
                        </h1>
                        <p className="text-xl text-gray-400 font-semibold mt-5 fadeIn animate-fadeIn desc-text">
                            A pre-final year student and an aspiring <br /> developer
                            with a passion for coding <br /> and creativity.
                        </p>
                        <div className="flex flex-row space-x-3 mt-6 justify-center md:justify-start animate-icons"> {/* Center icons for small screens */}
                            <div className="flex items-center text-gray-500 font-light rounded transition cursor-pointer hover:text-gray-400">
                                <FaGithub className="mr-2 text-white" />
                                <a href="https://github.com/RaghavendraCodes/"><span>GitHub</span></a>
                            </div>
                            <div className="flex items-center text-gray-500 font-light rounded transition cursor-pointer hover:text-gray-400">
                                <FaLinkedin className="mr-2 text-blue-500" />
                                <a href="https://www.linkedin.com/in/raghavendra-r-363701202/"><span>LinkedIn</span></a>
                            </div>
                            <div className="flex items-center text-gray-500 font-light rounded transition cursor-pointer hover:text-gray-400">
                                <FaCode className="mr-2 text-yellow-500" />
                                <a href="https://codolio.com/profile/RaghavendraR"><span>Codolio</span></a>
                            </div>
                            <div className="flex items-center text-gray-500 font-light rounded transition cursor-pointer hover:text-gray-400">
                            <a 
                                href="/public/Resume-RaghavendraR (5).pdf" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="flex items-center text-gray-500 font-light rounded transition cursor-pointer hover:text-gray-400"
                                >
                                <FaFileAlt className="mr-2 text-green-500" />
                                <span>Resume</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes fadeIn {
                    0% { opacity: 0; transform: translateY(20px); }
                    100% { opacity: 1; transform: translateY(0); }
                }

                .animate-fadeIn {
                    animation: fadeIn 1.5s ease forwards;
                }

                .animate-icons {
                    animation: slideIn 2s ease forwards;
                }

                .gradient-hover {
                    transition: background 0.4s, color 0.4s;
                }
            `}</style>
        </>
    );
}

export default Hero;

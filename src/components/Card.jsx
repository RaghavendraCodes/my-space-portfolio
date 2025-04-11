import React, { useState } from "react";
import "../app.css"; // Assuming the custom CSS is here
import './card.css'
import '../footer/footer.css'
import Collabify from '../assets/Screenshot 2024-10-22 004104.png'
import { FaArrowRight, FaGithub, FaUserSecret } from "react-icons/fa"; // Importing the icons from react-icons

const Card = () => {
  const [hovered, setHovered] = useState(null);

  const handleMouseEnter = (index) => {
    setHovered(index);
  };

  const handleMouseLeave = () => {
    setHovered(null);
  };

  const [gradientStyle, setGradientStyle] = useState({
    background: 'linear-gradient(145deg, #111827, #1f2937)',
  });

  const handleMouseMove = (e) => {
    const { clientX, clientY, currentTarget } = e;
    const { width, height, left, top } = currentTarget.getBoundingClientRect();
    
    // Calculate percentage relative to the element's position
    const xPos = (clientX - left) / width;
    const yPos = (clientY - top) / height;

    // Create a gradient effect based on mouse position
    setGradientStyle({
      background: `radial-gradient(circle at ${xPos * 100}% ${yPos * 100}%, rgba(255, 255, 128, 0.2), #1f2937)`,
    });
  };

  const cardData = [
    { 
      title: "Collabify", 
      tagline: "Collaborate and Create.", 
      desc: "Collabify is a Flutter-based mobile application that empowers BMSCE students to collaborate on projects which they are interested in.", 
      techstack: "Flutter, Firebase, Dart, Tailwind",
      gotolink: "https://github.com/gajanana07/BMS-Collabify/blob/master/README.md", 
      github: "https://github.com/gajanana07/BMS-Collabify/", 
      image: Collabify,
    },
    {
      title: "Balloon Mail",
      tagline: "Instant File Sharing. No Logins. Just a Popcode.",
      desc: "Balloon Mail is a secure, login-free file-sharing platform that lets users upload files and share them using unique popcodes. Files are automatically deleted once the sender chooses to remove them.",
      techstack: "React, Node.js, Express, AppWrite, Tailwind",
      gotolink: "https://balloon-mail.netlify.app", 
      github: "https://github.com/RaghavendraCodes/Balloon-mail", 
      image: Collabify,
    },
    {
      title: "ReflexCache",
      tagline: "Fast, Programmable In-Memory Cache.",
      desc: "ReflexCache is a key-value store built in CORE Java with logical separation using cachebases and custom commands like SET, GET, and DELETE etc. Includes AOF-based persistence, a CLI socket server.",
      techstack: "Java, OOPS, Sockets, Custom DSL, JSON Parsing, AOF Persistence",
      gotolink: "https://github.com/RaghavendraCodes/Reflex-cache/blob/master/README.md", 
      github: "https://github.com/RaghavendraCodes/Reflex-cache", 
      image: Collabify, // Replace with correct image reference
    },
    {
      title: "Accident Prevention RC Car",
      tagline: "Smart Safety on Wheels",
      desc: "A smart vehicle safety prototype designed to detect obstacles and monitor blind spots in real time. The system automatically reduces speed or stops the vehicle based on obstacle proximity and alerts the user about surrounding hazards through an LCD display.",
      techstack: "ESP32, Ultrasonic Sensors, IR Sensors, L298N Motor Driver, Arduino IDE",
      gotolink: "https://accident-prevention.netlify.app", 
      github: "https://accident-prevention.netlify.app", 
      image: Collabify, // Replace with your actual image import
    },
    // { 
    //   title: "Code Wars (ongoing)", 
    //   tagline: "Code, Compete and Conquer!", 
    //   desc: "CodeWars is a real-time coding battleground tailored to your skill level — 1v1 or group showdowns, the choice is yours!",
    //   techstack: "React, Node.js, MongoDB, Tailwind",
    //   gotolink: "https://github.com/gajanana07/BMS-Collabify/blob/master/README.md", 
    //   github: "https://github.com/gajanana07/BMS-Collabify/", 
    //   image: Collabify,
    // }
  ];

  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 place-items-center">
      {cardData.map((card, index) => (
        <div
          key={index}
          className={`grid__item item w-full h-full text-white relative ${hovered === index ? 'hovered' : ''}`}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
          style={gradientStyle}
          onMouseMove={handleMouseMove}
        >
          <div className="item__content h-full w-full p-4 relative border-2 flex flex-col items-start">
            <div className="font-extrabold mb-1 text-[1.4em]">{card.title}</div>
            <p className="text-[1.1em] mb-3 font-semibold text-gray-500">{card.tagline}</p>
            <p className="text-[0.9em] mb-1 font-medium tracking-wide text-gray-300 desc-text">{card.desc}</p>

            {/* Glossy Techstack tags */}
            <div className="flex flex-wrap mb-3 mt-3">
              {card.techstack.split(',').map((tech, i) => (
                <span
                  key={i}
                  className="text-xs px-2 py-1 mr-2 mb-2 rounded-full bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-100 glossy-tech border-r-[1px] border-l-[1px] border-t-[1px] border-b-[1px]"
                >
                  {tech.trim()}
                </span>
              ))}
            </div>

            <div className="flex flex-row justify-start items-center gap-x-2 w-full">
              <button className="bg-blue-500 text-white px-3 py-2 rounded hover:bg-blue-600 transition text-sm justify-center flex flex-row space-x-2">
                <FaArrowRight className="mr-1 mt-1" />
                <a href={card.gotolink}><p className="text-[1.1em]">Go to page</p></a>
              </button>

              <button className="bg-gray-700 text-white px-3 py-2 rounded hover:bg-gray-800 transition text-sm justify-center flex flex-row">
              <a href={card.github}><FaGithub className="mr-1 mt-1 ml-1 text-lg" /></a>
                {/* <p className="text-[1.1em]">Github</p> */}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;

import React from 'react';
import './Terminalcard.css';

const TerminalCard = () => {
  return (
    <>
      <div className='rounded-lg'>
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white tracking-tight text-center mt-8 md:mt-12 lg:mt-16 mb-3 lg:mb-0 desc-text">
          More About Me
        </h1>
      </div>
      <div className="terminal mx-auto w-full max-w-md md:max-w-2xl lg:max-w-4xl p-4 md:p-6 lg:p-0 rounded-2xl shadow-lg">
        <div className="terminal-header flex items-center justify-between bg-gray-800 p-2 rounded-t-lg">
          <div className="terminal-buttons flex space-x-0">
            <span className="button red w-3 h-3 rounded-full bg-red-500"></span>
            <span className="button yellow w-3 h-3 rounded-full bg-yellow-500"></span>
            <span className="button green w-3 h-3 rounded-full bg-green-500"></span>
          </div>
          <div className="terminal-title text-xs md:text-sm text-white truncate">
            user@Raghavendra : ~
          </div>
        </div>
        <div className="terminal-body rounded-lg p-5 space-y-3 text-xs sm:text-sm md:text-base lg:text-lg text-white font-mono overflow-x-auto">
          <div>
            <span className="terminal-prompt">&gt; Raghavendra.currentLocation</span>
            <div className="terminal-output">"Bengaluru, Karnataka."</div>
          </div>
          <div>
            <span className="terminal-prompt">&gt; Raghavendra.contactInfo</span>
            <div className="terminal-output">
              [
              <a href="mailto:raghavendrar312004@gmail.com" className="text-yellow-500 hover:underline">
                "raghavendrar312004@gmail.com"
              </a>
              , "LinkedIn :{" "}
              <a href="https://www.linkedin.com/in/raghavendra-r-363701202/" className="text-yellow-500 hover:underline">
                Raghavendra R
              </a>
              ", "GitHub :{" "}
              <a href="https://github.com/RaghavendraCodes" className="text-yellow-500 hover:underline">
                RaghavendraCodes
              </a>
              ", "Instagram"]
            </div>
          </div>
          <div>
            <span className="terminal-prompt">&gt; Raghavendra.interests</span>
            <div className="terminal-output">["movies", "writing", "music", "coding"]</div>
          </div>
          <div>
            <span className="terminal-prompt">&gt; Raghavendra.education</span>
            <div className="terminal-output">"BE in Computer Science Engineering, BMS College of Engineering."</div>
          </div>
          <div>
            <span className="terminal-prompt">&gt; Raghavendra.skills</span>
            <div className="terminal-output">["Java", "JavaScript", "React", "MongoDB", "Flutter", "SQL"]</div>
          </div>
          <p className="terminal-cursor">&gt;</p>
          <br />
        </div>
      </div>
    </>
  );
};

export default TerminalCard;

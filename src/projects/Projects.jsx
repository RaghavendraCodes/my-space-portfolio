import React from "react";
import '../app.css';
import Card from "@/components/Card";
import '../hero/hero.css';

const Projects = () => {
    return (
        <>
            <div className="flex flex-col w-full sm:w-[90vw] md:w-[80vw] lg:w-[65vw] mx-auto">
                <div className="flex flex-row justify-center items-center mb-6" style={{ fontFamily: 'Helvetica Neue, sans-serif', padding: '20px', borderRadius: '10px' }}>
                    <h1 className="text-4xl font-bold text-white tracking-tight desc-text">Projects</h1>
                </div>
                
                {/* Container for cards, ensuring they stack vertically on small screens */}
                <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fadeIn">
                    {/* Projects section here */}
                    <Card />
                    {/* Add more Card components as necessary */}
                </div>
            </div>

            <style jsx>{`
                @keyframes fadeIn {
                    0% { opacity: 0; transform: translateY(20px); }
                    100% { opacity: 1; transform: translateY(0); }
                }

                @keyframes slideIn {
                    0% { opacity: 0; transform: translateX(20px); }
                    100% { opacity: 1; transform: translateX(0); }
                }

                .animate-fadeIn {
                    animation: fadeIn 1.5s ease forwards;
                }
                
                .animate-icons {
                    animation: slideIn 2s ease forwards; 
                }
            `}</style>
        </>
    );
}

export default Projects;

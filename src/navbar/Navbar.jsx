// src/navbar/Navbar.jsx
import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import './navbar.css';

const Navbar = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [hoverStyle, setHoverStyle] = useState({ width: "0px", left: "0px" });
  const navbarRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = ["Home", "Projects", "Blogs", "Stories", "Contact"];
  const routes = ["/", "/projects", "/blogs", "/stories", "/contact"]; // Define corresponding routes

  const handleItemClick = (index) => {
    setSelectedItem(index);
    navigate(routes[index]); // Navigate to the selected route
  };

  useEffect(() => {
    // Set selected item based on the current path
    const currentRouteIndex = routes.findIndex(route => route === location.pathname);
    setSelectedItem(currentRouteIndex);
  }, [location.pathname]);

  useEffect(() => {
    if (selectedItem !== null && navbarRef.current) {
      const selectedItemElement = navbarRef.current.querySelectorAll(".navbar-item")[selectedItem];

      // Check if selectedItemElement exists before accessing properties
      if (selectedItemElement) {
        const selectedItemRect = selectedItemElement.getBoundingClientRect();
        const navbarRect = navbarRef.current.getBoundingClientRect();

        setHoverStyle({
          width: `${selectedItemRect.width}px`,
          left: `${selectedItemRect.left - navbarRect.left}px`,
        });
      }
    }
  }, [selectedItem]);

  useEffect(() => {
    if (navbarRef.current) {
      const firstItem = navbarRef.current.querySelector(".navbar-item");
      
      // Check if firstItem exists
      if (firstItem) {
        const firstItemRect = firstItem.getBoundingClientRect();
        setHoverStyle({
          width: `${firstItemRect.width}px`,
          left: `0px`,
        });
      }
    }
  }, []);

  return (
    <div className="relative">
      <nav className="flex flex-row justify-center">
        <ul className="flex flex-row space-x-5 relative" ref={navbarRef}>
          {menuItems.map((item, index) => (
            <li
              key={index}
              className={`text-white z-10 cursor-pointer text-center px-2 py-1 transition-all navbar-item ${
                selectedItem === index
                  ? "text-black"
                  : "hover:text-gray-400"
              }`}
              onClick={() => handleItemClick(index)}
            >
              {item}
            </li>
          ))}
        </ul>

        <div
          className="hover-bg absolute h-full bg-cyan-700 rounded transition-all ease-in-out duration-300 px-4 py-2"
          style={hoverStyle}
        ></div>
      </nav>
    </div>
  );
};

export default Navbar;
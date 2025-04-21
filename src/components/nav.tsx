import React, { useState } from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { FaToggleOn, FaToggleOff } from "react-icons/fa6";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleIsOpen = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <nav className="flex justify-between z-40 text-white px-3 md:px-10 py-2 items-center absolute top-0 left-0 right-0 w-screen">
      <h1 className="z-50">
        <StaticImage
          quality={100}
          className="h-20 w-20"
          src="../images/icon.png"
          alt="hero"
        />
      </h1>
      <div className="">
        <button
          onClick={handleIsOpen}
          className={`flex items-center md:text-xl font-bold ml-7 relative z-50 ${
            isOpen ? `text-gray-900` : `text-white`
          }`}
        >
          <span>Menu</span>
          <span className="ml-2 text-4xl">
            {isOpen ? <FaToggleOn /> : <FaToggleOff />}
          </span>
        </button>

        <div className="absolute right-0 top-0 left-0">
        <ul
          className={`absolute ${
            isOpen ? `flex` : `hidden`
          } fade-in flex-col font-semibold pl-16 text-xl poppins h-screen w-screen bg-white text-gray-800`}
        >
          <li className="mt-28 my-4">About Us</li>
          <li className="my-4">Staff & Leaders</li>
          <li className="my-4">Next Steps</li>
          <li className="my-4">Calendar & Events</li>
          <li className="my-4">Messages and Media</li>
          <li className="my-4">Give</li>
        </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

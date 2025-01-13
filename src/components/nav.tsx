import React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { FaToggleOn } from "react-icons/fa";

const Navbar: React.FC = () => {
    return (
        <nav className='flex justify-between z-50 text-white px-4 py-2 items-center absolute top-0 left-0 right-0 w-screen'>
           <h1>
           <StaticImage quality={100} className="h-14 w-14" src="../images/logo.png" alt="hero" />
           </h1>
           <div className='flex items-center'>
            <p className=''>Menu</p>
            <i className='ml-1'><FaToggleOn size={27}/> </i>
           </div>
        </nav>
    );
};

export default Navbar;
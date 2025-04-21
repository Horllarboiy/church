import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

const Hero: React.FC = () => {
  return (
    <div className="hero flex md:flex-row flex-col ">
      <div className="w-5/6 mx-auto md:mx-0 md:w-3/4 h-5/6 md:h-screen shadow-xl">
        <div className="md:mt-28 mt-32 capitalize text-white">
          <h2 className=" font-semibold my-3 text-sm md:text-[18px] md:ml-28 pt-10">
            The Root and the offspring of david ministry
          </h2>
          <div className="md:mx-28">
            <h1 className="md:text-6xl text-5xl font-black md:leading-32 montserrat">
              Discover a Place to call Home.
            </h1>
            <p className="my-4 font-semibold text-sm md:text-[18px]">
              Join us and be a part of something truly extraordinary.
            </p>
            <div className="flex flex-col uppercase font-bold">
              <Link
                className="bg-red-500 hover:bg-red-600 w-full text-center mt-6 md:mt-2 py-5 rounded-xl"
                to="/"
              >
                Service Information
              </Link>
              <Link
                className="border text-red-500 border-red-500 hover:bg-red-500 hover:text-white w-full text-center my-5 md:my-3 py-5 rounded-xl"
                to="/"
              >
                Plan A visit
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="md:w-4/5 w-screen">
        <StaticImage quality={100} className="bg-contain-bottom h-full w-full" src="../images/hero-bg.jpg" alt="hero" />
      </div>
    </div>
  );
};

export default Hero;

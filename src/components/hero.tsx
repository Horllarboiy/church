import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

const Hero: React.FC = () => {
  return (
    <div className="hero flex md:flex-row flex-col">
      <div className="w-4/5 mx-auto md:mx-0 md:w-3/4 h-screen md:ml-10 ">
        <div className="md:mt-28 mt-36 capitalize poppins text-white">
          <h2 className="mx-auto font-semibold my-4 text-center">
            The Root and the offspring of david ministry
          </h2>
          <div className="md:mx-28">
            <h1 className="text-5xl font-black leading-snug">
              Discover a Place to call Home.
            </h1>
            <p className="my-4 text-base lowercase font-normal">
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
      <div className="w-full"></div>
    </div>
  );
};

export default Hero;

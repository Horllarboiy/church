import React from "react";
import Button from "./button";
import { FaFacebook, FaInstagram } from "react-icons/fa6";

const Footer: React.FC = () => {
  return (
    <footer className="min-h-full bg-black pb-10 text-white flex justify-center shadow-lg">
      <div className="text-center">
        <h3 className="mt-24 font-bold text-xl">
          {" "}
          The Root and the offspring of david ministry
        </h3>
        <p className="flex flex-col">
          <span className="my-5">
            {" "}
            Meeting at 9am & 12pm on Sundays <br /> 1 Rev'd. Gbogbo Ade Str,{" "}
            <br />
            Oreoluwa Shopping Complex <br />
          </span>

          <span className="my-5">
            Oando b.stop, Along <br /> Sango/Ijoko Rd Ogun State
          </span>
        </p>
        <div className="my-4">
          {" "}
          <Button link="/" title="CONTACT US" />
        </div>
        {/* <div className="flex text-5xl items-center">
          <i>
            <FaFacebook />
          </i>
          <i>
            <FaInstagram />
          </i>
        </div> */}
        <p>&copy; {new Date().getFullYear()}. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

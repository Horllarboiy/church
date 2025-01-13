import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="min-h-full bg-gray-900 pb-10 text-white flex justify-center shadow-lg">
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
        <p>
          &copy; {new Date().getFullYear()}. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

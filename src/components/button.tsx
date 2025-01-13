import React from "react";
import { Link } from "gatsby";

interface ButtonProps {
  title: string;
  link: string;
}

const Button: React.FC<ButtonProps> = ({ title, link }) => {
  return (
    <Link
      to={link}
      className="block uppercase bg-red-500 hover:bg-red-600 w-full text-center mt-2 py-5 rounded-xl"
    >
      {title}
    </Link>
  );
};

export default Button;

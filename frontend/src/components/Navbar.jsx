import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="sticky top-0 z-50">
      <div className="flex my-5 mx-auto w-[95%] font-bold text-2xl font-mono text-white bg-gradient-to-r from-black to-gray-500 border-none rounded-xl shadow-box">
        <h1 className="flex-1 m-3 text-emerald-500">Portfolio</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-14 m-3 cursor-pointer">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li className="mr-8">
            <a href="#contact">Contact</a>
          </li>
        </ul>

        {/* Mobile Icon */}
        <div
          className="md:hidden text-3xl m-3 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="absolute pt-10 bg-white top-[60px] left-4 w-[50%]  h-[300px] flex flex-col gap-4 mt-3 md:hidden cursor-pointer text-lg my-5 mx-auto font-bold text-2xl font-mono border-none rounded-xl shadow-box">
          <li className="text-white bg-gradient-to-r from-black to-gray-500 border-none rounded-xl shadow-box w-[80%] mx-auto p-2 text-center">
            <a href="#home">Home</a>
          </li>
          <li className="text-white bg-gradient-to-r from-black to-gray-500 border-none rounded-xl shadow-box w-[80%] mx-auto p-2 text-center">
            <a href="#about">About</a>
          </li>
          <li className="text-white bg-gradient-to-r from-black to-gray-500 border-none rounded-xl shadow-box w-[80%] mx-auto p-2 text-center">
            <a href="#projects">Projects</a>
          </li>
          <li className="text-white bg-gradient-to-r from-black to-gray-500 border-none rounded-xl shadow-box w-[80%] mx-auto p-2 text-center">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      )}
    </div>
  );
};

import React from "react";
import person from "../assets/person.png";
import { FaLinkedin, FaGithub, FaEnvelope, FaWhatsapp } from "react-icons/fa";

export const Contact = () => {
  return (
    <div id="#contact">
      <div className="flex px-10 justify-between my-5 mx-auto w-[95%] font-bold text-2xl font-mono text-white bg-gradient-to-r from-black to-gray-500 border-none rounded-xl shadow-box">
        <div>
          <img src={person} alt="person" className="h-[300px]" />
        </div>

        <div className="pt-15">
          <ul className="flex flex-col gap-5 cursor-pointer">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-5 pt-15 text-white font-mono">
          <div className="flex items-center gap-4">
            <FaLinkedin className="text-2xl text-sky-400" />
            <label className="font-bold">LinkedIn:</label>
            <a
              href="https://www.linkedin.com/in/syed-alam-jan-3284073a2/"
              target="_blank"
              className="hover:underline"
            >
              www.linkedin.com
            </a>
          </div>

          <div className="flex items-center gap-4">
            <FaGithub className="text-2xl text-gray-300" />
            <label className="font-bold">GitHub:</label>
            <a
              href="https://github.com/DeveloperSAJ"
              target="_blank"
              className="hover:underline"
            >
              github.com
            </a>
          </div>

          <div className="flex items-center gap-4">
            <FaEnvelope className="text-2xl text-red-400" />
            <label className="font-bold">Email:</label>
            <p>developersaj981@gmail.com</p>
          </div>

          <div className="flex items-center gap-4">
            <FaWhatsapp className="text-2xl text-green-400" />
            <label className="font-bold">WhatsApp:</label>
            <p>+92 370 586 0519</p>
          </div>
        </div>
      </div>
      <h2 className=" font-mono text-center text-xl font-bold">
        {new Date().getFullYear()} Portfolio. All rights been reserved.
      </h2>
    </div>
  );
};

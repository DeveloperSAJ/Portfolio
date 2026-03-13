import React from "react";
import person from "../assets/person.png";
import { FaLinkedin, FaGithub, FaEnvelope, FaWhatsapp } from "react-icons/fa";

export const Contact = () => {
  return (
    <div id="#contact">
      <div
        className="w-[95%] mx-auto bg-gradient-to-r from-black to-gray-600 border-none rounded-xl shadow-box"
      >
        <p className="pt-5 text-2xl text-center font-bold text-emerald-500">
          Contact
        </p>
        <div className="flex px-5 justify-between my-5  font-bold text-2xl font-mono text-white ">
          <div className="">
            <img
              src={person}
              alt="person"
              className="h-[300px] hidden md:block"
            />
          </div>

          <div className="hidden lg:block mx-auto text-xl py-8">
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

          <div className="flex flex-col mx-auto py-5 gap-8 text-white text-xl font-mono">
            <div className="flex items-center gap-4">
              <FaLinkedin className="text-2xl text-sky-400" />
              <label className="font-bold">LinkedIn:</label>
              <a
                href="https://www.linkedin.com/in/syed-alam-jan-3284073a2/"
                target="_blank"
                className="hover:underline text-[15px] md:text-xl"
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
                className="hover:underline text-[15px] md:text-xl"
              >
                github.com
              </a>
            </div>

            <div className="flex items-center gap-4">
              <FaEnvelope className="text-2xl text-red-400" />
              <label className="font-bold">Email:</label>
              <p className="text-[15px] break-all md:text-xl">
                developersaj981@gmail.com
              </p>
            </div>

            <div className="flex items-center gap-4">
              <FaWhatsapp className="text-2xl text-green-400" />
              <label className="font-bold">WhatsApp:</label>
              <p className="text-[15px] md:text-xl">+92 370 586 0519</p>
            </div>
          </div>
        </div>
      </div>
        <h2 className=" font-mono text-center text-xl font-bold">
          {new Date().getFullYear()} Portfolio. All rights been reserved.
        </h2>
    </div>
  );
};

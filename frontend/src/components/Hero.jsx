import React from "react";
import person from "../assets/person.png";

export const Hero = () => {
  return (
    <div id="home">
      <div className="mx-auto text-center md:text-left h-130 w-[95%] bg-gradient-to-r from-black to-gray-500 border-none rounded-xl shadow-box flex ">
        <div className="flex flex-1 flex-col gap-3 font-mono text-2xl font-bold text-white pt-20 lg:pt-40 px-10">
          <h2>Hello There!</h2>
          <h1 className="text-4xl text-emerald-500">
            I am Full Stack Developer
          </h1>
          <h2>I create impressive websites.</h2>
          <div className="flex justify-center md:justify-normal">
            <button className="text-xl gap-2 p-4 my-10 bg-emerald-500 w-fit rounded-xl shadow-xl hover:scale-105 transition">
              <a href="#about">Know More →</a>
            </button>
          </div>
        </div>
        <div className="hidden md:block">
          <img src={person} alt="hero-image" className="h-130 " />
        </div>
      </div>
    </div>
  );
};

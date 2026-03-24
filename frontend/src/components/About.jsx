import React from "react";
import person from "../assets/person.png";
import cv from "../assets/SAJ-CV.pdf";

export const About = () => {
  return (
    <div id="about">
      <div className="flex">
        {/* Image */}
        <div className="mt-10 mx-auto w-[30%] font-bold text-2xl font-mono text-white bg-gradient-to-r from-black to-gray-600 border-none rounded-xl shadow-box max-w-[350px] hidden xl:block">
          <img src={person} alt="person" className="" />
        </div>

        {/* Text Container */}
        <div className="mt-10 p-10 mx-auto w-[95%] xl:w-[63%] font-bold  font-mono text-white bg-gradient-to-r from-black to-gray-600 border-none rounded-xl shadow-box">
          <h2 className="text-xl text-center mb-2">Who am i?</h2>
          <h1 className="text-2xl text-emerald-500 text-center mb-2">
            I am Syed Alam Jan
          </h1>
          <p className="text-center">
            Full Stack Developer with experience in developing responsive web
            applications using modern frontend and backend technologies.
            Passionate about building efficient, scalable solutions and
            continuously improving development skills through real-world
            projects.
          </p>
          <br />
          <hr />
          <br />
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label>Name:</label>
              <span className="text-emerald-500">Syed Alam Jan</span>
            </div>
            <div>
              <label>Location:</label>
              <span className="text-emerald-500">Swat, Pakistan</span>
            </div>
            <div>
              <label>Age:</label>
              <span className="text-emerald-500">20</span>
            </div>
            <div>
              <label>Email:</label>
              <span className="break-all text-emerald-500">
                developersaj981@gmail.com
              </span>
            </div>
          </div>
          <a
            href={cv}
            target="_blank"
            className="flex items-center gap-2 p-4 my-10 bg-emerald-500 w-fit rounded-xl shadow-xl hover:scale-105 transition"
          >
            View CV
          </a>
        </div>
      </div>
    </div>
  );
};

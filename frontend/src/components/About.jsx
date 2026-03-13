import React from "react";
import person from "../assets/person.png";
import cv from "../assets/SAJ-CV.pdf";

export const About = () => {
  return (
    <div id="about">
      <div className="flex">
        {/* Image */}
        <div className="my-10 mx-auto w-[30%] font-bold text-2xl font-mono text-white bg-gradient-to-r from-black to-gray-500 border-none rounded-xl shadow-box max-w-[350px] hidden xl:block">
          <img src={person} alt="person" className="" />
        </div>

        {/* Text Container */}
        <div className="my-10 p-10 mx-auto w-[95%] xl:w-[63%] font-bold  font-mono text-white bg-gradient-to-r from-black to-gray-500 border-none rounded-xl shadow-box">
          <h2 className="text-xl text-center mb-2">Who am i?</h2>
          <h1 className="text-4xl text-emerald-500 text-center mb-2">
            I am Syed Alam Jan, full stack devloper
          </h1>
          <p className="text-center">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi,
            cumque repellendus voluptates consequuntur beatae quos. Nesciunt,
            fugit quasi. Voluptatum quisquam excepturi ducimus dolorum. Ipsa
            ratione rem a blanditiis earum? Itaque.
          </p>
          <br />
          <hr />
          <br />
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label>Name:</label>
              <span>Syed Alam Jan</span>
            </div>
            <div>
              <label>Location:</label>
              <span>Swat, Pakistan</span>
            </div>
            <div>
              <label>Age:</label>
              <span>20</span>
            </div>
            <div>
              <label>Email:</label>
              <span className="break-all">developersaj981@gmail.com</span>
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

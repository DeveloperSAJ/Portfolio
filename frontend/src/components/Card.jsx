import React from "react";

export const Card = ({ image, title, t1,t2,t3,t4 , description }) => {
  return (
    <div>
      <div className="flex flex-col my-5 mx-auto w-[95%] font-bold text-2xl font-mono text-white bg-gradient-to-r from-black to-gray-600 border-none rounded-xl shadow-box h-120">
        <div className="">
          <img src={image} alt={title} className=" rounded-xl w-[85%] mx-auto my-5 shadow-box"/>
        </div>
        <hr />

        <div className="flex flex-col p-6 gap-2 text-center">
          <h1 className="text-2xl font-bold text-emerald-500">{title}</h1>
          <h2 className="text-xl">Tech Used:</h2>
          <ul className="text-xl font-normal grid grid-cols-2 gap-2">
            <li>{t1}</li>
            <li>{t2}</li>
            <li>{t3}</li>
            <li>{t4}</li>
          </ul>
          <p className="mt-3 text-[16px] font-normal">{description}</p>
        </div>
      </div>
    </div>
  );
};

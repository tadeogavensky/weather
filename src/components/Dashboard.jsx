import React from "react";

import { BsSearch } from "react-icons/bs";

import { MdOutlineLocationSearching } from "react-icons/md";

export const Dashboard = (props) => {
  return (
    <div className="bg-white rounded-[28px] w-full h-screen flex flex-col items-center shadow-md">
      <div className="mt-12">
        <form action="" className="flex items-center justify-between w-full">
          <div className="flex items-baseline gap-2">
            <BsSearch />
            <input
              type="text"
              placeholder="Search for places..."
              className="placeholder:font-primary placeholder:text-black p-4 focus:outline-none"
            />
          </div>
          <div className="bg-gray-200 p-2 rounded-full">
            <MdOutlineLocationSearching />
          </div>
        </form>
      </div>

      <div className="w-full h-1/2">
        <img src={props.weather.image} alt="image" className="object-contain" />
      </div>

      <p className="font-primary text-[3rem]">{props.weather.current_temp}</p>

      <p className="font-primary text-black">
        {props.weather.day}, <span className="text-gray-400">{props.weather.current_hour}</span>
      </p>
    </div>
  );
};

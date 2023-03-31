import React from "react";
import Typed from "react-typed";

const Hero = () => {
  return (
    <div className="text-[#EDEBE6]">
      <div className="max-w-[800px] mt-[-64px] w-full h-screen mx-auto text-center flex flex-col justify-center ">
        <p className="text-[#3DCAF7] font-bold p-2">
          GROWING WTIH DATA ANALYTICS
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
          Grow with data.
        </h1>
        <div className="flex justify-center items-center">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">
            fast, flexible, financing for&nbsp;
          </p>
          <Typed
            className="md:text-5xl sm:text-4xl text-xl font-bold md:px-4 px-2"
            strings={["BTB", "BTC", "STSS"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className="md:text-2xl text-xl font-bold text-indigo-600 dark:text-indigo-300 mx-2">
          Monitor your data analytics to increase revenue for BTB, BTC and SASS
          platforms.
        </p>
        <button className="bg-[#3dc9f7d3] hover:bg-[#3dc9f75d] duration-100 text-[#0a0c12] w-[200px] rounded-md font-medium my-6 mx-auto py-3 h">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;

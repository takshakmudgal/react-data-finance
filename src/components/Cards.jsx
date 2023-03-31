import React from "react";
import Single from "../assets/single.png";
import Double from "../assets/double.png";
import Triple from "../assets/triple.png";
const Cards = () => {
  return (
    <div className="w-full py-[4rem] px-4 bg-[#242C3B]">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <div className="bg-slate-700 text-indigo-600 dark:text-indigo-300 w-full shadow-xl flex flex-col p-4 py-16 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-transparent "
            src={Single}
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-8">Single User</h2>
          <p className="text-center text-4xl font-bold">$149</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">500GB Storage</p>
            <p className="py-2 border-b mx-8">1 Granted User</p>
            <p className="py-2 border-b mx-8">Send upto 2GB</p>
          </div>
          <button className="bg-[#3dc9f7d3] hover:bg-[#3dc9f75d] duration-100 text-[#242C3B] w-[200px] rounded-md font-medium mx-auto px-6 my-6 py-3">
            Start Trial
          </button>
        </div>
        {/* Second */}
        <div className=" bg-slate-900 text-indigo-600 dark:text-indigo-300 w-full shadow-xl flex flex-col p-4 py-16 md:my-0 my-8 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-transparent "
            src={Double}
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-8">Single User</h2>
          <p className="text-center text-4xl font-bold">$149</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">500GB Storage</p>
            <p className="py-2 border-b mx-8">1 Granted User</p>
            <p className="py-2 border-b mx-8">Send upto 2GB</p>
          </div>
          <button className="bg-[#0a0c12] hover:bg-[#3dc9f75d] duration-100 text-[#3dc9f7d3] w-[200px] rounded-md font-medium mx-auto px-6 my-6 py-3">
            Start Trial
          </button>
        </div>
        {/* Third */}
        <div className="bg-slate-700 text-indigo-600 dark:text-indigo-300 w-full shadow-xl flex flex-col p-4 py-16 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-transparent "
            src={Triple}
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-8">Single User</h2>
          <p className="text-center text-4xl font-bold">$149</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">500GB Storage</p>
            <p className="py-2 border-b mx-8">1 Granted User</p>
            <p className="py-2 border-b mx-8">Send upto 2GB</p>
          </div>
          <button className="bg-[#3dc9f7d3] hover:bg-[#3dc9f75d] duration-100 text-[#242C3B] w-[200px] rounded-md font-medium mx-auto px-6 my-6 py-3">
            Start Trial
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;

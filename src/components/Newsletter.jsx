import React from "react";

const Newsletter = () => {
  return (
    <div className=" py-16 w-full text-[#EDEBE6] px-4">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2 my-4">
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Want tips & tricks to optimize your flow?
          </h1>
          <p>Sign up to our newsletter and stay up to date.</p>
        </div>
        <div className="my-4">
          <div className="flex flex-col sm:flex-row items-center justify-between w-full ">
            <input
              className="p-3 flex w-full rounded-md text-[#242C3B]"
              type="email"
              placeholder="Enter Email"
            />
            <button className="bg-[#3dc9f7e7] hover:bg-[#3dc9f75d] duration-100 text-[#242C3B] w-[200px] rounded-md font-medium ml-4 my-2 py-3 ">
              Notify Me
            </button>
          </div>
          <p>
            We care bout the protection of your data. Read our&nbsp;
            <a href="/" className="inline text-[#3dc9f7cc] hover:border-b">
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;

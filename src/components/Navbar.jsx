import React, { useState } from "react";
import { BiMenuAltLeft, BiMenuAltRight } from "react-icons/bi";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handelNav = () => {
    setNav(!nav);
  };
  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-[#EDEBE6]">
      <h1 className="w-full text-3xl font-bold text-[#3DCAF7]">REACT.</h1>
      <ul className="hidden md:flex">
        <button className="bg-[#EDEBE6] hover:bg-[#a9e4f8dc] duration-100 text-[#0a0c12] w-[100px] rounded-md font-medium my-2 mx-auto py-2 ">
          Home
        </button>
        <button className="bg-[#EDEBE6] hover:bg-[#a9e4f8dc] duration-100 text-[#0a0c12] w-[100px] rounded-md font-medium my-2 mx-auto py-2 ml-2">
          Company
        </button>
        <button className="bg-[#EDEBE6] hover:bg-[#a9e4f8dc] duration-100 text-[#0a0c12] w-[100px] rounded-md font-medium my-2 mx-auto py-2 ml-2">
          Resources
        </button>
        <button className="bg-[#EDEBE6] hover:bg-[#a9e4f8dc] duration-100 text-[#0a0c12] w-[100px] rounded-md font-medium my-2 mx-auto py-2 ml-2">
          About
        </button>
        <button className="bg-[#EDEBE6] hover:bg-[#a9e4f8dc] duration-100 text-[#0a0c12] w-[100px] rounded-md font-medium my-2 mx-auto py-2 ml-2">
          Contact
        </button>
      </ul>
      <div onClick={handelNav} className="block md:hidden">
        {nav ? <BiMenuAltLeft size={20} /> : <BiMenuAltRight size={20} />}
      </div>
      <div
        className={
          nav
            ? "fixed left-0 top-0 w-[35%] h-full border-r border-r-gray-900 bg-[#12151D] ease-in-out duration-500 "
            : "fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold text-[#3DCAF7] m-4">REACT.</h1>
        <ul className=" uppercase p-4">
          <li className="p-4 font-extrabold  border-b border-[#776D5F]">
            Home
          </li>
          <li className="p-4 font-bold border-b border-[#776D5F]">Company</li>
          <li className="p-4 font-bold border-b border-[#776D5F]">Resources</li>
          <li className="p-4 font-bold border-b border-[#776D5F]">About</li>
          <li className="p-4 font-bold border-b border-[#776D5F]">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

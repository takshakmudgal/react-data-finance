import React from "react";
import { FaGithubSquare, FaInstagram, FaTwitterSquare } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-[#EDEBE6]">
      <div>
        <h1 className="w-full text-3xl font-bold text-[#3DCAF7]">REACT.</h1>
        <p className="py-4">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem
          doloremque nulla ut temporibus. Quo, quidem. Laborum recusandae ad
          illum animi explicabo iste harum inventore quae omnis optio
          praesentium commodi maxime, cupiditate numquam facilis at. Facilis
          omnis ut maiores rem sed!
        </p>
        <div className="flex justify-between md:w-{75%} my-6">
          <a href="https://www.instagram.com/takshakmudgal/">
            <FaInstagram className="hover:scale-150 duration-300" size={30} />
          </a>
          <a href="https://twitter.com/takshakmudgal">
            <FaTwitterSquare
              className="hover:scale-150 duration-300"
              size={30}
            />
          </a>
          <a href="https://github.com/takshakmudgal">
            <FaGithubSquare
              className="hover:scale-150 duration-300"
              size={30}
            />
          </a>
        </div>
      </div>
      <div className="lg:col-span-2 flex justify-between mt-6">
        <div>
          <h6 className="font-medium text-[#edebe6a4]">Solutions</h6>
          <ul>
            <li className="py-2 text-sm">Analytics</li>
            <li className="py-2 text-sm">Marketing</li>
            <li className="py-2 text-sm">Commerce</li>
            <li className="py-2 text-sm">Insights</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-[#edebe6a4]">Support</h6>
          <ul>
            <li className="py-2 text-sm">Pricing</li>
            <li className="py-2 text-sm">Documentation</li>
            <li className="py-2 text-sm">Guides</li>
            <li className="py-2 text-sm">API Status</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-[#edebe6a4]">Company</h6>
          <ul>
            <li className="py-2 text-sm">About</li>
            <li className="py-2 text-sm">Blog</li>
            <li className="py-2 text-sm">Jobs</li>
            <li className="py-2 text-sm">Press</li>
            <li className="py-2 text-sm">Careers</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-[#edebe6a4]">Legal</h6>
          <ul>
            <li className="py-2 text-sm">Claims</li>
            <li className="py-2 text-sm">Policy</li>
            <li className="py-2 text-sm">Terms</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;

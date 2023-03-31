import React from "react";
import Laptop from "../assets/laptop.png";
function Analytics() {
  return (
    <div className="w-full bg-[#242C3B] py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img
          className="opacity-80 w-[300px] md:w-[400px] mx-auto my-4"
          src={Laptop}
          alt="laptop.png"
        />
        <div className="flex flex-col justify-center">
          <p className="text-[#3DCAF7] font-bold">DATA ANALYTICS DASHBOARD</p>
          <h1 className="text-indigo-600 dark:text-indigo-300 md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Manage Data Analytics Centerally
          </h1>
          <p className="text-[#EDEBE6]">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi
            adipisci accusantium maxime sint. Facilis, nihil. Odit quae
            molestiae, id nobis rem doloribus optio reprehenderit! Laudantium
            maxime nesciunt voluptatum, magnam reiciendis minus voluptatem nobis
            repellendus earum dolorem sequi, maiores laboriosam tenetur rem
            pariatur quam quo aliquam amet perferendis enim doloremque officiis
            accusamus quod esse. Expedita, vel.
          </p>
          <button className="bg-[#3dc9f7d3] hover:bg-[#3dc9f75d] duration-100 text-[#242C3B] w-[200px] rounded-md font-medium my-6 py-3">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
}

export default Analytics;

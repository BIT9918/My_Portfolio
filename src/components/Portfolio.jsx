import React from "react";

// IMPORT PROJECT IMAGES
import BurgerKing from "../assets/img/BurgerKing.png";
import FoodShop from "../assets/img/FoodShop.png";
// import BIT from "../assets/img/BIT.png";

function Portfolio() {
  return (
    <div className="w-full h-full px-4 md:px-16 py-8 md:py-20 flex flex-col gap-8">
      {/* TITLE */}
      <h2 className="text-3xl md:text-4xl font-bold text-center text-white">
        My <span className="text-cyan-400">Portfolio</span>
      </h2>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* BURGER KING (NOT AVAILABLE) */}
        <div className="rounded-xl overflow-hidden bg-[#1f232d] shadow-lg opacity-70">
          <img
            src={BurgerKing}
            alt="Burger King Project"
            className="w-full h-[180px] md:h-[200px] object-cover"
          />
          <div className="p-4 flex flex-col gap-3 text-white">
            <h3 className="text-lg md:text-xl font-semibold">
              Burger King Website
            </h3>
            <p className="text-gray-400 text-sm">
              Restaurant website UI (not deployed yet).
            </p>

            <button
              disabled
              className="w-fit px-4 py-2 bg-gray-600 text-gray-300 rounded-full cursor-not-allowed"
            >
              Not Available
            </button>
          </div>
        </div>

        {/* FOOD SHOP (LIVE) */}
        <div className="rounded-xl overflow-hidden bg-[#1f232d] shadow-lg hover:scale-105 transition">
          <img
            src={FoodShop}
            alt="Food Shop Project"
            className="w-full h-[180px] md:h-[200px] object-cover"
          />
          <div className="p-4 flex flex-col gap-3 text-white">
            <h3 className="text-lg md:text-xl font-semibold">
              Food Shop Project
            </h3>
            <p className="text-gray-400 text-sm">
              Food ordering website deployed on Vercel.
            </p>

            <a
              href="https://food-project-psi-swart.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-fit px-4 py-2 bg-cyan-400 text-black rounded-full hover:bg-cyan-300 transition"
            >
              View Live
            </a>
          </div>
        </div>

        {/* MY CV (LIVE) */}
        {/* <div className="rounded-xl overflow-hidden bg-[#1f232d] shadow-lg hover:scale-105 transition">
          <img
            src={BIT}
            alt="My CV Project"
            className="w-full h-[180px] md:h-[200px] object-cover"
          />
          <div className="p-4 flex flex-col gap-3 text-white">
            <h3 className="text-lg md:text-xl font-semibold">My CV Website</h3>
            <p className="text-gray-400 text-sm">
              Personal CV website deployed on Vercel.
            </p>

            <a
              href="https://my-cv-webside-oifr.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-fit px-4 py-2 bg-cyan-400 text-black rounded-full hover:bg-cyan-300 transition"
            >
              View Live
            </a>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Portfolio;

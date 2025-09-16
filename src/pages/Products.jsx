import React, { useState } from "react";
import ProductNavbar from "../components/products/ProductNavbar";

const Projects = () => {
  const [isMenuHover, setIsMenuHover] = useState(false);
  const [isCreatorHover, setIsCreatorHover] = useState(false);
  const [isBlogHover, setIsBlogHover] = useState(false);

  return (
    <div className="w-full h-screen font-[Primary]">
      <div className="w-full h-30">
        {/* Navbar */}
        <ProductNavbar hovered={isMenuHover} setHovered={setIsMenuHover} />

        {/* Menu */}
        <div
          className="bg-black w-52 h-32 absolute right-0 hidden md:flex items-end py-1 px-2 cursor-pointer"
          onMouseEnter={() => setIsMenuHover(true)}
          onMouseLeave={() => setIsMenuHover(false)}
        >
          <span
            className={`uppercase text-2xl z-20 transition-colors duration-200 ${
              isMenuHover ? "text-black" : "text-white"
            }`}
          >
            Menu
          </span>
          <div
            className={`bg-violet-500 w-full absolute top-0 transition-all duration-200 ease-in-out ${
              isMenuHover ? "h-full" : "h-0"
            }`}
          />
        </div>

        {/* Creators */}
        <div
          onMouseEnter={() => setIsCreatorHover(true)}
          onMouseLeave={() => setIsCreatorHover(false)}
          className="w-70 h-12 absolute right-152 hidden md:flex py-1 px-2 bg-black cursor-pointer"
        >
          <div className="w-full h-full absolute flex items-end z-20">
            <span
              className={`uppercase text-2xl transition-colors duration-200 ${
                isCreatorHover ? "text-black" : "text-white"
              }`}
            >
              Creators
            </span>
          </div>
          <div
            className={`bg-violet-500 w-full absolute top-0 right-0 transition-all duration-200 ease-in-out ${
              isCreatorHover ? "h-full" : "h-0"
            }`}
          />
        </div>

        {/* Blog */}
        <div
          onMouseEnter={() => setIsBlogHover(true)}
          onMouseLeave={() => setIsBlogHover(false)}
          className="w-100 h-22 hidden md:flex absolute right-52 py-1 px-2 bg-black cursor-pointer"
        >
          <div className="w-full h-full relative flex items-end z-20">
            <span
              className={`uppercase text-2xl transition-colors duration-200 ${
                isBlogHover ? "text-black" : "text-white"
              }`}
            >
              Blog
            </span>
          </div>
          <div
            className={`bg-violet-500 w-full absolute top-0 right-0 transition-all duration-200 ease-in-out ${
              isBlogHover ? "h-full" : "h-0"
            }`}
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;

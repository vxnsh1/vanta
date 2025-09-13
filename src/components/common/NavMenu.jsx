import React from "react";

const NavMenu = () => {
  const navLinks = [
    {
      name: "Work",
      tagline: "See our products",
      imgSrc: "navmenu-1.jpg",
    },
    {
      name: "About",
      tagline: "Who we are",
      imgSrc: "navmenu-4.jpg",
    },
    {
      name: "Contact",
      tagline: "Get in touch",
      imgSrc: "navmenu-3.jpg",
    },
    {
      name: "Blog",
      tagline: "Read our articles",
      imgSrc: "navmenu-2.jpg",
    },
  ];
  return (
    <div className="h-screen w-full bg-black absolute z-[999]">
      <div className="mt-53 md:mt-34">
        {navLinks.map((item, idx) => (
          <div
            key={idx}
            className={`${
              idx === 0 ? "border-y-1" : "border-b-1"
            } border-gray-400/80 font-[Primary] uppercase mb-1 relative group`}
          >
            <h1 className="peer text-center -mb-2 md:-mb-4 mt-1 text-7xl md:text-9xl">
              {item.name}
            </h1>
            <div
              className={`absolute ${
                idx === 0 ? "top-0" : "-top-1"
              } moveLink h-17 md:h-auto bg-violet-700 flex gap-52 md:gap-85`}
            >
              <div className="flex items-center moveX">
                <p className="whitespace-nowrap text-center -mb-4 -mt-1 md:mt-1 ml-2 mr-2 text-7xl md:text-9xl">
                  {item.tagline}
                </p>
                <img
                  src={item.imgSrc}
                  alt=""
                  className="w-26 md:w-42 rounded-full object-cover"
                />
                <p className="whitespace-nowrap text-center -mb-4 -mt-1 md:mt-1 ml-2 mr-2 text-7xl md:text-9xl">
                  {item.tagline}
                </p>
                <img
                  src={item.imgSrc}
                  alt=""
                  className="w-26 md:w-42 rounded-full object-cover"
                />
              </div>
              <div className="flex items-center moveX">
                <p className="whitespace-nowrap text-center -mb-4 -mt-1 md:mt-1 ml-2 mr-2 text-7xl md:text-9xl">
                  {item.tagline}
                </p>
                <img
                  src={item.imgSrc}
                  alt=""
                  className="w-26 md:w-42 rounded-full object-cover"
                />
                <p className="whitespace-nowrap text-center -mb-4 -mt-1 md:mt-1 ml-2 mr-2 text-7xl md:text-9xl">
                  {item.tagline}
                </p>
                <img
                  src={item.imgSrc}
                  alt=""
                  className="w-26 md:w-42 rounded-full object-cover"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NavMenu;

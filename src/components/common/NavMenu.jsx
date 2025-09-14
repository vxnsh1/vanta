import React, { useRef } from "react";
import { CiGlobe } from "react-icons/ci";
import Time from "./Time";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const NavMenu = ({menuOpen}) => {
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

  const footerLinks = [
    { name: "Privacy Policy", href: "#" },
    { name: "Privacy Notice", href: "#" },
    { name: "Ethics Report", href: "#" },
    { name: "Consent Choices", href: "#" },
  ];

  const socialLinks = [
    { name: "IG", href: "#" },
    { name: "IN", href: "#" },
    { name: "X", href: "#" },
    { name: "FB", href: "#" },
  ];

  const screenNav = useRef(null);
  useGSAP(
    function () {
      const timeLine = gsap.timeline();
      timeLine.from(".bars", {
        delay: 0.3,
        height: 0,
        stagger: {
          amount: -0.2,
        },
      });
      timeLine.from(screenNav.current, {
        opacity: 0,
      })

      timeLine.from('.links', {
        rotateX: 90,
        stagger: {
          amount: 0.2,
        }
      })
    },
  );
  return (
    <div className={`h-screen w-full bg-white absolute z-[99] flex gitflex-col justify-between`}>
      <div className="h-screen w-full fixed">
          <div className="h-full w-full flex">
            <div className="bars h-full w-1/5 bg-black"></div>
            <div className="bars h-full w-1/5 bg-black"></div>
            <div className="bars h-full w-1/5 bg-black"></div>
            <div className="bars h-full w-1/5 bg-black"></div>
            <div className="bars h-full w-1/5 bg-black"></div>
          </div>
        </div>
      <div ref={screenNav} className="flex w-full h-auto px-2 justify-between z-[999]">
        <img src="/logo.png" alt="" className="w-20 h-8 mt-2" />
        <div className={`h-30 w-30 flex items-center justify-center relative -right-2 group cursor-pointer`} 
        onClick={() => setmenuOpened(prev => !prev)}
        >
          <div className="w-[1.5px] h-32 bg-white rotate-45 group-hover:bg-violet-500 transition-colors duration-150"></div>
          <div className="w-[1.5px] h-32 bg-white -rotate-45 group-hover:bg-violet-500 transition-colors duration-150"></div>
        </div>
      </div>
      <div className="-mt-20 ">
        {navLinks.map((item, idx) => (
          <div
            key={idx}
            className={`${
              idx === 0 ? "border-y-1" : "border-b-1"
            } border-gray-400/80 font-[Primary] uppercase mb-1 relative group links origin-top`}
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
      <div className="p-2 max-sm:mb-15 md:flex w-full h-12 font-[Primary] items-center justify-between text-white z-[999]">
        <div className="hidden gap-8 text-xl md:flex ">
          <CiGlobe size={30} className="-mt-2" />
          <div className="flex -mt-1">
            <span>INDIA_</span>
            <span>
              <Time />
            </span>
          </div>
        </div>
        <div className="md:text-[11px] md:flex uppercase w-full md:w-auto ml-50 md:ml-0 text-[9px] mb-2 md:mb-0 gap-2">
          {footerLinks.map((item, idx) => (
            <a href={item.href} className="max-sm:w-full">
              {item.name}
              <br />
            </a>
          ))}
        </div>
        <div className="flex gap-2 items-center justify-center">
          {socialLinks.map((item, idx) => (
            <a
              href={item.href}
              className="rounded-full border-2 border-white w-14 text-center h-8 text-3xl"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavMenu;
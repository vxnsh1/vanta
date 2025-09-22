import { useState } from "react";
import ProductNavbar from "../components/products/ProductNavbar";
import { Link } from "react-router-dom";
import ProductsCard from "../components/products/ProductsCard";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import { GiGlassHeart } from "react-icons/gi";
import { CiGlobe } from "react-icons/ci";
import Time from "../components/common/Time";
import BackToTop from "../components/common/BackToTop";

const Projects = () => {
  const [isMenuHover, setIsMenuHover] = useState(false);
  const [isCreatorHover, setIsCreatorHover] = useState(false);
  const [isBlogHover, setIsBlogHover] = useState(false);

  const socialLinks = [
    { name: "IG", href: "https://www.instagram.com/ugh.vansh" },
    { name: "IN", href: "https://www.linkedin.com/in/vanshchouhan" },
    { name: "X", href: "https://x.com/itzvxnsh" },
    { name: "FB", href: "#" },
  ];

  const footerLinks = [
    { name: "Privacy Policy", href: "#" },
    { name: "Privacy Notice", href: "#" },
    { name: "Ethics Report", href: "#" },
    { name: "Consent Choices", href: "#" },
  ];

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.from(".cardChild", {
      height: "100px",
      stagger: {
        amount: 0.5,
      },
      scrollTrigger: {
        trigger: ".cardParent",
        start: "top 100%",
        end: "top -150%",
        scrub: true,
      },
    });
  });

  return (
    <div className="w-full h-screen font-[Primary]">
      <div className="w-full h-30 bg-red-500">
        {/* Navbar */}
        <ProductNavbar hovered={isMenuHover} setHovered={setIsMenuHover} />

        {/* Menu */}
        <div
          className="bg-black w-52 h-30 absolute right-0 hidden md:flex top-0 items-end py-1 px-2 cursor-pointer overflow-hidden"
          onMouseEnter={() => setIsMenuHover(true)} 
          onMouseLeave={() => setIsMenuHover(false)}
        >
          <span
            className={`uppercase text-xl z-20 transition-colors duration-200 ${
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
          className="w-70 h-12 absolute right-152 hidden md:flex py-1 px-2 bg-black cursor-pointer z-20"
        >
          <Link
            className="w-full h-full absolute flex items-end z-20 py-2"
            to={"/products"}
          >
            <span
              className={`uppercase text-xl transition-colors duration-200 ${
                isCreatorHover ? "text-black" : "text-white"
              }`}
            >
              Products (07)
            </span>
          </Link>
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
          className="w-100 h-22 hidden md:flex absolute right-52 py-1 px-2 bg-black cursor-pointer z-20"
        >
          <Link
            className="w-full h-full relative flex items-end z-20"
            to={"/blog"}
          >
            <span
              className={`uppercase text-xl transition-colors duration-200 ${
                isBlogHover ? "text-black" : "text-white"
              }`}
            >
              Blog
            </span>
          </Link>
          <div
            className={`bg-violet-500 w-full absolute top-0 right-0 transition-all duration-200 ease-in-out ${
              isBlogHover ? "h-full" : "h-0"
            }`}
          />
        </div>
      </div>

      <div className="w-full h-full mt-70 text-black p-3">
        <div className="w-fulll h-32 flex items-center px-1">
          <h1 className="text-6xl md:text-[10vw] uppercase font-bold">
            Products
          </h1>
          <sup className="-mt-10 md:-mt-20 md:font-extrabold text-xl md:text-4xl">
            07
          </sup>
        </div>
        <div className="w-full max-sm:-mt-8 cardParent">
          <div className="w-full h-75 md:h-120 flex flex-wrap gap-2 cardChild">
            <ProductsCard />
          </div>
        </div>
      </div>
      <div className="bg-black mt-395 md:mt-215 w-full h-180 md:h-120 p-5 flex flex-col justify-between">
        <div className="flex w-full items-center justify-between max-sm:flex-col md:h-auto h-full md:mb-0 mb-10">
          <div className="flex gap-2 items-center justify-center max-sm:-ml-[40%]">
            {socialLinks.map((item, idx) => (
              <a
                href={item.href}
                target="_blank"
                className="rounded-full border-2 border-white w-12 md:w-28 text-center h-7 md:h-16 text-2xl md:text-7xl hover:text-violet-500 hover:border-violet-500 transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
          </div>
          <button className="rounded-full border-2 border-white w-90 text-center h-14 text-6xl hover:text-violet-500 hover:border-violet-500 transition-colors duration-200 flex justify-center items-start gap-2 uppercase cursor-pointer">
            Contact <GiGlassHeart size={48} className="mt-1" />
          </button>
        </div>
        <div className="md:flex w-full justify-between items-center">
          <div className="max-sm:ml-[30%] gap-4 md:gap-8 md:text-xl flex max-sm:mb-3">
            <CiGlobe size={30} className="-mt-2" />
            <div className="flex -mt-1">
              <span>INDIA_</span>
              <span>
                <Time />
              </span>
            </div>
          </div>
          <div className="md:flex uppercase text-[11px] md:text-[16px] w-full md:w-auto md:ml-0 mb-2 md:mb-0 gap-8">
            {footerLinks.map((item, idx) => (
              <a
                href={item.href}
                className="max-sm:w-full hover:text-violet-500 transition-colors duration-200"
              >
                {item.name}
                <br />
              </a>
            ))}
          </div>
          <div className="max-sm:w-full flex justify-center">
            <BackToTop />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

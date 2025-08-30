import { useRef } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navbarViolet = useRef(null);
  return (
    <div className="fixed z-5 w-full h-12 flex justify-between items-center">
      <div className="w-34 p-5 mt-5">
        <Link to="/">
          <img src="/logo.png" className="w-full" alt="Vanta Logo" />
        </Link>
      </div>

      <div
        onMouseEnter={() => {
          navbarViolet.current.style.height = "100%";
        }}
        onMouseLeave={() => {
          navbarViolet.current.style.height = "0%";
        }}
        className="h-full w-52 bg-black relative flex justify-end items-center group"
      >
        <div className="w-18 flex flex-col items-end mr-10 fixed z-10 transition-all duration-200 ease-in-out">
          <div
            className="w-18 mb-1 border-b-2 border-white group-hover:border-black"
          ></div>
          <div className="w-10 border-b-2 border-white group-hover:border-black"></div>
        </div>
        <div
          ref={navbarViolet}
          className="bg-violet-500 w-full h-0  absolute top-0 transition-all duration-100 ease-in-out cursor-pointer"
        ></div>
        <div className="relative"></div>
      </div>
    </div>
  );
};

export default Navbar;

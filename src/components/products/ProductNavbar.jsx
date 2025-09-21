import { useContext } from "react";
import { Link } from "react-router-dom";
import { NavbarContext } from "../../context/Context";

const ProductNavbar = ({ hovered, setHovered }) => {
  const { menuOpen, setMenuOpen } = useContext(NavbarContext);

  return (
    <div className="top-0 absolute z-10 w-full h-12 flex justify-between items-center">
      <div className="w-26 md:w-34 p-5 mt-3">
        <Link to="/">
          <p className="font-[DimitriInverse] text-4xl text-black">Vanta</p>
        </Link>
      </div>

      {/* Hamburger + Violet hover */}
      <div
        className="h-full w-30 md:w-52 bg-black relative flex justify-end items-center cursor-pointer"
        onClick={() => setMenuOpen(true)}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Hamburger lines */}
        <div className="w-18 flex flex-col items-end mr-4 md:mr-10 fixed z-50 transition-all duration-200 ease-in-out">
          <div className={`w-10 md:w-18 mb-1 border-b-2 ${hovered ? "border-black" : "border-white"}`}></div>
          <div className={`w-5 md:w-10 border-b-2 ${hovered ? "border-black" : "border-white"}`}></div>
        </div>

        {/* Violet background */}
        <div
          className={`absolute top-0 left-0 w-full bg-violet-500 transition-all duration-200 ease-in-out ${
            hovered ? "h-32" : "h-0"
          }`}
        ></div>
      </div>
    </div>
  );
};

export default ProductNavbar;

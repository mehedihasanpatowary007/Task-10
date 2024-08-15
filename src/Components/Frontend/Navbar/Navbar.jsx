import { useState } from "react";
import Logo from "../../../assets/logo.jpg";
import menuOpen from '../../../assets/menu.svg'
import menuCross from '../../../assets/cross.svg'
import { RxDashboard } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
import { FiBox, FiShoppingCart, FiUser } from "react-icons/fi";
import { MdOutlineFavoriteBorder } from "react-icons/md";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-white border-2 containers">
      <div className="flex items-center font-medium">
        <div className="z-20 py-5 flex justify-between w-full">
          <div>
            <img src={Logo} alt="logo" className="md:cursor-pointer w-[80px]" />
          </div>
          <div
            className="text-3xl lg:hidden h-10 w-10"
            onClick={() => setOpen(!open)}
          >
            <img src={`${open ? menuCross : menuOpen}`} alt="" />
          </div>
        </div>
        <div className="lg:flex w-full ms-6 justify-between gap-4 hidden uppercase items-center">
          <div className="flex items-center gap-2 bg-[#2877ee] text-white rounded-md px-7 py-3">
            <span className="text-xl">
              <RxDashboard />
            </span>
            <button>Catalog</button>
          </div>
          <div className="bg-[#2877ee] flex items-center p-[3px] rounded-md">
            <select className="outline-none bg-white rounded-s-md px-2 py-[12.5px]">
              <option value="catagories">ALL CATAGORIES</option>
              <option value="catagories">Catagories</option>
              <option value="catagories">Catagories</option>
              <option value="catagories ">Catagories</option>
            </select>
            <div className="py-2 px-2 text-2xl bg-white text-slate-500">|</div>
            <input
              className="outline-none rounded-e-lg ps-2 py-3 w-full"
              type="text"
              placeholder="Search in the market"
            />
            <span className="py-3 px-2 text-2xl text-white">
              <CiSearch />
            </span>
          </div>
          <div className="flex gap-4">
            <div className="navbar_logo">
              <FiBox />
            </div>
            <div className="navbar_logo">
              <MdOutlineFavoriteBorder />
            </div>
            <div className="navbar_logo">
              <FiShoppingCart />
            </div>
            <div className="navbar_logo">
              <FiUser />
            </div>
          </div>
        </div>

        {/* Mobile nav */}
        <div
          className={`
        lg:hidden flex flex-col gap-6 bg-white fixed w-[80%] top-12 bottom-0 px-4 py-4
        duration-500 z-40  ${open ? "left-0" : "left-[-100%]"}
        `}
        >
          <div>
            <img src={Logo} alt="logo" className="md:cursor-pointer h-16" />
          </div>
          <div className="flex items-center gap-2 bg-[#2877ee] text-white rounded-md justify-center py-3">
            <span className="text-xl">
              <RxDashboard />
            </span>
            <button>Catalog</button>
          </div>

          <div className="bg-[#2877ee] flex items-center p-[3px] rounded-md">
            <select className="outline-none bg-white rounded-s-md px-1 py-[12.5px]">
              <option value="catagories">ALL CATAGORIES</option>
              <option value="catagories">Catagories</option>
              <option value="catagories">Catagories</option>
              <option value="catagories ">Catagories</option>
            </select>
            <input
              className="outline-none rounded-e-lg ps-1 py-3 w-full"
              type="text"
              placeholder="Search in the market"
            />
            <span className="py-3 px-1 text-2xl text-white">
              <CiSearch />
            </span>
          </div>

          <div className="flex gap-4">
            <div className="navbar_logo">
              <FiBox />
            </div>
            <div className="navbar_logo">
              <MdOutlineFavoriteBorder />
            </div>
            <div className="navbar_logo">
              <FiShoppingCart />
            </div>
            <div className="navbar_logo">
              <FiUser />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import logo from "../../assets/logo.jpg";
import { RxDashboard } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
import { FiBox, FiShoppingCart, FiUser } from "react-icons/fi";
import { MdOutlineFavoriteBorder } from "react-icons/md";

const Navbar = () => {
  return (
    <div className="containers h-[100px] flex items-center justify-between border-b-2 ">
      <div>
        <img className="h-[65px]" src={logo} alt="" />
      </div>
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
          className="outline-none rounded-e-lg ps-2 py-3 w-60"
          type="text"
          placeholder="Search in the market"
        />
        <span className="py-3 px-4 text-2xl text-white">
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
  );
};

export default Navbar;

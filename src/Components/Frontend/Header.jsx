import { useState } from "react";
import { LuPenLine } from "react-icons/lu";

const delivery = "delivery";
const pickup = "pickup";

const Header = () => {
  const [button, setButton] = useState(delivery);

  return (
    <>
      <div className="containers bg-[#252734] h-[50px] flex justify-between items-center px-8">
        <div className=" flex items-center gap-14">
          <div>
            <ul className="flex text-sm font-semibold w-[175px] bg-gray-700 rounded-lg">
              <button
                onClick={() => {
                  setButton(delivery);
                }}
                className={`px-5 py-1 ${
                  button === delivery ? "bg-white rounded-lg" : "text-white"
                }`}
              >
                Delivery
              </button>

              <button
                onClick={() => {
                  setButton(pickup);
                }}
                className={`px-5 py-1 ${
                  button === pickup ? "bg-white rounded-lg" : "text-white"
                }`}
              >
                Pickup
              </button>
            </ul>
          </div>
          <div className="flex items-center gap-2 text-white">
            <div>
              <h3 className="text-white text-sm">
                Select the delivery address
              </h3>
            </div>
            <select className="bg-gray-700 rounded-lg px-2 outline-none">
              <option className="" value="">
                Select
              </option>
              <option value="dhaka">Dhaka</option>
              <option value="chittagong">Chittagong</option>
              <option value="chandpur">Chandpur</option>
              <option value="rangpur">Rangpur</option>
              <option value="rajshahi">Rajshahi</option>
            </select>
            <div className="text-[20px]">
              <LuPenLine />
            </div>
          </div>
          <div>
            <p className="text-slate-500 text-sm">
              Nearest delivery
              <span className="text-white"> today is 9:00 am - 5:00 pm</span>
            </p>
          </div>
        </div>
        <div className="flex justify-end">
          <h4 className="text-sm text-white">
            + 8801XXXXXXXXX
            <span className="text-slate-500 "> Around the clock</span>
          </h4>
        </div>
      </div>
    </>
  );
};

export default Header;

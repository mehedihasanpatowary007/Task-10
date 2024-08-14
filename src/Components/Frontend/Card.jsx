/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaPlus } from "react-icons/fa";

export default function Card({ card }) {
  const [favColour, setFavColour] = useState(false);
  return (
    <div className="relative bg-slate-100 p-5 flex flex-col justify-between min-h-[370px] min-w-1/3 rounded-md">
      <div
        onClick={() => {
          setFavColour(!favColour);
        }}
        className="text-2xl absolute top-5 right-5 cursor-pointer"
      >
        {/* <MdFavoriteBorder /> */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={`size-7 ${favColour ? "fill-red-600" : "fill-none"}`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
          />
        </svg>
      </div>
      <div
        className="flex flex-col justify-center items-center w
          h-[70%]"
      >
        <img className="w-[250px]" src={card?.image} alt="" />
      </div>
      <div className="flex justify-between items-center mt-4">
        <span className="text-xl font-bold ">
          <h2>{card?.name}</h2>
          <h4>${card?.price}</h4>
        </span>
        <span className="cursor-pointer inline-block text-xl border-2 border-black text-black rounded-[50%] p-1">
          <FaPlus />
        </span>
      </div>
    </div>
  );
}

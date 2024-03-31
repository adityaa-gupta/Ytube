import React from "react";
import { GiHamburgerMenu, GiCancel } from "react-icons/gi";
import { FaYoutube, FaMicrophone, FaBell } from "react-icons/fa";
import { FaCameraRotate } from "react-icons/fa6";
import { IoPerson } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";

export default function Navbar({ view, setView }) {
  return (
    <div className="flex justify-between items-center bg-[#212121] opacity-95 sticky px-6 md:px-14 h-14">
      {/* Left Section */}
      <div className="flex items-center text-xl text-white gap-4">
        {!view ? (
          <GiHamburgerMenu
            className="cursor-pointer"
            onClick={() => setView((val) => !val)}
          />
        ) : (
          <GiCancel
            className="cursor-pointer"
            onClick={() => setView((val) => !val)}
          />
        )}
        <div className="flex items-center gap-2">
          <FaYoutube className="text-2xl text-red-500" />
          <span className="text-xl font-bold">Ytube</span>
        </div>
      </div>

      {/* Center Section */}
      <form className="flex items-center gap-2">
        <div className="flex items-center bg-zinc-900 rounded-full">
          <input
            type="text"
            placeholder="Search"
            className="w-56 md:w-72 bg-zinc-900 text-white px-4 py-2 focus:outline-none rounded-full"
          />
          <button type="submit" className="px-3">
            <CiSearch className="text-white" />
          </button>
        </div>
        <div className="text-white text-xl bg-zinc-900 rounded-full p-2">
          <FaMicrophone />
        </div>
      </form>

      {/* Right Section */}
      <div className="flex items-center gap-4 text-xl">
        <div className="relative">
          <span className="absolute bottom-0 left-1 text-xs bg-red-600 text-white rounded-full px-1">
            +9
          </span>
          <FaBell className="text-white" />
        </div>
        <div className="text-white">
          <FaCameraRotate />
        </div>
        <div className="bg-zinc-900 p-2 text-white rounded-full">
          <IoPerson className="text-3xl" />
        </div>
      </div>
    </div>
  );
}

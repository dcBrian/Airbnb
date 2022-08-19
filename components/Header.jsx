import {
  GlobeAltIcon,
  MenuIcon,
  SearchIcon,
  UserCircleIcon,
} from "@heroicons/react/solid";
import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white p-5 shadow-md md:px-10">
      {/* Left */}
      <div className="relative my-auto flex h-6 cursor-pointer items-center sm:h-10">
        <Image
          src="https://links.papareact.com/qd3"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>

      {/* Middle */}
      <div className="md-shadow-sm flex items-center rounded-full border-gray-300 py-2 shadow-md hover:shadow-lg md:border">
        <input
          className="w-full bg-transparent px-5 text-sm text-gray-600 placeholder-gray-400 outline-none sm:flex-1"
          type="text"
          placeholder="Search..."
        />
        <SearchIcon className="hidden h-8 w-8 cursor-pointer rounded-full bg-red-400 p-2 text-white  md:mx-2 md:inline-flex" />
      </div>

      {/* Right */}
      <div className="flex items-center justify-end space-x-1 text-gray-700 lg:space-x-2">
        <button className="relative flex items-center justify-center rounded-full py-2 px-3 hover:bg-gray-100">
          <p className="hidden cursor-pointer text-xs md:inline lg:text-base ">
            Become a host
          </p>
        </button>

        <button className="relative  rounded-full p-3 hover:bg-gray-100">
          <GlobeAltIcon className="icons-sm" />
        </button>

        <div className="flex items-center space-x-2 rounded-full border border-gray-300 p-2 hover:shadow-md">
          <MenuIcon className="icons-sm" />
          <UserCircleIcon className="icons-md" />
        </div>
      </div>
    </header>
  );
};

export default Header;

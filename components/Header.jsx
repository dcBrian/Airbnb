import { GlobeAltIcon, MenuIcon, SearchIcon, UserCircleIcon } from "@heroicons/react/solid";
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
      <div className="md-shadow-sm flex items-center rounded-full py-2 shadow-md md:border-2">
        <input
          className="w-full bg-transparent px-5 text-sm text-gray-600 placeholder-gray-400 outline-none sm:flex-1"
          type="text"
          placeholder="Search..."
        />
        <SearchIcon className="hidden h-8 w-8 cursor-pointer rounded-full bg-red-400 p-2 text-white hover:bg-red-300 md:mx-2 md:inline-flex" />
      </div>

      {/* Right */}
      <div className="flex items-center justify-end space-x-4 text-gray-400">
        <p className="ml-3 hidden cursor-pointer text-xs hover:text-gray-500 md:inline lg:text-base">
          Become a host
        </p>
        <GlobeAltIcon className="icons " />
        <div className="flex space-x-2 rounded-full border-2 p-2 hover:border-gray-400 ">
          <MenuIcon className="icons" />
          <UserCircleIcon className="icons" />
        </div>
      </div>
    </header>
  );
};

export default Header;

import Image from "next/image";
import React from "react";

const SmallCard = ({ image, location, distance }) => {
  return (
    <div className="m-2 mt-5 flex cursor-pointer items-center space-x-4 rounded-xl transition duration-200 ease-out hover:scale-105 hover:bg-gray-100">
      {/* Left */}
      <div className="relative h-16 w-16 ">
        <Image className="rounded-lg" src={image} layout="fill" objectFit="contain" />
      </div>

      {/* Right */}
      <div>
        <h2>{location}</h2>
        <h3 className="text-gray-500">{distance}</h3>
      </div>
    </div>
  );
};

export default SmallCard;

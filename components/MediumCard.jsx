import Image from "next/image";
import React from "react";

const MediumCard = ({ image, title }) => {
  return (
    <div className="cursor-pointer transition duration-300 ease-out hover:scale-105">
      <div className="relative h-80 w-80 ">
        <Image
          className="rounded-xl"
          src={image}
          layout="fill"
          objectFit="contain"
        />
      </div>
      <h3 className="mt-3 text-2xl">{title}</h3>
    </div>
  );
};

export default MediumCard;

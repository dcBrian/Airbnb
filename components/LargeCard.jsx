import Image from "next/image";
import React from "react";

const LargeCard = ({ image, title, description, buttonText }) => {
  return (
    <div className="relative cursor-pointer py-16">
      <div className="relative h-96 min-w-[300px] ">
        <Image className="rounded-2xl" src={image} layout="fill" objectFit="cover" />
      </div>
      <div className="absolute top-32 left-12">
        <h3 className="mb-3 w-64 text-4xl">{title}</h3>
        <p>{description}</p>
        <button className="mt-5 rounded-lg bg-gray-900 px-4 py-2 text-sm text-white">
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default LargeCard;

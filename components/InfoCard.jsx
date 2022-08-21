import { HeartIcon } from "@heroicons/react/outline";
import { HeartIcon as HeartSolid, StarIcon } from "@heroicons/react/solid";
import Image from "next/image";
import React, { useState } from "react";

const InfoCard = ({
  image,
  location,
  title,
  description,
  star,
  price,
  total,
  search,
  duration,
}) => {
  const [like, setLike] = useState(false);
  return (
    <div className="flex cursor-pointer border-b py-7 px-2 pr-4 transition duration-200 ease-out first:border-t hover:opacity-80 hover:shadow-lg">
      <div className="relative h-24 w-40 flex-shrink-0 md:h-52 md:w-80">
        <Image
          className="rounded-2xl"
          src={image}
          layout="fill"
          objectFit="cover"
        />
      </div>

      <div className="flex flex-grow flex-col pl-5">
        <div className="flex justify-between">
          <p>
            {location}
            {search}
          </p>
          {like ? (
            <HeartSolid
              onClick={() => setLike(false)}
              className="h-7 cursor-pointer text-red-500"
            />
          ) : (
            <HeartIcon
              onClick={() => setLike(true)}
              className="h-7 cursor-pointer"
            />
          )}
        </div>
        <h4 className="text-xl">{title}</h4>
        <div className="w-10 border-b pt-2"></div>
        <p className="flex-grow pt-2 text-sm text-gray-500">{description}</p>
        <div className="flex items-end justify-between pt-5">
          <p className="flex items-center">
            <StarIcon className="h-5 text-red-400" />
            {star}
          </p>
          <div>
            <p className="lg-text-2xl pb-2 text-lg font-semibold">{price}</p>
            <p className="text-right font-extralight">
              £{total * duration} total
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;

import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
      <Image
        src="https://links.papareact.com/0fm"
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute top-2/4 w-full text-center">
        <p className="text-sm font-semibold md:text-lg">
          Not sure where to go? Perfect.
        </p>
        <button className="my-3 rounded-full bg-white px-6 py-3 font-bold text-purple-500 shadow-md transition duration-150 hover:shadow-xl active:scale-90 sm:py-4 sm:px-10">
          I&apos;m flexible
        </button>
      </div>
    </div>
  );
};

export default Banner;

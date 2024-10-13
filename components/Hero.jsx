import React from "react";
import Image from "next/image";

import BackImg from "@/public/background.jpg";
const Hero = () => {
  return (
    <div className="overflow-hidden">
      <div className="h-[80vh] w-full relative flex">
        <Image
          src={BackImg}
          priority={true}
          alt='hero-img'
          className="h-full w-full object-cover px-1 duration-75 py-4 object-left-top  absolute -z-10 rounded-3xl"
        />
        {/* <div className="h-full w-full absolute -z-[-1] bg-red-300 opacity-80"></div> */}
        <div className="flex flex-col h-full w-full items-center md:items-start justify-center px-2 md:p-20 relative">
          <h1 className="text-4xl px-6 text-orange-600 hover:text-orange-800 animate-bounce stroke-black rounded-xl text-center font-bold md:text-left z-10">
            <span>
              Recipe<br></br>
            </span>
            <span>Contest</span>
          </h1>
          <p className="z-10 hidden md:inline w-full px-3 md:max-w-[50%] md:px-6 rounded-xl  font-bold text-center md:text-left">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse
            nesciunt commodi sit neque maxime pariatur impedit dignissimos!
            Dolorem impedi quasi quas veritatis! Dolor non asperiores qui. MD
            breakpoint
          </p>
          <p className="z-10 inline md:hidden mt-2 w-full px-3 md:max-w-[50%] md:px-6 rounded-xl  font-bold text-center md:text-left">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex minima,
            ad voluptatem ipsam veniam suscipit modi tempore asperiores dolores
            numquam! SM breakpoint
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;

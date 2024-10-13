import React from "react";
import Image from "next/image";

import Location from "@/public/location.svg";

const Header = () => {
  return (
    <div className="flex justify-between gap-2 md:gap-0 sm:items-center sm:flex-row  flex-col py-3 bg-gray-50">
      <div className="">
        <h2 className="text-2xl font-semibold">Foodima</h2>
      </div>
      <div className="flex gap-5 md:gap-10 ">
        <h3 className=" hover:scale-105">Shop</h3>
        <h3 className="md:font- hover:scale-105">Features</h3>
        <h3 className="md:font- hover:scale-105">Recipes</h3>
        <h3 className="md:font- hover:scale-105">Hotline</h3>
      </div>
      <div className="md:flex gap-5 items-center hidden ">
        <div className="h-[30px] w-[30px] bg-black rounded-full hover:animate-none hidden md:block md:animate-bounce">
          <Image src={Location} className="p-1 object-cover object-center" alt='location' />
        </div>
        {/* Location Header*/}
        <h3 className="md:font-semibold">Log In</h3>
        <h3 className="transition-all duration-150 px-3 py-1 bg-black hover:bg-white text-white hover:text-black rounded-3xl font-semibold">
          Sign Up
        </h3>
      </div>
    </div>
  );
};

export default Header;

import React from "react";
import Image from "next/image";

import Checkbox from "./ui/checkbox";

import ChefSvg from "@/public/chef.svg";
const Categories = () => {
  return (
    <div className="min-w-[250px] h-full mb-2 bg-gray-300 rounded-xl overflow-hidden mt-2">
      <div className="h-full max-w-[250px] bg-gray-300 p-2 flex items-center justify-start gap-2">
        <h2 className="font-semibold text-lg">Recipes</h2>
        <Image
          src={ChefSvg}
          className="h-[30px] w-[30px] object-center object-cover border-2 border-black rounded-full"
          alt="chef"
        />
      </div>
      <div className="py-2 px-2 pb-3 flex flex-col gap-2">
        <div className="flex items-center space-x-2">
          <Checkbox id="terms" />
          <label
            htmlFor="terms"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Content Winner
          </label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="terms" />
          <label
            htmlFor="terms"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Test Kitchen Approved
          </label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="terms" />
          <label
            htmlFor="terms"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Featured
          </label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="terms" />
          <label
            htmlFor="terms"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Meal
          </label>
        </div>
      </div>
    </div>
  );
};

export default Categories;

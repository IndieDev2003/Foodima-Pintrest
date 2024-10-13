import Image from "next/image";
import React from "react";
import ImgSrc from "@/public/backGround.gif";

const RecipeBox = () => {
  return (
    <div className="hover:scale-125 duration-200 hover:z-20 flex flex-col items-center justify-end w-[240px] max-w-[250px] h-[170px] relative rounded-2xl overflow-hidden border-[3px] border-orange-400">
      <Image
        src={ImgSrc}
              className="absolute -z-10 h-full w-full object-cover object-center blur-sm"
              alt="sample"
      />
      <div className="z-10 h-[50%] w-full p-2 bg-slate-50 spa">
        <h2 className="text-xl">Recipe One</h2>
        <p className="text-sm p-0 mb-2 ">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque,
          debitis?.......
        </p>
      </div>
    </div>
  );
};

export default RecipeBox;

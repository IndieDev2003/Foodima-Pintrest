import React from "react";
import RecipeBox from "./ui/RecipeBox";
import Categories from "./Categories";

const Recipes = () => {
  return (
    // <div className='w-full'>
    //   <div className='flex justify-between items-center'>
    //     <h2>Recipes For You</h2>
    //     <h3>Sorting By <span>Newest</span></h3>
    //   </div>
    //   <div className='flex flex-wrap gap-2 hover:gap-3 transition-all duration-100'>
    //     <RecipeBox/>
    //     <RecipeBox/>
    //     <RecipeBox/>
    //     <RecipeBox/>
    //     <RecipeBox/>
    //     <RecipeBox/>
    //     <RecipeBox/>
    //     <RecipeBox/>
    //   </div>
    // </div>
    <div className="flex gap-4 flex-wrap lg:flex-nowrap ">
      <Categories className="hidden lg:block"/>

      <div className="w-full">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold">Recipes For You</h2>
          <h3 className="hidden sm:block font-semibold text-lg">
            Sorting By <span>Newest</span>
          </h3>
        </div>
        <div className="flex flex-wrap gap-2 transition-all duration-100">
          <RecipeBox />
          <RecipeBox />
          <RecipeBox />
          <RecipeBox />
          <RecipeBox />
          <RecipeBox />
          <RecipeBox />
          <RecipeBox />
        </div>
      </div>
    </div>
  );
};

export default Recipes;

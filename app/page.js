import Image from "next/image";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import Recipes from "@/components/Recipes";

export default function Home() {
  return (
    <div className="px-8  h-[100vh] relative overflow-x-hidden">
      <div className="h-full w-full absolute -z-50 "></div>
      <Header />
      <Hero />

      {/* <Categories /> */}
      <Recipes />
    </div>
  );
}

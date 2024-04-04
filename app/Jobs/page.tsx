
import Hero from "@/components/Hero";
import Img from "@/components/Img";
import Image from "next/image";
import React from "react";

export default function Jobs() {
  return (
    <>
    <Img></Img>
    <section className="max-container padding-container flex flex-col gap-10 py-16 pb-80 md:gap-10 lg:py-20 relative">
    <h1 className="text-center text-4xl bold-52 lg:bold-88">Jobs</h1>
    <p className=" text-xl text-gray-50 xl-max-w-[520px]">In Foxy Voxel we work remotely or in office space in Novi Sad, Serbia. Whatever works best for any team member. There is no overtime and crunch and we cherish our small team culture. </p>
    <h2 className="mt-6 border-b-4 text-2xl">At the moment, Foxy Voxel is not looking to expand the team, nor is offering an internship.</h2>
    </section>
   </>
  )
}
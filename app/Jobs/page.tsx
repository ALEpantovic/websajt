import Hero from "@/components/Hero";
import Img from "@/components/Img";
import Image from "next/image";
import React from "react";
import { JOBS } from "@/constants";
export default function Jobs() {
 return (
    <>
      <Img></Img>
      <section className="max-container padding-container flex flex-col gap-10 py-16 pb-80 md:gap-10 lg:py-20 relative">
        <h1 className="hidden text-center text-4xl bold-52 lg:bold-88">Jobs</h1>
        <p className="text-center text-xl text-gray-50 xl-max-w-[520px]">In Foxy Voxel we work remotely or in office space in Novi Sad, Serbia. Whatever works best for any team member. There is no overtime and crunch and we cherish our small team culture. </p>
        <h2 className="text-center text-3xl mt-6 text-red-600 border-b-4 ">At the moment, Foxy Voxel is not looking to expand the team, nor is offering an internship.<br/><br/><br/>Check back soon and keep an eye on our social media pages for when we open new positions.</h2>
        <ul className="flex flex-row">
          <li className="flex-grow text-2xl text-center">Position</li>
          <li className="flex-grow text-2xl text-center">Discipline</li>
          <li className="flex-grow text-2xl text-center">Location</li>
        </ul>
        <ul className="flex flex-row">
          {JOBS.map((JOBS)=>(
            <>
            <li className="flex-grow text-xl text-center"><p>{JOBS.position}</p></li>
            <li className="flex-grow text-xl text-center"><p>{JOBS.discipline}</p></li>
            <li className="flex-grow text-xl text-center"><p>{JOBS.location}</p></li>
            </>
          ))}
        </ul>
      </section>
    </>
 )
}
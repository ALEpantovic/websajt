import React from "react";
import { MEDIA } from "@/constants";
import Link from "next/link";
import Image from "next/image";

export default function Game() {
 return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 pb-80 flex flex-col gap-10 md:gap-10 lg:py-20 relativeshadow-lg">
      <div className="w-500 h-300 flex justify-center items-center animate-pop-In">
        <Image
        src="roadmap.png"
        alt="Going Medieval roadmap"
        layout="relative"
        width={1000}
        height={1000}
        quality={100}
      />
      </div>
        <h1 className="hidden text-center text-4xl font-bold text-gray-900 lg:text-5xl">Game</h1>
        <div className="flex justify-center items-center p-8">
          <div className="flex flex-col items-center">
            <p className="text-center text-lg text-gray-700 mr-10">
              Discover the thrill of gaming with our latest releases. Going Medieval will be in Early Access for at least a year, allowing us to implement features and determine the end of the Early Access period. Modding will be a significant part of the game, with .json files for gameplay information, Steam Workshop, total conversion mods, and graphical mods available. However, editing these files comes with risks. Additionally, we plan to introduce a relaxed/creative/god mode, allowing players to create custom scenarios and enjoy a peaceful mode without enemy attacks. We also aim to provide access to dev tools for those interested.
            </p>
          </div>
          <ul className="flex flex-col justify-center space-y-4">
            {MEDIA.map((media) => (
              <li key={media.key} className="flex items-center justify-center">
                <Link href={media.link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                 <Image src={media.image} alt={media.key} width={50} height={50} />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
 );
}

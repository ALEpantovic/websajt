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
        src="https://raw.githubusercontent.com/ALEpantovic/websajt/master/public/roadmap.png"
        alt="Going Medieval roadmap"
        layout="relative"
        width={1000}
        height={1000}
        quality={100}
      />
      </div>
        <h1 className="text-center text-4xl font-bold text-gray-900 lg:text-5xl">Game</h1>
        <div className="flex justify-center items-center p-8">
          <div className="flex flex-col items-center">
            <p className="text-center text-lg text-gray-700 mr-10">Discover the thrill of gaming with our latest releases.</p>
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

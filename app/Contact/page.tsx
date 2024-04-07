import Button from "@/components/Button";
import Hero from "@/components/Hero";
import Img from "@/components/Img";
import Image from "next/image";
import React from "react";

export default function Contact() {
 return (
    <>
    <section className="max-container padding-container flex flex-col gap-10 py-16 pb-80 md:gap-10 lg:py-20 relative">
      <div className="w-500 h-300 flex justify-center items-center animate-pop-In">
        <Image
        src="/social-media.png"
        alt="Going Medieval Social"
        layout="relative"
        width={1000}
        height={1000}
        quality={100}
      />
      </div>
      <h1 className="hidden text-center text-4xl bold-52 lg:bold-88">Contact</h1>

    <div className="flex justify-center items-center">
          <div className="flex flex-col items-center">
            <p className="text-center">If you have any questions, suggestions, or just want to chat, feel free to reach out!</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex justify-center">
              <Button type="button" title="Discord" icon="discord.svg" variant="btn_dark_green" />
            </div>
            <div className="flex justify-center">
              <Button type="button" title="Reddit" icon="reddit.svg" variant="btn_dark_green" />
            </div>
          </div>
        </div>
    </section>
    </>
 );
}
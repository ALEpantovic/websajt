import Button from "@/components/Button";
import Hero from "@/components/Hero";
import Img from "@/components/Img";
import Image from "next/image";
import React from "react";

export default function Contact() {
 return (
    <>
    <Img></Img>
    <section className="max-container padding-container flex flex-col gap-10 py-16 pb-80 md:gap-10 lg:py-20 relative">
    <h1 className="text-center text-4xl bold-52 lg:bold-88">Contact</h1>
    <div className="flex justify-center items-center">
          <div className="flex flex-col items-center">
            <p className="text-center">Pajo pakole kad wt.</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex justify-center">
              <Button type="button" title="Button 1" icon="https://raw.githubusercontent.com/ALEpantovic/websajt/master/public/logo_foxy.png" variant="btn_dark_green" />
            </div>
            <div className="flex justify-center">
              <Button type="button" title="Button 2" icon="https://raw.githubusercontent.com/ALEpantovic/websajt/master/public/logo_foxy.png" variant="btn_dark_green" />
            </div>
          </div>
        </div>
    </section>
    </>
 );
}

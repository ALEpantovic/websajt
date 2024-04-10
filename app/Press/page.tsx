
import Hero from "@/components/Hero";
import Img from "@/components/Img";
import Image from "next/image";
import React from "react";
import { PRESS } from "@/constants";
import Link from "next/link";

export default function Press() {
    return (
      <>
        <Img />
        <section className="max-container padding-container flex flex-col gap-10 py-16 pb-80 md:gap-10 lg:py-20 relative">
        <h1 className="text-center text-4xl bold-52 lg:bold-88">Press</h1>
          <ul>
            {PRESS.map((press) => (
              <li key={press.text} className="flex flex-col items-center pt-4">
                <h5 className="text-lg font-medium leading-snug">
                  - {press.text}
                </h5>
                <Link href={press.link}>
                  <h3 className="italic pt-5 mb-2 font-semibold text-lg">
                    {press.reviewer}
                  </h3>
                </Link>
              </li>
            ))}
          </ul>
          
        </section>
      </>
    );
  }
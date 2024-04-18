'use client'
import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS } from "@/constants";
import Button from "./Button";
import React, { useState, useEffect } from "react";
const baseWidth = 200;
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  useEffect(() => {
    if (isMenuOpen) {
       const timeout = setTimeout(() => {
         document.querySelectorAll('.nav-link').forEach((link) => {
           const element = link as HTMLElement;
           element.style.opacity = '1';
           element.style.transition = 'opacity 0.5s ease-out';
         });
       }, 500);
   
       return () => clearTimeout(timeout);
    }
   }, [isMenuOpen]);
  return (
    <div>
      <nav className={`flexBetween max-container padding-container relative z-30 py-5 ${isMenuOpen ? 'menu-open' : ''}` }>
        <Link href="/">
          <Image src="GM_logo_black.png" alt="logo" className="x-0 y-0" width={100} height={50} />
        </Link>
        <ul className={`hidden h-full gap-12 lg:flex ${isMenuOpen ? 'menu-open' : ''}`}>
          {NAV_LINKS.map((link) => (
            <Link
              href={link.href}
              key={link.key}
              className="text-xl text-gray-800 flexCenter cursor-pointer pb-1.5 transition-all hover:text-blue-900 hover:border-b-4 border-blue-900"
            >
              {link.label}
            </Link>
          ))}
        </ul>
        <div className="lg:flexCenter hidden">
          <Link  href="/Game">
          <Button type="button"  title="Get the game!" icon="logo_foxy.png" variant="btn_dark_green" />
         </Link>
        </div>
        <button
          onClick={toggle}
          className={`origin-top lg:hidden flex-col justify-center items-center ${isMenuOpen ? 'animate-open-burger' :''}`}
        >
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </button>
      </nav>
      {isMenuOpen && (
 <div
    className={`bg-burger-image lg:hidden flex flex-col fixed right-0 bottom-0 top-20 left-0 p-4 z-40 transition-opacity duration-500 ease-in-out ${isMenuOpen ? 'opacity-100' : 'opacity-0'}`}
    style={{ backgroundImage: `url('imgBurger.webp')`, backgroundSize: '100% auto', backgroundRepeat: 'no-repeat' }}
>
    <ul className="gap-20 space-y-0 z-30">
      {NAV_LINKS.map((link, index) => (
        <li key={link.key} className="block animate-slide-in-right opacity-0" style={{ animationDelay: `${index * 0.5}s` }}>
          <Link
            href={link.href}
            className="nav-link w-full sm:w-full md:w-[200px] mb-1 regular-26 xs:regular-32 sm:regular-50 text-white flexCenter cursor-pointer p-3 bg-black hover:text-blue-800 hover:bg-gray-200 bg-opacity-50 shadow-md"
            onClick={toggle}
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
 </div>
)}
    </div>
  );
};

export default Navbar;

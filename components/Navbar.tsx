'use client'
import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS } from "@/constants";
import Button from "./Button";
import React, { useState, useEffect } from "react";

const Navbar = () => {
 const [isMenuOpen, setIsMenuOpen] = useState(false);

 const toggle = () => {
    setIsMenuOpen(!isMenuOpen);
 };
 return (
    <div>
      <nav className={`flexBetween max-container padding-container relative z-30 py-5 ${isMenuOpen ? 'menu-open' : ''}`} itemScope itemType="http://schema.org/SiteNavigationElement">
        <Link href="/">
          <Image src="https://raw.githubusercontent.com/ALEpantovic/websajt/master/public/GM_logo_black.png" alt="logo" className="x-0 y-0" width={100} height={50} itemProp="logo" />
        </Link>
        <ul className={`hidden h-full gap-12 lg:flex ${isMenuOpen ? 'menu-open' : ''}`} itemProp="name">
          {NAV_LINKS.map((link) => (
            <Link
              href={link.href}
              key={link.key}
              className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
              itemProp="url"
            >
              {link.label}
            </Link>
          ))}
        </ul>
        <div className="lg:flexCenter hidden">
          <Link href="/Game">
            <Button type="button" title="ORDER HERE!" icon="https://raw.githubusercontent.com/ALEpantovic/websajt/master/public/logo_foxy.png" variant="btn_dark_green"  />
          </Link>
        </div>
        <button
          onClick={toggle}
          className={`origin-top lg:hidden flex-col justify-center items-center ${isMenuOpen ? 'animate-open-burger' :''}`}
          itemProp="toggleButton"
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
        <div className={`bg-white lg:hidden animate-slide-in-right fixed top-20 right-0 p-4 z-40`} itemScope itemType="http://schema.org/SiteNavigationElement">
          <ul className="gap-20" itemProp="name">
            {NAV_LINKS.map((link) => (
              <Link
                href={link.href}
                key={link.key}
                className="regular-16 text-gray-50 flexCenter cursor-pointer p-3 transition-all hover:font-bold"
                itemProp="url"
              >
                {link.label}
              </Link>
            ))}
          </ul>
        </div>
      )}
    </div>
 );
};

export default Navbar;
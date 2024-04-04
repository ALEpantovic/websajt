import React from 'react';
import Image from 'next/image';
import { NAV_LINKS, MEDIA } from "@/constants";
import Link from 'next/link';

const Footer = () => {
 return (
    <footer className="bg-footer-image bg-cover bg-center py-8 px-4 sm:px-6 lg:px-8 mt-auto">
      <div className="container mx-auto space-y-4">
        <div className="flex justify-center space-x-10">
          {MEDIA.map((media) => (
            <Link href={media.link} target="_blank" key={media.key} className="flex items-center justify-center">
                <Image src={media.image} alt={media.key} width={50} height={50} />
            </Link>
          ))}
        </div>
        <div className="flex flex-wrap justify-between items-center">
          <ul className="gap-20 flex flex-row xs:gap-1 sm:gap-1 items-center">
            {NAV_LINKS.map((link) => (
              <Link href={link.href} key={link.key} className="text-xl regular-16 text-white flexCenter cursor-pointer p-3 transition-all hover:font-bold">
                 <p className='p-5 text-xl border-r-2'>{link.label}</p>
              </Link>
            ))}
          </ul>
        </div>
        <div className="text-center">
          <p className="text-base text-white font-light">
            Going Medieval | Copyright &copy; {new Date().getFullYear()} Foxy Voxel. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
 );
};

export default Footer;
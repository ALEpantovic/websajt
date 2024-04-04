import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Img = () => {
  return (
    <div className="relative w-full max-container padding-container  flex flex-col gap-20 md:gap-28">
      <Image
        src="/bgimg.png"
        alt="Going Medieval background"
        layout={responsive}
        width={500} 
        height={400}
        className="rounded-md sm:w-full md:w-full lg:w-full xl:w-1/2"
        unoptimized={true}
      />
    </div>
  );
}

export default Img;

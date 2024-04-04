'use client'
import { FEATURES } from '@/constants';
import Image from 'next/image';
import React, { useState, useEffect, useRef } from 'react';

const Hero = () => {
 const [visibleFeatures, setVisibleFeatures] = useState<string[]>([]);
 const [animatedFeatures, setAnimatedFeatures] = useState<string[]>([]);
 const ulRef = useRef<HTMLUListElement>(null);

 useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !animatedFeatures.includes(entry.target.id)) {
          setVisibleFeatures((prevVisible) => [...prevVisible, entry.target.id]);
          setAnimatedFeatures((prevAnimated) => [...prevAnimated, entry.target.id]);
        } else if (!entry.isIntersecting) {
          setVisibleFeatures((prevVisible) => prevVisible.filter(id => id !== entry.target.id));
        }
      });
    });

    const featureItems = ulRef.current?.querySelectorAll('.feature');
    if (featureItems && featureItems.length > 0) {
      featureItems.forEach((item) => {
        observer.observe(item);
      });

      return () => {
        featureItems.forEach((item) => {
          observer.unobserve(item);
        });
      };
    }
 }, [animatedFeatures]);

  return (
    <section className="max-container padding-container flex flex-col gap-20 py-16 pb-80 md:gap-28 lg:py-40 relative">
      <div>
        <h1 className="text-center z-10 text-4xl bold-52 lg:bold-88">GOING MEDIEVAL</h1>
        <p className='text-xl mt-6 text-gray-50 xl-max-w-[520px]'>Stake your claim in this colony building sim and survive a turbulent Medieval age. Construct a multi-storey fortress in a land reclaimed by wilderness, defend against raids, and keep your villagers happy as their lives are shaped by the world.</p>
      </div>
      <div className="relative overflow-hidden" style={{ paddingBottom: '56.25%' }}>
        <iframe
          className="absolute top-0 left-0 w-full h-full z-10"
          loading="lazy"
          src="https://www.youtube.com/embed/Wy_rW95WtmA?si=OI_djdExNZwHvvnG"
          title="Going Medieval video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          aria-label="Going Medieval video"
        />
      </div>
      <ul ref={ulRef}>
        {FEATURES.map((feature) => (
           <li key={feature.id} id={feature.id} className={`feature flex flex-col items-center pt-4 ${visibleFeatures.includes(feature.id) ? 'animate-slide-in-left' : ''}`}>
            {feature.link && (
              <Image
                src={feature.link}
                alt={feature.text}
                width={1080}
                height={680}
                className="mb-4 mx-auto"
              />
            )}
            <h2 className='mt-10 mb-5 text-3xl bold-30 lg:bold-52'>{feature.label}</h2>
            <p className="text-2xl border-b-4 p-4 text-gray-700 mb-5">
              {feature.text}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Hero;
'use client'
import { FEATURES } from '@/constants';
import Image from 'next/image';
import React, { useState, useEffect, useRef } from 'react';

const Hero = () => {
 const [animatedFeatures, setAnimatedFeatures] = useState<string[]>([]);
 const ulRef = useRef<HTMLUListElement>(null);
 const isEvenIndex = (index: number) => index % 2 === 0;
 const excludedFeatureId = '1';
 useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !animatedFeatures.includes(entry.target.id)) {
          setAnimatedFeatures((prevAnimated) => [...prevAnimated, entry.target.id]);
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
    <section className="max-container padding-container flex flex-col gap-20 py-16 md:gap-28 lg:py-40 relative" itemScope itemType="http://schema.org/WebPage">
      <div>
        <h1 className="hidden text-center z-10 text-4xl bold-52 lg:bold-88" itemProp="headline">GOING MEDIEVAL</h1>
        <p className='text-center text-3xl mt-6 text-gray-50 xl-max-w-[520px]' itemProp="description">Stake your claim in this colony building sim and survive a turbulent Medieval age. Construct a multi-storey fortress in a land reclaimed by wilderness, defend against raids, and keep your villagers happy as their lives are shaped by the world.</p>
      </div>
      <div className="relative overflow-hidden" style={{ paddingBottom: '56.25%' }}>
        <iframe
          className="absolute top-0 left-0 w-full h-full z-10"
          loading="lazy"
          src="https://www.youtube.com/embed/ymZBKDJeKEk?si=3UHNFIApd1ATcnCC"
          title="Going Medieval video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          aria-label="Going Medieval video"
          itemProp="video"
        />
      </div>

     <div className="relative z-10 flex flex-wrap">
        <div className="absolute inset-0 bg-hero-img opacity-50 z-[-1] bg-no-repeat" />
        <ul ref={ulRef} itemProp="mainEntity" itemScope itemType="http://schema.org/ItemList">
          {FEATURES.map((feature, index) => (
            <>
            {isEvenIndex(index)&&(
              <div>
                <li
              key={feature.id}
              id={feature.id}
              className={`feature flex flex-col w-[100%] md:w-[50%] items-center pr-4 pt-4
                ${ animatedFeatures.includes(feature.id)  ? 'animate-slide-in-left' : '' } `}
              itemProp="itemListElement"
              itemScope
              itemType="http://schema.org/CreativeWork"
              style={{ 
                float:  'left', }}
            >
              {feature.link && (
                <Image
                 src={feature.link}
                 alt={feature.text}
                 width={1080}
                 height={680}
                 className="mb-4 mx-auto"
                 itemProp="image"
                />
              )}
              <h2 className="mt-10 mb-5 text-3xl bold-30 lg:bold-52" itemProp="name">{feature.label}</h2>
              <p className="text-3xl border-b-4 p-4 text-sky-950 mb-5" itemProp="description">
                {feature.text}
              </p>
            </li>
              </div>
            )}
            {!isEvenIndex(index)&&(
              <div><li
              key={feature.id}
              id={feature.id}
              className={`feature flex flex-col w-[100%] md:w-[50%] items-center pr-4 pt-4
              ${ animatedFeatures.includes(feature.id)  ? 'animate-slide-in-right' : '' } `}
              itemProp="itemListElement"
              itemScope
              itemType="http://schema.org/CreativeWork"
              style={{ 
                float:'right'
              }}
            >
              {feature.link && (
                <Image
                 src={feature.link}
                 alt={feature.text}
                 width={1080}
                 height={680}
                 className="mb-4 mx-auto"
                 itemProp="image"
                />
              )}
              <h2 className="mt-10 mb-5 text-3xl bold-30 lg:bold-52" itemProp="name">{feature.label}</h2>
              <p className="text-3xl border-b-4 p-4 text-sky-950 mb-5" itemProp="description">
                {feature.text}
              </p>
            </li>
              </div>
            )}
         </> ))}
        </ul>
      </div>
    </section>
 );
};

export default Hero;

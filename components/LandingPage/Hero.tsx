import React from 'react';
import Image from 'next/image';
import IconButtonHref from '../Buttons/IconButtonHref';
import SearchHomePage from './ SearchHomePage';
import Banner from "@/public/images/landingPage/Rectangle 23803.png"


const Hero: React.FC = () => {
  return (
    <section className="relative w-full mt-[3rem] overflow-hidden bg-center bg-cover py-20 md:py-28">
      {/* Background Image */}
      <Image
        src={Banner}
        alt="Hero Image"
        placeholder="blur"
        fill
        objectFit="cover"
        className="absolute inset-0"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="container mx-auto px-4 text-white relative z-10">
        <div className="max-w-2xl">
          {/* Heading */}
          <h1 className="mb-4 text-3xl font-extrabold md:text-4xl xl:text-5xl text-left">
            Unlock Your Dream
            <br />
            Home Now!
          </h1>
          {/* Paragraph */}
          <p className="mb-6 text-lg leading-relaxed md:text-xl text-left">
            PrimeReserved—Your Ultimate Destination for Outstanding Website
            Designs and Seamless Application Developments. Your satisfaction is
            our prime reserve!
          </p>
          {/* Contact Button */}
          <IconButtonHref
            text="Find Property"
            href="/property"
          />
        </div>
      </div>
      <SearchHomePage />

    </section>
  );
};

export default Hero;
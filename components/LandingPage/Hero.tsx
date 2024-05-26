import React, { Suspense } from 'react';
import Image from 'next/image';
import IconButtonHref from '../Buttons/IconButtonHref';
import SearchHomePage from './ SearchHomePage';
import Banner from "@/public/images/landingPage/Rectangle 23803.png"
import { usePropertyContext } from "@/context/PropertyContext";
import Loading from '@/app/loading';

const Hero: React.FC = () => {

  const { properties, setProperties } = usePropertyContext();
  // console.log(properties)
  const uniqueTypes = [...new Set(properties.map(property => property.propertyType))];
  const uniqueLocations = [...new Set(properties.map(property => property.location))];
  const uniqueBudget = [...new Set(properties.map(property => property.budget))];

  const filterProperties = (
    selectedTypes: string,
    selectedLocations: string,
    selectedBudget: string,
  ) => {
    let filteredProperties = properties;
    console.log("Selected Values:", selectedTypes, selectedLocations, selectedBudget);
    if (selectedTypes) {
      filteredProperties = filteredProperties.filter(property => property.propertyType === selectedTypes);
      console.log("After Type Filter:", filteredProperties);
    }
    if (selectedLocations) {
      filteredProperties = filteredProperties.filter(property => property.location === selectedLocations);
      console.log("After Location Filter:", filteredProperties);
    }
  
    if (selectedBudget) {
      filteredProperties = filteredProperties.filter(property => property.budget === (selectedBudget));
      console.log("After Budget Filter:", filteredProperties);
    }
    console.log(`Filtered Properties:`, filteredProperties);
    setProperties(filteredProperties);
  };

  return (
    <section className="relative w-full mt-[6.5rem] overflow-hidden bg-center bg-cover py-20 md:py-28 " >
      {/* Background Image */}
      <Suspense fallback={<Loading />}>
      <Image
        src="https://res.cloudinary.com/dzd51q99i/image/upload/v1716402146/houvincity/landing-page/Rectangle_23803_jhw5qg.png"
        alt="Hero Image"
        placeholder="blur"
        fill
        className="absolute inset-0"
        priority
      />
      </Suspense>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="container mx-auto px-4 pt-10 text-white relative z-10">
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
      <SearchHomePage
        filterProperties={filterProperties}
        uniqueTypes={uniqueTypes}
        uniqueLocations={uniqueLocations}
        uniqueBudget={uniqueBudget}
       />
    </section>
  );
};

export default Hero;
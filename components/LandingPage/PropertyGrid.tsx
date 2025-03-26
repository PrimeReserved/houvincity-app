'use client';

import { useState } from 'react';
import clsx from 'clsx';
import PropertyHomeCard from '@/components/LandingPage/PropertyHomeCard';
import { Property } from '@/typings';

interface PropertiesProps {
  properties: Property[];
}

export default function PropertyGrid({
  properties,
}: Readonly<PropertiesProps>) {
  const [isLandActive, setIsLandActive] = useState(true);

  const handlePropertyTypeChange = (type: string) => {
    setIsLandActive(type === 'Estate');
  };

  const filteredProperties = properties
    .filter((property: Property) =>
      isLandActive
        ? property.propertyType === 'Estate'
        : property.propertyType === 'House'
    )
    .slice(0, 3);

  return (
    <>
      <div className="flex justify-center">
        <div className="flex gap-5 justify-center bg-white drop-shadow-lg px-5 py-5 md:py-10 md:px-5">
          <button
            className={clsx(
              '  w-[130px] md:w-[200px] px-2 py-2 md:py-3 md:px-[3.5rem] border-[1px]  rounded-md text-xs  ',
              {
                'bg-primary text-white': isLandActive,
                'bg-white text-primary': !isLandActive,
              }
            )}
            onClick={() => handlePropertyTypeChange('Land')}
          >
            Land
          </button>
          <button
            className={clsx(
              ' w-[130px] md:w-[200px] px-2 py-2 md:py-3 md:px-[3.5rem] border-[1px]  rounded-md text-xs  ',
              {
                'bg-primary text-white': !isLandActive,
                'bg-white text-primary': isLandActive,
              }
            )}
            onClick={() => handlePropertyTypeChange('House')}
          >
            Smart Homes
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 xl:mx-[20rem] lg:mx-[10rem] md:mx-[5rem] mx-[0.3rem]  gap-[6rem] lg:gap-10 mt-[5rem] ">
        {filteredProperties?.map((property: Property) => (
          <PropertyHomeCard key={property._id} property={property} />
        ))}
      </div>
    </>
  );
}

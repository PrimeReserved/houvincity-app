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
  const [activePropertyType, setActivePropertyType] = useState(
    'Commercial Property'
  );

  const handlePropertyTypeChange = (type: string) => {
    setActivePropertyType(type);
  };

  const filteredProperties = properties
    .filter(
      (property: Property) => property.propertyType === activePropertyType
    )
    .sort((a: Property, b: Property) => {
      // Sort by soldOut status: false (available) comes first, then true (sold out)
      return Number(a.soldOut || false) - Number(b.soldOut || false);
    })
    .slice(0, 3);

  const propertyTypes = [
    { key: 'Commercial Property', label: 'Commercial' },
    { key: 'Estate', label: 'Land' },
    { key: 'House', label: 'Smart Homes' },
  ];

  return (
    <>
      <div className="flex justify-center">
        <div className="flex gap-5 justify-center bg-white drop-shadow-lg px-5 py-5 md:py-10 md:px-5">
          {propertyTypes.map(({ key, label }) => (
            <button
              key={key}
              className={clsx(
                'w-[130px] md:w-[200px] px-2 py-2 md:py-3 md:px-[3.5rem] border-[1px] rounded-md text-xs',
                {
                  'bg-primary text-white': activePropertyType === key,
                  'bg-white text-primary': activePropertyType !== key,
                }
              )}
              onClick={() => handlePropertyTypeChange(key)}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 xl:mx-[20rem] lg:mx-[10rem] md:mx-[5rem] mx-[0.3rem] gap-[6rem] lg:gap-10 mt-[5rem]">
        {filteredProperties?.map((property: Property) => (
          <PropertyHomeCard key={property._id} property={property} />
        ))}
      </div>
    </>
  );
}

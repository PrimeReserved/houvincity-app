"use client";

import { useState } from "react";
import clsx from "clsx";
import PropertyHomeCard from "@/components/LandingPage/PropertyHomeCard";

const PropertyToggle = ({ properties }: any) => {
  const [isLandActive, setIsLandActive] = useState(true);

  const handlePropertyTypeChange = (type: string) => {
    setIsLandActive(type === "Land");
  };

  return (
    <div className="">
      <div className="flex gap-5 justify-center bg-white drop-shadow-lg px-5 py-5 md:py-10 md:px-5">
        <button
          className={clsx(
            "  w-[130px] md:w-[200px] px-2 py-2 md:py-3 md:px-[3.5rem] border-[1px]  rounded-md text-xs  ",
            {
              "bg-primary text-white": isLandActive,
              "bg-white text-primary": !isLandActive,
            }
          )}
          onClick={() => handlePropertyTypeChange("Land")}
        >
          Land
        </button>
        <button
          className={clsx(
            " w-[130px] md:w-[200px] px-2 py-2 md:py-3 md:px-[3.5rem] border-[1px]  rounded-md text-xs  ",
            {
              "bg-primary text-white": !isLandActive,
              "bg-white text-primary": isLandActive,
            }
          )}
          onClick={() => handlePropertyTypeChange("House")}
        >
          Smart Homes
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-[5rem]">
        {properties
          .filter((property: any) =>
            isLandActive ? property.type === "Land" : property.type === "House"
          )
          .map((property: any) => (
            <PropertyHomeCard key={property._id} property={property} />
          ))}
      </div>
    </div>
  );
};

export default PropertyToggle;

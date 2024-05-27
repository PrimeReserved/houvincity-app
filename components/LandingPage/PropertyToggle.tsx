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
    <>
      <div className="flex gap-3 md:gap-5 justify-center bg-white drop-shadow-lg py-10 md:w-[400px] w-[350px]">
        <button
          className={clsx(
            "py-3 px-[3.5rem] border-[1px] border-primary rounded-md text-xs",
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
            "py-3 px-[3rem] border-[1px] border-primary rounded-md text-xs",
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
    </>
  );
};

export default PropertyToggle;

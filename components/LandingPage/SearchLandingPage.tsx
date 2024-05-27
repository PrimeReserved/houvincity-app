"use client";

import { Suspense, useState } from "react";
import ErrorBoundary from "@/components/ErrorBoundary";

import SearchHomePage from "./ SearchHomePage";
import { usePropertyContext } from "@/context/PropertyContext";
// import Land from "../Property/Land";
import Loading from "@/app/loading";
import PropertyCard from "@/components/Property/PropertyCard"
import Link from "next/link";

const SearchLandingPage: React.FC = () => {
  const { properties, setProperties } = usePropertyContext();
  const [error, setError] = useState<Error | null>(null);

  const limitedProperties = properties.slice(0, 12);

  console.log(properties);

  return (
    <div className="mt-[10rem]">
      <SearchHomePage />

      <div className="mt-12 mx-[1.5rem] md:mx-[5rem]">
        <h1 className="text-base md:text-2xl">
          {`lands for Sale in Abuja, Nigeria`}
        </h1>

        <div className="flex gap-5 mt-4 justify-between lg:justify-normal">
          <p className="text-customTextColor text-sm md:text-base">
            {`50 Lands Available`}
          </p>

          <div className="flex gap-1">
            <p className="text-customTextColor text-sm md:text-base">Sort by</p>
            <select
              name="sort-by"
              id="sort-by"
              className="text-sm md:text-base"
            >
              <option value={`Land`}>Land</option>
            </select>

            <select name="" id="" className="text-sm md:text-base">
              <option value="Relevant Listing">Relevant Listing</option>
              <option value="Newest Listings  ">Newest Listings</option>
              <option value="Lowest Pricing  ">Lowest Pricing</option>
              <option value="Highest Pricing  ">Highest Pricing</option>
            </select>
          </div>
        </div>
      </div>

      <div className="px-10">
        <div className="wrapper mt-[3rem] mb-[5rem]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-[5rem] ">
            <ErrorBoundary>
              {limitedProperties.map((property: any) => (
                <PropertyCard key={property._id} property={property} />
              ))}
            </ErrorBoundary>
          </div>

          <div className="flex justify-center mt-10">
            <Link href="/property">
              <button className="py-3 px-[3.5rem] border-[1px] border-primary rounded-md text-xs text-primary ">
                View All
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchLandingPage;

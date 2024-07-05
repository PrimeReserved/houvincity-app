"use client";

import { Suspense, useCallback, useEffect, useMemo, useState } from "react";
import ErrorBoundary from "@/components/ErrorBoundary";

// import Land from "../Property/Land";
import Loading from "@/app/loading";
import PropertyCard from "@/components/Property/PropertyCard"
import Link from "next/link";
import { Property } from "@/typings";

interface SearchResultProps {
  searchResults: Property[];
}

export default function SearchLandingPageResult ({ searchResults }: Readonly<SearchResultProps>) {
  
  console.log({ searchResults })
  // Function to calculate totals and unique counts
const calculateCounts = (data: any[]) => {
  // Calculate total counts
  const totalCounts = {
    totalProperties: data.length,
    totalLocations: data.filter(item => item.location).length,
    totalPropertyTypes: data.filter(item => item.propertyType).length,
  };

  // Calculate unique counts
  const uniqueLocations = new Set(data.map(item => item.location).filter(Boolean)).size;
  
  const uniquePropertyTypes = new Set(data.map(item => item.propertyType).filter(Boolean)).size;

  return { totalCounts, uniqueCounts: { uniqueLocations, uniquePropertyTypes }};
};

// Usage example
const { totalCounts, uniqueCounts } = calculateCounts(searchResults);
console.log('Total Numbers:');
console.log(`Total Properties: ${totalCounts.totalProperties}`);
console.log(`Total Locations: ${totalCounts.totalLocations}`);
console.log(`Total Property Types: ${totalCounts.totalPropertyTypes}`);

console.log('\nUnique Numbers:');
console.log(`Unique Locations: ${uniqueCounts.uniqueLocations}`);
console.log(`Unique Location: ${new Set(searchResults.map(item => item.location))}`);
console.log(`Unique Property Types: ${uniqueCounts.uniquePropertyTypes}`);
 

  if (!Array.isArray(searchResults) || searchResults.length === 0) {
    return (
      <div className="glass flex justify-center items-center h-[20rem]">
        <h1 className="text-customTextColor text-3xl px-10">
          There is no event 
        </h1>
      </div>
    );
  }


  return (
    <div className="mt-[10rem]">
      {/* <SearchHomePage /> */}

      <div className="mt-12 mx-[1.5rem] md:mx-[5rem]">
        <h1 className="text-customPrimary md:text-2xl">
          {"Lands for sale in Abua, Nigeria"}
        {/* {`${propertyType} for Sale in ${location}`} */}
        </h1>

        <div className="flex gap-5 mt-4 justify-between lg:justify-normal">
          <p className="text-customTextColor text-sm md:text-base">
           50 Lands Available
          {/* {`${uniqueCounts.uniquePropertyTypes} ${uniqueCounts.uniquePropertyTypes}s Available`} */}
          </p>

          <div className="flex gap-1">
            <p className="text-customTextColor text-sm md:text-base">Sort by</p>
            

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
             <Suspense fallback={<Loading />}>
             {searchResults?.map((property: any) => (
                <PropertyCard key={property._id} property={property} />
              ))}
             </Suspense>
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
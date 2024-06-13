"use client";

import { Suspense, useCallback, useEffect, useMemo, useState } from "react";
import ErrorBoundary from "@/components/ErrorBoundary";

import SearchHomePage from "./ SearchHomePage";
import { usePropertyContext } from "@/context/PropertyContext";
// import Land from "../Property/Land";
import Loading from "@/app/loading";
import PropertyCard from "@/components/Property/PropertyCard"
import Link from "next/link";
import Fuse from "fuse.js";

const SearchLandingPage: React.FC = () => {
  const { properties } = usePropertyContext();
  const [searchResults, setSearchResults] = useState(properties);
  const [sortCriteria, setSortCriteria] = useState<string>("Relevant Listing");
  const [propertyType, setPropertyType] = useState<string>("Lands");
  const [location, setLocation] = useState<string>("Abuja, Nigeria");
  const [error, setError] = useState<Error | null>(null);

  const fuse = useMemo(() => {
    return new Fuse(properties, {
      keys: ["propertyType", "location", "budget"],
      includeMatches: true,
      threshold: 0.3,
    });
  }, [properties]);

  const handleSearch = useCallback(() => {
    const results = fuse.search(""); // Initially search with an empty string to get all results
    setSearchResults(results.map(result => result.item));
  }, [fuse]);

  const handleSort = useCallback((criteria: string) => {
    let sortedResults = [...searchResults];
    switch (criteria) {
      case "Newest Listings":
        sortedResults.sort((a: any, b: any) => new Date(b.date).getTime() - new Date(a.date).getTime());
        break;
      case "Lowest Pricing":
        sortedResults.sort((a: any, b: any) => a.budget - b.budget);
        break;
      case "Highest Pricing":
        sortedResults.sort((a: any, b: any) => b.budget - a.budget);
        break;
      default:
        // Relevant Listing or any other default sort criteria
        break;
    }
    setSearchResults(sortedResults);
  }, [searchResults]);
  
  useEffect(() => {
    handleSearch();
  }, [properties, handleSearch]);

  useEffect(() => {
    handleSort(sortCriteria);
  }, [sortCriteria, handleSort]);
  const limitedProperties = properties.slice(0, 12);

  return (
    <div className="mt-[10rem]">
      <SearchHomePage />

      <div className="mt-12 mx-[1.5rem] md:mx-[5rem]">
        <h1 className="text-base md:text-2xl">
        {`${propertyType} for Sale in ${location}`}
        </h1>

        <div className="flex gap-5 mt-4 justify-between lg:justify-normal">
          <p className="text-customTextColor text-sm md:text-base">
          {`${searchResults.length} ${propertyType} Available`}
          </p>

          <div className="flex gap-1">
            <p className="text-customTextColor text-sm md:text-base">Sort by</p>
            <select
              name="sort-by"
              id="sort-by"
              className="text-sm md:text-base"
              onChange={(e) => setSortCriteria(e.target.value)}
            >
              <option value={`Land`}>Land</option>
              <option value={`House`}>House</option>
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
             <Suspense fallback={<Loading />}>
             {limitedProperties.map((property: any) => (
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

export default SearchLandingPage;

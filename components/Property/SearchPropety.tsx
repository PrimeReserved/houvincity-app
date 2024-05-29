"use client"

import { useState, useEffect, useCallback, useMemo } from "react";
import Fuse from "fuse.js";
import { HiSearch } from "react-icons/hi";
import PropertyCard from "./PropertyCard";
import { Property } from "@/typings";



const SearchProperty = ({ properties }:any ) => {
  const [searchResults, setSearchResults] = useState(properties);
  const [propertyType, setPropertyType] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [propertySize, setPropertySize] = useState("");
  const [budget, setBudget] = useState("");

  const fuse = useMemo(() => {
    return new Fuse(properties, {
      keys: ["propertyType", "location", "propertySize", "budget"],
      includeMatches: true,
      threshold: 0.3,
    });
  }, [properties]);


  const handleSearch = useCallback(() => {
    let results: any = properties;

    if (propertyType || location) {
      const searchOptions: any = {};
      if (propertyType) searchOptions.propertyType = propertyType;
      if (location) searchOptions.location = location;

      const fuseResults = fuse.search(searchOptions);
      results = fuseResults.map(result => result.item);
    }

    if (propertySize) {
      const [minSize, maxSize] = propertySize.split(" - ").map(size => parseInt(size.replace('sqft', '').trim()));
      results = results.filter((property: any) => property.propertySize >= minSize && property.propertySize <= maxSize);
    }

    if (budget) {
      const [minBudget, maxBudget] = budget.split(" - ").map(b => parseInt(b.replace('N', '').replace(',', '').trim()));
      results = results.filter((property: any) => property.budget >= minBudget && property.budget <= maxBudget);
    }

    setSearchResults(results);
  }, [properties, propertyType, location, propertySize, budget, fuse]);

  useEffect(() => {
    handleSearch();
  }, [propertyType, location, propertySize, budget, handleSearch]);

  if (!Array.isArray(searchResults) || searchResults.length === 0) {
    return (
      <div className="flex justify-center items-center h-[20rem]">
        <h1 className="text-customTextColor text-4xl px-10">
          There is currently no available property listing for now, kindly check
          back later
        </h1>
      </div>
    );
  }

  return (
    <>
    <div className="flex flex-col justify-center items-center -mt-10 mx-2">
      <div className="w-[100%] md:w-[80%] lg:h-[117px] md:h-[90px] h-[80px] bg-white shadow-lg rounded-lg flex items-center justify-evenly gap-2 px-2 pr-5">
        <div className="relative">
          <select
            className="select select-bordered mx-2 py-2 w-full max-w-xs"
            value={propertyType}
            onChange={(e) => setPropertyType(e.target.value)}
          >
            <option disabled value="">Property Type</option>
            <option value="House">House</option>
            <option value="Land">Land</option>
          </select>
        </div>
        <div className="relative">
          <select
            className="select select-bordered mx-2 py-2 w-full max-w-xs"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          >
            <option disabled value="">Location</option>
            <option value="Abuja">Abuja</option>
            <option value="Port Harcourt">Port Harcourt</option>
            <option value="Lagos">Lagos</option>
          </select>
        </div>
        <div className="relative">
          <select
            className="select select-bordered mx-2 py-2 w-full max-w-xs"
            value={propertySize}
            onChange={(e) => setPropertySize(e.target.value)}
          >
            <option disabled value="">
              Property Size
            </option>
            <option value="200 - 500">200sqft - 500sqft</option>
            <option value="500 - 1000">500sqft - 1000sqft</option>
            <option value="1000 - 10000">1000sqft - 10000sqft</option>
          </select>
        </div>
        <div className="relative">
          <select
            className="select select-bordered select:bg-[#040A3B] mx-2 py-2 w-full max-w-xs"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
          >
            <option disabled value="">
              Budget
            </option>
            <option value="200000 - 500000">N200,000 - N500,000</option>
            <option value="500000 - 2000000">N500,000 - N2,000,000</option>
            <option value="2000000 - 10000000">N2,000,000 - N10,000,000</option>
          </select>
        </div>

      </div>

      <button className="flex gap-3 bg-primary hover:bg-primary/80 duration-300 ease-in- xl:w-[175px] md:w-[120px]  w-[100px] xl:h-[50px] md:h-[40px] h-[35px] rounded-lg items-center justify-center -mt-3 xl:-mt-6 md:-mt-3 lg:-mt-5"
        onClick={handleSearch}>
        <HiSearch className="h-5 w-5 text-white"/>
        <p className="xl:text-lg md:text-base text-white text-xs ">Search</p>
      </button>
    </div>
    <h1 className=" text-customPrimary font-bold text-4xl m-10">
        {propertyType}
      </h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-center items-center">
        {searchResults.length > 0 ? (
          searchResults.map((property: Property) => (
            <div key={property.slug?.current}>
              <PropertyCard property={property} />
            </div>
          ))
        ) : (
          <div className="flex justify-center items-center h-[20rem]">
          <h1 className="text-customTextColor text-4xl px-10">
            There is currently no available property listing for now, kindly check
            back later
          </h1>
        </div>
        )}
      </div>
    </>
  );
};

export default SearchProperty;
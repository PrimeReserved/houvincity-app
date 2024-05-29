"use client";

import Fuse from "fuse.js";
import { IoHomeOutline } from "react-icons/io5";
import { MdLocationOn } from "react-icons/md";
import { usePropertyContext } from "@/context/PropertyContext";
import { useState, useEffect, useCallback, useMemo } from "react";
import FilterSearchHomePage from "@/components/LandingPage/FilterSearchHomePage";
import { useRouter } from "next/navigation";

function SearchHomePage() {
  const router = useRouter();
  const { properties, setProperties } = usePropertyContext();
  const [propertyType, setPropertyType] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [budget, setBudget] = useState("");

  const fuse = useMemo(() => {
    return new Fuse(properties, {
      keys: ["propertyType", "location", "budget"],
      includeMatches: true,
      threshold: 0.3,
    });
  }, [properties]);

  const handleSearch = useCallback(() => {
    let results = properties;

    if (propertyType || location) {
      const searchOptions: any = {};
      if (propertyType) searchOptions.propertyType = propertyType;
      if (location) searchOptions.location = location;

      const fuseResults = fuse.search(searchOptions);
      results = fuseResults.map((result) => result.item);
    }

    if (budget) {
      const [minBudget, maxBudget] = budget
        .split(" - ")
        .map((b) => parseInt(b.replace("#", "").replace(",", "").trim()));
      results = results.filter(
        (property: any) =>
          property.budget >= minBudget && property.budget <= maxBudget
      );
    }

    setProperties(results);
  }, [properties, propertyType, location, budget, setProperties, fuse]);

  useEffect(() => {
    handleSearch();
  }, [propertyType, location, budget, handleSearch]);

  // if (!Array.isArray(properties) || properties.length === 0) {
  //   return (
  //     <div className="flex justify-center items-center h-[20rem]">
  //       <h1 className="text-customTextColor text-4xl px-10">
  //         There is currently no available property listing for now, kindly check
  //         back later
  //       </h1>
  //     </div>
  //   );
  // }

  return (
    <div className="mt-[5rem]">
      <div className="lg:flex justify-center mt-[5rem] hidden">
        <div className="flex xl:w-[70%] lg:w-[90%] bg-[#F1F1F1] justify-evenly rounded-full opacity-80 py-2  ">
          <div className="flex gap-7 items-center">
            <div className="outline outline-offset-1 outline-primary p-2 rounded-full text-primary">
              <IoHomeOutline className="w-5 h-5" />
            </div>
            <div className="">
              <p className="text-xs text-customTextColor">
                I&#39;m Looking to...
              </p>
              <select
                className="text-xs -ml-1 bg-[#F1F1F1]"
                value={propertyType}
                onChange={(e) => setPropertyType(e.target.value)}
              >
                <option value="Land"> Buy a Land</option>
                <option value="House">buy a House</option>
              </select>
            </div>
          </div>
          <div className="flex gap-7 items-center">
            <div className="outline outline-offset-1 outline-primary p-2 rounded-full text-primary">
              <MdLocationOn className="h-5  w-5" />
            </div>
            <div>
              <p className="text-xs text-customTextColor">Location</p>
              <select
                className="text-xs -ml-1 bg-[#F1F1F1]"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              >
                <option value="Abuja"> Abuja, Nigeria</option>
                <option value="Port Harcourt">
                  Port Harcourt, Nigeria
                </option>
                <option value="Lagos">Lagos, Nigeria</option>
              </select>
            </div>
          </div>
          <div className="flex gap-7 items-center">
            <div className="outline outline-offset-1 outline-primary p-2 rounded-full text-primary">
              <IoHomeOutline className="w-5 h-5" />
            </div>
            <div className="">
              <p className="text-xs text-customTextColor">Price Range</p>
              <select
                className="text-xs -ml-1 bg-[#F1F1F1]"
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
              >
                <option value={`#200,000-#500,000`}>#200,000-#500,000</option>
              </select>
            </div>
            <button
              className="inline-flex items-center justify-center rounded-xl border border-transparent bg-primary px-[3rem] py-4 text-sm text-white duration-300 ease-in-out hover:bg-primary/80"
              onClick={() => router.push('/search-properties')}
            >
              <span>Search</span>
            </button>
          </div>
        </div>
      </div>

      <div className="lg:hidden">
        <div className="flex justify-center">
          <div className="flex w-[90%] bg-[#F1F1F1] justify-between items-center rounded-full opacity-80 py-2 px-4">
            <div className="text-sm cursor-pointer">
              <input
                type="text"
                className="text-sm cursor-pointer"
                placeholder="Property type, Location, or Price"
              />
            </div>
            <button className="inline-flex items-center justify-center rounded-xl border border-transparent bg-primary px-[2rem] py-2 text-sm text-white duration-300 ease-in-out hover:bg-primary/80">
              <span>Search</span>
            </button>
          </div>
        </div>
      </div>
      <FilterSearchHomePage />
    </div>
  );
}

export default SearchHomePage;

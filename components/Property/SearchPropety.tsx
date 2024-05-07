"use client"

import { useState } from "react";
import { usePropertyContext } from "@/context/PropertyContext";


interface SearchProps {
  filterProperties: (uniqueTypes: string, uniqueLocations: string, uniqueSizes: string, uniqueBudget: string) => void;
  uniqueTypes: string[];
  uniqueLocations: string[];
  uniqueSizes: string[];
  uniqueBudget: string[];
}



const SearchProperty = ({ filterProperties, uniqueTypes, uniqueLocations, uniqueSizes, uniqueBudget }: Readonly<SearchProps>) => {

  const { properties, setProperties } = usePropertyContext();
  const [selectedType, setSelectedType] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedBudget, setSelectedBudget] = useState('');

  const applyFilter = () => {
    // Check if at least one filter criteria is selected
    if (selectedType || selectedLocation || selectedSize || selectedBudget) {
      // Call filterProperties function with selected values
      filterProperties(selectedType, selectedLocation, selectedSize, selectedBudget);
    } else {
      // If no filter criteria is selected, show error message or handle as needed
      setSelectedType('land');
      setSelectedLocation('location');
      setSelectedSize('size');
      setSelectedBudget('budget');
      setProperties(properties)
    }
  };
  


  return (
    <div className="flex flex-col justify-center items-center -mt-10 mx-2">
      <div className="w-[100%] md:w-[80%] lg:h-[117px] md:h-[90px] h-[80px] bg-white shadow-lg rounded-lg flex items-center justify-evenly gap-2 px-2 pr-5">
        <div className="relative">
          <select
            className="select select-bordered mx-2 py-2 w-full max-w-xs"
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
          >
            <option disabled value="">Property Type</option>
            {uniqueTypes.map((propertyType: string) => (
              <option key={propertyType} value={propertyType}>
                {propertyType}
              </option>
            ))}
          </select>
        </div>
        <div className="relative">
          <select
            className="select select-bordered mx-2 py-2 w-full max-w-xs"
            value={selectedLocation}
            onChange={(e) => setSelectedLocation(e.target.value)}
          >
            <option disabled value="">Location</option>
            {uniqueLocations.map((location: string) => (
              <option key={location} value={location}>{location}</option>
            ))}
          </select>
        </div>
        <div className="relative">
          <select
            className="select select-bordered mx-2 py-2 w-full max-w-xs"
            value={selectedSize}
            onChange={(e) => setSelectedSize(e.target.value)}
          >
            <option disabled value="">
              Property Size
            </option>
            {uniqueSizes.map((propertySize: string) => (
              <option key={propertySize} value={propertySize}>
                {propertySize}
              </option>
            ))}
          </select>
        </div>
        <div className="relative">
          <select
            className="select select-bordered select:bg-[#040A3B] mx-2 py-2 w-full max-w-xs"
            value={selectedBudget}
            onChange={(e) => setSelectedBudget(e.target.value)}
          >
            <option disabled value="">
              Budget
            </option>
            {uniqueBudget.map((budget: string) => (
              <option key={budget} value={budget}>
                {budget}
              </option>
            ))}
          </select>
        </div>

      </div>

      <button className="flex gap-3 bg-primary hover:bg-primary/80 duration-300 ease-in- xl:w-[175px] md:w-[120px]  w-[100px] xl:h-[50px] md:h-[40px] h-[35px] rounded-lg items-center justify-center -mt-3 xl:-mt-6 md:-mt-3 lg:-mt-5" onClick={applyFilter}>
        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="none" viewBox="0 0 16 16">
          <path fill="#fff" d="M11.063 9.75h-.692l-.245-.236A5.662 5.662 0 0011.5 5.813 5.687 5.687 0 105.812 11.5a5.662 5.662 0 003.702-1.374l.236.245v.691l4.375 4.367 1.304-1.304-4.367-4.375zm-5.25 0a3.932 3.932 0 01-3.938-3.938 3.932 3.932 0 013.938-3.937A3.932 3.932 0 019.75 5.813 3.932 3.932 0 015.812 9.75z"></path>
        </svg>
        <p className="xl:text-lg md:text-base text-white text-xs ">Search</p>
      </button>
    </div>
  );
};

export default SearchProperty;

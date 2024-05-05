"use client"


import { IoHomeOutline } from "react-icons/io5";
import { MdLocationOn } from "react-icons/md";
import { usePropertyContext } from "@/context/PropertyContext";
import { useState } from "react";

interface SearchProps {
  filterProperties: (uniqueTypes: string, uniqueLocations: string, uniqueBudget: string) => void;
  uniqueTypes: string[];
  uniqueLocations: string[];
  uniqueBudget: string[];
}

function SearchHomePage({ filterProperties, uniqueTypes, uniqueLocations, uniqueBudget }: Readonly<SearchProps>) {

  const { properties, setProperties } = usePropertyContext();
  const [selectedType, setSelectedType] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedBudget, setSelectedBudget] = useState('');
  

  const applyFilter = () => {
    // Check if at least one filter criteria is selected
    if (selectedType || selectedLocation || selectedBudget) {
      // Call filterProperties function with selected values
      filterProperties(selectedType, selectedLocation, selectedBudget);
    } else {
      setSelectedType('House');
      setSelectedLocation('location');
      setSelectedBudget('budget');
      setProperties(properties)
      console.log("No filter criteria selected");
    }
  };

  return (
    <div className="mt-[5rem]">
      <div className="lg:flex justify-center mt-[5rem] hidden">
        <div className="flex xl:w-[70%] lg:w-[90%] bg-[#F1F1F1] justify-evenly rounded-full opacity-80 py-2  ">
          <div className="flex gap-7 items-center">
            <div className="outline outline-offset-1 outline-primary p-2 rounded-full text-primary">
              <IoHomeOutline className="w-5 h-5" />
            </div>
            <div className="">
              <p className="text-xs text-customTextColor"
              >I’m Looking to...</p>
              <select className="text-xs -ml-1 bg-[#F1F1F1]"
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
              >
                {uniqueTypes.map((propertyType: string) => (
                  <option key={propertyType} value={propertyType}>
                    {propertyType}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="flex gap-7 items-center">
            <div className="outline outline-offset-1 outline-primary p-2 rounded-full text-primary">
              <MdLocationOn className="h-5  w-5" />
            </div>
            <div>
              <p className="text-xs text-customTextColor">Location</p>
              <select className="text-xs -ml-1 bg-[#F1F1F1]"
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
              >
                {uniqueLocations.map((location: string) => (
                  <option key={location} value={location}>{location}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="flex gap-7 items-center">
            <div className="outline outline-offset-1 outline-primary p-2 rounded-full text-primary">
              <IoHomeOutline className="w-5 h-5" />
            </div>
            <div className="">
              <p className="text-xs text-customTextColor">Price Range</p>
              <select className="text-xs -ml-1 bg-[#F1F1F1]"
                value={selectedBudget}
                onChange={(e) => setSelectedBudget(e.target.value)}
              >
                {uniqueBudget.map((budget: string) => (
                  <option key={budget} value={budget}>
                    {budget}
                  </option>
                ))}
              </select>
            </div>
            <button className="inline-flex items-center justify-center rounded-xl border border-transparent bg-primary px-[3rem] py-4 text-sm text-white duration-300 ease-in-out hover:bg-primary/80"
              onClick={applyFilter}>
              <span>Search</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchHomePage;

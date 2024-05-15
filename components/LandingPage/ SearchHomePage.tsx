"use client";

import { IoHomeOutline } from "react-icons/io5";
import { MdLocationOn } from "react-icons/md";
import { usePropertyContext } from "@/context/PropertyContext";
import { useState } from "react";
import FilterSearchHomePage from "@/components/LandingPage/FilterSearchHomePage";
import Link from "next/link";
import { useRouter, usePathname } from 'next/navigation';


interface SearchProps {
  filterProperties: (
    uniqueTypes: string,
    uniqueLocations: string,
    uniqueBudget: string
  ) => void;
  uniqueTypes: string[];
  uniqueLocations: string[];
  uniqueBudget: string[];
}

function SearchHomePage({
  filterProperties,
  uniqueTypes,
  uniqueLocations,
  uniqueBudget,
}: Readonly<SearchProps>) {
  const router = useRouter();
  const pathname = usePathname();
  const { properties, setProperties } = usePropertyContext();
  const [selectedType, setSelectedType] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedBudget, setSelectedBudget] = useState("");
  const [savedSearchState, setSavedSearchState] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);


  const applyFilter = () => {
    // Check if the savedSearchState string is not empty
    if (savedSearchState !== "") {
      // Extract the search criteria from the savedSearchState string
      const savedSearchStateArray = savedSearchState.split(', ');
      const uniqueTypes = savedSearchStateArray[0].split(': ')[1];
      const uniqueLocations = savedSearchStateArray[1].split(': ')[1];
      const uniqueBudget = savedSearchStateArray[2].split(': ')[1];
  
      // Call filterProperties function with extracted values
      filterProperties(uniqueTypes, uniqueLocations, uniqueBudget);
  
      // Check if the current route is the home page
      if (pathname === '/') {
        // Navigate to the search landing page
        router.push('/search-landing-page');
      }
    } else {
      // Check if at least one filter criteria is selected
      if (selectedType || selectedLocation || selectedBudget) {
        // Call filterProperties function with selected values
        filterProperties(selectedType, selectedLocation, selectedBudget);
      } else {
        setSelectedType("House");
        setSelectedLocation("location");
        setSelectedBudget("budget");
        setProperties(properties);
      }
  
      // Check if the current route is the home page
      if (pathname === '/') {
        // Navigate to the search landing page
        router.push('/search-landing-page');
      }
    }
  };


  const openModal = () => {
    applyFilter();
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const saveSearchState = (uniqueTypes: string, uniqueLocations: string, uniqueBudget: string) => {
    // Save the search state to local state
    const searchState = `${uniqueTypes}, ${uniqueLocations}, ${uniqueBudget}`;
    setSavedSearchState(searchState);

    // Save the search state to local state or perform any necessary actions
    // For example:
    setSelectedType(uniqueTypes);
    setSelectedLocation(uniqueLocations);
    setSelectedBudget(uniqueBudget);
  };

  const resetSearchState = () => {
    // Reset the search state to default values
    setSelectedType("");
    setSelectedLocation("");
    setSelectedBudget("");
  };

  const handleRemoveLocation = (location: string) => {
    setSelectedLocation("");
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
              <p className="text-xs text-customTextColor">I#&39;m Looking to...</p>
              <select
                className="text-xs -ml-1 bg-[#F1F1F1]"
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
              <select
                className="text-xs -ml-1 bg-[#F1F1F1]"
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
              >
                {uniqueLocations.map((location: string) => (
                  <option key={location} value={location}>
                    {location}
                  </option>
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
              <select
                className="text-xs -ml-1 bg-[#F1F1F1]"
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
            <button
              className="inline-flex items-center justify-center rounded-xl border border-transparent bg-primary px-[3rem] py-4 text-sm text-white duration-300 ease-in-out hover:bg-primary/80"
              onClick={applyFilter}
            >
              <span>Search</span>
            </button>
          </div>
        </div>
      </div>

      <div className="lg:hidden">
        <div className="flex justify-center">
          <div className="flex w-[90%] bg-[#F1F1F1] justify-between items-center rounded-full opacity-80 py-2 px-4">
            <p className="text-sm cursor-pointer" onClick={openModal}>{savedSearchState || "Property type, Location or Price"}</p>
            <button
              className="inline-flex items-center justify-center rounded-xl border border-transparent bg-primary px-[2rem] py-2 text-sm text-white duration-300 ease-in-out hover:bg-primary/80"
              onClick={applyFilter}
            >
              <span>Search</span>
            </button>
          </div>
        </div>
      </div>
      <FilterSearchHomePage 
        isOpen={isModalOpen}
        onClose={closeModal}
        selectedType={selectedType}
        selectedLocation={selectedLocation}
        selectedBudget={selectedBudget}
        setSelectedType={setSelectedType}
        setSelectedLocation={setSelectedLocation}
        setSelectedBudget={setSelectedBudget}
        handleRemoveLocation={handleRemoveLocation}
        saveSearchState={saveSearchState}
        resetSearchState={resetSearchState}
      />
    </div>
  );
}

export default SearchHomePage;

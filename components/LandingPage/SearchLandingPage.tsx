"use client";

import React from "react";
import ErrorBoundary from "@/components/ErrorBoundary";
import Error from "@/components/Error";
import Header from "@/components/Header/HeaderHome";
import FooterHome from "@/components/Footer/FooterHome";
import SearchHomePage from "./ SearchHomePage";
import { usePropertyContext } from "@/context/PropertyContext";

import PropertyProvider from "@/context/PropertyProvider";
import Land from "../Property/Land";

const SearchLandingPage: React.FC = () => {
  const { properties, setProperties } = usePropertyContext();
  // console.log(properties)
  const uniqueTypes = [
    ...new Set(properties.map((property) => property.propertyType)),
  ];
  const uniqueLocations = [
    ...new Set(properties.map((property) => property.location)),
  ];
  const uniqueBudget = [
    ...new Set(properties.map((property) => property.budget)),
  ];

  const filterProperties = (
    selectedTypes: string,
    selectedLocations: string,
    selectedBudget: string
  ) => {
    let filteredProperties = properties;
    console.log(
      "Selected Values:",
      selectedTypes,
      selectedLocations,
      selectedBudget
    );
    if (selectedTypes) {
      filteredProperties = filteredProperties.filter(
        (property) => property.propertyType === selectedTypes
      );
      console.log("After Type Filter:", filteredProperties);
    }
    if (selectedLocations) {
      filteredProperties = filteredProperties.filter(
        (property) => property.location === selectedLocations
      );
      console.log("After Location Filter:", filteredProperties);
    }

    if (selectedBudget) {
      filteredProperties = filteredProperties.filter(
        (property) => property.budget === selectedBudget
      );
      console.log("After Budget Filter:", filteredProperties);
    }
    console.log(`Filtered Properties:`, filteredProperties);
    setProperties(filteredProperties);
  };

  return (
    <div className="mt-[10rem]">
      <ErrorBoundary fallback={<Error />}>
        <Header />
        <SearchHomePage
          filterProperties={filterProperties}
          uniqueTypes={uniqueTypes}
          uniqueLocations={uniqueLocations}
          uniqueBudget={uniqueBudget}
        />

        <div className="mt-12 mx-[1.5rem] md:mx-[5rem]">
          <h1 className="text-base md:text-2xl">Lands for sale in Abuja, Nigeria</h1>
          <div className="flex gap-5 mt-4 justify-between lg:justify-normal">
            <p className="text-customTextColor text-sm md:text-base">50 Lands Available</p>
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

        <ErrorBoundary>
          <Land properties={properties} />
        </ErrorBoundary>

        <FooterHome />
      </ErrorBoundary>
    </div>
  );
};

export default SearchLandingPage;

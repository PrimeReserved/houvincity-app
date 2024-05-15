"use client";

import { Suspense, useState } from "react";
import ErrorBoundary from "@/components/ErrorBoundary";
import Error from "@/app/error";
import Header from "@/components/Header/HeaderHome";
import FooterHome from "@/components/Footer/FooterHome";
import SearchHomePage from "./ SearchHomePage";
import { usePropertyContext } from "@/context/PropertyContext";
import Land from "../Property/Land";
import Loading from "@/app/loading";

const SearchLandingPage: React.FC = () => {
  const { properties, setProperties } = usePropertyContext();
  const [error, setError] = useState<Error | null>(null);

  console.log(properties);

  // Reset function
  const resetFunction = () => {
    try {
      // Reset application state here
      setError(null);
      // reload the page
      window.location.reload();
    } catch (error) {
      console.error('Error occurred during reset:', error);
    }
  }
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
    if (selectedTypes) {
      filteredProperties = filteredProperties.filter(
        (property) => property.propertyType === selectedTypes
      );
    }
    if (selectedLocations) {
      filteredProperties = filteredProperties.filter(
        (property) => property.location === selectedLocations
      );
    }

    if (selectedBudget) {
      filteredProperties = filteredProperties.filter(
        (property) => property.budget === selectedBudget
      );
    }
    setProperties(filteredProperties);
  };

  return (
    <div className="mt-[10rem]">
      <ErrorBoundary fallback={<Error error={error} reset={resetFunction} />}>
        <Header />
        <SearchHomePage
          filterProperties={filterProperties}
          uniqueTypes={uniqueTypes}
          uniqueLocations={uniqueLocations}
          uniqueBudget={uniqueBudget}
        />

        <div className="mt-12 mx-[1.5rem] md:mx-[5rem]">
          {
            uniqueTypes.length === 0 ? (
              <h1 className="text-base md:text-2xl">No Properties for Sale at the Moment</h1>
            ) : (
              <h1 className="text-base md:text-2xl">
                {`${uniqueTypes[1] || `${uniqueTypes[0]}`}(s) for Sale in ${uniqueLocations[1] || `${uniqueLocations[0]}`}`}
              </h1>
            )
          }

          <div className="flex gap-5 mt-4 justify-between lg:justify-normal">
            {
              uniqueTypes.length === 0 ? (
                <p className="text-customTextColor text-sm md:text-base">No Properties Available</p>
              ) : (
                <p className="text-customTextColor text-sm md:text-base">
                  {`${properties.length} ${uniqueTypes.length > 1 ? uniqueTypes[1] : uniqueTypes[0]}(s) Available`}
                </p>
              )
            }

            <div className="flex gap-1">
              <p className="text-customTextColor text-sm md:text-base">Sort by</p>
              <select name="sort-by" id="sort-by" className="text-sm md:text-base">
                {uniqueTypes.map((type, index) => (
                  <option key={index} value={type}>{type}</option>
                ))}
              </select>

              {/* <select name="" id="" className="text-sm md:text-base">
                <option value="Relevant Listing">Relevant Listing</option>
                <option value="Newest Listings  ">Newest Listings</option>
                <option value="Lowest Pricing  ">Lowest Pricing</option>
                <option value="Highest Pricing  ">Highest Pricing</option>
              </select> */}
            </div>
          </div>
        </div>

        <ErrorBoundary>
          <Suspense fallback={<Loading />}>
            <Land properties={properties} />
          </Suspense>
        </ErrorBoundary>

        <FooterHome />
      </ErrorBoundary>
    </div>
  );
};

export default SearchLandingPage;

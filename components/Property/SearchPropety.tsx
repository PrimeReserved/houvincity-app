"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store";
import { quickSort, binarySearch } from "@/utils/searchAndSort";
import { HiSearch } from "react-icons/hi";
import PropertyCard from "./PropertyCard";
import { Property } from "@/typings";
import {
  fetchProperties,
  setSearchQuery,
  setPropertyType,
  setLocation,
  setSize,
  setBudget,
  setSortCriteria,
} from "@/features/properties/propertiesSlice";

// import { selectFilteredAndSortedProperties } from '@/features/properties/selectors'
import { Loading } from "notiflix/build/notiflix-loading-aio";
import { Report } from "notiflix/build/notiflix-report-aio";

export const SearchProperty = (): any => {
  const dispatch = useDispatch();
  const {
    properties,
    searchQuery,
    propertyType,
    location,
    sortCriteria,
    searchPerformed,
    propertySize,
    budget,
    loading,
    error,
  } = useSelector((state: RootState) => state.properties);

  const [filteredProperties, setFilteredProperties] = useState([]);

  useEffect(() => {
    dispatch(fetchProperties());
  }, [dispatch]);

  useEffect(() => {
    if (loading) {
      Loading.pulse();
    } else {
      Loading.remove();
    }
  }, [loading]);

  useEffect(() => {
    const filtered = filterProperties(
      properties,
      propertyType,
      location,
      propertySize,
      budget,
      searchQuery
    );
    setFilteredProperties(filtered as any);
  }, [properties, propertyType, location, propertySize, budget, searchQuery]);

  const handleSearch = (event: any) => {
    console.log(`Value: ${event.target.value}`);
    dispatch(setSearchQuery(event.target.value));
  };

  const handlePropertyType = (event: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(`Value: ${event.target.value}`);
    dispatch(setPropertyType(event.target.value));
  };

  const handleLocation = (event: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(`Value: ${event.target.value}`);
    dispatch(setLocation(event.target.value));
  };

  const handleSize = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value: any = event.target.value
      ? parseInt(event.target.value, 10)
      : undefined;
    console.log(`Value: ${value}`);
    dispatch(setSize(value));
  };

  const handleBudget = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value: any = event.target.value
      ? parseInt(event.target.value, 10)
      : undefined;
    console.log(`Value: ${value}`);
    dispatch(setBudget(value));
  };

  // const handleSort = (event: React.ChangeEvent<HTMLSelectElement>) => {
  //   dispatch(setSortCriteria(event.target.value));
  // };

  const filterProperties = (
    properties: Property[],
    propertyType: string | undefined,
    location: string | undefined,
    propertySize: string,
    budget: string,
    searchQuery: string
  ): Property[] => {
    let filteredProperties = [...properties];

    if (propertyType) {
      filteredProperties = filteredProperties.filter(
        (property) => property.propertyType === propertyType
      );
    }

    if (location) {
      filteredProperties = filteredProperties.filter(
        (property) => property.location === location
      );
    }

    if (propertySize) {
      filteredProperties = filteredProperties.filter(
        (property: any) =>
          property?.propertySize >= propertySize[0] && property?.propertySize <= propertySize[1]
      );
    }

    if (budget) {
      filteredProperties = filteredProperties.filter(
        (property: any) =>
          property.budget >= budget[0] && property.budget <= budget[1]
      );
    }

    if (searchQuery) {
      filteredProperties = filteredProperties.filter((property) =>
        property.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    return filteredProperties;
  };

  if (error) {
    return Report.warning("An Error Occured", error, "close", {
      width: "360px",
    });
  }

  return (
    <>
      <div className="flex flex-col justify-center items-center -mt-10 mx-2">
        <div className="w-[100%] md:w-[80%] lg:h-[117px] md:h-[90px] h-[80px] bg-white shadow-lg rounded-lg flex items-center justify-evenly gap-2 px-2 pr-5">
          <div className="relative">
            <select
              className="select select-bordered mx-2 py-2 w-full max-w-xs"
              value={propertyType}
              onChange={handlePropertyType}
            >
              <option disabled value="">
                Property Type
              </option>
              <option value="House">House</option>
              <option value="Land">Land</option>
            </select>
          </div>
          <div className="relative">
            <select
              className="select select-bordered mx-2 py-2 w-full max-w-xs"
              value={location}
              onChange={handleLocation}
            >
              <option disabled value="">
                Location
              </option>
              <option value="Abuja">Abuja</option>
              <option value="Port Harcourt">Port Harcourt</option>
              <option value="Lagos">Lagos</option>
            </select>
          </div>
          <div className="relative">
            <select
              className="select select-bordered mx-2 py-2 w-full max-w-xs"
              value={propertySize}
              onChange={handleSize}
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
              onChange={handleBudget}
            >
              <option disabled value="">
                Budget
              </option>
              <option value="200000 - 500000">N200,000 - N500,000</option>
              <option value="500000 - 2000000">N500,000 - N2,000,000</option>
              <option value="2000000 - 10000000">
                N2,000,000 - N10,000,000
              </option>
            </select>
          </div>
        </div>

        <button
          className="flex gap-3 bg-primary hover:bg-primary/80 duration-300 ease-in- xl:w-[175px] md:w-[120px]  w-[100px] xl:h-[50px] md:h-[40px] h-[35px] rounded-lg items-center justify-center -mt-3 xl:-mt-6 md:-mt-3 lg:-mt-5"
          onClick={handleSearch}
        >
          <HiSearch className="h-5 w-5 text-white" />
          <p className="xl:text-lg md:text-base text-white text-xs ">Search</p>
        </button>
      </div>
      <h1 className=" text-customPrimary font-bold text-4xl m-10">
        Land
        {/* {propertyType} */}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-3 xl:gap-5 mx-5 lg:mx-2 xl:mx-10">
        {filteredProperties?.length > 0 ? (
          filteredProperties?.map((property: Property) => (
            <div key={property.slug?.current}>
              <PropertyCard property={property} />
            </div>
          ))
        ) : (
          <div className="w-full">
            <h1 className="text-customTextColor text-4xl px-10">
              There is currently no available property listing for now, kindly
              check back later
            </h1>
          </div>
        )}
      </div>
      <div className="flex justify-center mt-10">
        <button className="py-3 px-[3.5rem] font-bold border-[1px] bg-primary rounded-md text-xs text-white">
          Load More
        </button>
      </div>
    </>
  );
};

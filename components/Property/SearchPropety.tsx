import React, { useState, useMemo, useEffect } from "react";
import { groq } from "next-sanity";
import { client } from "@/sanity/client";
import { Property } from "@/typings";
import House from "./Houses";

const SearchProperty = () => {
  const [filteredProperties, setFilteredProperties] = useState<Property[]>([]);
  const [searchType, setSearchType] = useState('');
  const [searchLocation, setSearchLocation] = useState('');
  const [searchSize, setSearchSize] = useState('');
  const [searchBudget, setSearchBudget] = useState('');
  const [filteredHouses, setFilteredHouses] = useState<Property[]>([]);
  const [filteredLand, setFilteredLand] = useState<Property[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const propertiesPerPage = React.useMemo(() => 6, []);
  const [propertyTypes, setPropertyTypes] = useState<string[]>([]);
  const [locations, setLocations] = useState<string[]>([]);
  const [sizes, setSizes] = useState<string[]>([]);
  const [budgets, setBudgets] = useState<number[]>([]);

  useEffect(() => {
    fetchAllProperties();
  }, []);

  const fetchAllProperties = async () => {
    const query = groq`*[_type == "property"]`;
    const allProperties: Property[] = await client.fetch(query);
    console.log(`All Properties: ${allProperties}`)
    setPropertyTypes(Array.from(new Set(allProperties.map(property => property.propertyType))));
    setFilteredHouses(allProperties.filter(property => property.propertyType === 'House'));
    setFilteredLand(allProperties.filter(property => property.propertyType === 'Land'));
  };

  // const fetchProperties = async () => {
  //   const query = groq`*[_type == "property"]`;
  //   const propertiesData: Property[] = await client.fetch(query);
  //   console.log(`Properties Data: ${JSON.stringify(propertiesData)}`)
  //   setFilteredProperties(propertiesData);

  //   const typesSet = new Set<string>();
  //   const locationsSet = new Set<string>();
  //   const sizesSet = new Set<string>();
  //   const budgetsSet = new Set<number>();

  //   propertiesData.forEach((property) => {
  //     typesSet.add(property.propertyType);
  //     locationsSet.add(property.location);
  //     sizesSet.add(property.propertySize);
  //     budgetsSet.add(property.budget);
  //   });

  //   setPropertyTypes(Array.from(typesSet));
  //   setLocations(Array.from(locationsSet));
  //   setSizes(Array.from(sizesSet));
  //   setBudgets(Array.from(budgetsSet));
  // };

  const handleSearch = async () => {
    let query = groq`*[_type == 'property'] && location == $location && propertySize == $propertySize && budget == $budget
    `;
    let params: any = {};

    if (searchType) {
      query += groq` && propertyType == $propertyType`;
      params.propertyType = searchType;
    }
    if (searchLocation) {
      query += groq` && location == $location`;
      params.location = searchLocation;
    }

    if (searchSize) {
      query += groq` && propertySize == $propertySize`;
      params.propertySize = searchSize;
    }

    if (searchBudget) {
      query += groq` && budget == $budget`;
      params.budget = searchBudget;
    }
    console.log("Query:", query);
    console.log("Params:", params); 

    const properties: Property[] = await client.fetch(query, params);
    console.log(`All Properties: ${properties}`)

    setFilteredHouses(filteredHouses);
    setFilteredLand(filteredLand);

    setFilteredProperties(properties || []);
    setCurrentPage(1);
  };

  const indexOfLastProperty = currentPage * propertiesPerPage;
  const indexOfFirstProperty = indexOfLastProperty - propertiesPerPage;
  const currentProperties = filteredProperties.slice(
    indexOfFirstProperty,
    indexOfLastProperty
  );

  const pagination = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="flex flex-col justify-center items-center -mt-10 ">
      <div className="xl:w-[1019px] lg:w-[800px] md:w-[520px]  lg:h-[117px] md:h-[90px] h-[80px] bg-white shadow-lg rounded-lg flex items-center justify-evenly gap-2 px-2">
        <div className="relative">
          <select
            className="select select-border mx-2 py-2 w-full max-w-xs"
            value={searchType}
            onChange={(e) => setSearchType(e.target.value)}
          >
            <option disabled value="">Property Type</option>
            {propertyTypes.map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>
        <div className="relative">
          <select
            className="select select-bordered mx-2 py-2 w-full max-w-xs"
            value={searchLocation}
            onChange={(e) => setSearchLocation(e.target.value)}
          >
            <option disabled value="">Location</option>
            {locations.map((location) => (
              <option key={location} value={location}>{location}</option>
            ))}
          </select>
        </div>
        <div className="relative">
          <select
            className="select select-bordered mx-2 py-2 w-full max-w-xs"
            value={searchSize}
            onChange={(e) => setSearchSize(e.target.value)}
          >
            <option disabled value="">
              Property Size
            </option>
            {sizes.map((range) => (
              <option key={range} value={range}>
                {range}
              </option>
            ))}
          </select>
        </div>
        <div className="relative">
          <select
            className="select select-bordered mx-2 py-2 w-full max-w-xs"
            value={searchBudget}
            onChange={(e) => setSearchBudget(e.target.value)}
          >
            <option disabled value="">
              Budget
            </option>
            {budgets.map((range) => (
              <option key={range} value={range}>
                {range}
              </option>
            ))}
          </select>
        </div>

      </div>

      <button className="flex gap-3 bg-primary hover:bg-primary/80 duration-300 ease-in- xl:w-[175px] md:w-[120px]  w-[100px] xl:h-[50px] md:h-[40px] h-[35px] rounded-lg items-center justify-center -mt-4 xl:-mt-6 md:-mt-5 " onClick={handleSearch}>
        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="none" viewBox="0 0 16 16">
          <path fill="#fff" d="M11.063 9.75h-.692l-.245-.236A5.662 5.662 0 0011.5 5.813 5.687 5.687 0 105.812 11.5a5.662 5.662 0 003.702-1.374l.236.245v.691l4.375 4.367 1.304-1.304-4.367-4.375zm-5.25 0a3.932 3.932 0 01-3.938-3.938 3.932 3.932 0 013.938-3.937A3.932 3.932 0 019.75 5.813 3.932 3.932 0 015.812 9.75z"></path>
        </svg>
        <p className="xl:text-lg md:text-base text-white text-xs ">Search</p>
      </button>

      <House properties={filteredHouses} />

    </div>

  );
};

export default SearchProperty;

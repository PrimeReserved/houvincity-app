"use client"

import { useState, useEffect } from "react";
import Fuse from "fuse.js";
import { HiSearch } from "react-icons/hi";
import PropertyCard from "./PropertyCard";



const SearchProperty = ({ properties }:any ) => {
  const [searchResults, setSearchResults] = useState(properties);
  const [propertyType, setPropertyType] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [propertySize, setPropertySize] = useState("");
  const [budget, setBudget] = useState("");


  const fuse = new Fuse(properties, {
    keys: ['propertyType', 'location', 'propertySize', 'budget'],
    includeMatches: true,
    threshold: 0.3, 
  });

  const handleSearch = () => {
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
  };

  useEffect(() => {
    handleSearch();
  }, [propertyType, location, propertySize, budget]);

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

      {/* Conditionally render House component if search type is House */}
      {searchType === 'House' && filteredHouses.length > 0 && <House properties={filteredHouses} />}

      {/* Conditionally render Land component if search type is Land */}
      {searchType === 'Land' && filteredLand.length > 0 && <Land properties={filteredLand} />}

      {/* Render a message if there are no properties */}
      {filteredHouses.length === 0 && filteredLand.length === 0 && (
        <div className="flex justify-center items-center h-[20rem]">
          <p className="text-customTextColor md:text-4xl">
            There is currently no available property listing for now, kindly check back later
          </p>
        </div>
      )}

      <div className="flex justify-center mt-8 space-x-4">
        {filteredProperties.length > propertiesPerPage && (
          <button
            onClick={handleShowMore}
            className="bg-gray-200 hover:bg-gray-300 py-2 px-4 rounded"
          >
            Show More
          </button>
        )}

      </div>
    </div>
    <h1 className=" text-customPrimary font-bold text-4xl m-10">
        {propertyType}
      </h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-center items-center">
        {searchResults.length > 0 ? (
          searchResults.map((property: any) => (
            <div key={property.id}>
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










// "use client";

// import React, { useState } from "react";

// interface DropdownItem {
//   title: string;
//   items: string[];
// }

// const SearchProperty: React.FC = () => {
//   const [openDropdownIndex, setOpenDropdownIndex] = useState<number>(-1);

//   const toggleDropdown = (index: number) => {
//     setOpenDropdownIndex(openDropdownIndex === index ? -1 : index);
//   };

//   const search: DropdownItem[] = [
//     { title: "Property Type", items: ["House", "Land"] },
//     { title: "Location", items: ["Port-Harcourt", "Abuja"] },
//     { title: "Property Size", items: ["400sqft - 500sqft", "500sqft - 1000sqft", "1000sqft - 1500sqft", "1500sqft - 2000sqft"] },
//     { title: "Budget", items: ["X", "Y", "Z", "M"] },
//   ];

//   return (
//     <div className="flex flex-col justify-center items-center -mt-10 ">
//       <div className="xl:w-[1019px] lg:w-[800px] md:w-[520px]  lg:h-[117px] md:h-[90px] h-[80px] bg-white shadow-lg rounded-lg flex items-center justify-evenly gap-2 px-2">
//         {search.map(({ title, items }, index) => (
//           <div
//             key={index}>
//             <button className="flex md:gap-4 gap-2 items-center border-[1px] justify-center lg:w-[126px] md:w-[120px] w-[90px]  h-[33px] rounded-md dropdown">
//               <p className="md:text-xs text-[10px] ">{title}</p>
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="10"
//                 height="6"
//                 fill="none"
//                 viewBox="0 0 10 6"
//               >
//                 <path
//                   stroke="#040A3B"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="1.5"
//                   d="M8.31.927L4.54 4.808.81.883"
//                 ></path>
//               </svg>
//             </button>
//           </div>
//         ))}
//       </div>

//       <div className="flex gap-3 bg-primary xl:w-[175px] md:w-[120px]  w-[100px] xl:h-[50px] md:h-[40px] h-[35px] rounded-lg items-center justify-center -mt-4 xl:-mt-6 md:-mt-5 ">
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           width="15"
//           height="15"
//           fill="none"
//           viewBox="0 0 16 16"
//         >
//           <path
//             fill="#fff"
//             d="M11.063 9.75h-.692l-.245-.236A5.662 5.662 0 0011.5 5.813 5.687 5.687 0 105.812 11.5a5.662 5.662 0 003.702-1.374l.236.245v.691l4.375 4.367 1.304-1.304-4.367-4.375zm-5.25 0a3.932 3.932 0 01-3.938-3.938 3.932 3.932 0 013.938-3.937A3.932 3.932 0 019.75 5.813 3.932 3.932 0 015.812 9.75z"
//           ></path>
//         </svg>
//         <p className="xl:text-lg md:text-base text-white text-xs ">Search</p>
//       </div>
//     </div>
//   );
// };

// export default SearchProperty;



            {/* {openDropdownIndex === index && (
              <ul className="dropdown-content z-30  w-fit shadow bg-white  absolute top-full left-0 border-[1px] border-primary">
                {items.map((item, idx) => (
                  <li key={idx} className="p-2">
                    <a className={idx === 0 ? "bg-primary" : ""}>{item}</a>
                  </li>
                ))}
              </ul>
            )} */}

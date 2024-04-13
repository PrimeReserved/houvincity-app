"use client"
import React, { useState, useEffect } from "react";

interface DropdownItem {
  title: string;
  items: string[];
}

const SearchProperty: React.FC = ({ onSearchFilters }) => {
  const [openDropdownIndex, setOpenDropdownIndex] = useState<number>(-1);
  const [searchQuery, setSearchQuery] = useState<string[]>([]);

  const search: DropdownItem[] = [
    { title: "Property Type", items: ["House", "Land"] },
    { title: "Location", items: ["Port-Harcourt", "Abuja"] },
    {
      title: "Property Size",
      items: ["400sqft - 500sqft", "500sqft - 1000sqft", "1000sqft - 1500sqft", "1500sqft - 2000sqft"],
    },
    { title: "Budget", items: ["X", "Y", "Z", "M"] },
  ];


  const handleSearchChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value;
    setSearchQuery((prev) => {
      const updatedQuery = [...prev];
      if (e.target.selectedIndex === 0) {
        // If default option selected, remove filter for that field
        updatedQuery.splice(e.target.selectedIndex, 1);
      } else {
        // Update query with the selected value
        updatedQuery[e.target.selectedIndex] = selectedValue;
      }
      return updatedQuery;
    });
  };

  // Call the onSearch function from the parent component (PropertyListing) when all dropdowns are selected
  useEffect(() => {
    if (searchQuery.length === search.length) {
      onSearchFilters?.(searchQuery); // Call the provided onSearch function with the selected filters
    }
  }, [searchQuery, onSearchFilters, search.length]);



  return (
    <div className="flex flex-col justify-center items-center -mt-10 ">
      <div className="xl:w-[1019px] lg:w-[800px] md:w-[520px]  lg:h-[117px] md:h-[90px] h-[80px] bg-white shadow-lg rounded-lg flex items-center justify-evenly gap-2 px-2">
        {search.map(({ title, items }, index) => (
          <div key={index} className="relative">
            <select
              className="select select-bordered mx-2 py-2 w-full max-w-xs"
              value={searchQuery[index] || ""}
              onChange={(e) => handleSearchChange(e)}
            >
              <option disabled value="">
                {title}
              </option>
              {items.map((item, itemIndex) => (
                <option key={itemIndex} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
        ))}
      </div>

      <button className="flex gap-3 bg-primary hover:bg-primary/80 duration-300 ease-in- xl:w-[175px] md:w-[120px]  w-[100px] xl:h-[50px] md:h-[40px] h-[35px] rounded-lg items-center justify-center -mt-4 xl:-mt-6 md:-mt-5 ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="15"
          fill="none"
          viewBox="0 0 16 16"
        >
          <path
            fill="#fff"
            d="M11.063 9.75h-.692l-.245-.236A5.662 5.662 0 0011.5 5.813 5.687 5.687 0 105.812 11.5a5.662 5.662 0 003.702-1.374l.236.245v.691l4.375 4.367 1.304-1.304-4.367-4.375zm-5.25 0a3.932 3.932 0 01-3.938-3.938 3.932 3.932 0 013.938-3.937A3.932 3.932 0 019.75 5.813 3.932 3.932 0 015.812 9.75z"
          ></path>
        </svg>
        <p className="xl:text-lg md:text-base text-white text-xs ">Search</p>
      </button>
    </div>
  );
};

export default SearchProperty;

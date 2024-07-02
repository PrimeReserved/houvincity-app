"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { RootState, AppDispatch  } from "@/store";
import { useDispatch, useSelector } from "react-redux";
import { fetchProperties } from "../../features/properties/propertiesSlice"
import { FaSearch } from "react-icons/fa";
import { IoMdClose, IoMdCheckmark } from "react-icons/io";

const FilterSearchHomePage = ({ onClose }: any) => {
  const dispatch = useDispatch();
  const { properties, searchQuery } = useSelector((state: RootState) => state.properties);
  const [filterState, setFilterState] = useState({
    location: '',
    budget: '',
    propertyType: '',
    // ... other filters ...
  });

  const debouncedSearch = useMemo(() => {
    let timeoutId: any = null;
    return (searchQuery: any) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        dispatch(fetchProperties(searchQuery));
      }, 500); // debounce for 500ms
    };
  }, [dispatch]);


  const handleSearch = useCallback((searchQuery: any) => {
    debouncedSearch(searchQuery);
  }, [debouncedSearch]);


  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (!event.target.closest('.modal-content')) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);
  
  return (
    <div className="fixed bottom-10 left-0 w-full h-full flex items-center justify-center bg-opacity-50 z-40 lg:hidden mt-10">
      <div className="bg-white p-5 rounded-lg">
        <h1 className="text-customPrimary font-semibold text-[20px]">
          Filters
        </h1>

        <div className="mt-6">
          <p className="text-customTextColor text-sm mb-3 font-semibold">
            Location
          </p>
          <div className="flex items-center w-[303px] border-[1.5px] border-customTextColor rounded-md px-4 py-2 gap-2 ">
            <FaSearch className="text-customTextColor text-sm font-medium" />
            <input
              type="text"
              value={filterState.location}
              onChange={(e) => setFilterState({ ...filterState, location: e.target.value })}
              placeholder="Add a location"
              className="text-sm font-medium text-customTextColor focus:outline-none bg-white"
            />
          </div>

          <div className="flex gap-3 mt-4 text-white border-b-[1px] border-customTextColor/50 pb-5">
            <button className="flex items-center gap-2 bg-primary text-white rounded-lg text-sm px-2 py-1.5">
              <p>{`Lagos`}</p>
              <IoMdClose />
            </button>
          </div>
        </div>

        <div className="mt-4">
          <p className="text-customTextColor text-sm mb-3 font-semibold">
            Property type
          </p>

          <div className="flex gap-3 mt-3 text-white border-b-[1px] border-customTextColor/50 pb-5">
            <button className="flex items-center gap-2 rounded-lg text-sm px-2 py-1.5 border-[1px] border-primary text-primary">
              <p>Land</p>
            </button>
            <button className="flex items-center gap-2 rounded-lg text-sm px-2 py-1.5 border-[1px] border-primary text-primary">
              <p>Smart Home</p>
            </button>
          </div>
        </div>

        <div className="mt-3">
          <p className="text-customTextColor text-sm mb-3 font-semibold">
            Price
          </p>
          <div className="flex gap-2 ml-1 text-customPrimary text-sm">
            <input
              type="radio"
              className="ring-primary"
              id="priceRange"
              // checked={selectedBudget === 'priceRange'}
            />
            <label htmlFor="priceRange">Price Range</label>
          </div>

          <form className="flex items-center mt-3 gap-3">
            <div className="border-[1px] border-customPrimary text-customPrimary rounded-lg text-sm pr-10 pl-3 py-1.5">
              <label htmlFor="from" className="text-xs mb-1.5 block">
                From
              </label>
              <input
                type="text"
                id="from"
                name="from"
                value={filterState.budget}
                onChange={(e) => setFilterState({ ...filterState, budget: e.target.value })}
                placeholder="N250,000"
                className="bg-transparent border-none outline-none w-full"
              />
            </div>
            <p>-</p>
            <div className="border-[1px] border-customPrimary text-customPrimary rounded-lg text-sm pr-10 pl-3 py-1.5">
              <label htmlFor="to" className="text-xs mb-1.5 block">
                To
              </label>
              <input
                type="text"
                id="to"
                name="to"
                value={filterState.budget}
                onChange={(e) => setFilterState({ ...filterState, budget: e.target.value })}
                placeholder="N500,000"
                className="bg-transparent border-none outline-none w-full"
              />
            </div>
          </form>
        </div>

        <div className="flex justify-between mt-5">
          <button className="flex items-center gap-2 bg-primary text-white rounded-lg text-sm px-[4rem] py-3"
          onClick={() => handleSearch(filterState.location)}>
            Save
          </button>
          <button className="flex items-center gap-2  text-primary underline rounded-lg text-sm px-[4rem] py-3"
            onClick={onClose}>
            Reset All
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterSearchHomePage;

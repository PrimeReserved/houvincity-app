"use client";

// import Fuse from "fuse.js";
import { useRouter } from "next/navigation"
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store'
import { IoHomeOutline } from "react-icons/io5";
import { MdLocationOn } from "react-icons/md";
import { useState, useEffect, useMemo, useCallback } from "react";
import FilterSearchHomePage from "@/components/LandingPage/FilterSearchHomePage";
import { Loading } from "notiflix/build/notiflix-loading-aio";
import { Report } from 'notiflix/build/notiflix-report-aio';
import {
  fetchProperties,
  setSearchQuery,
  setPropertyType,
  setLocation,
  setSize,
  setBudget,
  setSortCriteria,
} from '@/features/properties/propertiesSlice';
import { Property } from '@/typings';

function SearchHomePage() {
  const dispatch = useDispatch();
  const router = useRouter();
  
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
  const [filteredProperties, setFilteredProperties] = useState<Property[]>([]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleScroll = useCallback(() => {
    if (isModalOpen) {
      setIsModalOpen(false);
    }
  }, [isModalOpen]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

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
    setFilteredProperties(filtered);
  }, [properties, propertyType, location, propertySize, budget, searchQuery]);

  // const handleSearch = useCallback((event: any) => {
  //   dispatch(setSearchQuery(event.target.value));
  // }, [dispatch]);

  const handleSearch = (e: any) => {
    router.push('/property')
  }

  const handlePropertyType = useCallback((event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setPropertyType(event.target.value));
  }, [dispatch]);

  const handleLocation = useCallback((event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setLocation(event.target.value));
  }, [dispatch]);


  const handleBudget = useCallback((event: React.ChangeEvent<HTMLSelectElement>) => {
    const value: any = event.target.value ? parseInt(event.target.value, 10) : undefined;
    dispatch(setBudget(value));
  }, [dispatch]);

  const handleSort = useCallback((event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setSortCriteria(event.target.value));
  }, [dispatch]);

  const handleInputClick = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  const filterProperties = (
    properties: Property[],
    propertyType: string,
    location: string,
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
    Report.warning('An Error Occurred', error, 'close', { width: '360px' });
    return null;
  }
 
  

  return (
    <div className="mt-[5rem]">
      <div className="lg:flex justify-center mt-[5rem] hidden">
        <div className="flex xl:w-[70%] lg:w-[90%] bg-[#F1F1F1] justify-evenly rounded-full opacity-80 py-2">
          <div className="flex gap-7 items-center">
            <div className="outline outline-offset-1 outline-primary p-2 rounded-full text-primary">
              <IoHomeOutline className="w-5 h-5" />
            </div>
            <div className="">
              <p className="text-xs text-customTextColor">I&apos;m Looking to...</p>
              <select
                className="text-xs -ml-1 bg-[#F1F1F1]"
                value={propertyType}
                onChange={handlePropertyType}
              >
                <option value="Land"> Buy a Land</option>
                <option value="House">buy a House</option>
              </select>
            </div>
          </div>
          <div className="flex gap-7 items-center">
            <div className="outline outline-offset-1 outline-primary p-2 rounded-full text-primary">
              <MdLocationOn className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs text-customTextColor">Location</p>
              <select
                className="text-xs -ml-1 bg-[#F1F1F1]"
                value={location}
                onChange={handleLocation}
              >
                <option value="Abuja"> Abuja, Nigeria</option>
                <option value="Port Harcourt">Port Harcourt, Nigeria</option>
                <option value="Lagos">Lagos, Nigeria</option>
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
                value={budget}
                onChange={handleBudget}
              >
                <option value={`#200,000-#500,000`}>#200,000-#500,000</option>
              </select>
            </div>
            <button
              className="inline-flex items-center justify-center rounded-xl border border-transparent bg-primary px-[3rem] py-4 text-sm text-white duration-300 ease-in-out hover:bg-primary/80"
              onClick={handleSearch}
            >
              <span>Search</span>
            </button>
          </div>
        </div>
      </div>

      <div className="lg:hidden">
        <div className="flex justify-center">
          <div className="flex w-[90%] bg-[#F1F1F1] justify-between items-center rounded-full opacity-80 py-2 px-4">
            <div className="text-sm cursor-pointer">
              <input
                type="text"
                className="text-sm cursor-pointer"
                placeholder="Property type, Location, or Price"
                onClick={handleInputClick}
              />
            </div>
            <button
              className="inline-flex items-center justify-center rounded-xl border border-transparent bg-primary px-[2rem] py-2 text-sm text-white duration-300 ease-in-out hover:bg-primary/80"
              onClick={handleSearch}
            >
              <span>Search</span>
            </button>
          </div>
        </div>
      </div>
      {isModalOpen && <FilterSearchHomePage onClose={handleCloseModal} />}
    </div>
  );
}

export default SearchHomePage;

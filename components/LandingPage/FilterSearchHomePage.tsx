"use client"

import{ ChangeEvent, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { IoMdClose, IoMdCheckmark } from "react-icons/io";


interface FilterSearchProps {
  isOpen: boolean;
  onClose: () => void;
  selectedType: string;
  selectedLocation: string;
  selectedBudget: string;
  setSelectedType: (type: string) => void;
  setSelectedLocation: (location: string) => void;
  setSelectedBudget: (budget: string) => void;
  handleRemoveLocation: (location: string) => void;
  saveSearchState: (selectedType: string, selectedLocation: string, selectedBudget: string) => void;
  resetSearchState: () => void;
}


const FilterSearchHomePage: React.FC<FilterSearchProps> = ({
  isOpen,
  onClose,
  selectedType,
  selectedLocation,
  selectedBudget,
  setSelectedType,
  setSelectedLocation,
  setSelectedBudget,
  handleRemoveLocation,
  saveSearchState,
  resetSearchState,
}) => {
  const [showPriceRange, setShowPriceRange] = useState<boolean>(false);

  if (!isOpen) return null;
  const handleSave = () => {
    // Call the saveSearchState function from props to save the search state
    saveSearchState(selectedType, selectedLocation, selectedBudget);
    onClose(); // Close the modal after saving
  };

  const handleReset = () => {
    // Call the resetSearchState function from props to reset the search state
    resetSearchState();
  };

  const handleTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedType(e.target.value);
  };

  const handleLocationChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (value === "") {
      return;
    }

    if (selectedLocation === value) {
      handleRemoveLocation(value);
      return;
    }

    setSelectedLocation(value);
  };

  const handlePriceRangeToggle = () => {
    setShowPriceRange(!showPriceRange);
    if (showPriceRange) {
      setSelectedBudget("");
    } else {
      setSelectedBudget("priceRange");
    }
  };


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
              placeholder="Add a location"
              className="text-sm font-medium text-customTextColor focus:outline-none bg-white"
              value={selectedLocation}
              onChange={handleLocationChange}
            />
          </div>
          {selectedLocation && (
            <div className="flex gap-3 mt-4 text-white border-b-[1px] border-customTextColor/50 pb-5">
              <button
                className="flex items-center gap-2 bg-primary text-white rounded-lg text-sm px-2 py-1.5"
                onClick={() => handleRemoveLocation(selectedLocation)}
              >
                <p>{selectedLocation}</p>
                <IoMdClose />
              </button>
            </div>
          )}
        </div>

        <div className="mt-4">
          <p className="text-customTextColor text-sm mb-3 font-semibold">
            Property type
          </p>

          <div className="flex gap-3 mt-3 text-white border-b-[1px] border-customTextColor/50 pb-5 ">
            <button
              className={`flex items-center gap-2 rounded-lg text-sm px-2 py-1.5 ${selectedType === 'Land' ? 'bg-primary text-white' : 'border-[1px] border-primary text-primary'}`}
              onClick={() => setSelectedType('Land')}>
              <p>Land</p>
              {selectedType === 'Land' && <IoMdCheckmark />}
            </button>
            <button
              className={`flex items-center gap-2 rounded-lg text-sm px-2 py-1.5 ${selectedType === 'House' ? 'bg-primary text-white' : 'border-[1px] border-primary text-primary'}`}
              onClick={() => setSelectedType('House')}
            >
              <p>Smart Home</p>
              {selectedType === 'House' && <IoMdCheckmark />}
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
              checked={selectedBudget === 'priceRange'}
              onChange={() => {
                setSelectedBudget('priceRange');
                setShowPriceRange(!showPriceRange);
              }}
            />
            <label htmlFor="priceRange" onClick={handlePriceRangeToggle}>Price Range</label>
          </div>

        {selectedBudget === 'priceRange' && (
        <div className="flex items-center mt-3 gap-3">
          <div className=" border-[1px] border-customPrimary text-customPrimary rounded-lg text-sm pr-10 pl-3 py-1.5">
            <p className="text-xs mb-1.5">From</p>
            <p>N250,000</p>
          </div>
          <p>-</p>
          <div className=" border-[1px] border-customPrimary text-customPrimary rounded-lg text-sm pr-10 pl-3 py-1.5">
            <p className="text-xs mb-1.5">To</p>
            <p>N500,000</p>
          </div>
        </div>
        )}
        </div>

        <div className="flex justify-between mt-5">
          <button className="flex items-center gap-2 bg-primary text-white rounded-lg text-sm px-[4rem] py-3" onClick={handleSave}>
            Save
          </button>
          <button className="flex items-center gap-2  text-primary underline rounded-lg text-sm px-[4rem] py-3" onClick={handleReset}>
            Reset All
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterSearchHomePage;

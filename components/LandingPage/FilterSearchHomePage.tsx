import React from "react";
import { FaSearch } from "react-icons/fa";
import { IoMdClose, IoMdCheckmark } from "react-icons/io";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const FilterSearchHomePage: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-opacity-50 z-10 lg:hidden mt-10">
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
            />
          </div>

          <div className="flex gap-3 mt-4 text-white border-b-[1px] border-customTextColor/50 pb-5 ">
            <button className="flex items-center gap-2 bg-primary rounded-lg text-sm px-2 py-1.5">
              <p>Abuja</p>
              <IoMdClose />
            </button>
            <button className="flex items-center gap-2 border-[1px] border-primary text-primary rounded-lg text-sm px-2 py-1.5">
              Port - Harcout
            </button>
          </div>
        </div>

        <div className="mt-4">
          <p className="text-customTextColor text-sm mb-3 font-semibold">
            Property type
          </p>

          <div className="flex gap-3 mt-3 text-white border-b-[1px] border-customTextColor/50 pb-5 ">
            <button className="flex items-center gap-2 bg-primary rounded-lg text-sm px-2 py-1.5">
              <p>land</p>
              <IoMdCheckmark />
            </button>
            <button className="flex items-center gap-2 border-[1px] border-primary text-primary rounded-lg text-sm px-2 py-1.5">
              Smart Home
            </button>
          </div>
        </div>

        <div className="mt-3">
          <p className="text-customTextColor text-sm mb-3 font-semibold">
            Price
          </p>
          <div className="flex gap-2 ml-1 text-customPrimary text-sm">
            <input type="radio" className=" ring-primary" />
            <label htmlFor="">Price Range</label>
          </div>

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
        </div>

        <div className="flex justify-between mt-5">
          <button className="flex items-center gap-2 bg-primary text-white rounded-lg text-sm px-[4rem] py-3" onClick={onClose}>
            Save
          </button>
          <button className="flex items-center gap-2  text-primary underline rounded-lg text-sm px-[4rem] py-3">
            Reset All
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterSearchHomePage;

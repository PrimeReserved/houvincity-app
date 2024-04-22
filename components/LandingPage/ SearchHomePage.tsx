import React from "react";
import { IoHomeOutline } from "react-icons/io5";
import { MdLocationOn } from "react-icons/md";
import IconButtonHref from "../Buttons/IconButtonHref";

function SearchHomePage() {
  return (
    <div className="mt-[5rem]">
      <div className="lg:flex justify-center mt-[5rem] hidden">
        <div className="flex xl:w-[70%] lg:w-[90%] bg-[#F1F1F1] justify-evenly rounded-full opacity-80 py-2  ">
          <div className="flex gap-7 items-center">
            <div className="outline outline-offset-1 outline-primary p-2 rounded-full text-primary">
              <IoHomeOutline className="w-5 h-5" />
            </div>
            <div className="">
              <p className="text-xs text-customTextColor">I’m Looking to...</p>
              <select className="text-xs -ml-1 bg-[#F1F1F1]">
                <option value="">Buy a Land</option>
                <option value="">Buy a Home</option>
              </select>
            </div>
          </div>

          <div className="flex gap-7 items-center">
          <div className="outline outline-offset-1 outline-primary p-2 rounded-full text-primary">
          <MdLocationOn className="h-5  w-5" />
          </div>
            <div>
              <p className="text-xs text-customTextColor">Location</p>
              <select className="text-xs -ml-1 bg-[#F1F1F1]">
                <option value="">Select Location</option>
                <option value="">Abuja, Nigeria </option>
                <option value="">Port-Harcout, Nigeria </option>
              </select>
            </div>
          </div>
          <div className="flex gap-7 items-center">
            <div className="outline outline-offset-1 outline-primary p-2 rounded-full text-primary">
              <IoHomeOutline className="w-5 h-5" />
            </div>
            <div className="">
              <p className="text-xs text-customTextColor">Price Range</p>
              <select className="text-xs -ml-1 bg-[#F1F1F1]">
                <option value="">Select Price Range</option>
                <option value="">N200,000 - N500,000 </option>
                <option value="">N600,000 - N1,000,000 </option>
                <option value="">N1,000,000 - Above </option>
              </select>
            </div>

            <IconButtonHref text="Search" href="/property" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchHomePage;

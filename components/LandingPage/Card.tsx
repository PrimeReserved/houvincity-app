import React from "react";
import Land from "@/public/images/landingPage/Land.svg";
import Image from "next/image";
import { HiOutlineCube } from "react-icons/hi";
// import Icon from "@/public/images/landingpage/Vector.svg";

function Card() {
  return (
    <div className="px-10">
      <div className="wrapper mt-[3rem] mb-[5rem]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-[5rem] ">
          {/* Display filteredProperties */}
          <div>
            <div className="">
              <Image
                src={Land}
                alt="Land"
                width={420}
                height={496.93}
                style={{
                  clipPath:
                    "polygon(50% 0%, 100% 38%, 100% 100%, 0 100%, 0% 38%)",
                }}
                className=" rounded-t-lg"
              />
            </div>
            <div className="rounded-lg transition duration-300  bg-base-100 drop-shadow-xl rounded-b-md">
              <div className="card-body mx-5 mt-5">
                <p className="card-title text-sm text-customSecondary font-semibold">
                  Tranquil Land
                </p>
                <p className="text-xs font-medium mt-4 text-customSecondary">
                  324, serenity street, Rumuola. Port-Harcout
                </p>

                <div className="flex items-center gap-2 mt-4">
                  <HiOutlineCube className="h-5 w-5" />
                  <p className="text-xs text-customSecondary">500sqm</p>
                </div>

                <div className="my-2 flex justify-between items-center py-2">
                  <p className="text-primary font-semibold ">N200,000</p>
                  <button className="text-white bg-primary text-xs px-4 py-2 rounded-md ">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="">
              <Image
                src={Land}
                alt="Land"
                width={420}
                height={496.93}
                style={{
                  clipPath:
                    "polygon(50% 0%, 100% 38%, 100% 100%, 0 100%, 0% 38%)",
                }}
                className=" rounded-t-lg"
              />
            </div>
            <div className="rounded-lg transition duration-300  bg-base-100 drop-shadow-xl rounded-b-md">
              <div className="card-body mx-5 mt-5">
                <p className="card-title text-sm text-customSecondary font-semibold">
                  Tranquil Land
                </p>
                <p className="text-xs font-medium mt-4 text-customSecondary">
                  324, serenity street, Rumuola. Port-Harcout
                </p>

                <div className="flex items-center gap-2 mt-4">
                <HiOutlineCube className="h-5 w-5" />
                  <p className="text-xs text-customSecondary">500sqm</p>
                </div>

                <div className="my-2 flex justify-between items-center py-2">
                  <p className="text-primary font-semibold ">N200,000</p>
                  <button className="text-white bg-primary text-xs px-4 py-2 rounded-md ">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="">
              <Image
                src={Land}
                alt="Land"
                width={420}
                height={496.93}
                style={{
                  clipPath:
                    "polygon(50% 0%, 100% 38%, 100% 100%, 0 100%, 0% 38%)",
                }}
                className=" rounded-t-lg"
              />
            </div>
            <div className="rounded-lg transition duration-300  bg-base-100 drop-shadow-xl rounded-b-md">
              <div className="card-body mx-5 mt-5">
                <p className="card-title text-sm text-customSecondary font-semibold">
                  Tranquil Land
                </p>
                <p className="text-xs font-medium mt-4 text-customSecondary">
                  324, serenity street, Rumuola. Port-Harcout
                </p>

                <div className="flex items-center gap-2 mt-4">
                <HiOutlineCube className="h-5 w-5" />
                  <p className="text-xs text-customSecondary">500sqm</p>
                </div>

                <div className="my-2 flex justify-between items-center py-2">
                  <p className="text-primary font-semibold ">N200,000</p>
                  <button className="text-white bg-primary text-xs px-4 py-2 rounded-md ">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-10">
          <button className="py-3 px-[3.5rem] border-[1px] border-primary rounded-md text-xs text-primary ">
            View All
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
import React from "react";
import BlogImage from "@/public/images/blog/Rectangle 23861.svg";
import Calendar from "@/public/images/blog/Calendar.svg";
import ArrowRightWhite from "@/public/images/blog/ArrowRightWhite.svg";

import Image from "next/image";

function BlogCard() {
  return (
    <div className="">
      <div className="card w-[250px] h-[450px] bg-base-100 drop-shadow-md">
        <div className="mt-3.5 ml-2.5">
          <Image src={BlogImage} alt="Blog Image" width={230} height={400} />
        </div>
        <div className="card-body items-start p-4 ">
          <div className="flex items-center gap-2 ">
            <Image src={Calendar} alt="Calendar" width={13} height={13} />
            <p className="text-xs">12th January 2024</p>
          </div>
          <h1 className="font-semibold text-lg">
            Navigate the Real Estate Landscape with Expert Insights
          </h1>
          <p className="text-[10px]">
            Lorem ipsum dolor sit amet ettt, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <div className="card-actions ">
            <button className=" btn bg-primary text-white text-[11px] font-light w-[8rem]">
              <p>Read more</p>
              <Image src={ArrowRightWhite} alt="Arrow Right" width={12} height={12} />

            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;

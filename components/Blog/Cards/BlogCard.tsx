import React from "react";
import BlogImage from "@/public/images/blog/Rectangle 23861.svg";
import RealEstate from "@/public/images/blog/Real estate.svg";
import Money from "@/public/images/blog/Money.svg";
import People from "@/public/images/blog/People.svg";
import Calendar from "@/public/images/blog/Calendar.svg";
import ArrowRightWhite from "@/public/images/blog/ArrowRightWhite.svg";

import Image from "next/image";

function BlogCard() {
  const BlogCardData1 = [
    {
      pic: BlogImage,
      date: "12th January 2024",
      title: "Navigate the Real Estate Landscape with Expert Insights",
      details:
        "Lorem ipsum dolor sit amet ettt, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      pic: RealEstate,
      date: "12th January 2024",
      title: "Navigate the Real Estate Landscape with Expert Insights",
      details:
        "Lorem ipsum dolor sit amet ettt, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];
  const BlogCardData2 = [
    {
      pic: Money,
      date: "12th January 2024",
      title: "Navigate the Real Estate Landscape with Expert Insights",
      details:
        "Lorem ipsum dolor sit amet ettt, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      pic: People,
      date: "12th January 2024",
      title: "Navigate the Real Estate Landscape with Expert Insights",
      details:
        "Lorem ipsum dolor sit amet ettt, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  return (
    <div className="mt-5">
      <div className="md:flex gap-5 space-y-5 md:space-y-0 ">
        {BlogCardData1.map(({ pic, date, title, details }, i) => (
          <div
            className="card lg:w-[400px] lg:h-[580px] bg-base-100 drop-shadow-md"
            key={i}
          >
            <div className="mt-3.5 ml-2.5">
              <Image src={pic} alt="Blog Image" width={380} height={500} />
            </div>
            <div className="card-body items-start p-4 mt-1">
              <div className="flex items-center gap-2 ">
                <Image src={Calendar} alt="Calendar" width={13} height={13} />
                <p className="text-xs">{date}</p>
              </div>
              <h1 className="font-semibold text-lg mt-1">{title}</h1>
              <p className="text-[12px] mt-1">{details}</p>

              <div className="card-actions ">
                <button className=" btn bg-primary text-white text-[12px] font-light w-[8rem]">
                  <p>Read more</p>
                  <Image
                    src={ArrowRightWhite}
                    alt="Arrow Right"
                    width={12}
                    height={12}
                  />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="md:flex mt-5 gap-5 space-y-5 md:space-y-0">
        {BlogCardData2.map(({ pic, date, title, details }, i) => (
          <div
            className="card lg:w-[400px] lg:h-[580px] bg-base-100 drop-shadow-md "
            key={i}
          >
            <div className="mt-3.5 ml-2.5">
              <Image src={pic} alt="Blog Image" width={380} height={500} />
            </div>
            <div className="card-body items-start p-4 mt-1">
              <div className="flex items-center gap-2 ">
                <Image src={Calendar} alt="Calendar" width={13} height={13} />
                <p className="text-xs">{date}</p>
              </div>
              <h1 className="font-semibold text-lg mt-1">{title}</h1>
              <p className="text-[12px] mt-1">{details}</p>

              <div className="card-actions ">
                <button className=" btn bg-primary text-white text-[12px] font-light w-[8rem]">
                  <p>Read more</p>
                  <Image
                    src={ArrowRightWhite}
                    alt="Arrow Right"
                    width={12}
                    height={12}
                  />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogCard;

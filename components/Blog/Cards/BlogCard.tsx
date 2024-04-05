import React from "react";

import Calendar from "@/public/images/blog/Calendar.svg";
import ArrowRightWhite from "@/public/images/blog/ArrowRightWhite.svg";
import IBlogCardProps from "@/interfaces/IBlogCardData"

import Image from "next/image";



const BlogCard: React.FC<IBlogCardProps> = ({ blogCards }) => {

  return (
    <div className="mt-5">
      <div className="md:flex gap-5 space-y-5 md:space-y-0 ">
        {blogCards.map((blogCard, i) => (
          <div
            className="card lg:w-[400px] lg:h-[580px] bg-base-100 drop-shadow-md"
            key={i}
          >
            <div className="mt-3.5 ml-2.5">
              <Image src={blogCard.urlToImage} alt="Blog Image" width={380} height={500} />
            </div>
            <div className="card-body items-start p-4 mt-1">
              <div className="flex items-center gap-2 ">
                <Image src={Calendar} alt="Calendar" width={13} height={13} />
                <p className="text-xs">{blogCard.publishedAt}</p>
              </div>
              <h1 className="font-semibold text-lg mt-1">{blogCard.title}</h1>
              {/* <p className="text-[12px] mt-1">{blogCard.details}</p> */}
              {/* Truncate details to 200 words */}
              <p className="text-[12px] mt-1">
                {blogCard.description}
                {blogCard.description?.length > 200 && '...'}
              </p>

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

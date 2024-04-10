import React from "react";
import Key from "@/public/images/blog/Key.svg";
import Plant from "@/public/images/blog/plant.svg";
import Home from "@/public/images/blog/home.svg";
import Image from "next/image";
import ArrowRight from "@/public/images/blog/Vector.svg";

import Link from "next/link";

function DetailedRecentPost() {
  const RecentPostData = [
    {
      pic: Plant,
      details: "Lorem ipsum dolor sit amet ettt, consectetur adipiscing elit",
    },
    {
      pic: Key,
      details: "Lorem ipsum dolor sit amet ettt, consectetur adipiscing elit",
    },
    {
      pic: Home,
      details: "Lorem ipsum dolor sit amet ettt, consectetur adipiscing elit",
    },
  ];

  return (
    <div className="lg:mx-10">
      <p className="text-primary font-medium text-xl">Recent Posts</p>

      {RecentPostData.map(({ pic, details }, i) => (
        <Link href="" key={i}>
          <figure className="flex  bg-white rounded-md mt-5 drop-shadow-md">
            <Image
              src={pic}
              alt="Blog Image"
              width={100}
              height={200}
              className="h-[100%]"
            />{" "}
            <div className=" flex flex-col justify-center px-4">
              <blockquote>
                <p className="text-sm lg:text-[10px] xl:text-sm font-medium">
                  {details}
                </p>
              </blockquote>
              <figcaption className="text-[16px] font-medium flex gap-3 mt-3">
                <div className="text-primary lg:text-[12px] xl:text-base">
                  Read More
                </div>
                <Image
                  src={ArrowRight}
                  alt="Arrow Right"
                  width={12}
                  height={12}
                  className=""
                />
              </figcaption>
            </div>
          </figure>
        </Link>
      ))}
    </div>
  );
}

export default DetailedRecentPost;

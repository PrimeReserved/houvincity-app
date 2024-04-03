import React from "react";
import Image from "next/image";

import KeyHolder from "@/public/images/blog/Rectangle 23858.svg";
import ArrowRight from "@/public/images/blog/Vector.svg";
import Link from "next/link";

const RecentPostCard = () => {
  return (
    <div className="card card-side w-[300px] h-[130px] bg-base-100 shadow-xl">
      <figure>
        <Image
          src={KeyHolder}
          alt="Blog Image"
          width={300}
          height={200}
          className="h-[100%] ml-10"
        />
      </figure>
      <div className="card-body">
        <p className="text-sm">
          Lorem ipsum dolor sit amet ettt, consectetur adipiscing elit
        </p>

        <div className="flex items-start">
          <p className="text-[11px]">
            Read more
          </p>
          <Image src={ArrowRight} alt="Arrow Right" width={12} height={12} className="" />
        </div>
      </div>
    </div>
  );
};

export default RecentPostCard;

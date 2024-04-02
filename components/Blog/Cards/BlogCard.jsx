import React from "react";
import Image from "next/image";
import Link from "next/link";

import BlogImage from "@/public/images/blog/Rectangle 23861.svg";

const BlogCard = () => {
  <div className="card w-96 bg-base-100 shadow-xl">
    <figure className="px-10 pt-10">
      <Image
        src={BlogImage}
        alt="Key holder"
        width={140}
        height={30}
        className="hidden w-full dark:block"
      />
      {/* <img
        src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
        alt="Shoes"
        className="rounded-xl"
      /> */}
    </figure>
    <div className="card-body text-center">
      <Link>
        <h2 className="card-title">
          Navigate the Real Estate Landscape with Expert Insights
        </h2>
      </Link>
      <p>
        Lorem ipsum dolor sit amet ettt, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <div className="card-actions">
        <button className="btn btn-primary">Buy Now</button>
      </div>
    </div>
  </div>;
};

export default BlogCard;

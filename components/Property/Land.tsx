"use client"

import React, { useState } from "react";
import { Property } from "@/typings";

import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { client } from "@/sanity/client";
import imageUrlBuilder from "@sanity/image-url";

import Image from "next/image";
import Link from "next/link";

const builder = imageUrlBuilder(client);

function urlFor(source: SanityImageSource) {
  return builder.image(source);
}



import Land1 from "@/public/images/property/Land1.svg";
// import Land2 from "@/public/images/property/Land2.svg";
// import Land3 from "@/public/images/property/Land3.svg";
// import Land4 from "@/public/images/property/Land2.svg";
// import Land5 from "@/public/images/property/Land1.svg";
// import Land6 from "@/public/images/property/Land3.svg";
// import Land7 from "@/public/images/property/Land1.svg";
// import land8 from "@/public/images/property/Land3.svg";
// import Land9 from "@/public/images/property/Land2.svg";

const Land: React.FC<Property> = ({ properties }: any) => {
  const [searchQuery, setSearchQuery] = useState("");

  if (properties.length === 0) {
    return (
      <div className="flex justify-center items-center h-[20rem]">
        <div>There is currently no available property listing for now, kindly check back later</div>
      </div>
    );
  }

  return (
    <div className="wrapper">
      <h1 className=" text-customPrimary font-bold text-4xl my-10">Land</h1>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search..."
        className="border border-gray-300 px-3 py-2 rounded-md mb-5"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-center">
        {properties.map(( property: Property ) => (
          <div
            className="card card-compact w-[20rem] bg-base-100 shadow-xl rounded-b-md"
            key={property._id}
          >
            <figure>
            <Image
                src={property?.propertyImage ? urlFor(property.propertyImage).url() : Land1}
                alt={property?.title}
                width={355}
                height={285}
              />
            </figure>
            <div className="card-body mx-5 mt-5">
              <p className="text-customPrimary font-semibold ">N500,000,000</p>
              <p className="text-xs font-medium mt-4">
                {property.location}
              </p>
              <div className="mt-4 flex justify-between">
                <p className="text-customPrimary font-semibold text-xs">1035sqft</p>
                <button className="text-white bg-primary text-base px-3 py-2 -mr-5 rounded-br-md">
                  View Full Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Land;

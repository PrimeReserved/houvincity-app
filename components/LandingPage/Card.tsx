"use client"

import Image from "next/image";
import { HiOutlineCube } from "react-icons/hi";
import { Property } from "@/typings";
import House1 from "@/public/images/property/house1.svg"
import Link from "next/link";
import { useEffect, useState } from "react";
import imageUrlBuilder from '@sanity/image-url'
import { client } from "@/sanity/client";
import { SanityImageSource } from "@sanity/image-url/lib/types/types"

const builder = imageUrlBuilder(client)
 
function urlFor(source: SanityImageSource) {
  return builder.image(source)
}

const PAGE_SIZE = 3;

function Card({ properties }: Readonly<{ properties: Property[]}>) {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    // Calculate total pages
    const totalPagesCount = Math.ceil(properties.length / PAGE_SIZE);
    setTotalPages(totalPagesCount);
  }, [properties]);

  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const endIndex = currentPage * PAGE_SIZE;
  const displayedPosts = properties.slice(startIndex, endIndex);


  if (properties.length === 0) {
    return (
      <div className="flex justify-center items-center h-[20rem]">
        <h1 className="text-customTextColor text-4xl">There is currently no available property listing for now, kindly check back later</h1>
      </div>
    );
  }

  return (
    <div className="px-10">
      <div className="wrapper mt-[3rem] mb-[5rem]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-[5rem] ">
          {/* Display filteredProperties */}
         {displayedPosts.map((property: Property) => (
           <div key={property._id}>
           <div className="">
             <Image
               src={property?.propertyImage ? urlFor(property.propertyImage).url() : House1}
               alt={property?.title}
               width={420}
               height={496.93}
               style={{
                 clipPath:
                   "polygon(50% 0%, 100% 38%, 100% 100%, 0 100%, 0% 38%)",
               }}
               className=" rounded-t-lg"
               layout="responsive"
               loading="lazy"
             />
           </div>
           <div className="rounded-lg transition duration-300  bg-base-100 drop-shadow-xl rounded-b-md">
             <div className="card-body mx-5 mt-5">
               <p className="card-title text-sm text-customSecondary font-semibold">
               {property?.title}
               </p>
               <p className="text-xs font-medium mt-4 text-customSecondary">
               {property.location}
               </p>

               <div className="flex items-center gap-2 mt-4">
                 <HiOutlineCube className="h-5 w-5" />
                 <p className="text-xs text-customSecondary">{property.propertySize} sqm</p>
               </div>

               <div className="my-2 flex justify-between items-center py-2">
                 <p className="text-primary font-semibold ">N{property.budget}</p>
                 <Link href={`/property/${property.slug?.current}`}>
                 <button className="text-white bg-primary text-xs px-4 py-2 rounded-md ">
                   Buy Now
                 </button>
                 </Link>
               </div>
             </div>
           </div>
         </div>
         ))}
        </div>

        <div className="flex justify-center mt-10">
          <Link href="/property">
            <button className="py-3 px-[3.5rem] border-[1px] border-primary rounded-md text-xs text-primary ">
              View All
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Card;
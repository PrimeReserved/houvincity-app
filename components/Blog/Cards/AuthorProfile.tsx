
"use client"

import { Suspense, useEffect, useState } from "react";
import Image from "next/image";
import { client } from "@/sanity/client";
import ProfilePic from "@/public/images/blog/Ellipse 7.svg";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { Author } from "@/typings";
import Loading from "@/app/loading";
import { urlForImage } from "@/sanity/lib/image";


const AuthorProfile: React.FC<any> = ({ author, publishedAt }) =>  {
  const { name, image } = author;

  if (!author?.name || !author.image) {
    // Handle the case where author or its properties are undefined
    return <div>Author information is missing</div>;
  }

  function formatName(name: string) {
    const parts = name.split('-');
    const formattedName = parts.map(part => part.charAt(0).toUpperCase() + part.slice(1)).join(' ');
    return formattedName;
  }


  return (
    <div className="mx-10 mb-12">
      <h1 className="text-primary font-medium text-xl">Author</h1>
      <figure className="flex gap-2 bg-white rounded-md mt-5 drop-shadow-md p-4">
        {
          image ? (
            <Suspense fallback={<Loading />}>
              <Image
              src={urlForImage(image)}
              alt="Author"
              width={70}
              height={70}
              loading="lazy"
            />
            </Suspense>
          ) : (
            <Image
              src={ProfilePic}
              alt="Profile Pic"
              width={70}
              height={70}
              loading="lazy"
          />
          )}
        
        <div className=" flex flex-col justify-center px-4">
            <p className="text-xs lg:text-[10px] xl:text-sm font-light">
              Posted by
            </p>
          <div className="text-[16px] font-medium mt-1">
            <div className="text-primary lg:text-[12px] xl:text-base">
              { name }
            </div>
            <p className="font-light text-sm mt-1">on 
              {new Date(publishedAt).toLocaleDateString("en-US", {
                day: "numeric",
                month: "long",
                year: "numeric",
                })}
              </p>
          </div>
        </div>
      </figure>
    </div>
  );
}

export default AuthorProfile;

<<<<<<< HEAD
"use client"

import { Suspense } from "react";
import Image from "next/image";
import { client } from "@/sanity/client";
import ProfilePic from "@/public/images/blog/Ellipse 7.svg";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { Author } from "@/typings";
import Loading from "@/app/loading";

interface AuthorProfileProps {
  author: Author;
  publishedAt: string;
}


const builder = imageUrlBuilder(client);

function urlFor(source: SanityImageSource) {
  return builder.image(source);
}



const AuthorProfile: React.FC<AuthorProfileProps> = ({ author, publishedAt }) =>  {
  const { name, image } = author;

  if (!author || !author?.name || !author.image) {
    // Handle the case where author or its properties are undefined
    return <div>Author information is missing</div>;
  }

  function getOrdinalSuffix(day: number) {
    if (day > 3 && day < 21) return 'th';
    switch (day % 10) {
      case 1: return 'st';
      case 2: return 'nd';
      case 3: return 'rd';
      default: return 'th';
    }
  };

  function formatDate(dateString: string) {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleString('en-US', { month: 'long' });
    const year = date.getFullYear();
    const ordinalSuffix = getOrdinalSuffix(day);

    return `${day}${ordinalSuffix}, ${month} ${year}`
  }

  function formatName(name: string) {
    const parts = name.split('-');
    const formattedName = parts.map(part => part.charAt(0).toUpperCase() + part.slice(1)).join(' ');
    return formattedName;
  }


  return (
    <div className="lg:mx-12">
      <h1 className="text-primary font-medium text-3xl">Author</h1>
      <figure className="flex gap-2 bg-white rounded-md mt-5 drop-shadow-md p-4 animate-jump animate-once animate-ease-in">
        {
          image ? (
            <Suspense fallback={<Loading />}>
              <Image
              src={urlFor(image).url()}
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
              { formatName(name) }
            </div>
            <p className="font-light text-sm mt-1">on {formatDate(publishedAt)}</p>
          </div>
=======
import React from "react";
import Image from "next/image";
import { client } from "@/sanity/client";
import ProfilePic from "@/public/images/blog/Ellipse 7.svg";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { Author } from "@/typings";


const builder = imageUrlBuilder(client);

function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

interface AuthorCardProps {
  author: Author;
}

const AuthorProfile = ({ author }: Readonly<{ author: AuthorCardProps["author"]}>) => {


  const { name, image } = author;
  console.log(`Author: ${author}`)
  if (!author || !author?.name || !author.image) {
    // Handle the case where author or its properties are undefined
    return <div>Author information is missing</div>;
  }

  console.log("Author data:", author);


  return (
    <div className="mx-10 mb-12">
      <h1 className="text-primary font-medium text-xl">Author</h1>
      <figure className="flex gap-2 bg-white rounded-md mt-5 drop-shadow-md p-4">
        {
          image ? (
            <Image
              src={builder.image(image).width(70).height(70).quality(100).url()}
              alt="Author"
              width={100}
              height={200}
              className="h-[100%]"
            />
          ) : (
            <Image
              src={ProfilePic}
              alt="Profile Pic"
              width={100}
              height={200}
              className="h-[100%]"
          />
          )}
        
        <div className=" flex flex-col justify-center px-4">
          <blockquote>
            <p className="text-xs lg:text-[10px] xl:text-sm font-light">
              Posted by
            </p>
          </blockquote>
          <figcaption className="text-[16px] font-medium mt-1">
            <div className="text-primary lg:text-[12px] xl:text-base">
              { name }
            </div>
            <p className="font-light text-sm mt-1">on  Date</p>
          </figcaption>
>>>>>>> b361d4b (I worked on the Property Listing Card)
        </div>
      </figure>
    </div>
  );
}

export default AuthorProfile;

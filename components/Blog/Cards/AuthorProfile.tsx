import React from "react";
import Image from "next/image";
import { client } from "@/sanity/client";
import ProfilePic from "@/public/images/blog/Ellipse 7.svg";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { SanityDocument } from "next-sanity";


const builder = imageUrlBuilder(client);

function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

interface AuthorCardProps {
  author: {
    createdAt: string;
    name: string;
    image: {
      alt: string;
      asset: {
        _ref: string;
      };
    };
  };
}

const AuthorProfile = ({ author }: Readonly<{ author: AuthorCardProps["author"]}>) => {

  const { name, createdAt, image } = author;

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
            <p className="font-light text-sm mt-1">on  {new Date(createdAt).toLocaleDateString("en-US")} </p>
          </figcaption>
        </div>
      </figure>
    </div>
  );
}

export default AuthorProfile;

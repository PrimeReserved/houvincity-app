import React from "react";
import Image from "next/image";
import ProfilePic from "@/public/images/blog/Ellipse 7.svg";

function AuthorProfile() {
  return (
    <div className="mx-10 mb-12">
      <h1 className="text-primary font-medium text-xl">Author</h1>
      <figure className="flex gap-2 bg-white rounded-md mt-5 drop-shadow-md p-4">
        <Image
          src={ProfilePic}
          alt="Profile Pic"
          width={100}
          height={200}
          className="h-[100%]"
        />{" "}
        <div className=" flex flex-col justify-center px-4">
          <blockquote>
            <p className="text-xs lg:text-[10px] xl:text-sm font-light">
              Posted by
            </p>
          </blockquote>
          <figcaption className="text-[16px] font-medium mt-1">
            <div className="text-primary lg:text-[12px] xl:text-base">
              Author name
            </div>
            <p className="font-light text-sm mt-1">on 12th January 2024</p>
          </figcaption>
        </div>
      </figure>
    </div>
  );
}

export default AuthorProfile;

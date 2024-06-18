"use client";

import Link from "next/link";
import { Post } from "@/typings";
import Image from "next/image";
import { useState, useEffect, Suspense } from "react";
import Calendar from "@/public/images/blog/Calendar.svg";
import ArrowRightWhite from "@/public/images/blog/ArrowRightWhite.svg";
import Loading from "@/app/loading";
import { urlForImage } from "@/sanity/lib/image";

// Get a pre-configured url-builder from your sanity client

interface Props {
  posts: Post[];
}

const BlogHomePage = ({ posts }: Props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const PAGE_SIZE = 3;

  useEffect(() => {
    // Calculate total pages
    const totalPagesCount = Math.ceil(posts.length / PAGE_SIZE);
    setTotalPages(totalPagesCount);
  }, [posts]);

  // Pagination logic
  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const endIndex = currentPage * PAGE_SIZE;
  const displayedPosts = posts.slice(startIndex, endIndex);


  return (
    <div className="wrapper flex justify-center items-center  mb-[5rem] px-10">
      <div className="flex flex-col items-center mt-10">
        <h1 className="text-customSecondary text-4xl font-semibold">Stay Updated from Our Blog</h1>
        <p className="text-base text-customTextColor mt-3 mb-[3rem] ">Gather Infromation From Our Blog and Stay Updated</p>
        <div className="mb-10 flex justify-center items-center ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5  md:space-y-0">
            {displayedPosts.map((post, idx) => (
              <Link href={`/blog/${post.slug.current}`} key={post.slug.current}>
                <div className="border rounded-lg overflow-hidden bg-white shadow-md  transition duration-300 transform hover:scale-105 flex flex-col">
                  <div className="relative overflow-hidden rounded-t-lg h-72">
                    <Suspense fallback={<Loading />}>
                      <Image
                        src={urlForImage(post.mainImage)}
                        alt={post.title}
                        width={500}
                        height={500}
                        className="w-full h-full object-cover"
                        loading="lazy"
                    />
                    </Suspense>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center gap-4">
                      <Image
                        src={Calendar}
                        alt="Calendar"
                        width={13}
                        height={13}
                      />
                      <p className="text-xs">
                        {new Date(post._createAt).toLocaleDateString("en-US", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })}
                      </p>
                    </div>
                    <h3 className="text-base line-clamp-2 font-medium mt-2 hover:text-primary transition duration-200 cursor-pointer">
                      {post.title}
                    </h3>
                    <div className="mt-5 flex justify-end">
                      <button className="py-3 px-6 bg-primary text-white text-xs rounded-md hover:text-primary hover:bg-white hover:border-[1px] hover:border-primary flex gap-3 items-center">
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
              </Link>
            ))}
          </div>
        </div>
        <div className="flex justify-center mt-10">
          <Link href={`/blog`}>
            <button className="py-3 px-[3.5rem] border-[1px] border-primary rounded-md text-xs text-primary ">
              View All
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogHomePage;
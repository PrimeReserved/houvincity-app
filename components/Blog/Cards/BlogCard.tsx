<<<<<<< HEAD
// pages/index.tsx

"use client"
import imageUrlBuilder from "@sanity/image-url";
import Calendar from "@/public/images/blog/Calendar.svg";
import ArrowRightWhite from "@/public/images/blog/ArrowRightWhite.svg";
import Image from "next/image";
import { client } from "@/sanity/client";
import Link from "next/link";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { POSTS_QUERY } from "@/sanity/lib/queries";
import NumberCount from "@/components/NumberCount/NumberCount";
import { Suspense, useEffect, useState } from "react";
import { Post, Category } from "@/typings";
import Loading from "@/app/loading";
=======
import React from "react";

import Calendar from "@/public/images/blog/Calendar.svg";
import ArrowRightWhite from "@/public/images/blog/ArrowRightWhite.svg";
import Image from "next/image";
import { client } from "@/sanity/client";
import Link from "next/link";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import Link from "next/link";
>>>>>>> b361d4b (I worked on the Property Listing Card)

// Get a pre-configured url-builder from your sanity client
const builder = imageUrlBuilder(client);

function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

<<<<<<< HEAD
const ITEMS_PER_PAGE = 4;

export const revalidate = 30;



async function getData() {
  const query = POSTS_QUERY

  const data = await client.fetch(query);
  return data;
}


export default function BlogCard() {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getData();
        // console.log(data)
        if (!data || !Array.isArray(data)) return;

        const totalPosts = data.length;
        setTotalPages(Math.ceil(totalPosts / ITEMS_PER_PAGE));

        const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
        const endIndex = startIndex + ITEMS_PER_PAGE;
        setPosts(data.slice(startIndex, endIndex));
      } catch (error) {
        // Handle the error here
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, [currentPage]);


  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

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

  return (
    <div className="mt-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5  md:space-y-0">
        {
          posts?.map((post) => (
            <div key={post._id} className="border rounded-lg overflow-hidden bg-white shadow-md  transition duration-300 transform hover:scale-105 flex flex-col">
              <div className="relative overflow-hidden rounded-t-lg h-100" >
                {post?.mainImage && (
                    <Suspense fallback={<Loading />}>
                      <Image
                      src={urlFor(post?.mainImage).url()}
                      alt={`${post.slug?.current}`}
                      width={380}
                      height={500}
                      layout="responsive"
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                    </Suspense>
                )}
              </div>
              <div className="card-body items-start mt-1 ">
                <div className="flex items-center gap-2">
                  <Image src={Calendar} alt="Calendar" width={13} height={13} />            
                  {post?.publishedAt && (
                    <p className="text-xs">
                      {formatDate(post?.publishedAt)}
                    </p>
                  )}
                </div>
                
                <h1 className="font-semibold text-lg mt-1">{post?.title}</h1>
                <p className="line-clamp-3 text-[12px]">
                  {post?.categories.map((category: Category, index: number) => (
                    <span key={category._id}>{category.description}</span>
                  ))}
                </p>
                <div className="card-actions">
                  <Link href={`/blog/${post?.slug?.current}`}>
                    <button className="btn bg-primary text-white text-xs rounded-md hover:text-primary hover:bg-white hover:border-[1px] hover:border-primary flex gap-3 items-center">
                      Read more
                      <Image src={ArrowRightWhite} alt="Arrow Right" width={12} height={12} />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))
        }
      </div>
      <NumberCount
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};
=======
const BlogCard: React.FC<IBlogCardProps> = ({ article }) => {
  if (!article) {
    return (
      <div className="mt-5">
        <div className="md:flex gap-5 space-y-5 md:space-y-0">
          <h1 className="font-semibold text-lg mt-1">
            Blog Post not available
          </h1>
        </div>
      </div>
    );
  }

  const handleReadMoreClick = () => {
    console.log(`Click Click!!`);
    // Implement logic to navigate to detailed screen
    // You can use `window.location.href` or a routing library (e.g., `useRouter` from Next.js)
  };

  return (
    <div className="mt-5">
      <div className="md:flex gap-5 space-y-5 md:space-y-0">
        <div className="card lg:w-[400px] lg:h-[580px] bg-base-100 drop-shadow-md">
          <div className="mt-3.5 ml-2.5">
            {article?.mainImage && (
              <img
                src={urlFor(article?.mainImage?.asset?._ref)
                  .width(380)
                  .height(500)
                  .url()}
                alt={article?.mainImage?.alt}
              />
            )}
          </div>
          <div className="card-body items-start p-4 mt-1">
            <div className="flex items-center gap-2">
              <Image src={Calendar} alt="Calendar" width={13} height={13} />
              <p className="text-xs">{article?.publishedAt}</p>
            </div>
            <h1 className="font-semibold text-lg mt-1">{article.title}</h1>
            <p className="text-[12px] mt-1">{article?.body}</p>
            <Link href={`/blog/${article.slug.current}`}>
              <div className="card-actions">
                <button
                  className=" btn bg-primary text-white text-[12px] font-light w-[8rem]"
                  onClick={handleReadMoreClick}
                >
                  <p>Read more</p>
                  <Image
                    src={ArrowRightWhite}
                    alt="Arrow Right"
                    width={12}
                    height={12}
                  />
                </button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
>>>>>>> b361d4b (I worked on the Property Listing Card)

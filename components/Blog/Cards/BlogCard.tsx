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
import { useEffect, useState } from "react";
import PostSkeleton from "@/components/Blog/PostSkeleton"
import { Post, Category } from "@/typings";

// Get a pre-configured url-builder from your sanity client
const builder = imageUrlBuilder(client);

function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

const ITEMS_PER_PAGE = 4;

export const revalidate = 30;



async function getData() {
  const query = POSTS_QUERY

  const data = await client.fetch(query);
  return data;
}


export default function BlogCard() {
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getData();
        console.log(data)
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
    <div className="mt-5" suppressHydrationWarning>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5  md:space-y-0">
        {posts?.length > 0 ? (
          posts.map((post) => (
            <div key={post._id} className="card lg:w-[400px] lg:h-[580px] bg-base-100 drop-shadow-md">
              <div className="mt-3.5 ml-2.5" >
                {post?.mainImage && (
                  <figure suppressHydrationWarning>
                    <Image
                      src={urlFor(post?.mainImage).url()}
                      alt={`${post.slug?.current}`}
                      width={380}
                      height={500}
                    />
                  </figure>
                )}
              </div>
              <div className="card-body items-start mt-1">
                <div className="flex items-center gap-2">
                  <figure suppressHydrationWarning>
                    <Image src={Calendar} alt="Calendar" width={13} height={13} />
                  </figure>
                  {post?.publishedAt && (
                    <p className="text-xs">
                      {formatDate(post?.publishedAt)}
                    </p>
                  )}
                </div>
                
                <h1 className="font-semibold text-lg mt-1">{post?.title}</h1>
                <p className="line-clamp-3 text-[12px] mt-1">
                  {post?.categories.map((category: Category, index: number) => (
                    <span key={category._id}>{category.description}</span>
                  ))}
                </p>
                <div className="card-actions">
                  <Link href={`/blog/${post?.slug?.current}`} suppressHydrationWarning>
                    <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg bg-primary text-white text-[12px] font-light inline-flex rounded-xl items-center space-x-2">
                      <span>Read more</span>
                      <figure suppressHydrationWarning>
                        <Image src={ArrowRightWhite} alt="Arrow Right" width={12} height={12} />
                      </figure>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          <PostSkeleton />
        )}
      </div>
      <NumberCount
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};
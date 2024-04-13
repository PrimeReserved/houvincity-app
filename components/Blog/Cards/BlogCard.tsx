// pages/index.tsx

"use client"
import imageUrlBuilder from "@sanity/image-url";
import Calendar from "@/public/images/blog/Calendar.svg";
import ArrowRightWhite from "@/public/images/blog/ArrowRightWhite.svg";
import Image from "next/image";
import { client } from "@/sanity/client";
import Link from "next/link";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { SanityDocument } from "next-sanity";
import { POSTS_QUERY } from "@/sanity/lib/queries";
import NumberCount from "@/components/NumberCount/NumberCount";
import { useEffect, useState } from "react";
import PostSkeleton from "@/components/Blog/PostSkeleton"

// Get a pre-configured url-builder from your sanity client
const builder = imageUrlBuilder(client);

function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

const ITEMS_PER_PAGE = 2;

export const revalidate = 30;



async function getData() {
  const query = POSTS_QUERY

  const data = await client.fetch(query);

  return data;
}


export default function BlogCard(){
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [posts, setPosts] = useState<SanityDocument[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getData();
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

  return (
    <div className="mt-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5  md:space-y-0">
        {posts?.length > 0 ? (
          posts.map((post) => (
            <div key={post._id} className="card lg:w-[400px] lg:h-[580px] bg-base-100 drop-shadow-md">
              <div className="mt-3.5 ml-2.5">
                {post?.mainImage && (
                  <Image
                    src={urlFor(post?.mainImage).url()}
                    alt={`${post.slug?.current}`}
                    width={380}
                    height={500}
                  />
                )}
              </div>
              <div className="card-body items-start p-4 mt-1">
                <div className="flex items-center gap-2">
                  <Image src={Calendar} alt="Calendar" width={13} height={13} />
                  {post?.publishedAt && (
                    <p className="text-xs">
                      {new Date(post?.publishedAt).toLocaleDateString("en-US")}
                    </p>
                  )}
                </div>
                <h1 className="font-semibold text-lg mt-1">{post?.title}</h1>
                <p className="line-clamp-3 text-[12px] mt-1 mb-4">
                  {post?.categories.map((category: Category, index: number) => (
                    <span key={index}>{category.description}</span>
                  ))}
                </p>
                <div className="card-actions">
                  <Link href={`/blog/${post?.slug?.current}`}>
                    <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg bg-primary text-white text-[12px] font-light inline-flex px-5 py-5 rounded-xl items-center space-x-2">
                      <span>Read more</span>
                      <Image src={ArrowRightWhite} alt="Arrow Right" width={12} height={12} />
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
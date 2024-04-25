// pages/index.tsx

"use client";
import imageUrlBuilder from "@sanity/image-url";
import Calendar from "@/public/images/blog/Calendar.svg";
import ArrowRightWhite from "@/public/images/blog/ArrowRightWhite.svg";
import Image from "next/image";
import { client } from "@/sanity/client";
import Link from "next/link";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { NEWS_QUERY } from "@/sanity/lib/queries";
import NumberCount from "@/components/NumberCount/NumberCount";
import { useEffect, useState } from "react";
import PostSkeleton from "@/components/Blog/PostSkeleton";
import { News, Category } from "@/typings";

// Get a pre-configured url-builder from your sanity client
const builder = imageUrlBuilder(client);

function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

const ITEMS_PER_PAGE = 3;
const MIN_LOAD_LINK_POSTS = 6;

export const revalidate = 30;

async function getData() {
  const query = NEWS_QUERY;

  const data = await client.fetch(query);
  return data;
}

export default function NewsDetailPost() {
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [posts, setPosts] = useState<News[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getData();
        console.log(data);
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

  const shouldShowLoadMoreButton = posts.length > ITEMS_PER_PAGE;
  const shouldShowLoadLinkButton = posts.length > MIN_LOAD_LINK_POSTS;

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const loadMoreButton = (
    <button
      className="btn bg-primary hover:bg-white hover:border-[2px]"
      onClick={() => handlePageChange(ITEMS_PER_PAGE + 1)}
    >
      Load More
    </button>
  );

  const loadLinkButton = (
    <Link href="/news" className="btn bg-primary text-white hover:text-primary  hover:bg-white hover:border-[2px] hover:border-primary">
      Load More
    </Link>
  );

  function getOrdinalSuffix(day: number) {
    if (day > 3 && day < 21) return "th";
    switch (day % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  }

  function formatDate(dateString: string) {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleString("en-US", { month: "long" });
    const year = date.getFullYear();
    const ordinalSuffix = getOrdinalSuffix(day);

    return `${day}${ordinalSuffix}, ${month} ${year}`;
  }

  return (
    <div className="mt-5 mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-5  md:space-y-0">
        {posts?.map((post) => (
          <div
            key={post._id}
            className="border rounded-lg overflow-hidden bg-white shadow-md  transition duration-300 transform hover:scale-105 flex flex-col"
          >
            <div className="relative overflow-hidden rounded-t-lg h-100">
              {post?.mainImage && (
                <Image
                  src={urlFor(post?.mainImage).url()}
                  alt={`${post.slug?.current}`}
                  width={380}
                  height={500}
                  layout="responsive"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              )}
            </div>
            <div className="card-body items-start mt-1">
              <div className="flex items-center gap-2">
                <Image src={Calendar} alt="Calendar" width={13} height={13} />
                {post?.publishedAt && (
                  <p className="text-xs">{formatDate(post?.publishedAt)}</p>
                )}
              </div>

              <h1 className="font-semibold text-lg mt-1">{post?.title}</h1>
              <p className="line-clamp-3 text-[12px]">
                {post?.categories && post.categories.map((category: Category, index: number) => (
                  <span key={category._id}>{category.description}</span>
                ))}

              </p>
              <div className="card-actions">
                <Link href={`/blog/${post?.slug?.current}`}>
                  <button className="btn bg-primary text-white text-xs rounded-md hover:text-primary hover:bg-white hover:border-[1px] hover:border-primary flex gap-3 items-center">
                    Read more
                    <Image
                      src={ArrowRightWhite}
                      alt="Arrow Right"
                      width={12}
                      height={12}
                    />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-5 mx-auto">
        <div className="mt-10 mx-auto text-center">
          {/* Load more button or link button */}
          {shouldShowLoadMoreButton ? loadMoreButton : loadLinkButton}
        </div>
      </div>
    </div>
  );
}

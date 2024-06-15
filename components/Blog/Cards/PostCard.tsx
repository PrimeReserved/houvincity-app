// pages/index.tsx
"use client";

import Calendar from "@/public/images/blog/Calendar.svg";
import ArrowRightWhite from "@/public/images/blog/ArrowRightWhite.svg";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { usePathname } from "next/navigation";
import Loading from "@/app/loading";
import { urlForImage } from "@/sanity/lib/image";

export default function PostCard({ post }: Readonly<any>) {
  const pathName = usePathname();


  const isHomePage = pathName === "/";
  // Determine if the current route is for blogs or news
  const isBlogPage = pathName.startsWith("/blog");

  // Set the base path for the href attribute
  let basePath = "";
  if (isBlogPage) {
    basePath = "/blog";
  } else if (isHomePage) {
    basePath = "/";
  }

  if (!post) {
    return null;
  }
  return (
    <div className="">
      <div
        key={post._id}
        className="border rounded-lg overflow-hidden bg-white shadow-md  transition duration-300 transform hover:scale-105 flex flex-col"
      >
        <div className="relative overflow-hidden rounded-t-lg h-100">
          <Suspense fallback={<Loading />}>
            <div
              style={{
                width: "100%",
                maxWidth: "100%",
                height: "auto",
                aspectRatio: "380 / 280",
                overflow: "hidden",
                position: "relative",
              }}
            >
              <Image
                src={urlForImage(post?.mainImage?.asset?._ref)}
                alt={`${post.slug?.current}`}
                width={380}
                height={500}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          </Suspense>
        </div>
        <div className="card-body h-[17rem] ">
          <div className="flex items-center gap-2">
            <Image src={Calendar} alt="Calendar" width={13} height={13} />
            {new Date(post.publishedAt).toLocaleDateString("en-US", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </div>

          <h1 className="font-semibold text-base mt-1 line-clamp-2">
            {post?.title}
          </h1>
          {/* Render description only if not on the home page */}
          {!isHomePage && (
            <p className="line-clamp-3 text-[12px]">
              {post?.body?.map((block: any) => (
                <span key={block._key}>
                  {block?.children?.map((child: any) => child.text)}
                </span>
              ))}
            </p>
          )}
          <div className="card-actions flex justify-end mt-5 items-end ">
            <Link href={`${basePath}/${post?.slug?.current || ""}`}>
              <button className="btn bg-primary text-white text-xs rounded-md hover:text-primary hover:bg-white hover:border-[1px] hover:border-primary flex gap-3 ">
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
    </div>
  );
}

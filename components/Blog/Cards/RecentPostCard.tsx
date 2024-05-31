"use client";

import Image from "next/image";
import ArrowRight from "@/public/images/blog/Vector.svg";
import Link from "next/link";
import { Suspense } from "react";
import Loading from "@/app/loading";
import { urlForImage } from "@/sanity/lib/image";

export default function RecentPostCard({ post }: any) {
  return (
    <div className="xl:mx-12 lg:mx-6">
      <div
        key={post._id}
        className="flex  bg-white rounded-md mt-5 drop-shadow-md animate-jump animate-once animate-ease-in"
      >
        <Suspense fallback={<Loading />}>
          <Image
            src={urlForImage(post?.mainImage)}
            alt={`${post?.slug?.current}`}
            width={100}
            height={100}
            loading="lazy"
          />
        </Suspense>

        <div className="flex flex-col justify-center m-5">
          <blockquote className="text-sm lg:text-[10px] xl:text-sm font-normal">
            <p>{post.title}</p>
          </blockquote>
          <div className="text-[16px] font-medium flex gap-3 mt-3">
            <Link
              className="flex space-x-2"
              href={`/blog/${post?.slug.current}`}
            >
              <p className="text-primary lg:text-[12px] xl:text-base">
                Read More
              </p>
              <Image
                src={ArrowRight}
                alt="Arrow Right"
                width={12}
                height={12}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

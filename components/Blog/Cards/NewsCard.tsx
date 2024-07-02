// pages/index.tsx
"use client";

import Calendar from "@/public/images/blog/Calendar.svg";
import ArrowRightWhite from "@/public/images/blog/ArrowRightWhite.svg";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import Loading from "@/app/loading";
import { urlForImage } from "@/sanity/lib/image";

export default function NewsCard({ article }: Readonly<any>) {

  if (!article) {
    return null;
  }
  return (
    <div className="mt-5">
      <div
        key={article._id}
        className="border rounded-lg overflow-hidden bg-white shadow-md  transition duration-300 transform hover:scale-105 flex flex-col"
      >
        <div className="relative overflow-hidden rounded-t-lg h-100">
          <Suspense fallback={<Loading />}>
            <div
              style={{
                width: "100%",
                maxWidth: "380px",
                height: "auto",
                aspectRatio: "380 / 280",
                overflow: "hidden",
                position: "relative",
              }}
            >
              <Image
                src={urlForImage(article?.image?.asset?._ref)}
                alt={`${article.slug?.current}`}
                width={380}
                height={500}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          </Suspense>
        </div>
        <div className="card-body items-start mt-1 ">
          <div className="flex items-center gap-2">
            <Image src={Calendar} alt="Calendar" width={13} height={13} />
            {new Date(article.publishedAt).toLocaleDateString("en-US", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </div>

          <h1 className="font-semibold text-lg mt-1 line-clamp-1">{article?.title}</h1>
            <p className="line-clamp-3 text-[12px]">
              {article?.body?.map((block: any) => (
                <span key={block._key}>
                  {block?.children?.map((child: any) => child.text)}
                </span>
              ))}
            </p>
          <div className="card-actions">
            <Link href={`/news/${article?.slug?.current || ""}`}>
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
    </div>
  );
}

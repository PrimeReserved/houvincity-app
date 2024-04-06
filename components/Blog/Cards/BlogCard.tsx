import React from "react";
import imageUrlBuilder from "@sanity/image-url";
import Calendar from "@/public/images/blog/Calendar.svg";
import ArrowRightWhite from "@/public/images/blog/ArrowRightWhite.svg";
import IBlogCardProps from "@/interfaces/IBlogCardData";

import Image from "next/image";
import { client } from "@/sanity/client";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import Link from "next/link";

// Get a pre-configured url-builder from your sanity client
const builder = imageUrlBuilder(client);

function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

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
            <p className="text-[12px] mt-1">
              {article?.description}
            </p>
            <div className="card-actions">
              <button className=" btn bg-primary text-white text-[12px] font-light w-[8rem]"
                onClick={handleReadMoreClick}>
                <p>Read more</p>
                <Image src={ArrowRightWhite} alt="Arrow Right" width={12} height={12} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;

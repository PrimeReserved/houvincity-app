// pages/index.tsx

import React from "react";
import imageUrlBuilder from "@sanity/image-url";
import Calendar from "@/public/images/blog/Calendar.svg";
import ArrowRightWhite from "@/public/images/blog/ArrowRightWhite.svg";
import Image from "next/image";
import { client } from "@/sanity/client";
import Link from "next/link";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { SanityDocument } from "next-sanity";

// Get a pre-configured url-builder from your sanity client
const builder = imageUrlBuilder(client);

function urlFor(source: SanityImageSource) {
  return builder.image(source);
}



const BlogCard = ({ posts }: { posts: SanityDocument[] }) => {
  return (
    <div className="mt-5">
      <div className="md:flex gap-5 space-y-5 md:space-y-0">
        {posts?.length > 0 ? (
          posts.map((post) => (
            <div key={post._id} className="card lg:w-[400px] lg:h-[580px] bg-base-100 drop-shadow-md">
              <div className="mt-3.5 ml-2.5">
                {post?.mainImage?.asset && (
                  <Image
                    src={urlFor(post?.mainImage?.asset).url()}
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
                      {new Date(post.publishedAt).toLocaleDateString("en-US")}
                    </p>
                  )}
                </div>
                <h1 className="font-semibold text-lg mt-1">{post?.title}</h1>
                <p className="text-[12px] mt-1">{post?.categories?.description}</p>
                <div className="card-actions">
                  <Link href={`/blog/${post?.slug?.current}`}>
                    <button className="btn bg-primary text-white text-[12px] font-light w-[8rem]">
                      <p>Read more</p>
                      <Image src={ArrowRightWhite} alt="Arrow Right" width={12} height={12} />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="p-4 text-red-500">No posts found</div>
        )}
      </div>
    </div>
  );
};

export default BlogCard;



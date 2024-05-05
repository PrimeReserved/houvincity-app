<<<<<<< HEAD
import Image from "next/image";
import ArrowRight from "@/public/images/blog/Vector.svg";
import Link from "next/link";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/sanity/client";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { POSTS_QUERY } from "@/sanity/lib/queries";
import { Post } from "@/typings"
import { Suspense } from "react";
import Loading from "@/app/loading";


const builder = imageUrlBuilder(client);

function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

async function getData() {
  try {
    const query = POSTS_QUERY;
    const data = await client.fetch(query);

    const slicedData = data.slice(0, 3);

    return slicedData;
  } catch (error) {

    console.error("Error fetching data:", error);
    throw new Error("Error fetching data");
  }
}


export default async function RecentPostCard (){

  const posts: Post[] = await getData();

  if (!posts || !Array.isArray(posts)) {
    return <h1>Fetching Posts, please be still..</h1>
  }

  return (
    <div className="xl:mx-12 lg:mx-6">
      <p className="sm:p-5 text-primary font-medium text-3xl">Recent Posts</p>
      {posts?.length > 0 ? (
        posts.map((post) => (
          <div key={post._id} className="flex  bg-white rounded-md mt-5 drop-shadow-md animate-jump animate-once animate-ease-in">
            <Suspense fallback={<Loading />}>
              <Image
                src={urlFor(post?.mainImage).width(100).height(100).quality(100).url()}
                alt={`${post?.slug?.current}`}
                width={100}
                height={100}
                loading="lazy"
              />
            </Suspense>

            <div className="flex flex-col justify-center m-5">
              <blockquote className="text-sm lg:text-[10px] xl:text-sm font-normal">
                <p>
                {post.title}
                </p>
              </blockquote>
              <div className="text-[16px] font-medium flex gap-3 mt-3">
                <Link className="flex space-x-2" href={`/blog/${post?.slug.current}`}>
                  <p className="text-primary lg:text-[12px] xl:text-base">Read More</p>
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
        ))
      ) : (
        <div className="p-4 text-red-500">No Recent Post</div>
      )}
    </div>
  );
};
=======
import React from "react";
import Image from "next/image";
import ArrowRight from "@/public/images/blog/Vector.svg";
import Link from "next/link";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/sanity/client";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { POSTS_QUERY } from "@/sanity/lib/queries";
import { Category, Post } from "@/typings"


const builder = imageUrlBuilder(client);

function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

async function getData() {
  try {
    const query = POSTS_QUERY;
    const data = await client.fetch(query);

    const slicedData = data.slice(0, 3);

    return slicedData;
  } catch (error) {

    console.error("Error fetching data:", error);
    throw new Error("Error fetching data");
  }
}


export default async function RecentPostCard (){

  const posts: Post[] = await getData();

  if (!posts || !Array.isArray(posts)) {
    return <h1>Fetching Posts, please be still..</h1>
  }

  return (
    <div className="lg:mx-12">
      <p className="text-primary font-medium text-xl">Recent Posts</p>
      {posts?.length > 0 ? (
        posts.map((post) => (
          <div key={post._id} className="flex  bg-white rounded-md mt-5 drop-shadow-md animate-jump animate-once animate-ease-in">
            <Image
              src={urlFor(post?.mainImage).url()}
              alt={`${post?.slug?.current}`}
              width={100}
              height={200}
              loading="lazy"
              style={{
                width: "100%"
              }}
            />

            <div className="flex flex-col justify-center m-5">
              <blockquote className="line-clamp-2 text-sm lg:text-[10px] xl:text-sm font-normal">
                <p>
                {post?.categories.map((category: Category, index: number) => (
                    <span key={index}>{category.description}</span>
                  ))}
                </p>
              </blockquote>
              <div className="text-[16px] font-medium flex gap-3 mt-3">
                <Link className="flex space-x-2" href={`/blog/${post?.slug.current}`}>
                  <p className="text-primary lg:text-[12px] xl:text-base">Read More</p>
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
        ))
      ) : (
        <div className="p-4 text-red-500">No Recent Post</div>
      )}
    </div>
  );
};

export default RecentPostCard;
>>>>>>> b361d4b (I worked on the Property Listing Card)

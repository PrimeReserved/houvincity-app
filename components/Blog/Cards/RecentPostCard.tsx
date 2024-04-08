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
import Key from "@/public/images/blog/Key.svg";
import Plant from "@/public/images/blog/plant.svg";
import Home from "@/public/images/blog/home.svg";
import News1 from "@/public/images/blog/news1.svg";
import News2 from "@/public/images/blog/news2.svg";
import News3 from "@/public/images/blog/news3.svg";
import ArrowRight from "@/public/images/blog/Vector.svg";
import Link from "next/link";

import { client } from "@/sanity/client";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import NewsCard from "./NewsCard";

const NEWS_QUERY = `*[_type == "news"]{

 title,
 slug{
   current,
 },
 image{
   asset->{
     url,
   },
   alt,
 },
 description
}`

type NEWS = {
_id: string;
title: string;
slug?:{
  current: string;
},
image?: {
  asset?: {
    url: string;
  },
  alt: string;
},
description: string;
};

const RecentPostCard = async () => {

  const news = await client.fetch<NEWS>(NEWS_QUERY);

  console.log(`News: ${news}`)
  if (!news) {
    return (
      <div className="mt-5">
        <div className="md:flex gap-5 space-y-5 md:space-y-0">
          <h1 className="font-semibold text-lg mt-1">
            No News not available
          </h1>
        </div>
      </div>
    );
  }

  const RecentPostData = [
    {
      pic: Plant,
      details: "Lorem ipsum dolor sit amet ettt, consectetur adipiscing elit",
    },
    {
      pic: Key,
      details: "Lorem ipsum dolor sit amet ettt, consectetur adipiscing elit",
    },
    {
      pic: Home,
      details: "Lorem ipsum dolor sit amet ettt, consectetur adipiscing elit",
    },
  ];

  const NewsPostDatas = [
    {
      pic: News1,
      details: "Lorem ipsum dolor sit amet ettt, consectetur adipiscing elit",
    },
    {
      pic: News2,
      details: "Lorem ipsum dolor sit amet ettt, consectetur adipiscing elit",
    },
    {
      pic: News3,
      details: "Lorem ipsum dolor sit amet ettt, consectetur adipiscing elit",
    },
  ];

  return (
    <div className="lg:mx-12">
      <p className="text-primary font-medium text-xl">Recent Posts</p>

      {RecentPostData.map(({ pic, details }, i) => (
        <Link href="" key={i}>
          <figure className="flex  bg-white rounded-md mt-5 drop-shadow-md">
            <Image
              src={pic}
              alt="Blog Image"
              width={100}
              height={200}
              className="h-[100%]"
            />{" "}
            <div className=" flex flex-col justify-center px-4">
              <blockquote>
                <p className="text-sm lg:text-[10px] xl:text-sm font-medium">{details}</p>
              </blockquote>
              <figcaption className="text-[16px] font-medium flex gap-3 mt-3">
                <div className="text-primary lg:text-[12px] xl:text-base">Read More</div>
                <Image
                  src={ArrowRight}
                  alt="Arrow Right"
                  width={12}
                  height={12}
                  className=""
                />
              </figcaption>
            </div>
          </figure>
        </Link>
      ))}

      <p className="text-primary font-medium mt-[2.6rem] text-xl">News</p>

      <NewsCard />
    </div>
  );
};

export default RecentPostCard;
>>>>>>> b361d4b (I worked on the Property Listing Card)

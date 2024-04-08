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

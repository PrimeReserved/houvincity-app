"uses client"

import Link from "next/link";
import { client } from "@/sanity/client";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import Image from "next/image";
import ArrowRight from "@/public/images/blog/Vector.svg";
import imageUrlBuilder from "@sanity/image-url";
// Get a pre-configured url-builder from your sanity client
const builder = imageUrlBuilder(client);

function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

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



const NewsCard = async () => {
    const news = await client.fetch<NEWS[]>(NEWS_QUERY);
  
    console.log(`News: ${news}`);
  
    if (!news || !news.length) {
      return (
        <div className="mt-5">
          <div className="md:flex gap-5 space-y-5 md:space-y-0">
            <h1 className="font-semibold text-lg mt-1">No news available</h1>
          </div>
        </div>
      );
    }
  
    return (
      <div className="lg:mx-12">
        <p className="text-primary font-medium text-xl">Recent Posts</p>
  
        {news.map((item, index) => (
          <Link href={`/blog/${item.slug?.current}`} key={index}>
            <figure className="flex bg-white rounded-md mt-5 drop-shadow-md">
              {/* <Image
                src={item.image?.asset?.url}
                alt={item.image?.alt}
                width={100}
                height={200}
                className="h-[100%]"
              /> */}
              <div className="flex flex-col justify-center px-4">
                <blockquote>
                  <p className="text-sm lg:text-[10px] xl:text-sm font-medium">{item.description}</p>
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
  
        {/* The rest of your component code... */}
      </div>
    );
  };
  
  export default NewsCard;
  
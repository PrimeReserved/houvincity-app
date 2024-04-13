// components/Blog/Cards/DetailedCard.tsx

import Houses from "@/public/images/blog/Rectangle 23861.svg";
import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import { dataset, projectId } from "@/sanity/env";
import { RichTextComponents } from "./RichTextComponents";
import { PortableText } from "@portabletext/react";
import { SanityDocument } from "next-sanity";
import { POST_QUERY, AUTHOR_QUERY } from "@/sanity/lib/queries";
import { client } from "@/sanity/client";

export const revalidate = 30; // revalidate at most 30 seconds

interface DetailedCardProps {
  slug: string;
}

async function getData(slug: string) {
  const query = POST_QUERY;

  const data = await client.fetch(query(slug));
  return data;
}


const builder = imageUrlBuilder({ projectId, dataset });

export default async function DetailedCard({ slug }: DetailedCardProps) {
  const post: SanityDocument = await getData(slug);
  
  return (
    <div className="w-[45.6rem]">
      <div className="relative">
        {post?.mainImage ? (
          <Image
            src={builder
              .image(post?.mainImage)
              .width(697)
              .height(600)
              .quality(100)
              .url()}
            alt={post?.mainImage.alt || "Houses"}
            width={697}
            height={600}
          />
        ) : (
          <Image src={Houses} alt="Houses" width={697} height={600} />
        )}
        <div className="absolute z-10 bg-black  px-10 py-7 h-[10rem] w-[43.6rem] bottom-0 opacity-70 ">
          <p className="text-primary text-xs mb-3">5 min read</p>
          {post?.title ? (
            <h1 className="text-white text-3xl w-[30rem] ">{post?.title}</h1>
          ) : (
            <h1 className="text-white text-3xl w-[30rem] ">
              Navigate the Real Estate Landscape with Expert Insights
            </h1>
          )}
        </div>
      </div>
      <div className="pb-10">
        {post?.body ? (
          <PortableText value={post?.body} components={RichTextComponents} />
        ) : null}
      </div>
    </div>
  );
}

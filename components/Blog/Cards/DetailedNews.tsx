// components/Blog/Cards/DetailedNews.tsx

import Houses from "@/public/images/blog/Rectangle 23861.svg";
import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import { dataset, projectId } from "@/sanity/env";
import { RichTextComponents } from "./RichTextComponents";
import { PortableText } from "@portabletext/react";
import { News } from "@/typings"

export const revalidate = 30;
const builder = imageUrlBuilder({ projectId, dataset });


interface DetailedNewsProps {
  article: News;
}




export default function DetailedNews({ article }: Readonly<DetailedNewsProps>) {
  console.log('Received article in DetailedNews:', article);

  const parsedDescription = article?.description
    ? JSON.parse(article.description)
    : null;

  return (
    <div className="w-[45.6rem]">
      <div className="relative">
        {article?.image?.asset?._ref ? (
          <Image
            src={builder
              .image(article?.image?.asset?._ref)
              .width(697)
              .height(600)
              .quality(100)
              .url()}
            alt={article?.title || "Houses"}
            width={697}
            height={600}
          />
        ) : (
          <Image src={Houses} alt="Houses" width={697} height={600} />
        )}
        <div className="absolute z-10 bg-black  px-10 py-7 h-[10rem] w-[43.6rem] bottom-0 opacity-70 ">
          <p className="text-primary text-xs mb-3">5 min read</p>
          {article?.title ? (
            <h1 className="text-white text-3xl w-[30rem] ">{article?.title}</h1>
          ) : (
            <h1 className="text-white text-3xl w-[30rem] ">
              Navigate the Real Estate Landscape with Expert Insights
            </h1>
          )}
        </div>
      </div>
      <div className="pb-10">
        {parsedDescription ? (
          <PortableText value={parsedDescription} components={RichTextComponents} />
        ) : null}
      </div>
    </div>
  );
}
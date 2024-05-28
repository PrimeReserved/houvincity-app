// components/Blog/Cards/DetailedNews.tsx

import Houses from "@/public/images/blog/Rectangle 23861.svg";
import Image from "next/image";
import { RichTextComponents } from "./RichTextComponents";
import { PortableText } from "@portabletext/react";
import { News } from "@/typings"
import { Suspense } from "react";
import Loading from "@/app/loading";
import { urlForImage } from "@/sanity/lib/image";



interface DetailedNewsProps {
  article: any;
}


export default function DetailedNews({ article }: Readonly<DetailedNewsProps>) {

  return (
    <div className="w-[45.6rem]">
      <div className="relative">
        {article?.image ? (
          <Suspense fallback={<Loading />}>
            <Image
            src={urlForImage(article?.image)}
            alt={article?.title || "Houses"}
            width={697}
            height={600}
            priority
          />
          </Suspense>
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
      {article?.description ? (
          <PortableText value={article?.description} components={RichTextComponents} />
        ) : null}
      </div>
    </div>
  );
}

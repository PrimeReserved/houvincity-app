// components/Blog/Cards/PostDetailedCard.tsx

import Houses from "@/public/images/blog/Rectangle 23861.svg";
import Image from "next/image";
import { RichTextComponents } from "./RichTextComponents";
import { PortableText } from "@portabletext/react";
import { Post } from "@/typings"
import { Suspense } from "react";
import Loading from "@/app/loading";
import { urlForImage } from "@/sanity/lib/image";


interface PostDetailedCardProps {
  post: Post;
}



export default async function PostDetailedCard({ post }: Readonly<PostDetailedCardProps>) {

  return (
    <div className="w-[45.6rem]">
      <div className="relative">
        {post?.mainImage ? (
          <Suspense fallback={<Loading />}>
            <Image
              src={urlForImage(post?.mainImage)}
              alt={post?.title || "Houses"}
              width={697}
              height={600}
              layout="responsive"
              loading="lazy"
            />
          </Suspense>
        ) : (
          <Image src={Houses} alt="Houses" width={697} height={600} layout="responsive" loading="lazy" />
        )}
        <div className="md:absolute z-10 bg-black  px-10 py-7 h-[10rem] md:w-[43.6rem] bottom-0 opacity-70 ">
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

<<<<<<< HEAD
// components/Blog/Cards/DetailedCard.tsx

import Houses from "@/public/images/blog/Rectangle 23861.svg";
import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import { dataset, projectId } from "@/sanity/env";
import { RichTextComponents } from "./RichTextComponents";
import { PortableText } from "@portabletext/react";
import { Post } from "@/typings"
import { Suspense } from "react";
import Loading from "@/app/loading";

export const revalidate = 30;
const builder = imageUrlBuilder({ projectId, dataset });


interface DetailedCardProps {
  post: Post;
}



export default async function DetailedCard({ post }: Readonly<DetailedCardProps>) {

  return (
    <div className="md:w-[45.6rem]">
      <div className="md:relative">
        {post?.mainImage ? (
          <Suspense fallback={<Loading />}>
            <Image
              src={builder
                .image(post?.mainImage)
                .width(697)
                .height(600)
                .quality(100)
                .url()}
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
      <div className="sm:p-x-5 pb-10">
        {post?.body ? (
          <PortableText value={post?.body} components={RichTextComponents} />
        ) : null}
      </div>
    </div>
  );
}
=======
import React from "react";
import Houses from "@/public/images/blog/Rectangle 23861.svg";
import Image from "next/image";

function DetailedCard() {
  return (
    <div className="w-[45.6rem]">
      <div className="relative">
        <Image src={Houses} alt="Houses" width={697} height={600} />
        <div className="absolute z-10 bg-black  px-10 py-7 h-[10rem] w-[43.6rem] bottom-0 opacity-70 ">
          <p className="text-primary text-xs mb-3">5 min read</p>
          <h1 className="text-white text-3xl w-[30rem] ">
            Navigate the Real Estate Landscape with Expert Insights
          </h1>
        </div>
      </div>

      <p className="text-sm leading-relaxed mt-10 w-[43.6rem]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>

      <p className="text-[#CDD0CB] text-base my-5 w-[43.6rem]">
        “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore”
      </p>

      <p className="text-sm leading-relaxed mt-10 w-[43.6rem]">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
        odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
        voluptatem sequi nesciunt.
      </p>

      <p className="text-sm leading-relaxed mt-10 w-[43.6rem]">
        Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
        consectetur, adipisci velit, sed quia non numquam eius modi tempora
        incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim
        ad minima veniam, quis nostrum exercitationem ullam corporis suscipit
        laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel
        eum iure reprehenderit qui in ea voluptate velit esse quam nihil
        molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas
        nulla pariatur?
      </p>
    </div>
  );
}

export default DetailedCard;
>>>>>>> b361d4b (I worked on the Property Listing Card)

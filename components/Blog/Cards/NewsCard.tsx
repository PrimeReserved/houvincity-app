"uses client"

import Link from "next/link";
import { client } from "@/sanity/client";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import Image from "next/image";
import ArrowRight from "@/public/images/blog/Vector.svg";
import imageUrlBuilder from "@sanity/image-url";
import { groq } from "next-sanity";
import { News } from "@/typings";
import { Suspense } from "react";
import Loading from "@/app/loading";
import { getNews } from "@/lib/action";
import { urlForImage } from "@/sanity/lib/image";


export default async function NewsCard() {

  const news: News[] = await getNews();

  if (!news || !Array.isArray(news)) {
    return <h1>Fetching News, please be still..</h1>
  }
  return (
    <div className="lg:mx-12">
      <p className="text-primary font-medium mt-[2.6rem] text-3xl">News</p>
      {news?.map((article) => (
        <Link href={`/news/${article.slug?.current}`} key={article._id}>
          <div className="flex bg-white rounded-md mt-5 drop-shadow-md">
            {article?.mainImage && (
              <Suspense fallback={<Loading />}>
                 <Image
                src={urlForImage(article?.mainImage)}
                alt={`${article.slug?.current}`}
                width={100}
                height={100}
                loading="lazy"
              />
              </Suspense>
            )}
            <div className="flex flex-col justify-center m-5">
              <blockquote>
                <p className="text-sm lg:text-[10px] xl:text-sm font-medium">{article?.title}</p>
              </blockquote>
              <div className="text-[16px] font-medium flex gap-3 mt-3">
                <Link className="flex space-x-2" href={`/news/${article?.slug.current}`}>
                  <p className="text-primary lg:text-[12px] xl:text-base">Read More</p>
                  <Image
                    src={ArrowRight}
                    alt="Arrow Right"
                    width={12}
                    height={12}
                    loading="lazy"
                  />
                </Link>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

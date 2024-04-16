"uses client"

import Link from "next/link";
import { client } from "@/sanity/client";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import Image from "next/image";
import ArrowRight from "@/public/images/blog/Vector.svg";
import imageUrlBuilder from "@sanity/image-url";
import { NEWS_QUERY } from "@/sanity/lib/queries";
import { SanityDocument } from "next-sanity";
// Get a pre-configured url-builder from your sanity client
const builder = imageUrlBuilder(client);

function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

async function getData() {
  const query = NEWS_QUERY

  const data = await client.fetch(query);

  // Slice the data to only include the first 3 posts
  const slicedData = data.slice(0, 3);

  return slicedData;
}

export default async function NewsCard(){

  const news: SanityDocument[] = await getData();
  
  if (!news || !Array.isArray(news)) {
    return <h1>Fetching News, please be still..</h1>
  }
    return (
      <div className="lg:mx-12">
        <p className="text-primary font-medium mt-[2.6rem] text-xl">News</p>
        {news?.map((article) => (
          <Link href={`/news/${article.slug?.current}`} key={article._id}>
            <figure className="flex bg-white rounded-md mt-5 drop-shadow-md">
            {article?.image && (
              <Image
                src={urlFor(article?.image).url()}
                alt={`${article.slug?.current}`}
                width={100}
                height={200}
                className="h-[100%]"
              />
            )}
              <div className="flex flex-col justify-center px-4">
                <blockquote>
                  <p className="line-clamp-2 text-sm lg:text-[10px] xl:text-sm font-medium">{article?.description}</p>
                </blockquote>
                <figcaption className="text-[16px] font-medium flex gap-3 mt-3">
                <Link className="flex space-x-2" href={`/news/${article?.slug.current}`}>
                  <div className="text-primary lg:text-[12px] xl:text-base">Read More</div>
                  <Image
                    src={ArrowRight}
                    alt="Arrow Right"
                    width={12}
                    height={12}
                    className=""
                  />
                  </Link>
                </figcaption>
              </div>
            </figure>
          </Link>
        ))}
      </div>
    );
  };
  
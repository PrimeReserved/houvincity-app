"uses client"

import Link from "next/link";
import { client } from "@/sanity/client";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import Image from "next/image";
import ArrowRight from "@/public/images/blog/Vector.svg";
import imageUrlBuilder from "@sanity/image-url";
<<<<<<< HEAD
import { groq } from "next-sanity";
import { News } from "@/typings";
import { Suspense } from "react";
import Loading from "@/app/loading";
=======
>>>>>>> ac73bd8 (feat(testing): Implement comprehensive testing for Header component after experimenting with sanity)
// Get a pre-configured url-builder from your sanity client
const builder = imageUrlBuilder(client);

function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

<<<<<<< HEAD
async function getData() {
  try {
    const query = groq`*[_type == 'news']{
      ...,
      author->,
      categories[]->
    } | order(_createdAt asc)`;
    const data = await client.fetch(query);
    // Slice the data to only include the first 3 posts
    const slicedData = data.slice(0, 3);
    return slicedData;
  } catch (error) {
    console.log(`Error fetching data: ${error}`);
    throw new Error(`Error fetching News data`)
  }
}

export default async function NewsCard() {

  const news: News[] = await getData();

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
                src={urlFor(article?.mainImage).width(100).height(100).quality(100).url()}
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
=======
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
>>>>>>> ac73bd8 (feat(testing): Implement comprehensive testing for Header component after experimenting with sanity)
                  <Image
                    src={ArrowRight}
                    alt="Arrow Right"
                    width={12}
                    height={12}
<<<<<<< HEAD
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
=======
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
  
>>>>>>> ac73bd8 (feat(testing): Implement comprehensive testing for Header component after experimenting with sanity)

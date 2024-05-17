import React from "react";
import ProfilePic from "@/public/images/landingPage/woman.jpeg";
import Image from "next/image";
import { FaStar } from "react-icons/fa6";
import { FaStarHalf } from "react-icons/fa";
import imageUrlBuilder from '@sanity/image-url'
import { client } from "@/sanity/client";
import { SanityImageSource } from "@sanity/image-url/lib/types/types"

const builder = imageUrlBuilder(client)
 
function urlFor(source: SanityImageSource) {
  return builder.image(source)
}


function Review({ reviews }: any) {

  // Limit the number of reviews to 4
  const limitedReviews = reviews.slice(0, 4);

  console.log(reviews)
  return (
    <div className="">
      <div className="lg:wrapper mx-5  ">
        <h1 className="text-customSecondary text-3xl font-semibold my-[7rem] flex justify-center">
          Our Happy Homeowners
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:gap-[5rem] gap-14 mt-[5rem] ">
        {limitedReviews.map((item: any) => (
            <div key={item._id} className="bg-primary rounded-3xl text-white">
              <div className="ml-12 lg:-mt-[4rem] -mt-[2.8rem]">
                {item.authorImage ? (
                  <Image
                    src={urlFor(item.authorImage.asset._ref).quality(100).url()}
                    alt="Profile Pic"
                    width={90}
                    height={90}
                    className="lg:w-[130px] lg:h-[130px] w-[100px] h-[100px] rounded-full border-[2px] border-primary"
                  />
                ) : (
                  <Image
                    src={ProfilePic} // Fallback image
                    alt="Profile Pic"
                    width={90}
                    height={90}
                    className="lg:w-[130px] lg:h-[130px] w-[100px] h-[100px] rounded-full border-[2px] border-primary"
                  />
                )}
              </div>
              <div className="lg:ml-[14rem] ml-[10rem] lg:-mt-[2rem]">
                <p className="font-medium text-sm lg:text-base">
                  {item.name || "Anonymous"}
                </p>
                <div className="flex gap-1">
                  {[...Array(item.review)].map((_, index) => (
                    <FaStar key={index} />
                  ))}
                </div>
              </div>
              <div>
                <p className="text-sm lg:p-10 p-6 font-light">
                  {item.body[0]?.children[0]?.text || "No testimonial provided."}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-[5rem] ">
          <button className="py-3 px-[3.5rem] border-[1px] border-primary rounded-md text-xs text-primary ">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
}

export default Review;
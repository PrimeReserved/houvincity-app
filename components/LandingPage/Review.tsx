import React, { Suspense } from "react";
import ProfilePic from "@/public/images/landingPage/woman.jpeg";
import Image from "next/image";
import { FaStar } from "react-icons/fa6";
import { FaStarHalf } from "react-icons/fa";
import { urlForImage } from "@/sanity/lib/image";
import Loading from "@/app/loading";

function Review({ review }: any) {
  return (
    <div key={review._id} className="bg-primary rounded-3xl text-white">
      <div className="ml-12 lg:-mt-[4rem] -mt-[2.8rem]">
       <Suspense fallback={<Loading />}>
       {review.authorImage ? (
          <Image
            src={urlForImage(review.authorImage.asset._ref)}
            alt="Profile Pic"
            width={90}
            height={90}
            className="lg:w-[130px] lg:h-[130px] w-[100px] h-[100px] rounded-full border-[2px] border-primary"
          />
        ) : (
          <Image
            src={ProfilePic}
            alt="Profile Pic"
            width={90}
            height={90}
            className="lg:w-[130px] lg:h-[130px] w-[100px] h-[100px] rounded-full border-[2px] border-primary"
          />
        )}
       </Suspense>
      </div>
      <div className="lg:ml-[14rem] ml-[10rem] lg:-mt-[2rem]">
        <p className="font-medium text-sm lg:text-base">
          {review.name || "Anonymous"}
        </p>
        <div className="flex gap-1">
          {[...Array(review.review)].map((_, index) => (
            <FaStar key={index} />
          ))}
        </div>
      </div>
      <div>
        <p className="text-sm lg:p-10 p-6 font-light">
          {review.body[0]?.children[0]?.text || "No testimonial provided."}
        </p>
      </div>
    </div>
  );
}

export default Review;

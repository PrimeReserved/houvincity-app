"use client"

import Image from "next/image";
import { Suspense, useState } from "react";
import { GoDotFill, GoDot } from "react-icons/go";
import Loading from "@/app/loading";
import { urlForImage } from "@/sanity/lib/image";

function Testimony({ reviews }: any) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleDotClick = (index:number) => {
    setActiveIndex(index);
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="carousel-container">
        <div
          className="carousel-slide"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {reviews.map((review: any, index: number) => (
            <div key={review.id} className="carousel-card">
              <div className="flex flex-col text-secondBlack justify-center items-center text-center p-5 md:p-14 mb-10 shadow-lg rounded-2xl h-full mx-[2rem] md:mx-[5rem] lg:mx-[14rem] xl:mx-[20rem]">
                <p>
                  {review.body[0]?.children[0]?.text || "No testimonial provided."}
                </p>
                <Suspense fallback={<Loading />}>
                  <Image
                    src={urlForImage(review.authorImage.asset._ref)}
                    alt="Pic"
                    width={120}
                    height={120}
                    className="pt-16 pb-5"
                  />
                </Suspense>
                <p>{review.name || "Anonymous"}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex gap-2 text-2xl mt-4">
        {reviews.map((_: any, index: number) => (
          <div key={index} onClick={() => handleDotClick(index)} className="cursor-pointer">
            {index === activeIndex ? <GoDotFill className="text-primary" /> : <GoDot />}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimony;

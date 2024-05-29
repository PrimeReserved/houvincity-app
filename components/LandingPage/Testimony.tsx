import Image from "next/image";
import React, { Suspense } from "react";
import Loading from "@/app/loading";
import { urlForImage } from "@/sanity/lib/image";
import { GoDotFill, GoDot } from "react-icons/go";

function Testimony({ review }: any) {
  return (
    <div className="flex justify-center mx-auto items-center ">
    <div className="flex flex-col justify-center items-center">
      <div key={review.id}>
        <div className="flex flex-col text-secondBlack justify-center items-center text-center p-5 md:p-14  mb-10 shadow-lg rounded-2xl h-[544px] mx-[2rem] md:mx-[5rem] lg:mx-[14rem] xl:mx-[20rem] ">
          <p className=" ">
            `{review.body[0]?.children[0]?.text || "No testimonial provided."}`
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
      <div className="flex gap-2 text-2xl">
          <GoDot />
          <GoDotFill className="text-primary"/>
          <GoDot />
          <GoDot />
          <GoDot />
        </div>

    </div>

    </div>
  );
}

export default Testimony;

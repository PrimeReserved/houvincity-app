import React from 'react'
import Link from "next/link";

function LiveTour() {
  return (
    <div
      style={{
        backgroundImage: `url(https://res.cloudinary.com/dzd51q99i/image/upload/v1718317171/houvincity/landing-page/Untitled_design_ducldc.png)`,
      }}
      className="mx-4 rounded-xl overflow-hidden  bg-cover "
    >
      <div className=" mx-auto px-4 text-white relative z-10 py-[1rem] pt-6 md:py-[4.5rem] lg:py-[7rem] xl:pt-[15rem] leading-[25px] md:ml-12 xl:ml-16">
        <h1 className=" font-medium md:font-semibold text-base md:text-2xl lg:text-3xl w-[254px] md:w-[500px] lg:w-[600px]  leading-2 md:leading-normal ">
          Join our live video tours and check upcoming events
        </h1>
        <Link href="/livestream">
          <button className="px-4 py-2 md:py-3 md:px-[3rem] bg-primary rounded-md text-xs md:text-sm my-3 md:mt-6  text-white">
            View
          </button>
        </Link>
      </div>
    </div>
  )
}

export default LiveTour

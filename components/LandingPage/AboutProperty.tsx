import React, { Suspense } from "react";
import { FaCheck } from "react-icons/fa";
import Image from "next/image";
import LuxuryHome from "@/public/images/landingPage/Union.png";
import Loading from "@/app/loading";

function AboutProperty() {
  return (
    <div className="wrapper my-[5rem] flex flex-col md:flex-row gap-5 items-center justify-evenly px-10">
      <div>
        <h1 className="font-semibold text-3xl text-customSecondary">
          Why Choose Us
        </h1>
        <div className="mt-5 md:w-[453px]  ">
          <div className="flex items-start gap-4">
            <div className="p-2 rounded-full bg-primary text-white">
            <FaCheck />
            </div>
            <div className="">
              <h2 className="font-semibold text-xl md:text-2xl text-customSecondary">
                Best Prices
              </h2>
              <p className="text-sm text-customTextColor mt-2">
                Experience the luxury of affordability with our best prices on
                top-tier properties, making upscale living accessible to all, ur
                commitment to competitive prices ensures...
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4 mt-5">
            <div className="p-2 rounded-full bg-primary text-white">
            <FaCheck />
            </div>
            <div className="">
              <h1 className="font-semibold text-xl md:text-2xl text-customSecondary">
                High Quality Properties
              </h1>
              <p className="text-sm text-customTextColor mt-2">
                Experience the luxury of affordability with our best prices on
                top-tier properties, making upscale living accessible to all, ur
                commitment to competitive prices ensures...
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4 mt-5">
            <div className="p-2 rounded-full bg-primary text-white">
            <FaCheck />
            </div>
            <div className="">
              <h1 className="font-semibold text-xl md:text-2xl text-customSecondary">
                Local Market Insight
              </h1>
              <p className="text-sm text-customTextColor mt-2">
                Experience the luxury of affordability with our best prices on
                top-tier properties, making upscale living accessible to all, ur
                commitment to competitive prices ensures...
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4 mt-5">
            <div className="p-2 rounded-full bg-primary text-white">
            <FaCheck />
            </div>
            <div className="">
              <h1 className="font-semibold text-xl md:text-2xl text-customSecondary">
                Trusted Reputation
              </h1>
              <p className="text-sm text-customTextColor mt-2">
                Experience the luxury of affordability with our best prices on
                top-tier properties, making upscale living accessible to all, ur
                commitment to competitive prices ensures...
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Suspense fallback={<Loading />}>
        <Image
          src="https://res.cloudinary.com/dzd51q99i/image/upload/v1716690096/houvincity/landing-page/Union_chih6l.png"
          alt="Luxury Home"
          width={407}
          height={390.39}
          style={{
            clipPath: "polygon(50% 0%, 100% 38%, 100% 100%, 0 100%, 0% 38%)",
          }}
        />
        </Suspense>
      </div>
    </div>
  );
}

export default AboutProperty;
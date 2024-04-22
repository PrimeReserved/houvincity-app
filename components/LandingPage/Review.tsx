import React from "react";
import ProfilePic from "@/public/images/landingPage/woman.jpeg";
import Image from "next/image";
import { FaStar } from "react-icons/fa6";
import { FaStarHalf } from "react-icons/fa";


function Review() {
  return (
    <div className="px-10">
      <div className="lg:wrapper mx-5 mb-[5rem] ">
        <h1 className="text-customSecondary text-3xl font-semibold my-[7rem] flex justify-center">
          Our Happy Homeowners
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:gap-[5rem] gap-14 mt-[5rem] ">
          <div className="bg-primary  rounded-3xl text-white">
            <div className="ml-12 lg:-mt-[4rem] -mt-[2.8rem] ">
              <Image
                src={ProfilePic}
                alt="Profile Pic"
                width={90}
                height={90}
                className="lg:w-[130px] lg:h-[130px] w-[100px] h-[100px] rounded-full border-[2px] border-primary "
              />
            </div>
            <div className="lg:ml-[14rem] ml-[10rem] lg:-mt-[2rem] ">
              <p className="font-medium text-sm lg:text-base">
                Mr Martins Egwuatu
              </p>
              <div className="flex gap-1">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalf />
              </div>
            </div>
            <div>
              <p className=" text-sm lg:p-10 p-6 font-light ">
                I am privileged to have gotten my land through the agency of
                Houvincity Limited. It was indeed a seamless journey, from
                meeting Mr. Hope Uzodimma who educated and enlightened me on the
                importance of getting lands at locations where development would
                get to in a short time, places that share landmarks with
                Industries, schools, and major markets, to scheduling
                appointments and going for site inspection a couple of times, to
                finally making a good buying decision.
              </p>
            </div>
          </div>

          <div className="bg-primary  rounded-3xl text-white">
            <div className="ml-12 lg:-mt-[4rem] -mt-[2.8rem] ">
              <Image
                src={ProfilePic}
                alt="Profile Pic"
                width={90}
                height={90}
                className="lg:w-[130px] lg:h-[130px] w-[100px] h-[100px] rounded-full border-[2px] border-primary "
              />
            </div>
            <div className="lg:ml-[14rem] ml-[10rem] lg:-mt-[2rem] ">
              <p className="font-medium text-white text-sm lg:text-base">
                Mr Martins Egwuatu
              </p>
              <div className="flex gap-1">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalf />
              </div>
            </div>
            <div>
              <p className="text-white text-sm lg:p-10 p-6 font-light ">
                I am privileged to have gotten my land through the agency of
                Houvincity Limited. It was indeed a seamless journey, from
                meeting Mr. Hope Uzodimma who educated and enlightened me on the
                importance of getting lands at locations where development would
                get to in a short time, places that share landmarks with
                Industries, schools, and major markets, to scheduling
                appointments and going for site inspection a couple of times, to
                finally making a good buying decision.
              </p>
            </div>
          </div>
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
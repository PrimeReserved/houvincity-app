import React from "react";
import Image from "next/image";
import Calendar from "@/public/images/blog/Calendar.svg";
import ArrowRightWhite from "@/public/images/blog/ArrowRightWhite.svg";

const PostSkeleton = () => {
  return (
    <div className="rounded-md bg-gray-200 p-4 animate-pulse">
      <div className="h-32 w-full bg-gray-300 mb-4"></div>
      <div className="h-6 w-3/4 bg-gray-300 mb-2"></div>
      <div className="h-6 w-1/2 bg-gray-300 mb-2"></div>
      <div className="h-6 w-3/4 bg-gray-300 mb-2"></div>
    </div>
    // <div className="card lg:w-[400px] lg:h-[580px] bg-base-100 drop-shadow-md">
    //   <div className="mt-3.5 ml-2.5">
    //     <div className="h-[500px] bg-gray-200"></div>
    //   </div>
    //   <div className="card-body items-start p-4 mt-1">
    //     <div className="flex items-center gap-2">
    //       <div className="h-4 w-4 bg-gray-200"></div> {/* Placeholder for Calendar icon */}
    //       <div className="h-4 w-20 bg-gray-200"></div> {/* Placeholder for Date */}
    //     </div>
    //     <div className="font-semibold text-lg mt-1 h-6 bg-gray-200"></div> {/* Placeholder for Title */}
    //     <div className="line-clamp-3 text-[12px] mt-1 mb-4">
    //       <div className="h-4 w-1/4 bg-gray-200 mb-1"></div> {/* Placeholder for Category */}
    //       <div className="h-4 w-1/2 bg-gray-200 mb-1"></div> {/* Placeholder for Category */}
    //       <div className="h-4 w-3/4 bg-gray-200 mb-1"></div> {/* Placeholder for Category */}
    //     </div>
    //     <div className="card-actions">
    //       <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg bg-primary text-white text-[12px] font-light inline-flex px-5 py-5 rounded-xl items-center space-x-2">
    //         <span className="h-4 w-12 bg-gray-200"></span> {/* Placeholder for "Read more" */}
    //         <div className="h-4 w-4 bg-gray-200"></div> {/* Placeholder for Arrow icon */}
    //       </button>
    //     </div>
    //   </div>
    // </div>
  );
};

export default PostSkeleton;

import React from "react";
import Houses from "@/public/images/blog/Rectangle 23861.svg";
import Image from "next/image";

function DetailedCard() {
  return (
    <div className="w-[45.6rem]">
      <div className="relative">
        <Image src={Houses} alt="Houses" width={697} height={600} />
        <div className="absolute z-10 bg-black  px-10 py-7 h-[10rem] w-[43.6rem] bottom-0 opacity-70 ">
          <p className="text-primary text-xs mb-3">5 min read</p>
          <h1 className="text-white text-3xl w-[30rem] ">
            Navigate the Real Estate Landscape with Expert Insights
          </h1>
        </div>
      </div>

      <p className="text-sm leading-relaxed mt-10 w-[43.6rem]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>

      <p className="text-[#CDD0CB] text-base my-5 w-[43.6rem]">
        “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore”
      </p>

      <p className="text-sm leading-relaxed mt-10 w-[43.6rem]">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
        odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
        voluptatem sequi nesciunt.
      </p>

      <p className="text-sm leading-relaxed mt-10 w-[43.6rem]">
        Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
        consectetur, adipisci velit, sed quia non numquam eius modi tempora
        incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim
        ad minima veniam, quis nostrum exercitationem ullam corporis suscipit
        laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel
        eum iure reprehenderit qui in ea voluptate velit esse quam nihil
        molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas
        nulla pariatur?
      </p>
    </div>
  );
}

export default DetailedCard;

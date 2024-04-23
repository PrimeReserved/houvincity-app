import React from "react";

function Newsletter() {
  return (
    <div>
      <div className="hero min-h-[30rem] bg-white">
        <div className="z-0 flex flex-col items-center justify-center w-full gap-4 p-4 text-center">
          <div className=" md:max-w-[38rem]">
            <h1 className=" text-[28px] md:text-[50px] text-[#040A3B] font-medium md:font-semibold">
              Never Miss A Beat
            </h1>
            <p className="py-6 text-[#79747E] ">
              Stay In the Loop with our newsletter! Subscribe now for exclusive
              updates, real estate insights and exciting offers delivered to
              your inbox
            </p>
          </div>

          <div className="md:w-[60%] w-[100%]">
            <input
              type="email"
              placeholder="Enter your email Address"
              className="p-4 focus-within:border-2 focus-within:border-primary bg-white rounded-full w-full border-[1px] h-[4rem] md:h-[5rem] relative shadow-md text-[14px] focus:outline-none"
            />
            <button className="btn absolute text-white -ml-[8rem] md:-ml-[10rem] mt-3 md:mt-5 text-[12px] w-[7rem] md:w-[8rem]  h-[2.5rem] bg-[#6DBA3A] rounded-md hover:border-primary hover:text-primary hover:bg-white hover:border-2">Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;

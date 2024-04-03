import React from "react";
import Image from "next/image";
import Heroimage from "../../public/Hero_section.png";

function Hero() {
  return (
    <div>
      <div
        className="hero min-h-[30rem]"
        style={{
          backgroundImage: `url(${Heroimage.src})`,
        }}
      >
        <div className="hero-content text-center ">
          <div className=" max-w-md md:max-w-[48rem]">
            <h1 className="mb-7 text-4xl md:text-5xl font-semibold ">Welcome to Our Blog</h1>
            <p className="mt-5 text-[17px] px-8 font-medium">
            Stay updated with Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;

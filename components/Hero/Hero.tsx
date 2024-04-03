import React from "react";
import StyledHeading from "../Typography/StyledHeading";
import StyledText from "../Typography/StyledText";


function Hero() {
  return (
    <div>
      <div
        className="hero min-h-[20rem]"
        style={{
          backgroundImage: `url('./images/blog/Hero section.png')`,
        }}
      >
        <div className="hero-content text-center ">
          <div className=" max-w-md md:max-w-[48rem]">
            <StyledHeading>{"Welcome to Our Blog"}</StyledHeading>
            <StyledText>{"Stay updated with Lorem ipsum dolor sit amet, consectetur adipiscing\
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna\
            aliqua."}</StyledText>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;

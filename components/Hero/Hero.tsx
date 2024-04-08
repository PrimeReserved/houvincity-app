"use client"

import StyledHeading from "../Typography/StyledHeading";
import StyledText from "../Typography/StyledText";
import IHeroProps from "@/interfaces/IHeroProps"



const Hero: React.FC<IHeroProps> = ({ image, title, description, children }) => {
  const backgroundImageStyle = {
    backgroundImage: image ? `url(${image})` : `url('./images/blog/Hero section.png')`,
  };

  console.log(backgroundImageStyle)

  return (
    <div className="hero min-h-[30rem] md:mt-[7rem] mt-[5rem] flex items-center justify-center" 
    data-testid="hero" 
    data-background-image={backgroundImageStyle.backgroundImage}
    style={backgroundImageStyle}>
      <div className="hero-content text-center mt-[2rem]">
        <div className="max-w-md md:max-w-[48rem]">
          {title && <StyledHeading>{title}</StyledHeading>}
          {description && <StyledText>{description}</StyledText>}
          {children}
        </div>
      </div>
    </div>
  );
};

export default Hero;

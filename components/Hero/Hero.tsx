import React from "react";
import StyledHeading from "../Typography/StyledHeading";
import StyledText from "../Typography/StyledText";
import IHeroProps from "@/interfaces/IHeroProps";

const Hero: React.FC<IHeroProps> = ({ image, title, description, children }) => {
  const backgroundImageStyle = {
    backgroundImage: image ? `url(${image})` : `url('./images/blog/Hero section.png')`,
  };

  return (
    <div className="hero  min-h-[20rem] w-[100%] flex items-center justify-center" style={backgroundImageStyle}>
      <div className="max-w-md md:max-w-[40rem] text-center">
        {title && <StyledHeading>{title}</StyledHeading>}
        {description && <StyledText>{description}</StyledText>}
        {children}
      </div>
    </div>
  );
};

export default Hero;

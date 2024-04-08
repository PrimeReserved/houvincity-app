import React from "react";

interface IStyledHeadingProps {
  children: React.ReactNode;
}

const StyledHeading: React.FC<IStyledHeadingProps> = ({ children }) => {
    return (
      <h1 className="mb-7 text-white text-4xl md:text-5xl font-semibold">{children}</h1>
    );
  };
  
  export default StyledHeading;
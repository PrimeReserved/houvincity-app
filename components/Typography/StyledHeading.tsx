import React from "react";

interface IStyledHeadingProps {
  children: React.ReactNode;
}

const StyledHeading: React.FC<IStyledHeadingProps> = ({ children }) => {
    return (
<<<<<<< HEAD
      <h1 className="mb-7 text-white text-4xl md:text-5xl font-semibold animate-ping animate-once animate-ease-in">{children}</h1>
=======
      <h1 className="mb-7 text-white text-4xl md:text-5xl font-semibold ">{children}</h1>
>>>>>>> b361d4b (I worked on the Property Listing Card)
    );
  };
  
  export default StyledHeading;
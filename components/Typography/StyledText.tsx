import React from "react";

interface IStyledTextProps {
  children: React.ReactNode;
}

const StyledText: React.FC<IStyledTextProps> = ({ children }) => {
    return (
<<<<<<< HEAD
      <p className="mt-5 text-heroText text-[17px] px-8 font-medium animate-ping animate-once animate-ease-in">{children}</p>
=======
      <p className="mt-5 text-heroText text-[17px] px-8 font-medium">{children}</p>
>>>>>>> b361d4b (I worked on the Property Listing Card)
    );
};

export default StyledText;
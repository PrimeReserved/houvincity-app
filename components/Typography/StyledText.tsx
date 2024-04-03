import React from "react";

interface IStyledTextProps {
  children: React.ReactNode;
}

const StyledText: React.FC<IStyledTextProps> = ({ children }) => {
    return (
      <p className="mt-5 text-heroText text-[17px] px-8 font-medium">{children}</p>
    );
};

export default StyledText;
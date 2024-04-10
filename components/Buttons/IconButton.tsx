"use client";
<<<<<<< HEAD
=======
import React, { useState } from "react";
>>>>>>> b361d4b (I worked on the Property Listing Card)
import { ReactNode } from "react";

interface IconButtonProps {
  text: string;
  icon?: ReactNode | false; // Accepts JSX or `false` for conditional rendering
  // icon?: React.ReactNode;
}

const IconButton: React.FC<IconButtonProps> = ({ text, icon }) => {

  return (
<<<<<<< HEAD
    <button
=======
    <>
      <button
>>>>>>> b361d4b (I worked on the Property Listing Card)
        className="inline-flex items-center justify-center rounded-xl border border-transparent bg-primary px-[3rem] py-4 text-sm text-white duration-300 ease-in-out hover:bg-primary/80"
      >
        {/* Render icon if provided */}
        <span>{text}</span>
        {icon !== false && <span className="ml-2 h-4 w-4">{icon}</span>}
        {/* {icon && <span className="ml-2">{icon}</span>} */}
      </button>
<<<<<<< HEAD
=======
    </>
>>>>>>> b361d4b (I worked on the Property Listing Card)
  );
};

export default IconButton;
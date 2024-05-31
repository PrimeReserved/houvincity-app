"use client"

import React, { useState } from "react";


export default function  NumberCount() {
  const [currentPage, setCurrentPage] = useState(1);

  const handleNext = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrev = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };


  return (
    <div className="flex justify-center items-center mt-[5rem] text-center text-[#040A3B] text-xl gap-2">
        <button
          className="btn w-15 h-10 flex items-center justify-center hover:bg-primary"
          onClick={handlePrev}
          disabled={currentPage === 1}
        >
          Previous
        </button>
      <span className="mx-2">{currentPage}</span>
        <button
          className="btn w-15 h-10 flex items-center justify-center hover:bg-primary"
          onClick={handleNext}
        >
          Next
        </button>
    </div>
  );
};

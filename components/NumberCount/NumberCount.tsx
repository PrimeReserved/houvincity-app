"use client"

import React, { useState } from "react";

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange?: (pageNumber: number) => void;
}

const NumberCount: React.FC<PaginationProps> = ({
  totalPages,
  currentPage,
  onPageChange
}) => {
  // Handle previous/next button clicks
  const handlePageChange = (pageNumber: number) => {
    if (onPageChange && pageNumber > 0 && pageNumber <= totalPages) {
      onPageChange(pageNumber);
    }
  };

  // Render page numbers with active state
  const pageNumbers = [];
  for (let i = 1; i <= Math.min(totalPages, 3); i++) {
    // Show max 3 pages
    pageNumbers.push(
      <p
        key={i}
        className={`w-9 h-10 flex items-center justify-center ${currentPage === i ? 'bg-primary text-white' : 'hover:bg-gray-100'
          }`}
        onClick={() => handlePageChange(i)}
      >
        {i}
      </p>
    );
  }

  // Render ellipsis (...) if there are more pages
  if (totalPages > 3) {
    pageNumbers.push(
      <p className="w-9 h-10 flex items-center justify-center mb-3">...</p>
    );
  }

  return (
    <div className="flex justify-center items-center mt-[5rem] text-center text-[#040A3B] text-xl gap-2">
      {currentPage > 1 && ( // Only show previous button if not on first page
        <button
          className="w-15 h-10 flex items-center justify-center hover:bg-gray-100"
          onClick={() => handlePageChange(currentPage - 1)}
        >
          Previous
        </button>
      )}
      {pageNumbers}
      <button
        className="w-15 h-10 flex items-center justify-center hover:bg-gray-100"
        onClick={() => handlePageChange(currentPage + 1)}
      >
        Next
      </button>
    </div>
  );
};

<<<<<<< HEAD
export default NumberCount;
=======
export default NumberCount;
>>>>>>> b361d4b (I worked on the Property Listing Card)

"use client"

import clsx from 'clsx';

export default function Pagination({ totalPages, currentPage, onPageChange }) {
  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  const showPages = pages.slice(0, 3);
  const showDots = pages.length > 3;
  const showNext = pages.length > 3;

  const handlePageChange = (page) => {
    onPageChange(page);
  };

  return (
    <div className="join">
      {showPages.map((page) => (
        <button
          key={page}
          className={clsx('join-item btn hover:bg-primary hover:text-white', {
            'bg-primary text-white': page === currentPage,
          })}
          onClick={() => handlePageChange(page)}
        >
          {page}
        </button>
      ))}
      {showDots && (
        <button
          className={clsx('join-item btn hover:bg-primary hover:text-white', {
            'bg-primary text-white': currentPage > 3,
          })}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          ...
        </button>
      )}
      {showNext && (
        <button
          className="join-item btn hover:bg-primary hover:text-white"
          onClick={() => handlePageChange(currentPage + 1)}
        >
          Next
        </button>
      )}
    </div>
  );
}
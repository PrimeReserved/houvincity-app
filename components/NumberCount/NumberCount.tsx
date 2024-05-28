import React, { useState, useEffect } from "react";

interface PaginationProps {
  totalPosts: number;
  onPageChange: (pageNumber: number) => void;
}

interface Node {
  pageNumber: number;
  next: Node | null;
}

const NumberCount: React.FC<PaginationProps> = ({
  totalPosts,
  onPageChange
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [head, setHead] = useState<Node | null>(null);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const pageSize = 4; // Adjust this value as needed
    const totalPagesCount = Math.ceil(totalPosts / pageSize);
    setTotalPages(totalPagesCount);

    const newNode = (pageNumber: number) => ({ pageNumber, next: null });
    let current: any = newNode(1);
    setHead(current);

    for (let i = 2; i <= totalPagesCount; i++) {
      const node = newNode(i);
      current.next = node;
      current = node;
    }
  }, [totalPosts]);

  const handlePageChange = (pageNumber: number) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
      onPageChange(pageNumber);
    }
  };

  // Render page numbers with active state
  const pageNumbers = [];
  let current: any = head;
  while (current) {
    pageNumbers.push(
      <button
  key={current.pageNumber}
  className={`w-9 h-10 flex items-center justify-center ${currentPage === current.pageNumber ? 'bg-primary text-white' : 'hover:bg-gray-100'
  }`}
  onClick={() => handlePageChange(current.pageNumber)}
  onKeyUp={(event) => {
    if (event.key === 'Enter') {
      handlePageChange(current.pageNumber);
    }
  }}
>
  {current.pageNumber}
</button>
    );
    current = current.next;
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
      {currentPage < totalPages && ( // Only show next button if not on last page
        <button
          className="w-15 h-10 flex items-center justify-center hover:bg-gray-100"
          onClick={() => handlePageChange(currentPage + 1)}
        >
          Next
        </button>
      )}
    </div>
  );
};

export default NumberCount;
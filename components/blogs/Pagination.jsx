'use client';

import { useState, useEffect } from 'react';
import { twMerge } from 'tailwind-merge';

const Pagination = ({ totalItems, itemsPerPage, onPageChange }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  useEffect(() => {
    onPageChange(currentPage);
  }, [currentPage, onPageChange]);

  const handlePageClick = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <li
          key={i}
          className={twMerge(
            'flex items-center justify-center px-5 h-14 leading-tight text-gray-500 border border-solid  hover:bg-gray-100 hover:text-gray-700 cursor-pointer',
            i === currentPage ? 'bg-primary text-white border-primary' : 'border-gray-300'
          )}
          onClick={() => handlePageClick(i)}
        >
          {i}
        </li>
      );
    }
    return pageNumbers;
  };

  return (
    <nav aria-label="Page navigation" className="max-w-2xl mx-auto flex justify-center my-16">
      <ul className="flex items-center text-xl">
        {/* PREV PAGE */}
        <li
          className={twMerge(
            'flex items-center justify-center px-5 h-14 ml-0 leading-tight  border border-solid border-gray-300 rounded-l-lg cursor-pointer',
            currentPage === 1
              ? 'text-gray-300 cursor-not-allowed'
              : 'text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700'
          )}
          onClick={() => handlePageClick(currentPage - 1)}
        >
          Prev
        </li>

        {/* PAGITNATION NUMBERS */}
        {renderPageNumbers()}

        {/* NEXT PAGE */}
        <li
          className={twMerge(
            'flex items-center justify-center px-5 h-14 ml-0 leading-tight text-gray-500 bg-white border border-solid border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 cursor-pointer',
            currentPage === totalPages
              ? 'text-gray-300 cursor-not-allowed'
              : 'text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700'
          )}
          onClick={() => handlePageClick(currentPage + 1)}
        >
          Next
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;

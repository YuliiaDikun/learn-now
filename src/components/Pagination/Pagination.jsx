import { usePagination, DOTS } from "../../hooks/usePagination";
import React from "react";
import {
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos,
} from "react-icons/md";

import {
  PaginationContainer,
  PaginationItem,
  StyledDOTS,
} from "./Pagination.styled";
const Pagination = ({
  onPageChange,
  totalCount,
  siblingCount = 1,
  currentPage,
  pageSize,
}) => {
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });
  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];

  return (
    <PaginationContainer>
      {/* Left navigation arrow */}
      <PaginationItem disabled={currentPage === 1} onClick={onPrevious}>
        <MdOutlineArrowBackIosNew size={20} />
      </PaginationItem>
      {paginationRange.map((pageNumber, i) => {
        // If the pageItem is a DOT, render the DOTS unicode character
        if (pageNumber === DOTS) {
          return <StyledDOTS key={i}>&#8230;</StyledDOTS>;
        }

        // Render our Page Pills
        return (
          <PaginationItem
            key={i}
            selected={pageNumber === currentPage}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </PaginationItem>
        );
      })}
      {/*  Right Navigation arrow */}
      <PaginationItem disabled={currentPage === lastPage} onClick={onNext}>
        <MdOutlineArrowForwardIos size={20} />
      </PaginationItem>
    </PaginationContainer>
  );
};

export default Pagination;

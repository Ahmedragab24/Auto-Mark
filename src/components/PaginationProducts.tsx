// "use client";

import React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { RootState } from "@/store/store";
import { setCurrentPage } from "@/store/features/currentPage";

interface PaginationProductsProps {
  totalPages: number;
}

const PaginationProducts = ({ totalPages }: PaginationProductsProps) => {
  const { currentPage } = useAppSelector(
    (state: RootState) => state.CurrentPage
  );
  const dispatch = useAppDispatch();

  const renderPageNumbers = () => {
    const visiblePages = 3; // عدد الأزرار المراد عرضها
    const halfVisible = Math.floor(visiblePages / 2);

    let startPage = Math.max(1, currentPage - halfVisible);
    let endPage = Math.min(totalPages, currentPage + halfVisible);

    // تأكد من عرض العدد الصحيح من الأزرار في الحالات الحدودية
    if (endPage - startPage + 1 < visiblePages) {
      if (startPage === 1) {
        endPage = Math.min(totalPages, startPage + visiblePages - 1);
      } else if (endPage === totalPages) {
        startPage = Math.max(1, endPage - visiblePages + 1);
      }
    }

    const pageNumbers = [];
    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <PaginationItem key={i}>
          <PaginationLink
            className={`${
              currentPage === i ? "bg-primary text-white" : "bg-secondary"
            }`}
            href="#"
            onClick={(e) => {
              e.preventDefault();
              dispatch(setCurrentPage(i));
            }}
          >
            {i}
          </PaginationLink>
        </PaginationItem>
      );
    }

    return pageNumbers;
  };

  return (
    <Pagination>
      <PaginationContent>
        {/* زر "السابق" */}
        <PaginationItem
          className={`${
            currentPage === 1 ? "pointer-events-none opacity-50" : ""
          }`}
        >
          <PaginationPrevious
            className={`${
              currentPage === 1 ? "cursor-not-allowed" : "bg-secondary"
            }`}
            href="#"
            onClick={(e) => {
              e.preventDefault();
              if (currentPage > 1) dispatch(setCurrentPage(currentPage - 1));
            }}
          />
        </PaginationItem>

        {/* أرقام الصفحات */}
        {renderPageNumbers()}

        {/* زر "التالي" */}
        <PaginationItem
          className={`${
            currentPage === totalPages ? "pointer-events-none opacity-50" : ""
          }`}
        >
          <PaginationNext
            className={`${
              currentPage === totalPages ? "cursor-not-allowed" : "bg-secondary"
            }`}
            href="#"
            onClick={(e) => {
              e.preventDefault();
              if (currentPage < totalPages)
                dispatch(setCurrentPage(currentPage + 1));
            }}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default PaginationProducts;

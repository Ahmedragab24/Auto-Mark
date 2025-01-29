"use client";

import React, { useEffect, useMemo } from "react";
import SelectBrand from "./SelectBrand";
import ProductsGrid from "./ProductsGrid";
import PaginationProducts from "./PaginationProducts";
import { useAppDispatch } from "@/store/hooks";
import type { CategoriesKeyType } from "@/types";
import ShowroomGrid from "./ShowroomGrid";
import { setProductsNumber } from "@/store/features/productsNumber";
import { useProductData } from "@/hooks/use-productsData";

interface IProps {
  typeCategory: CategoriesKeyType;
}

const FilterProducts: React.FC<IProps> = ({ typeCategory }) => {
  const [currentPage, setCurrentPage] = React.useState<number>(1);
  const dispatch = useAppDispatch();

  const { products, isError, isLoading, totalItems, totalPages } =
    useProductData(typeCategory, currentPage);

  useEffect(() => {
    if (products) {
      dispatch(setProductsNumber(totalItems));
    }
  }, [dispatch, totalItems, products]);

  const memoizedProductsGrid = useMemo(
    () => (
      <ProductsGrid
        products={products || []}
        isError={isError}
        isLoading={isLoading}
      />
    ),
    [products, isError, isLoading]
  );

  const memoizedShowroomGrid = useMemo(
    () => (
      <ShowroomGrid
        products={products || []}
        isError={isError}
        isLoading={isLoading}
      />
    ),
    [products, isError, isLoading]
  );

  return (
    <div className="flex flex-col gap-2 pb-8" dir="ltr">
      {typeCategory !== "showroom" && products && products.length > 5 && (
        <SelectBrand />
      )}

      {typeCategory !== "showroom" && memoizedProductsGrid}

      {(typeCategory === "showroom" || typeCategory === "showroomInfo") &&
        memoizedShowroomGrid}

      {/* Pagination */}
      {(typeCategory === "car" || typeCategory === "showroom") &&
        products &&
        products.length > 0 && (
          <PaginationProducts
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={setCurrentPage}
          />
        )}
    </div>
  );
};

export default FilterProducts;

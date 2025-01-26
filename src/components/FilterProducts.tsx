"use client";

import React, { useEffect, useState } from "react";
import SelectBrand from "./SelectBrand";
import ProductsGrid from "./ProductsGrid";
import PaginationProducts from "./PaginationProducts";
import { useGetCategoryProductsQuery } from "@/store/apis/products";
import { useAppSelector } from "@/store/hooks";
import { RootState } from "@/store/store";
import { CategoriesKeyType } from "@/types";
import { useGetShowroomsProductsQuery } from "@/store/apis/showrooms";
import ShowroomGrid from "./ShowroomGrid";

interface IProps {
  typeCategory: CategoriesKeyType;
}

const FilterProducts = ({ typeCategory }: IProps) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const { Country } = useAppSelector((state: RootState) => state.Country);
  const Language = useAppSelector(
    (state: RootState) => state.Language.language
  );
  const [ProductList, setProductList] = useState([]);
  const [ProductError, setProductError] = useState<boolean>();
  const [ProductLoading, setProductLoading] = useState<boolean>();

  const { data, isError, isLoading } = useGetCategoryProductsQuery({
    page: currentPage,
    countryId: Country.id,
  });
  const {
    data: dataShowrooms,
    isError: isErrorShowrooms,
    isLoading: isLoadingShowrooms,
  } = useGetShowroomsProductsQuery({
    page: currentPage,
    countryId: Country.id,
    lang: Language,
  });

  useEffect(() => {
    if (typeCategory === "car") {
      setProductList(data?.data?.products?.data);
      setProductError(isError);
      setProductLoading(isLoading);
    }
    if (typeCategory === "showroom") {
      setProductList(dataShowrooms?.data?.showrooms?.data);
      setProductError(isErrorShowrooms);
      setProductLoading(isLoadingShowrooms);
    }
  }, [
    typeCategory,
    data,
    dataShowrooms,
    isError,
    isErrorShowrooms,
    isLoading,
    isLoadingShowrooms,
  ]);

  return (
    <div className="flex flex-col gap-2 pb-8" dir="ltr">
      {typeCategory !== "showroom" && ProductList && ProductList.length > 0 && (
        <SelectBrand />
      )}

      {(typeCategory === "car" || typeCategory === "scrap") && (
        <ProductsGrid
          products={ProductList || []}
          isError={ProductError}
          isLoading={ProductLoading}
        />
      )}

      {(typeCategory === "showroom" || typeCategory === "showroomInfo") && (
        <ShowroomGrid
          products={ProductList || []}
          isError={ProductError}
          isLoading={ProductLoading}
        />
      )}

      {/* Pagination */}
      {ProductList && ProductList.length > 0 && (
        <PaginationProducts
          totalPages={data?.data?.products?.last_page || 0}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
        />
      )}
    </div>
  );
};

export default FilterProducts;

"use client";

import React, { useEffect, useState } from "react";
import SelectBrand from "./SelectBrand";
import ProductsGrid from "./ProductsGrid";
import PaginationProducts from "./PaginationProducts";
import { useGetCategoryProductsQuery } from "@/store/apis/products";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { RootState } from "@/store/store";
import { CategoriesKeyType } from "@/types";
import { useGetShowroomsProductsQuery } from "@/store/apis/showrooms";
import ShowroomGrid from "./ShowroomGrid";
import { setProductsNumber } from "@/store/features/productsNumber";

interface IProps {
  typeCategory: CategoriesKeyType;
}

const FilterProducts = ({ typeCategory }: IProps) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const { Country } = useAppSelector((state: RootState) => state.Country);
  const Language = useAppSelector(
    (state: RootState) => state.Language.language
  );
  const Category = useAppSelector(
    (state: RootState) => state.Categories.Categories
  );
  const [ProductList, setProductList] = useState([]);
  const [ProductError, setProductError] = useState<boolean>();
  const [ProductLoading, setProductLoading] = useState<boolean>();
  const [ProductsOfNumber, setProductsOfNumber] = useState<number>(0);
  const dispatch = useAppDispatch();

  const { data, isError, isLoading } = useGetCategoryProductsQuery({
    page: currentPage,
    countryId: Country.id,
    categoryId: Category.id,
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
      setProductList(data?.data);
      setProductError(isError);
      setProductLoading(isLoading);
      setProductsOfNumber(data?.total);
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

  useEffect(() => {
    if (ProductList) {
      dispatch(setProductsNumber(ProductsOfNumber));
    }
  }, [dispatch, ProductsOfNumber, ProductList]);

  console.log(ProductList);

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
          totalPages={data?.last_page || 0}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
        />
      )}
    </div>
  );
};

export default FilterProducts;

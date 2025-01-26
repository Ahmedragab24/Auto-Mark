"use client";

import React from "react";
import { Breadcrumbs } from "./Breadcrumbs ";
import FilterButtons from "./FilterButtons";
import FilterProducts from "./FilterProducts";
import { useGetCategoriesByCarsQuery } from "@/store/apis/categories";
import { RootState } from "@/store/store";
import { useAppSelector } from "@/store/hooks";
import { CategoriesKeyType } from "@/types";

interface IProps {
  typeCategory: CategoriesKeyType;
}

const ProductsFiltering = ({ typeCategory }: IProps) => {
  const { language } = useAppSelector((state: RootState) => state.Language);
  const { data, isLoading, isError } = useGetCategoriesByCarsQuery(language);
  const categories = data?.data?.categoriesWithSubcategories || [];
  return (
    <div className="flex flex-col w-full gap-6 py-2">
      <Breadcrumbs />

      {typeCategory === "car" && (
        <FilterButtons
          items={categories}
          isLoading={isLoading}
          isError={isError}
        />
      )}

      <FilterProducts typeCategory={typeCategory} />
    </div>
  );
};

export default ProductsFiltering;

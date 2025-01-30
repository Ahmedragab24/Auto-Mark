import {
  useGetCategoryProductsQuery,
  useGetHomeProductsQuery,
} from "@/store/apis/products";
import { useGetShowroomsProductsQuery } from "@/store/apis/showrooms";
import { useAppSelector } from "@/store/hooks";
import { RootState } from "@/store/store";
import { CategoriesKeyType } from "@/types";
import { useState, useEffect } from "react";

interface ProductData {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  products: any[];
  isError: boolean;
  isLoading: boolean;
  totalItems: number;
  totalPages: number;
}

export const useProductData = (
  typeCategory: CategoriesKeyType,
  currentPage: number
): ProductData => {
  const [productData, setProductData] = useState<ProductData>({
    products: [],
    isError: false,
    isLoading: true,
    totalItems: 0,
    totalPages: 0,
  });

  const { Country } = useAppSelector((state: RootState) => state.Country);
  const Language = useAppSelector(
    (state: RootState) => state.Language.language
  );
  const Category = useAppSelector(
    (state: RootState) => state.Categories.Categories
  );

  const {
    data: categoryData,
    isError: categoryError,
    isLoading: categoryLoading,
  } = useGetCategoryProductsQuery({
    page: currentPage,
    countryId: Country.id,
    categoryId: Category.id,
  });

  const {
    data: homeData,
    isError: homeError,
    isLoading: homeLoading,
  } = useGetHomeProductsQuery({
    page: currentPage,
    lang: Language,
    countryId: Country.id,
  });

  const {
    data: showroomsData,
    isError: showroomsError,
    isLoading: showroomsLoading,
  } = useGetShowroomsProductsQuery({
    page: currentPage,
    countryId: Country.id,
    lang: Language,
  });

  useEffect(() => {
    let newProductData: ProductData = {
      products: [],
      isError: false,
      isLoading: true,
      totalItems: 0,
      totalPages: 0,
    };

    switch (typeCategory) {
      case "car":
        newProductData = {
          products: categoryData?.data || [],
          isError: categoryError,
          isLoading: categoryLoading,
          totalItems: categoryData?.total || 0,
          totalPages: categoryData?.last_page || 0,
        };
        break;
      case "scrap":
      case "services":
      case "spare_parts":
      case "car_numbers":
        const index = [
          "scrap",
          "services",
          "spare_parts",
          "car_numbers",
        ].indexOf(typeCategory);
        newProductData = {
          products:
            homeData?.data.categories_with_products_tow?.[index]?.products ||
            [],
          isError: homeError,
          isLoading: homeLoading,
          totalItems: 0,
          totalPages: 0,
        };
        break;
      case "showroom":
        newProductData = {
          products: showroomsData?.data?.showrooms?.data || [],
          isError: showroomsError,
          isLoading: showroomsLoading,
          totalItems: showroomsData?.data?.showrooms?.total || 0,
          totalPages: showroomsData?.data?.showrooms?.last_page || 0,
        };
        break;
    }

    setProductData(newProductData);
  }, [
    typeCategory,
    categoryData,
    homeData,
    showroomsData,
    categoryError,
    homeError,
    showroomsError,
    categoryLoading,
    homeLoading,
    showroomsLoading,
  ]);

  return productData;
};

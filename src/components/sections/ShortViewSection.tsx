"use client";

import { ChevronLeft } from "lucide-react";
import { useGetHomeProductsQuery } from "@/store/apis/products";
import { useEffect, useState } from "react";
import { Cart } from "../Cart";
import { ProductType } from "@/types";
import SkeletonProduct from "../SkeletonProduct";
import { useAppSelector } from "@/store/hooks";
import { RootState } from "@/store/store";

interface IProps {
  Content:
    | "Special"
    | "new"
    | "mostView"
    | "scrap"
    | "services"
    | "SpareParts"
    | "carsNumbers"
    | "bikes"
    | "trucks"
    | "boots";
}

const ShortViewSection = ({ Content }: IProps) => {
  const { language } = useAppSelector((state: RootState) => state.Language);
  const { Country } = useAppSelector((state: RootState) => state.Country);
  const { data, isLoading, isError } = useGetHomeProductsQuery({
    lang: language,
    countryId: Country.id,
  });
  const [products, setProducts] = useState<ProductType[]>([]);
  const [sectionTitle, setSectionTitle] = useState<string>("");

  console.log(data?.data);

  useEffect(() => {
    if (isLoading || isError || !data?.data) return;

    switch (Content) {
      case "Special":
        setProducts(data.data.premuim_Products || []);
        setSectionTitle("السيارات المميزة");
        break;
      case "new":
        setProducts(data.data.newProducts || []);
        setSectionTitle("الأحدث في السيارات");
        break;
      case "mostView":
        setProducts(data.data.productsMostView || []);
        setSectionTitle("السيارات المختارة");
        break;
      case "scrap":
        setProducts(
          data.data.categories_with_products_tow?.[0]?.products || []
        );
        setSectionTitle("سيارات سكراب وحوادث");
        break;
      case "services":
        setProducts(
          data.data.categories_with_products_tow?.[1]?.products || []
        );
        setSectionTitle("الخدمات");
        break;
      case "SpareParts":
        setProducts(
          data.data.categories_with_products_tow?.[2]?.products || []
        );
        setSectionTitle("قطع غيار");
        break;
      case "carsNumbers":
        setProducts(
          data.data.categories_with_products_tow?.[3]?.products || []
        );
        setSectionTitle("أرقام السيارات");
        break;
      case "bikes":
        setProducts(
          data.data.categories_with_products_tow?.[4]?.products || []
        );
        setSectionTitle("دراجات");
        break;
      case "trucks":
        setProducts(
          data.data.categories_with_products_tow?.[5]?.products || []
        );
        setSectionTitle("شاحنات");
        break;
      case "boots":
        setProducts(
          data.data.categories_with_products_tow?.[6]?.products || []
        );
        setSectionTitle("قوارب");
        break;
      default:
        setProducts([]);
        setSectionTitle("");
    }
  }, [Content, data, isLoading, isError]);

  return (
    <section className="section">
      {/* No Content */}
      {products.length === 0 ? (
        <></>
      ) : (
        <div>
          {/* Title section*/}
          <div className="flex items-center justify-between">
            <h2 className="section-title">{sectionTitle}</h2>
            {/* More Button */}
            {data?.data && (
              <div className="flex items-center gap-2 text-gray-500 duration-300 cursor-pointer hover:text-foreground group">
                المزيد
                <ChevronLeft
                  size={20}
                  className="duration-300 group-hover:translate-x-[-5px]"
                />
              </div>
            )}
          </div>

          {/* Loading Skeleton for Products */}
          {isLoading && <SkeletonProduct count={4} />}

          {/* Error Handling */}
          {isError && <p className="text-center text-red-500">حدث خطأ</p>}

          {/* Products List*/}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 ">
            {products.slice(0, 4).map((product) => (
              <Cart key={product.id} product={product} />
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default ShortViewSection;

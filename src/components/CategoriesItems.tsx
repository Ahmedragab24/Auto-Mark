"use client";

import { useGetCategoriesQuery } from "@/store/apis/categories";
import { useAppSelector } from "@/store/hooks";
import { RootState } from "@/store/store";
import { MainCategoriesType } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CategoriesItems = () => {
  const { language } = useAppSelector((state: RootState) => state.Language);
  const { data } = useGetCategoriesQuery("categories");
  const categories = data?.data?.newCategories || [];
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {categories.map((category: MainCategoriesType) => (
        <Link key={category.id} href={"/categories/" + category.key}>
          <div className="w-full h-44 group relative bg-secondary rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 aspect-[4/3]">
            <div className="bg-gradient-to-t from-black/60 to-black/0" />
            <Image
              src={`${process.env.NEXT_PUBLIC_BASE_URL}${category.image}`}
              alt={language === "ar" ? category.name_ar : category.name_en}
              width={700}
              height={500}
              className="absolute bottom-0 z-10 object-cover w-56 transition-transform duration-300 left-4 group-hover:scale-105"
            />
            <div className="absolute top-0 right-0 z-20 p-6">
              <h3 className="text-xl font-semibold tracking-wide">
                {language === "ar" ? category.name_ar : category.name_en}
              </h3>
            </div>
            <div className="absolute inset-0 z-10 transition-opacity duration-300 opacity-0 bg-primary/10 group-hover:opacity-100" />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CategoriesItems;

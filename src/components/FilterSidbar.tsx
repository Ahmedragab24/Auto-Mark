"use client";

import * as React from "react";
import { Accordion } from "@/components/ui/accordion";
import FilterAccordionItem from "./FilterAccordionItem";
import { Button } from "./ui/button";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";
import type { CategoriesKeyType } from "@/types";
import { useGetBrandsQuery, useGetModelsQuery } from "@/store/apis/attrbuite";
import { X } from "lucide-react";
import { useAppSelector, useAppDispatch } from "@/store/hooks";
import type { RootState } from "@/store/store";
import {
  clearFilters,
  setPriceRange,
  setYear,
  toggleFilter,
} from "@/store/features/filter";

interface IProps {
  typeCategory: CategoriesKeyType;
}

export default function FilterSidebar({ typeCategory }: IProps) {
  const dispatch = useAppDispatch();
  const selectedFilters = useAppSelector(
    (state: RootState) => state.filters.selectedFilters
  );
  const priceRange = useAppSelector(
    (state: RootState) => state.filters.priceRange
  );
  const year = useAppSelector((state: RootState) => state.filters.year);
  const productsNumber = useAppSelector(
    (state: RootState) => state.productsNumber.productsNumber
  );

  const { data: brandsData } = useGetBrandsQuery({ id: 1 });
  const { data: modelData } = useGetModelsQuery({ brand_id: 1 });

  const brands = brandsData?.data?.brands || [];
  const models = modelData?.data || [];

  return (
    <div
      className="w-full md:w-[280px] px-2 md:min-h-screen flex flex-col gap-4 md:gap-4 items-center"
      dir="rtl"
    >
      <div className="flex flex-col gap-4 md:pb-2 md:border-b-2 w-full">
        <div className="flex items-center justify-between font-regular">
          <h3 className="text-bodyL">المنتجات({productsNumber})</h3>
          <Button
            className="text-bodyS text-primary"
            variant="link"
            onClick={() => dispatch(clearFilters())}
          >
            مسح الفلتر
          </Button>
        </div>
        <div className="flex flex-wrap gap-2">
          {Object.entries(selectedFilters).map(([category, filters]) =>
            filters.map((filter) => (
              <span
                key={`${category}-${filter.id}`}
                className="relative px-5 py-1 rounded-md text-bodyS bg-secondary text-foreground"
              >
                {filter.name_ar}
                <X
                  className="absolute w-3 h-3 cursor-pointer top-1 right-1"
                  onClick={() =>
                    dispatch(toggleFilter({ category, option: filter }))
                  }
                />
              </span>
            ))
          )}
          {year && (
            <span className="relative px-5 py-1 rounded-md text-bodyS bg-secondary text-foreground">
              سنة الصنع: {year}
              <X
                className="absolute w-3 h-3 cursor-pointer top-1 right-1"
                onClick={() => dispatch(setYear(null))}
              />
            </span>
          )}
          {(priceRange[0] !== 0 || priceRange[1] !== 1000) && (
            <span className="relative px-5 py-1 rounded-md text-bodyS bg-secondary text-foreground">
              السعر: {priceRange[0]} - {priceRange[1]}
              <X
                className="absolute w-3 h-3 cursor-pointer top-1 right-1"
                onClick={() => dispatch(setPriceRange([0, 1000]))}
              />
            </span>
          )}
        </div>
      </div>

      <ScrollArea className="w-full whitespace-nowrap rounded-md px-4">
        <Accordion className="flex flex-row md:flex-col gap-4" type="multiple">
          {(typeCategory === "car" || typeCategory === "scrap") && (
            <>
              <FilterAccordionItem
                type="checkbox"
                value="brand"
                title="الماركة"
                searchable
                options={brands}
              />
              <FilterAccordionItem
                type="checkbox"
                value="structure"
                title="الهيكل"
                searchable
                options={models}
              />
              <FilterAccordionItem
                type="checkbox"
                value="model"
                title="الموديل"
                searchable
                options={models}
              />
              <FilterAccordionItem
                type="input"
                value="year"
                title="سنة الصنع"
                placeholder="2025"
                inputType="number"
              />
              <FilterAccordionItem
                type="checkbox"
                value="energy"
                title="الطاقة"
                searchable
                options={models}
              />
              <FilterAccordionItem
                type="checkbox"
                value="transmission"
                title="ناقل الحركة"
                searchable
                options={models}
              />
            </>
          )}

          {/* Add other category-specific filters here */}

          {typeCategory !== "showroom" && (
            <FilterAccordionItem
              type="price"
              className="border-b-0"
              value="price"
              title="السعر"
            />
          )}
        </Accordion>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
}

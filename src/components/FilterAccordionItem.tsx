"use client";

import * as React from "react";
import { Search } from "lucide-react";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import type { RootState } from "@/store/store";
import PriceRangeSelector from "./price-range-selector";
import { setPriceRange, setYear, toggleFilter } from "@/store/features/filter";
import { setBrand } from "@/store/features/brand";

type FilterOption = {
  id: string;
  name_ar: string;
  name_en?: string;
};

type FilterAccordionItemProps = {
  value: string;
  title: string;
  options?: FilterOption[];
  searchable?: boolean;
  type: "checkbox" | "price" | "input";
  inputType?: "text" | "number";
  placeholder?: string;
  className?: string;
};

export default function FilterAccordionItem({
  value,
  title,
  options,
  type,
  searchable = false,
  inputType = "text",
  placeholder,
  className,
}: FilterAccordionItemProps) {
  const dispatch = useAppDispatch();
  const selectedFilters = useAppSelector(
    (state: RootState) => state.filters.selectedFilters
  );
  const priceRange = useAppSelector(
    (state: RootState) => state.filters.priceRange
  );
  const year = useAppSelector((state: RootState) => state.filters.year);
  const [searchQuery, setSearchQuery] = React.useState("");

  const filteredOptions = React.useMemo(() => {
    if (!searchable || !options) return options;
    return options.filter((option) =>
      option.name_ar.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [options, searchable, searchQuery]);

  const handleYearChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const yearValue = e.target.value
      ? Number.parseInt(e.target.value, 10)
      : null;
    dispatch(setYear(yearValue));
  };

  return (
    <AccordionItem value={value} className={`border-b-2 ${className}`}>
      <AccordionTrigger className="hover:no-underline py-2" dir="rtl">
        <span className="text-base font-semibold">{title}</span>
      </AccordionTrigger>
      <AccordionContent>
        <div className="space-y-3 py-4 px-2">
          {options && options.length > 3 && searchable && (
            <div className="relative">
              <Search className="absolute right-2 top-[50%] transform translate-y-[-50%] h-4 w-4 text-primary" />
              <Input
                placeholder="بحث سريع"
                className="pr-8 h-12"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                type={inputType}
              />
            </div>
          )}

          {!options && <h1>لا يوجد عناصر</h1>}

          {type === "checkbox" && (
            <ScrollArea className="h-24 w-full" dir="rtl">
              <div className="flex flex-col gap-3">
                {filteredOptions?.map((option) => (
                  <Label key={option.id} className="flex items-center gap-2">
                    <Checkbox
                      id={option.id}
                      checked={selectedFilters[value]?.some(
                        (item) => item.id === option.id
                      )}
                      onCheckedChange={() => {
                        dispatch(toggleFilter({ category: value, option }));
                        if (value === "brand") {
                          dispatch(setBrand(Number(option.id)));
                        }
                      }}
                    />
                    <span>{option.name_ar}</span>
                  </Label>
                ))}
              </div>
            </ScrollArea>
          )}

          {type === "input" && (
            <div className="space-y-3">
              <Input
                type={inputType}
                placeholder={placeholder}
                className="text-right h-12"
                value={year || ""}
                onChange={handleYearChange}
              />
            </div>
          )}

          {type === "price" && (
            <div className="space-y-3">
              <PriceRangeSelector
                min={0}
                max={1000}
                value={priceRange}
                onRangeChange={(range) => dispatch(setPriceRange(range))}
              />
            </div>
          )}
        </div>
      </AccordionContent>
    </AccordionItem>
  );
}

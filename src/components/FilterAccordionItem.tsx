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
import PriceRangeSelector from "./price-range-selector";
import { ScrollArea } from "@/components/ui/scroll-area";

type FilterAccordionItemProps = {
  value: string;
  title: string;
  options?: { id: string; label: string }[];
  searchable?: boolean;
  searchQuery?: string;
  onSearchChange?: (value: string) => void;
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
  searchQuery = "",
  onSearchChange,
  inputType = "text",
  placeholder,
  className,
}: FilterAccordionItemProps) {
  return (
    <AccordionItem value={value} className={`border-b-2 ${className}`}>
      <AccordionTrigger className="hover:no-underline py-2" dir="rtl">
        <span className="text-base font-semibold">{title}</span>
      </AccordionTrigger>
      <AccordionContent>
        <div className="space-y-3 py-4 px-2">
          {searchable && (
            <div className="relative">
              <Search className="absolute right-2 top-[50%] transform translate-y-[-50%] h-4 w-4 text-primary" />
              <Input
                placeholder="بحث سريع"
                className="pr-8 h-12"
                value={searchQuery}
                onChange={(e) => onSearchChange?.(e.target.value)}
                type={inputType}
              />
            </div>
          )}

          {type === "checkbox" && (
            <ScrollArea className="h-24 w-full" dir="rtl">
              <div className="flex flex-col gap-3">
                {options?.map((option) => (
                  <Label key={option.id} className="flex items-center gap-2">
                    <Checkbox id={option.id} />
                    <span>{option.label}</span>
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
              />
            </div>
          )}

          {type === "price" && (
            <div className="space-y-3">
              <PriceRangeSelector
                min={0}
                max={1000}
                defaultValue={[200, 800]}
                onRangeChange={(range) =>
                  console.log("Price range changed:", range)
                }
              />
            </div>
          )}
        </div>
      </AccordionContent>
    </AccordionItem>
  );
}

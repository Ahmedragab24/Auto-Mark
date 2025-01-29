"use client";

import React, { useState, useEffect, useRef } from "react";
import { Input } from "./ui/input";
import { Search } from "lucide-react";
import { useGetSearchByKeywordsQuery } from "@/store/apis/search";
import { useAppSelector } from "@/store/hooks";
import type { RootState } from "@/store/store";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";
import { Button } from "./ui/button";
import type { ProductType } from "@/types";
import { ScrollArea } from "@/components/ui/scroll-area";

interface IProps {
  className?: string;
}

const SearchBar = ({ className }: IProps) => {
  const [searchText, setSearchText] = useState("");
  const [debouncedSearchText, setDebouncedSearchText] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const { Categories, Country, Language } = useAppSelector(
    (state: RootState) => state
  );
  const { data, isLoading } = useGetSearchByKeywordsQuery(
    {
      categoryID: Categories.Categories.id,
      countryID: Country.Country.id,
      keyword: debouncedSearchText,
      page: 1,
      lang: Language.language,
      more_type: "category",
    },
    { skip: !debouncedSearchText }
  );

  const products = data?.data?.products?.data || [];
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchText(searchText);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchText]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (debouncedSearchText) {
      setIsOpen(true);
    }
  }, [debouncedSearchText]);

  return (
    <div className={`relative ${className}`} ref={searchRef}>
      <Input
        type="search"
        placeholder="ابحث عن السيارات واكثر...."
        className="w-full text-right border-gray-300 rounded-lg h-14"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        onFocus={() => setIsOpen(true)}
      />

      <Button
        className="absolute left-0 top-0 h-14 px-4 rounded-l-lg"
        onClick={() => setIsOpen(false)}
      >
        <Search className="w-5 h-5" />
      </Button>

      {isOpen && debouncedSearchText && (
        <Card className="absolute top-16 z-20 w-full mt-2 overflow-hidden">
          <CardContent className="p-0">
            {isLoading ? (
              <p className="p-4 text-center">جاري البحث...</p>
            ) : products.length > 0 ? (
              <ScrollArea
                className={`w-full max-h-[300px] ${
                  products.length < 4 ? "h-fit" : "h-[50vh]"
                }`}
                dir="rtl"
              >
                <ul className="divide-y">
                  {products.map((product: ProductType) => (
                    <li
                      key={product.id}
                      className="flex items-center p-4 cursor-pointer hover:bg-secondary"
                    >
                      <Image
                        src={
                          `${
                            process.env.NEXT_PUBLIC_BASE_URL ||
                            "/placeholder.svg" ||
                            "/placeholder.svg"
                          }${product.image}` || "/placeholder.png"
                        }
                        alt={product.name}
                        width={50}
                        height={50}
                        className="object-cover rounded"
                      />
                      <div className="mr-4 flex-grow">
                        <h3 className="font-semibold">{product.name}</h3>
                        <div className="flex items-center gap-1">
                          <p className="text-sm text-gray-500">
                            {product.price}
                          </p>
                          <p className="text-sm text-gray-500">
                            {product.country?.symbol}
                          </p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </ScrollArea>
            ) : (
              <p className="p-4 text-center">لا توجد نتائج</p>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default SearchBar;

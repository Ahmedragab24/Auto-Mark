"use client";

import React from "react";
import { Input } from "./ui/input";
import { Search } from "lucide-react";

interface IProps {
  className?: string;
  inOpenChange?: (open: boolean) => void;
}

const SearchBar = ({ className, inOpenChange }: IProps) => {
  return (
    <div className={`relative ${className}`}>
      <Input
        type="search"
        placeholder="ابحث عن السيارات واكثر...."
        className="w-full text-right border-gray-300 rounded-lg h-14"
      />

      <div className="absolute left-0 z-10 -translate-y-1/2 rounded-l-lg bg-primary top-1/2 w-fit h-full flex items-center px-4">
        <Search
          className=" w-5 h-5  text-gray-200"
          onClick={() => inOpenChange && inOpenChange(false)}
        />
      </div>
    </div>
  );
};

export default SearchBar;

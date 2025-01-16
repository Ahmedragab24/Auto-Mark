import React from "react";
import { Input } from "./ui/input";
import { Search } from "lucide-react";

interface IProps {
  className?: string;
}

const SearchBar = ({ className }: IProps) => {
  return (
    <div className={`relative ${className}`}>
      <Input
        status="Default"
        type="search"
        placeholder="ابحث عن السيارات واكثر...."
        className="w-full text-right border-gray-300 rounded-lg h-14"
      />
      <Search className="absolute left-0 z-10 w-12 h-full px-2 text-gray-200 -translate-y-1/2 rounded-l-lg bg-primary top-1/2" />
    </div>
  );
};

export default SearchBar;

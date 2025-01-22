import React from "react";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { brand, carType, citiesArray, price, year } from "@/constants";

const HeroFiltering = () => {
  return (
    <div className="relative z-10 flex justify-center">
      <div className="w-full  md:max-w-4xl p-4 shadow-lg rounded-xl bg-background/50 ">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-6">
          {/* City Select */}
          <Select>
            <SelectTrigger className="h-12 !bg-background/50">
              <SelectValue placeholder="اختر المدينة" />
            </SelectTrigger>
            <SelectContent>
              {citiesArray.map(({ name, value }) => (
                <SelectItem key={name} value={value}>
                  {name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {/* Type Select */}
          <Select>
            <SelectTrigger className="h-12 !bg-background/50">
              <SelectValue placeholder="اختر النوع" />
            </SelectTrigger>
            <SelectContent>
              {carType.map(({ name, value }) => (
                <SelectItem key={value} value={value}>
                  {name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {/* Brand Select */}
          <Select>
            <SelectTrigger className="h-12 !bg-background/50">
              <SelectValue placeholder="اختر الماركة" />
            </SelectTrigger>
            <SelectContent>
              {brand.map(({ name, value }) => (
                <SelectItem key={value} value={value}>
                  {name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {/* Price Range Select */}
          <Select>
            <SelectTrigger className="h-12 !bg-background/50">
              <SelectValue placeholder="نطاق السعر" />
            </SelectTrigger>
            <SelectContent>
              {price.map(({ name, value }) => (
                <SelectItem key={value} value={value}>
                  {name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {/* Year Select */}
          <Select>
            <SelectTrigger className="h-12 !bg-background/50">
              <SelectValue placeholder="سنة الصنع" />
            </SelectTrigger>
            <SelectContent>
              {year.map(({ name, value }) => (
                <SelectItem key={value} value={value}>
                  {name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {/* Search Button */}
          <Button size={"lg"} className="h-12">
            <Search />
            بحث
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroFiltering;

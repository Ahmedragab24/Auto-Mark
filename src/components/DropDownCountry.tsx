"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { ChevronDown, MapPin } from "lucide-react";
import { countryType } from "@/types";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useGetCountriesQuery } from "@/store/apis/countries&cities";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { RootState } from "@/store/store";
import { setCountry } from "@/store/features/country";

interface IProps {
  className?: string;
}

const DropDownCountry = ({ className }: IProps) => {
  const { data } = useGetCountriesQuery("countries");
  const country = React.useMemo(() => data?.data?.countries || [], [data]);
  const { name_ar } = useAppSelector(
    (state: RootState) => state.Country.Country
  );
  const [SelectCountry, setSelectCountry] = useState<string>();
  const dispatch = useAppDispatch();

  useEffect(() => {
    setSelectCountry(name_ar);
  }, [name_ar]);

  return (
    <DropdownMenu dir="rtl">
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className={`text-white ${className}`}>
          <MapPin />
          {SelectCountry}
          <ChevronDown className="w-4 h-4 mr-2" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-full space-y-2">
        {country.map((item: countryType) => (
          <DropdownMenuItem
            key={item.id}
            onClick={() => {
              dispatch(setCountry(item));
            }}
          >
            <div className="flex items-center gap-2">
              <h6>{item.name_ar}</h6>
              <Image
                src={item.image || "/default-image.png"}
                alt={item.name_ar}
                width={100}
                height={100}
                className="w-5 h-5 rounded-sm"
                loading="lazy"
              />
            </div>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropDownCountry;

"use client";

import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { ChevronDown, MapPin } from "lucide-react";
import { country } from "@/constants";

interface IProps {
  className?: string;
}

const DropDownCountry = ({ className }: IProps) => {
  const [countryVal, setCountryVal] = useState<string>(country[0].name);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className={`text-white ${className}`}>
          <MapPin />
          {countryVal}
          <ChevronDown className="w-4 h-4 mr-2" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-full">
        {country.map((item) => (
          <DropdownMenuItem
            key={item.value}
            onClick={() => setCountryVal(item.name)}
          >
            {item.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropDownCountry;

"use client";

import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { ChevronDown, Globe } from "lucide-react";
import Image from "next/image";

interface IProps {
  className?: string;
}

type lang = "الانجليزية" | "العربية";

const DropDownLang = ({ className }: IProps) => {
  const [Languages, setLanguages] = React.useState<lang>("العربية");

  const toggleLanguage = (lang: lang) => {
    localStorage.setItem("lang", lang);
    setLanguages(lang);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className={`text-white ${className}`}>
          <Globe />
          {Languages}
          <ChevronDown className="w-4 h-4 mr-2" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="center" className="w-full">
        <DropdownMenuItem
          className="flex items-center justify-center gap-2"
          onClick={toggleLanguage.bind(null, "العربية")}
        >
          <Image
            src="/Flags/Saudi Arabia (SA).png"
            alt="egypt"
            width={20}
            height={20}
            loading="lazy"
            className="w-4 h-3"
          />
          <h4>العربية</h4>
        </DropdownMenuItem>
        <DropdownMenuItem
          className="flex items-center justify-center gap-2"
          onClick={toggleLanguage.bind(null, "الانجليزية")}
        >
          <Image
            src="/Flags/United Kingdom (GB).png"
            alt="egypt"
            width={20}
            height={20}
            loading="lazy"
            className="w-4 h-3"
          />
          <h4>الانجليزية</h4>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropDownLang;

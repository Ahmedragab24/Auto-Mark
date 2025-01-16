"use client";

import * as React from "react";
import { ChevronDown, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface IProps {
  className?: string;
}

export function ModeToggle({ className }: IProps) {
  const { theme, setTheme } = useTheme();
  const [themeName, setThemeName] = React.useState("النظام");

  React.useEffect(() => {
    if (theme === "dark") setThemeName("الداكن");
    else if (theme === "light") setThemeName("الفاتح");
    else setThemeName("النظام");
  }, [theme]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className={`relative  text-white ${className}`}>
          <Sun className="transition-all scale-100 rotate-0 dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute transition-all scale-0 rotate-90 right-6 md:right-4 dark:rotate-0 dark:scale-100" />
          <span>{themeName}</span>
          <ChevronDown className="w-4 h-4 mr-2" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          الفاتح
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          الداكن
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          النظام
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

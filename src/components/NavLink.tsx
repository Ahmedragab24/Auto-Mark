"use client";

import { navigationLink } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface IProps {
  className?: string;
  inOpenChange?: (open: boolean) => void;
}

const NavLink = ({ className, inOpenChange }: IProps) => {
  const pathname = usePathname();

  return (
    <div className={className}>
      {navigationLink.map(({ title, href }) => (
        <Link
          key={title}
          href={href}
          className={`font-regular text-md text-gray-500 transition-colors hover:text-red-700 ${
            pathname === href ? "text-primary" : ""
          }`}
          onClick={() => inOpenChange?.(false)}
        >
          {title}
        </Link>
      ))}
    </div>
  );
};

export default NavLink;

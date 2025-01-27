"use client";

import React from "react";
import { Button } from "./ui/button";
import { BellRing, Heart, MessagesSquare } from "lucide-react";
import Link from "next/link";

interface IProps {
  className?: string;
  inOpenChange?: (open: boolean) => void;
}

const NavbarActionBtn = ({ className, inOpenChange }: IProps = {}) => {
  return (
    <div className="flex items-center gap-4">
      <Button
        variant="secondary"
        size="icon"
        className={className}
        onClick={() => inOpenChange?.(false)}
      >
        <Link href="/favorites">
          <Heart />
        </Link>
      </Button>
      <Button
        variant="secondary"
        size="icon"
        className={className}
        onClick={() => inOpenChange?.(false)}
      >
        <Link href="/notifications">
          <BellRing />
        </Link>
      </Button>
      <Button
        variant="secondary"
        size="icon"
        className={className}
        onClick={() => inOpenChange?.(false)}
      >
        <Link href={"/messages"}>
          <MessagesSquare />
        </Link>
      </Button>
    </div>
  );
};

export default NavbarActionBtn;

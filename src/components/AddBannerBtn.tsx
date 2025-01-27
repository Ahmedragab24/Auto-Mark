"use client";

import React from "react";
import { Button } from "./ui/button";
import { Plus } from "lucide-react";
import Link from "next/link";

interface IProps {
  className?: string;
  inOpenChange?: (open: boolean) => void;
}

const AddBannerBtn = ({ className, inOpenChange }: IProps) => {
  return (
    <Link
      href={"/advertisement/category"}
      onClick={() => inOpenChange?.(false)}
    >
      <Button size="lg" className={`${className}`}>
        <h4>اضف اعلان</h4>
        <Plus />
      </Button>
    </Link>
  );
};

export default AddBannerBtn;

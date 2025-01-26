import React from "react";
import { Button } from "./ui/button";
import { Plus } from "lucide-react";
import Link from "next/link";

interface IProps {
  className?: string;
}

const AddBannerBtn = ({ className }: IProps) => {
  return (
    <Link href={"/advertisement/category"}>
      <Button size="lg" className={`${className}`}>
        <h4>اضف اعلان</h4>
        <Plus />
      </Button>
    </Link>
  );
};

export default AddBannerBtn;

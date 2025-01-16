import React from "react";
import { Button } from "./ui/button";
import { Plus } from "lucide-react";

interface IProps {
  className?: string;
}

const AddBannerBtn = ({ className }: IProps) => {
  return (
    <Button size="lg" className={`${className}`}>
      <h4>اضف اعلان</h4>
      <Plus />
    </Button>
  );
};

export default AddBannerBtn;

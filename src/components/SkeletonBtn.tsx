import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

interface Skeleton {
  className?: string;
  count?: number;
}

const SkeletonBtn = ({ className, count = 1 }: Skeleton) => {
  return (
    <div className={`flex flew-wrap gap-4 ${className}`}>
      {Array.from({ length: count }).map((_, index) => (
        <Skeleton key={index} className="h-16 w-full rounded-xl" />
      ))}
    </div>
  );
};

export default SkeletonBtn;

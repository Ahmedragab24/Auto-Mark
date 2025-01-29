import React from "react";
import { Button } from "./ui/button";
import { CategoryCarsType } from "@/types";
import SkeletonBtn from "./SkeletonBtn";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setCategories } from "@/store/features/categories";
import { RootState } from "@/store/store";

interface IProps {
  className?: string;
  items: CategoryCarsType[];
  isLoading?: boolean;
  isError?: boolean;
}

const FilterButtons = ({ className, items, isLoading, isError }: IProps) => {
  const { id } = useAppSelector(
    (state: RootState) => state.Categories.Categories
  );
  const dispatch = useAppDispatch();

  console.log(items);

  return (
    <div
      className={`flex flex-wrap justify-center md:justify-start gap-4 ${className}`}
    >
      {/* Skeleton */}
      {isLoading && <SkeletonBtn count={4} />}

      {/* Error */}
      {isError && (
        <div className="text-center py-16">
          <p className="text-2xl font-semibold">عذرا حدث خطاء ما. حاول مجددا</p>
        </div>
      )}

      {/* Items */}
      {!isLoading &&
        !isError &&
        items.length > 0 &&
        items.map((item) => (
          <Button
            key={item.id}
            variant={`${item.id === id ? "default" : "secondary"}`}
            className="px-8"
            onClick={() => dispatch(setCategories(item))}
          >
            {item.name}
          </Button>
        ))}
    </div>
  );
};

export default FilterButtons;

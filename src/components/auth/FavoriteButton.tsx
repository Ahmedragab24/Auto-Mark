"use client";

import React, { useState } from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { addToFavorites, removeFromFavorites } from "@/store/features/favorite";
import { ProductType } from "@/types";
import { toast } from "@/hooks/use-toast";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../ui/alert-dialog";
import { AlertDialogDescription } from "@radix-ui/react-alert-dialog";

interface IProps {
  product: ProductType;
}

const FavoriteButton = ({ product }: IProps) => {
  const { favorites } = useAppSelector((state) => state.Favorites);
  const isProductFavorite = favorites.some(
    (item: ProductType) => item.id === product.id
  );
  const dispatch = useAppDispatch();

  // حالة لإظهار الـ AlertDialog
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // دالة الحذف بعد التأكيد
  interface ToastContent {
    variant: "default" | "destructive";
    description: React.ReactNode;
  }

  interface FavoriteHandlerEvent extends React.MouseEvent<HTMLButtonElement> {
    preventDefault(): void;
    stopPropagation(): void;
  }

  const handlerFavorite = (e: FavoriteHandlerEvent): void => {
    e.preventDefault();
    e.stopPropagation();
    if (isProductFavorite) {
      setIsDialogOpen(true);
    } else {
      dispatch(addToFavorites(product));
      toast({
        variant: "default",
        description: (
          <div className="flex flex-col items-center justify-center gap-2">
            <Image
              src={"/Icons/done.png"}
              alt="done"
              width={20}
              height={20}
              className="w-10 h-10"
            />
            <h2>عملية ناجحة</h2>
            <p>تمت اضافة المنتج للمفضلة</p>
          </div>
        ),
      } as ToastContent);
    }
  };

  const confirmRemove = (e: FavoriteHandlerEvent) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(removeFromFavorites(product));
    setIsDialogOpen(false);
    toast({
      variant: "destructive",
      description: "تم حذف المنتج من المفضلة",
    });
  };

  const cancelRemove = (e: FavoriteHandlerEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDialogOpen(false);
  };

  return (
    <>
      <Button
        variant={"secondary"}
        size={"icon"}
        className="absolute rounded-full left-4"
        onClick={(e) => handlerFavorite(e)}
      >
        {!isProductFavorite ? (
          <Image
            src="/Icons/redHeart.png"
            alt="heart"
            width={20}
            height={20}
            className="w-5 h-5"
          />
        ) : (
          <Image
            src={"/Icons/heartFill.png"}
            alt="favorite"
            width={20}
            height={20}
            className="w-5 h-5"
          />
        )}
      </Button>

      <AlertDialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <AlertDialogTrigger />
        <AlertDialogContent className="w-fit flex flex-col items-center justify-center">
          <Image
            src={"/Icons/like-undo-bBCEvsCiK1.png"}
            alt="favorite"
            width={20}
            height={20}
            className="w-16 h-16"
          />

          <AlertDialogTitle>حذف عنصر</AlertDialogTitle>
          <AlertDialogDescription>
            هل تريد حذف العنصر من المفضلة؟
          </AlertDialogDescription>
          <AlertDialogAction onClick={confirmRemove} className="w-full">
            نعم, حذف
          </AlertDialogAction>
          <AlertDialogCancel onClick={cancelRemove} className="w-full">
            إلغاء
          </AlertDialogCancel>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default FavoriteButton;

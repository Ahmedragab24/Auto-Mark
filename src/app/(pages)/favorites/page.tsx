"use client";

import ProductsGrid from "@/components/ProductsGrid";
import { Button } from "@/components/ui/button";
import { useAppSelector } from "@/store/hooks";
import { RootState } from "@/store/store";
import { useEffect, useState } from "react";

const FavoritesPage = () => {
  const { favorites } = useAppSelector((state: RootState) => state.Favorites);
  const [favoritesList, setFavoritesList] = useState([]);

  useEffect(() => {
    setFavoritesList(favorites);
  }, [favorites]);

  return (
    <div>
      <div className="container mx-auto p-4 py-10 flex flex-col gap-8">
        <div className="w-fit bg-secondary p-4 rounded-xl mx-auto flex gap-8">
          <Button className="px-12" variant="default">
            الكل
          </Button>
          <Button className="px-12" variant="secondary">
            المركبات
          </Button>
          <Button className="px-12" variant="secondary">
            المعارض
          </Button>
        </div>
        <div>
          {favoritesList && favoritesList.length > 0 && (
            <ProductsGrid
              products={favorites}
              className="lg:!grid-cols-4 !justify-center"
            />
          )}

          {favoritesList.length === 0 && (
            <div className="text-center py-16">
              <p className="text-2xl font-semibold">المفضلة فارغة حاليا.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FavoritesPage;
